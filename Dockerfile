# Use official Node.js LTS
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the NestJS project
RUN npm run build

# Expose NestJS port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:prod"]
