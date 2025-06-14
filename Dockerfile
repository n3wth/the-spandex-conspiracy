# Use the official Node.js LTS runtime as the base image (more secure)
FROM node:lts-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Temporarily remove "type": "module" from package.json to avoid ESM/CommonJS conflicts
RUN sed -i 's/"type": "module",//' package.json

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Use properly formatted config files for the build
RUN cp postcss.config.js postcss.config.cjs

# Build the application
RUN npm run build

# Use a fresh image for the runtime
FROM node:lts-alpine

WORKDIR /app

# Copy only the built application and necessary files for running it
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server.js ./

# Install only production dependencies
RUN npm ci --omit=dev

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the application
CMD ["npm", "start"]
