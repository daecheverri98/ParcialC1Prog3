const express = require("express");
const routes = express.Router();
const productSchema = require("../models/doc");

routes.post("/fact", (req, res) => {
    res.json([{
            "trademark": "Mazda",
            "model": "2",
            "features": {
                "license": { "name": "ADB123" },
                "color": ["Blue", "Red"]
            },
            "ref": {
                "serial": {
                    "chassis": "12789ABC",
                    "motor": 12340,
                },
                "tires": "R15",
            }
        }]
        /* const fact = productSchema(req.body)
        fact
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error })) */
    )
});

routes.get("/", (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

routes.get("/:tires", (req, res) => {
    const { tires } = req.params;
    productSchema
        .findOne({
            'ref.tires': tires
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

routes.put("/:licenseId", (req, res) => {
    const { licenseId } = req.params;
    const {
        trademark,
        model,
        features,
        ref,
    } = req.body;
    productSchema
        .updateOne({ _id: licenseId }, { $set: { trademark, model, features, ref } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

routes.delete("/:licenseId", (req, res) => {
    const { licenseID } = req.params;
    productSchema
        .deleteOne({ _id: licenseID })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = routes;