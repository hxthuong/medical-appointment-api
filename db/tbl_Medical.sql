-- ================================
-- 🚀 DATABASE: MedicalDB
-- ================================

CREATE DATABASE MedicalDB;
GO

USE MedicalDB;
GO

-- ================================
-- 1️⃣ Roles - Vai trò người dùng
-- ================================
CREATE TABLE MA_Roles (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    RoleName NVARCHAR(50) NOT NULL,
    Description NVARCHAR(200),
	Permissions NVARCHAR(255)
);
GO

-- ================================
-- 2️⃣ Users - Tài khoản người dùng
-- ================================
CREATE TABLE MA_Users (
    ID uniqueidentifier PRIMARY KEY,
	Username VARCHAR(100) NOT NULL,
    FullName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Phone NVARCHAR(20),
    Password VARBINARY(64),
	--Salt VARBINARY(64), ---salt cho password
    RoleID INT NOT NULL,
    Gender NVARCHAR(10),
    DateOfBirth DATE,
    Address NVARCHAR(255),
	Avatar NVARCHAR(255),
	IsDependent BIT DEFAULT 0,             -- 0 = tài khoản chính, 1 = người phụ thuộc
    ParentID UNIQUEIDENTIFIER NULL,    -- liên kết người phụ thuộc với tài khoản chính
	Height DECIMAL(5,2) NULL,              -- Chiều cao (cm)
    Weight DECIMAL(5,2) NULL,              -- Cân nặng (kg)
    BMI AS (
        CASE 
            WHEN Height IS NOT NULL AND Weight IS NOT NULL AND Height > 0 
            THEN ROUND(Weight / POWER(Height / 100.0, 2), 2)
            ELSE NULL
        END
    ) PERSISTED,                           -- Cột BMI được tính tự động và lưu thật
    IsLogin BIT DEFAULT 0,         -- 1 = online, 0 = offline
    CreatedAt DATETIME DEFAULT GETDATE(),
	UpdatedAt DATETIME,
    FOREIGN KEY (RoleID) REFERENCES MA_Roles(ID),
	FOREIGN KEY (ParentID) REFERENCES MA_Users(ID)
);
GO

-- ================================
-- 3️⃣ Hospitals - Bệnh viện / Phòng khám
-- ================================
CREATE TABLE MA_Hospitals (
    ID uniqueidentifier PRIMARY KEY,
    Name NVARCHAR(150) NOT NULL,
    Address NVARCHAR(255),
    Phone NVARCHAR(20),
    Email NVARCHAR(100),
    Description NVARCHAR(4000),
	Images NVARCHAR(255),
	Acreage NVARCHAR(255),
	Rooms INT DEFAULT 0,
    IsActive BIT DEFAULT 1,
	Rating DECIMAL(3,2) DEFAULT 0
);
GO

-- ================================
-- 4️⃣ Departments - Khoa chuyên môn
-- ================================
CREATE TABLE MA_Departments (
    ID uniqueidentifier PRIMARY KEY,
    HospitalID uniqueidentifier NOT NULL,
    DepartmentName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(300),
	Images NVARCHAR(255),
    FOREIGN KEY (HospitalID) REFERENCES MA_Hospitals(ID)
);
GO

-- ================================
-- 5️⃣ Doctors - Thông tin bác sĩ
-- ================================
CREATE TABLE MA_Doctors (
    ID uniqueidentifier PRIMARY KEY,
    UserID uniqueidentifier NOT NULL,
    HospitalID uniqueidentifier NOT NULL,
    DepartmentID uniqueidentifier NOT NULL,
    Specialization NVARCHAR(100),
    YearsOfExperience INT,
    IsAvailable BIT DEFAULT 1,
    FOREIGN KEY (UserID) REFERENCES MA_Users(ID),
    FOREIGN KEY (HospitalID) REFERENCES MA_Hospitals(ID),
    FOREIGN KEY (DepartmentID) REFERENCES MA_Departments(ID)
);
GO

