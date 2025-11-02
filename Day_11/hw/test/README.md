# Ứng Dụng Quản Lý Chi Tiêu Cá Nhân - MERN Stack

Ứng dụng web đầy đủ FE và BE để quản lý chi tiêu cá nhân được xây dựng bằng MERN Stack (MongoDB, Express, React, Node.js).

## Tính Năng

- ✅ Đăng ký và đăng nhập với JWT authentication
- ✅ CRUD đầy đủ cho chi tiêu (Create, Read, Update, Delete)
- ✅ Quản lý nhiều danh mục chi tiêu (Ăn uống, Giao thông, Mua sắm, v.v.)
- ✅ Hiển thị tổng chi tiêu và số lượng giao dịch
- ✅ Giao diện đẹp và thân thiện với người dùng

## Cấu Trúc Dự Án

```
.
├── backend/          # Server Node.js + Express
│   ├── models/      # MongoDB models (User, Expense)
│   ├── routes/      # API routes (auth, expenses)
│   ├── middleware/  # Authentication middleware
│   ├── server.js    # Entry point
│   └── package.json
│
└── frontend/         # React application
    ├── src/
    │   ├── components/   # React components
    │   ├── context/      # Auth context
    │   └── App.js
    └── package.json
```

## Cài Đặt và Chạy

### Yêu Cầu

- Node.js (v16 trở lên)
- MongoDB (đã cài đặt và đang chạy)
- npm hoặc yarn

### Backend

1. Di chuyển vào thư mục backend:
```bash
cd backend
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Tạo file `.env` từ `.env.example`:
```bash
cp .env.example .env
```

4. Cập nhật file `.env` với thông tin của bạn:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/expense_tracker
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

5. Chạy server:
```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:5000`

### Frontend

1. Mở terminal mới và di chuyển vào thư mục frontend:
```bash
cd frontend
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng:
```bash
npm start
```

Ứng dụng sẽ mở tại `http://localhost:3000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Đăng ký tài khoản mới
- `POST /api/auth/login` - Đăng nhập

### Expenses (Yêu cầu authentication)

- `GET /api/expenses` - Lấy danh sách tất cả chi tiêu
- `GET /api/expenses/:id` - Lấy chi tiết một chi tiêu
- `POST /api/expenses` - Tạo chi tiêu mới
- `PUT /api/expenses/:id` - Cập nhật chi tiêu
- `DELETE /api/expenses/:id` - Xóa chi tiêu

## Cách Sử Dụng

1. Đăng ký tài khoản mới hoặc đăng nhập
2. Sau khi đăng nhập, bạn sẽ được chuyển đến Dashboard
3. Click "Thêm Chi Tiêu Mới" để thêm chi tiêu
4. Click "Sửa" hoặc "Xóa" trên mỗi chi tiêu để quản lý

## Công Nghệ Sử Dụng

### Backend
- Node.js
- Express.js
- MongoDB với Mongoose
- JWT (jsonwebtoken) cho authentication
- bcryptjs để hash password

### Frontend
- React 18
- React Router DOM
- Axios cho API calls
- Context API cho state management

## Ghi Chú

- Đảm bảo MongoDB đang chạy trước khi start backend
- JWT_SECRET nên được thay đổi trong môi trường production
- CORS đã được cấu hình để frontend có thể gọi API

