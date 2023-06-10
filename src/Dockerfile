# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Build the React application
# RUN npm run build

# Expose port 3000 (the default port used by React applications)
EXPOSE 3000

# Set the command to start the React application
CMD ["npm", "start"]
