const app = require("../src/handler");
const route = require("../routes/getRes");
app.use("/", route);
console.log('pass getRes in api');
module.exports = app;