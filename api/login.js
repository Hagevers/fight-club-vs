const app = require("../src/handler");
const route = require("../routes/login");
app.use("/", route);
console.log('pass login in api');
module.exports = app;