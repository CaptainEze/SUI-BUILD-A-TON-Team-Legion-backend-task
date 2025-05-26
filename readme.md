# SUI Build-A-Ton Backend CRUD API Documentation - Team Legion

## Overview

This is a simple CRUD REST API with basic authentication for token watchlist management functionality using Node.js, Express, MongoDB, and TypeScript.

## Authentication

### Register
**POST** `/api/v1/auth/register`

Registers a new user with email and password.

### Login
**POST** `/api/v1/auth/login`

Authenticates a user and returns a JWT token.

## Protected Routes - Watchlist

All routes below require the user to be authenticated (bearer token in header - *This token is returned in the register or login endpoints*).

### Create Item
**POST** `/api/v1/watchlist/`

Add a new token to your watchlist.

### Get All Items
**GET** `/api/v1/watchlist/`

Retrieve all items for the authenticated user.

### Update Item
**PATCH** `/api/v1/watchlist/:id`

Update a watchlist item. Supports partial updates.

### Delete Item
**DELETE** `/api/v1/watchlist/:id`

Remove an item from the watchlist.

## Models

### User
- `email` - string
- `password` - hashed string

### WatchlistItem
- `userId` - ObjectId (ref to User)
- `tokenSymbol` - string (optional)
- `tokenName` - string (optional)
- `tokenAddress` - string (optional)
- `notes` - string (optional)
- `createdAt` - auto timestamp
- `modifiedAt` - auto timestamp

## Authentication Middleware

The `AuthMiddleware` middleware checks for a valid JWT in the request header and attaches user information to the request object.

## Technologies Used
- Node.js + Express
- MongoDB + Mongoose
- TypeScript
- bcryptjs
- jsonwebtoken

## Env template vars
- `APP_PORT`
- `JWT_KEY`
- `DB_URL`
- `DB_NAME`