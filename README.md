# Login Application

A simple authentication system built with React.js, Express.js, and MongoDB featuring admin and customer user roles.

## Features

- **User Registration (SignUp)**: Admin and Customer users can create accounts
- **User Login (SignIn)**: Secure authentication with email and password
- **Password Security**: Passwords are hashed using bcrypt before storage
- **Role-Based Access**: Supports Admin and Customer user types
- **Modern UI**: Clean, responsive interface with gradient design

## Technologies Used

### Frontend
- **React.js**: UI framework
- **Axios**: HTTP client for API requests
- **CSS3**: Styling with modern gradients and animations

### Backend
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for user storage
- **Mongoose**: MongoDB object modeling
- **bcrypt.js**: Password hashing
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Project Structure

```
block45/
├── backend/
│   ├── models/
│   │   └── User.js          # User schema definition
│   ├── routes/
│   │   └── auth.js          # Authentication routes
│   ├── .env                 # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js            # Express server setup
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── SignIn.js    # Login component
    │   │   ├── SignIn.css
    │   │   ├── SignUp.js    # Registration component
    │   │   └── SignUp.css
    │   ├── App.js           # Main app component
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── .gitignore
    └── package.json
```

## Prerequisites

Before running this project, make sure you have installed:

- **Node.js** (v14 or higher)
- **MongoDB** (running locally or MongoDB Atlas)
- **npm** or **yarn** package manager

## Installation & Setup

### 1. Clone the Repository

```bash
cd c:\Users\micha\Desktop\coursework\block45
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit .env file and update MongoDB URI if needed
# Default: MONGODB_URI=mongodb://localhost:27017/loginapp

# Start the backend server
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

### Register a New User

1. Open `http://localhost:3000` in your browser
2. Click "Sign Up" if not already on the registration page
3. Enter your email and password
4. Select your role (Admin or Customer)
5. Click "Sign Up"

### Login

1. Navigate to the Sign In page
2. Enter your registered email and password
3. Click "Sign In"
4. Upon successful login, you'll see a welcome message with your role

### API Endpoints

#### POST `/api/auth/signup`
Register a new user

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "role": "admin" | "customer"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "email": "user@example.com",
    "role": "admin"
  }
}
```

#### POST `/api/auth/signin`
Login an existing user

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "email": "user@example.com",
    "role": "admin"
  }
}
```

## Database Schema

### User Model

```javascript
{
  email: String (required, unique, lowercase),
  password: String (required, hashed),
  role: String (enum: ['admin', 'customer']),
  timestamps: true
}
```

## Security Features

- Passwords are hashed using bcrypt with salt rounds
- Email validation and duplicate prevention
- CORS enabled for frontend-backend communication
- Input validation on both frontend and backend

## Development Scripts

### Backend
```bash
npm start      # Start server with node
npm run dev    # Start server with nodemon (auto-restart)
```

### Frontend
```bash
npm start      # Start development server
npm build      # Create production build
npm test       # Run tests
```

## MongoDB Setup

### Option 1: Local MongoDB
Ensure MongoDB is running locally on port 27017

### Option 2: MongoDB Atlas
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `MONGODB_URI` in `backend/.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/loginapp?retryWrites=true&w=majority
```

## Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify `.env` file configuration
- Ensure port 5000 is not in use

### Frontend can't connect to backend
- Verify backend is running on port 5000
- Check CORS configuration in `server.js`
- Ensure API URL in components is `http://localhost:5000`

### "User already exists" error
- The email is already registered
- Use a different email or try signing in

## Future Enhancements

- JWT token-based authentication
- Session management
- Password reset functionality
- Email verification
- User profile management
- Admin dashboard
- Protected routes

## License

ISC

## Author

Coursework Project - Block 45
