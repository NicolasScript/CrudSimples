const express = require("express");
const mongoose = require("mongoose");
const TextModel = require("./model/schema");
const router = express.Router();

router.get("/", async (req, res) => {
    let item = await TextModel.find();
    res.render("home", {items: item});
});

router.post("/", (req, res) => {
    let items = {
        text: req.body.texto,
    };
    const newText = new TextModel(items);
    newText.save();

    res.redirect("/");
});

router.delete("/:id", async (req, res) => {
    await TextModel.findByIdAndDelete(req.params.id);
    res.redirect("/");
})

router.get("/edit/:id", (req, res) => {
    const params = req.params.id;
    res.render("edit", {item: params});
})

router.post("/edit/:id", async (req, res) => {
    const id = req.params.id;
    let items = {
        text: req.body.new
    };
    
    await TextModel.findByIdAndUpdate(id, items);
    res.redirect("/")
});

module.exports = router;