const app = require("./src/handler");
const routes = require("./routes/router");
console.log('pass first dev');
app.use("/", routes);
app.listen(3000,function () {
      console.log("Server started. Go to http://localhost:3000/");
});
console.log('pass dev');