#!/bin/bash

# initialize npm
npm init -y

# Install playwright
npm init playwright@latest
echo "playwright installation complete."

# Install @faker-js/faker
npm install @faker-js/faker
echo "@faker-js/faker installation complete."

# Install @types/node
npm install @types/node
echo "@types/node installation complete."

# Install dotenv
npm install dotenv
echo "dotenv installation complete."

echo "All installations complete."