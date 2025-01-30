const express = require('express');
const app = express();
const port = 3000;
const checktime = require("./middleware/checkTime");
const postsRouter = require('./routers/posts');
const errorHandler = require("./middleware/errorHandler");

app.use(checktime);

app.use(express.static('public'))
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server del mio blog')
});

app.use('/posts', postsRouter);

app.use(errorHandler);

app.use(notFound);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});