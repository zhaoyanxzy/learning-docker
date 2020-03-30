# Specify base image
FROM node:alpine

# Specify the working directory
WORKDIR /usr/app

# Copy local files into temporary container during the build process
COPY ./ ./

# Install dependencies
RUN npm install

# Default command
CMD ["npm", "start"]
