# Use an official Node runtime as a parent image
FROM node:19.4.0

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Set environment variable for chrome flags
ENV CHROME_FLAGS="--disable-dev-shm-usage --no-sandbox"

# Expose port 3000
EXPOSE 3000

# Verify Node version and run jest with custom Chrome flags
CMD ["npm", "test"]
