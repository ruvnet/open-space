#!/bin/bash

# Install dependencies
npm install

# Set up Prisma
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Start the development server
npm run dev
