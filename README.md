
# User Registration System

deployed at https://deploy-auth-app-ui-pearl.vercel.app/login
<br> 
Email: test@gmail.com
<br>
Password:Test123456

## REST API Endpoints

### 1. User Registration

**Endpoint:** `/auth/signup`

**Method:** `POST`

**Request Format:**
```json
{
  "name": "string",
  "email": "string",
  "age": "number",
  "dateOfBirth": "date",
  "password": "string",
  "gender": "string",
  "about": "string"
}
```

**Response Format:**
```json
{
  "success": true,
  "message": "User created successfully!"
}
```

### 2. User Login

**Endpoint:** `/auth/login`

**Method:** `POST`

**Request Format:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response Format:**
```json
{
  "success": true,
  "message": "Login Success",
  "jwtToken": "string",
  "email": "string",
  "name": "string"
}
```

### 3. Update User

**Endpoint:** `/auth/update`

**Method:** `PUT`

**Request Format:**
```json
{
  "userId": "string",
  "name": "string",
  "email": "string",
  "age": "number",
  "dateOfBirth": "date",
  "password": "string",
  "gender": "string",
  "about": "string"
}
```

**Response Format:**
```json
{
  "success": true,
  "message": "User updated successfully"
}
```

### 4. Delete User

**Endpoint:** `/auth/delete`

**Method:** `DELETE`

**Request Format:**
```json
{
  "userId": "string"
}
```

**Response Format:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

## Setup and Run the Project Locally


### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/varunkasyap/deploy-auth-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd deploy-auth-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```



### Running the Project

1. Start the backend server:
   ```sh
   cd backend
   npm start
   ```


2. Start the frontend server:
   ```sh
   cd frontend
   npm start
   ```


3. Open your browser and navigate to `http://localhost:5173`