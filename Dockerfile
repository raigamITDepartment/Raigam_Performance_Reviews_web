# Use Node.js 18 LTS as the base image
FROM node:18
WORKDIR /app

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build


RUN npm install -g serve
# Install serve globally

# Expose the default port for React
ENV PORT=8080
EXPOSE 8080

# Start the application
CMD ["npx", "serve", "-s", "build", "-l", "8080"]
