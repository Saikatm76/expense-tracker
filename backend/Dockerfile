# Use the official Node.js image from Docker Hub (consider pinning to a specific version for stability)
FROM node:18-alpine


# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app for production (optional - for production use)
# RUN npm run build

# Expose React's default dev server port
EXPOSE 5000

# Start the app (for development, "npm start" uses react-scripts)
CMD ["npm", "start"]
