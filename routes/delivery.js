var express = require("express");
var passport = require("passport");
var router = express.Router();
const User = require("../models/users"),
  Delivery = require("../models/delivery"),
  Order = require("../models/order"),
  Notification = require("../models/communication/notification");

//@route GET delivery/
//@desc get all orders setnt by product manager
//access transporter
router.get("/", (req, res) => {
  Delivery.find({})
    .populate("order")
    .exec(function(err, delivery) {
      if (err) {
        console.log(err);
      } else {
        res.json(delivery);
      }
    });
});

//@route POST delivery/
//@desc transporter accepts an order
//access transporter
router.post("/:id", passport.authenticate("jwt"), (req, res) => {
  const user = {};
  user.transporter = req.user;

  //GET DELIVERY BY ID  AND UPDATE THE CURRENT
  //DELIVERY WITH THE CURRENT TRANSPORTER ID
  Delivery.findOneAndUpdate(req.params.id, { $set: user }, { new: true }).then(
    delivery => {
      let status = {};
      status.status = "on its way";
      Order.findOneAndUpdate(
        delivery.order,
        { $set: status },
        { new: true }
      ).then(newOrder => res.json(newOrder.status));
    }
  );
});
//@route POST report/
//@desc transporter  report an order
//access transporter
router.post("/report/:id", (req, res) => {
  const order = {};
  order.report = {};
  if (req.body.reporttype) order.report.reporttype = req.body.reporttype;
  if (req.body.reportbody) order.report.reportbody = req.body.reportbody;

  Delivery.findOneAndUpdate(req.params.id, { $set: order }, { new: true }).then(
    order => {
      let status = {};
      //IF THE REPORT TYPE IS FAILED
      if (req.body.reporttype === "failed") {
        status.status = "failed";
        Order.findOneAndUpdate(
          order.order,
          { $set: status },
          { new: true }
        ).then(order => {
          //SETTING NOTIFICATION FOR A USER
          if (req.user) {
            let newNotification = new Notification();
            newNotification.user = req.user;
            newNotification.subject =
              "We are sorry to inform you that your order has failed";
            newNotification.body = req.body.reportbody;
            newNotification.type = req.body.reporttype;
            newNotification
              .save()
              .then(notif => res.json(notif))
              .catch(err => console.log(err));
          }
        });
      }
      //IF THE REPORT TYPE IS RESCHEDULED
      if (req.body.reporttype == "rescheduled") {
        status.status = "rescheduled";
        Order.findOneAndUpdate(
          order.order,
          { $set: status },
          { new: true }
        ).then(order => {
          //SETTING NOTIFICATION FOR A USER
          if (req.user) {
            let newNotification = new Notification();
            newNotification.user = req.user;
            newNotification.subject =
              "We are sorry to inform you that your order has been rescheduled";
            newNotification.body = req.body.reportbody;
            newNotification.type = req.body.reporttype;
            newNotification
              .save()
              .then(notif => res.json(notif))
              .catch(err => console.log(err));
          }
        });
      }
    }
  );
});

module.exports = router;
