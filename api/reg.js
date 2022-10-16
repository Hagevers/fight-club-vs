const app = require("../src/handler");
const route = require("../routes/reg");
app.use("/api/", route);
console.log('pass reg in api');
module.exports = app;