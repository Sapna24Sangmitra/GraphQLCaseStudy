const express = require('express');
const { ApolloServer } = require('apollo-server');
const schema = require('./schema'); 

const app = express();

const server = new ApolloServer({
    schema,
  })

server.listen(8000, () => {
    console.log('Server is running on port 8000...');
});