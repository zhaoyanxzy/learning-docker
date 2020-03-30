# Specify base image
FROM node:alpine

# Specify the working directory
WORKDIR /usr/app

# Copy only package.json into temporary container during the build process
COPY ./package.json ./
# Install dependencies
RUN npm install
# Copy everything else after dependencies are installed
COPY ./ ./

# Default command
CMD ["npm", "start"]
