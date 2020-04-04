FROM node:10.16.3
LABEL version=1.0.0

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
# COPY ["package.json", "package-lock.json", "./app/"]
COPY package.json /app/

# add '/usr/src/app/node_modules/.bin' to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install


# Copy all the source
COPY . /app/

EXPOSE 3000