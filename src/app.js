// index.js
const express = require('express');
const application = express();
const PORT = process.env.PORT || 3000;

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

application.get("/", (request, response) => {
    response.json({ message: 'Welcome to Built with Express'})
})

application.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
