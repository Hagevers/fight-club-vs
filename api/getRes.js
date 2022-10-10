const app = require("../src/handler");
const route = require("../routes/getRes");
app.use("/api/", route);
console.log('pass getRes in api');
module.exports = app;