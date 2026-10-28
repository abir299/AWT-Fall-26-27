# Product Management API

A RESTful API built with NestJS, TypeORM, and PostgreSQL for managing products and employees.

## Student Information

- **Name:** MD. Abir Ahmed
- **Student ID:** 23-55385-3
- **Course:** Advanced Web Technology
- **Lab Task:** Lab Task 1

## Technologies Used

- NestJS
- TypeScript
- TypeORM
- PostgreSQL
- Postman

## Features

### Product Management
- Create a product
- Retrieve all products
- Retrieve a product by ID
- Update a product
- Delete a product

Product fields:
- `id` — Auto-generated ID
- `name`
- `category`
- `price`
- `quantity`

### Employee Management
- Create an employee
- Retrieve all employees
- Retrieve an employee by ID
- Update an employee
- Delete an employee

Employee fields:
- `id` — Auto-generated ID
- `name`
- `email`
- `phone`
- `password` — Dummy password for the lab task
- `age`
- `yearsOfWorking`

## Database Configuration

1. Install PostgreSQL.
2. Create a database named `product_management`.
3. Configure the database credentials in the local `.env` file.

Required environment variables:

```env
DB_CLIENT=postgres
DB_DATABASE=product_management
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
PORT=5001
```

Replace `your_postgres_password` with your local PostgreSQL password. Do not commit `.env` to GitHub.

## Installation and Running

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start:dev
```

Base URL:

`http://localhost:5001`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| PATCH | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |
| POST | `/employees` | Create employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get employee by ID |
| PATCH | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

## Postman Screenshots

Postman screenshots are available in:

- `screenshots/product/`
- `screenshots/employee/`

These screenshots demonstrate create, retrieve, update, and delete operations.

## Note

This project was developed for an academic lab task. Employee passwords are dummy values for demonstration purposes only.
