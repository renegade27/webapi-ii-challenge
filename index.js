const express = require('express');
const server = express();

const postsRoutes = require('./postsRoutes');

server.use(express.json());
server.use('/api', postsRoutes);

server.listen(5000, () => {
    console.log('Server is listening on port 5000')
})
