const app = require("../src/handler");
const route = require("../routes/reg");
app.use("/", route);
console.log('pass reg in api');
module.exports = app;