-- ================================
-- 6️⃣ Services - Dịch vụ khám / gói khám
-- ================================
CREATE TABLE MA_Services (
    ID uniqueidentifier PRIMARY KEY,
    HospitalID uniqueidentifier NULL,
    DepartmentID uniqueidentifier NULL,
    ServiceName NVARCHAR(150) NOT NULL,
	ServiceType NVARCHAR(50),    -- "specialist: Chuyên khoa" / "package: Gói" / "home: Dịch vụ tại nhà"
	ServiceIcon NVARCHAR(255),
    Description NVARCHAR(500),
    PriceFrom decimal(12, 2) NOT NULL,
	PriceTo decimal(12, 2) NOT NULL,
    DurationMinutes INT,
    IsActive BIT DEFAULT 1,
	ParentID uniqueidentifier NULL
    FOREIGN KEY (HospitalID) REFERENCES MA_Hospitals(ID),
    FOREIGN KEY (DepartmentID) REFERENCES MA_Departments(ID),
	FOREIGN KEY (ParentID) REFERENCES MA_Services(ID)
);
GO

-- ================================
-- 7️⃣ Appointments - Lịch khám
-- ================================
CREATE TABLE MA_Appointments (
    ID uniqueidentifier PRIMARY KEY,
    UserID uniqueidentifier NOT NULL,             -- Bệnh nhân
    DoctorID uniqueidentifier NULL,
    ServiceID uniqueidentifier NOT NULL,
    HospitalID uniqueidentifier, --NULL nếu là dịch vụ tại nhà
    AppointmentType NVARCHAR(50),    -- "home: Tại nhà" / "clinic: Tại bệnh viện"
    AppointmentDate DATE NOT NULL,
    AppointmentTime TIME NOT NULL,
    Status NVARCHAR(50) DEFAULT N'pending',  -- pending / confirmed / completed / canceled
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME,
    FOREIGN KEY (UserID) REFERENCES MA_Users(ID),
    FOREIGN KEY (DoctorID) REFERENCES MA_Doctors(ID),
    FOREIGN KEY (ServiceID) REFERENCES MA_Services(ID),
    FOREIGN KEY (HospitalID) REFERENCES MA_Hospitals(ID)
);
GO

