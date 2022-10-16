const app = require("../src/handler");
const route = require("../routes/dashboard");
app.use("/api/", route);
console.log('pass dashboard in api');
module.exports = app;