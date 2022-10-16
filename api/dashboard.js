const app = require("../src/handler");
const route = require("../routes/dashboard");
app.use("/", route);
console.log('pass dashboard in api');
module.exports = app;