-- ================================
-- 8️⃣ Conversations - phòng/chat
-- ================================
CREATE TABLE MA_Conversations (
    ID uniqueidentifier PRIMARY KEY,
    Name NVARCHAR(200) NULL,
	Description NVARCHAR(1000),
	Type nvarchar(20), -- personal / group / system
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- ================================
-- 8️.1 ChatMessages - Tin nhắn
-- ================================
CREATE TABLE MA_ChatMessages (
    ID uniqueidentifier PRIMARY KEY DEFAULT NEWID(),
    ConversationID uniqueidentifier NOT NULL,       -- Hội thoại
    SenderID uniqueidentifier NOT NULL,             -- Người gửi
    MessageText NVARCHAR(MAX) NULL,                 -- Nội dung text (nếu có)
    MessageType NVARCHAR(20) DEFAULT 'text',        -- text / image / file / system
    ReplyToMessageID uniqueidentifier NULL,         -- Tin nhắn được reply (nếu có)
    IsDeleted BIT DEFAULT 0,                        -- Tin nhắn đã bị xoá
    CreatedAt DATETIME DEFAULT GETDATE(),           -- Ngày gửi
    FOREIGN KEY (ConversationID) REFERENCES MA_Conversations(ID),
    FOREIGN KEY (SenderID) REFERENCES MA_Users(ID),
    FOREIGN KEY (ReplyToMessageID) REFERENCES MA_ChatMessages(ID)
);
GO

-- ================================
-- 9️⃣ Payments - Thanh toán
-- ================================
CREATE TABLE MA_Payments (
    ID uniqueidentifier PRIMARY KEY,
    AppointmentID uniqueidentifier NOT NULL,
    UserID uniqueidentifier NOT NULL,
    Amount DECIMAL(12,2) NOT NULL,
    PaymentMethod NVARCHAR(50),
    PaymentStatus NVARCHAR(50) DEFAULT N'pending',  -- pending / paid / failed / refunded
    TransactionCode NVARCHAR(100),
    AttemptNumber INT DEFAULT 1,  -- lần thử thứ mấy cho Appointment này
    ParentPaymentID uniqueidentifier NULL,  -- liên kết tới bản ghi gốc (nếu là retry)
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (AppointmentID) REFERENCES MA_Appointments(ID),
    FOREIGN KEY (UserID) REFERENCES MA_Users(ID),
    FOREIGN KEY (ParentPaymentID) REFERENCES MA_Payments(ID)
);
GO

-- ================================
-- 🔟 Reviews - Đánh giá
-- ================================
CREATE TABLE MA_Reviews (
    ID uniqueidentifier PRIMARY KEY,
    AppointmentID uniqueidentifier NOT NULL,
    UserID uniqueidentifier NOT NULL,
    HospitalID uniqueidentifier NOT NULL,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    Comment NVARCHAR(1000),
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (AppointmentID) REFERENCES MA_Appointments(ID),
    FOREIGN KEY (UserID) REFERENCES MA_Users(ID),
    FOREIGN KEY (HospitalID) REFERENCES MA_Hospitals(ID)
);
GO

-- ================================
-- 11. MA_LabResults - Kết quả xét nghiệm
-- ================================
CREATE TABLE MA_LabResults (
    ID UNIQUEIDENTIFIER PRIMARY KEY,
    AppointmentID UNIQUEIDENTIFIER NOT NULL,   -- Gắn với lịch khám cụ thể
    UserID UNIQUEIDENTIFIER NULL,              -- Người được khám
    DoctorID UNIQUEIDENTIFIER NULL,            -- Bác sĩ phụ trách xét nghiệm / kết luận
    TestName NVARCHAR(200) NOT NULL,           -- Tên nhóm xét nghiệm (VD: "Xét nghiệm máu", "Sinh hóa")
    ResultDate DATETIME,     -- Ngày trả kết quả
    Notes NVARCHAR(500) NULL,                  -- Ghi chú tổng quát
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME NULL,
    FOREIGN KEY (AppointmentID) REFERENCES MA_Appointments(ID),
    FOREIGN KEY (UserID) REFERENCES MA_Users(ID),
    FOREIGN KEY (DoctorID) REFERENCES MA_Doctors(ID)
);

-- ================================
-- 11.1. MA_LabResultDetails - Chi tiết quả xét nghiệm
-- ================================
CREATE TABLE MA_LabResultDetails (
    ID UNIQUEIDENTIFIER PRIMARY KEY,
    LabResultID UNIQUEIDENTIFIER NOT NULL,     -- Khóa ngoại tới MA_LabResults
    ParameterName NVARCHAR(200) NOT NULL,      -- Tên chỉ số (VD: "HGB", "WBC", "Glucose", ...)
    ResultValue NVARCHAR(100) NULL,            -- Giá trị kết quả (VD: "13.5", "5.2", ...)
    Unit NVARCHAR(50) NULL,                    -- Đơn vị (VD: "g/dL", "10^9/L", "mmol/L")
    ReferenceRange NVARCHAR(100) NULL,         -- Khoảng tham chiếu (VD: "12–16 g/dL")
    Status NVARCHAR(50) NULL,                  -- Trạng thái: "Bình thường", "Cao", "Thấp", "Âm tính", "Dương tính"
    Notes NVARCHAR(255) NULL,                  -- Ghi chú riêng cho chỉ số
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (LabResultID) REFERENCES MA_LabResults(ID)
);

-- ================================
-- 12. Files - Bảng lưu file của tin nhăn, file kết quả xét nghiệm
-- ================================
CREATE TABLE MA_Files (
    ID uniqueidentifier PRIMARY KEY,
	FileName nvarchar(1000) NOT NULL,
	FileType nvarchar(255) NULL,
	FileSize bigint NULL,
	FilePath nvarchar(1000) NOT NULL,
	ReferenceID uniqueidentifier NULL,
	TableName varchar(255) NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- ================================
-- ✅ Hoàn tất
-- ================================
PRINT '✅ Database MedicalApp created successfully with 10 tables!';
GO
