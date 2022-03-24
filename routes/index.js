const express = require("express");
const productsRouter = require("./facs.routes");

function routerApi(app) {
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/facts", productsRouter);
}

module.exports = routerApi;