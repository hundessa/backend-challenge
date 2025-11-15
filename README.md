# Product & Transaction Service

A NestJS service for managing **Products** and tracking their **Transaction history**, with user associations. Built with **TypeORM**, **PostgreSQL**, and **NestJS** principles like modules, controllers, services, DTOs, and entity relations.  


---

## Project Overview

This service allows:  

- **Create and manage products** with name, price, and quantity.  
- **Adjust product stock levels** (increase or decrease) in a controlled manner.  
- **Record all stock adjustments** as transactions, linking each change to a specific user for accountability.  
- **Retrieve current product status** to monitor inventory levels.  
- **Audit all transactions** for transparency and reporting.  

The project follows **NestJS best practices**, including modular controllers, services, DTO validation, proper HTTP status codes, and database migrations. It is designed to be **scalable, maintainable, and easy to extend** for additional features in the future.  
 

---

## Key Features

- User management (CRUD)  
- Product management (CRUD + quantity adjustment)  
- Transaction logging with user-product association  
- Validation using DTOs (`class-validator`)  
- PostgreSQL database integration via TypeORM  
- Ready for **Docker deployment**  
- Comprehensive API endpoints for easy integration with front-end or other services  

---

## Tech Stack

- **Backend Framework:** NestJS  
- **ORM:** TypeORM  
- **Database:** PostgreSQL  
- **Validation:** class-validator / class-transformer  
- **Testing:** Jest  
- **Language:** TypeScript  

---

## Prerequisites

- Node.js >= 18  
- npm >= 9  
- Docker & Docker Compose (optional, recommended)  
- PostgreSQL database (if not using Docker)   

---

# Set up .env variables
# Example:
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_USER=postgres
# DATABASE_PASSWORD=postgres
# DATABASE_NAME=nestdb

## Installation

### Local Setup (Without Docker)
```bash
# Clone the repository
git@github.com:hundessa/backend-challenge.git
cd backend-challenge

# Install dependencies
npm install

# Build and start containers
docker-compose up --build

# Start the server in development mode
npm run start:dev

# The API will be available at http://localhost:3000

---

### API Endpoints (Postman List)

## Users
- POST
http://localhost:3000/users
- GET
http://localhost:3000/users
- GET
http://localhost:3000/users/:id
- PUT
http://localhost:3000/users/:id
- DELETE
http://localhost:3000/users/:id

## Products

POST http://localhost:3000/product

GET http://localhost:3000/product

GET http://localhost:3000/product/:id

PUT http://localhost:3000/product/:id

DELETE http://localhost:3000/product/:id

PUT http://localhost:3000/product/adjust
 (adjust quantity)

GET http://localhost:3000/product/status/:id
 (get current product status)
