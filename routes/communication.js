var express = require("express");
var router = express.Router({ mergeParams: true });

var Message = require("../models/communication/messages"),
  Announcment = require("../models/communication/announcment"),
  Notification = require("../models/communication/notification");

router.post("/messages", (req, res) => {
  const messageFields = {};
  if (req.body.subject) messageFields.subject = req.body.subject;
  if (req.body.text) messageFields.text = req.body.text;
  if (req.body.author) messageFields.author = req.body.author;
  if (req.body.email) messageFields.email = req.body.email;
  Message.create(messageFields, function(err, msg) {
    if (err) {
      console.log(err);
    } else {
      res.json(msg);
    }
  });
});
router.get("/messages", (req, res) => {
  Message.find({})
    .sort([["created", -1]])
    .exec((err, msg) => {
      if (err) {
        console.log(err);
      } else {
        res.json(msg);
      }
    });
});

router.post("/announcment", (req, res) => {
  const announceFields = {};
  if (req.body.subject) announceFields.subject = req.body.subject;
  if (req.body.type) announceFields.type = req.body.type;

  Announcment.create(announceFields, function(err, ann) {
    if (err) {
      console.log(err);
    } else {
      res.json(ann);
    }
  });
});

router.get("/announcment", (req, res) => {
  Announcment.find({})
    .sort([["created", -1]])
    .exec((err, ann) => {
      if (err) {
        console.log(err);
      } else {
        res.json(ann);
      }
    });
});

router.post("/notification/:id", (req, res) => {
  const notificationField = {};
  notificationField.user = req.params.id;
  if (req.body.subject) notificationField.subject = req.body.subject;
  if (req.body.type) notificationField.type = req.body.type;

  Notification.create(notificationField, function(err, notif) {
    if (err) {
      console.log(err);
    } else {
      res.json(notif);
    }
  });
});

router.get("/notification", (req, res) => {
  var errors = {};
  Notification.findOne({ user: req.user.id })

    .then(notif => {
      if (!notif) {
        errors.nonotif = "There is no notification for this user";
        return res.json(errors);
      }
      res.send(notif);
    })
    .catch(err => res.status(404).json(errors));
});

module.exports = router;
