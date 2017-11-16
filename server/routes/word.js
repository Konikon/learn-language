let express = require("express");
let Word = require("../models/word");
let expressJwt = require("express-jwt");
let settings = require("../settings.js");

let auth = expressJwt({ secret: settings.secret });

const wordRouter = express.Router();
wordRouter.use(auth);

wordRouter.route("/")
    .get((req, res) => {
        Word.find({user: req.user._id}, (err, learns) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(learns);
        });
    })
    .post((req, res) => {
        let word = new Word(req.body);
        word.user = req.user._id;
        word.save((err, newLearn) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newLearn);
        })
    });

    wordRouter.route("/:learnId")
    .get((req, res) => {
        Learn.findOne({ user: req.user._id, _id: req.params.learnId }, (err, learn) => {
            if (err) return res.status(500).send(err);
            if (!learn) return res.status(404).send("No learn item found.");
            return res.status(200).send(learn);
        });
    })
    .put((req, res) => {
        Learn.findOneAndUpdate({user: req.user._id,_id: req.params.learnId}, req.body, { new: true }, (err, learn) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(learn);
        });
    })
    .delete((req, res) => {
        Learn.findOneAndRemove({user: req.user._id,_id: req.params.learnId },
            (err, learn) => {
                if (err) return res.status(500).send(err);
                return res.status(200).send(learn);
            })
    });

module.exports = wordRouter;
