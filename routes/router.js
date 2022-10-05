const routes = require("express").Router();
const reg = require("./reg");
const login = require("./login");
const dashboard = require("./dashboard");
routes.get("/", async function (req, res) { 
      res.send(`Reached home!`); 
});
routes.use("/", reg);
routes.use("/", login);
routes.use("/", dashboard);
console.log('pass router');
module.exports = routes;