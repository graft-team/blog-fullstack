# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Install required libraries for Prisma
RUN apk add --no-cache libc6-compat openssl

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]