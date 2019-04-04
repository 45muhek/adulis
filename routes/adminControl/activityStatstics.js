//THIS FILE INCLUDES WEEKLY STAT
//SUCH US
//            WEEKLY ACTIVE USERS
//            WEEKLY USER REGISTRATION
//            WEEKLY SITE VISITS
var express = require("express");
var router = express.Router();

var User = require("../../models/users"),
  Statstics = require("../../models/statstics"),
  Order = require("../../models/order");

//WEEKLY STATSTICS
//@route POST admin/weekly-statstics
//@desc  get weekly stat
//access admin
router.get("/weekly-statstics", (req, res) => {
  console.log("==========> weekly statics");
  var siteReleaseDate = new Date("2019-02-01 06:58:59.148Z");
  var today = new Date();

  var currentWeek = weekBetween(today, siteReleaseDate);
  var currentWeek_ = parseInt(currentWeek);

  var weeklyRegCounter = 0;
  var lastWeekRegCounter = 0;
  var weeklySiteVisitCounter = 0;
  var lastWeekVisitCounter = 0;
  var weeklyActiveUserCounter = 0;
  var lastWeekActiveUserCounter = 0;

  var weeklyRegisteredUsers = {
    weeklyRegCounter: 0,
    lastWeekRegCounter: 0,
    differenceByPercent: 0
  };

  var weeklySiteVisits = {
    weeklySiteVisitCounter: 0,
    lastWeekVisitCounter: 0,
    differenceByPercent: 0
  };

  var weeklyActiveUser = {
    weeklyActiveUserCounter: 0,
    lastWeekActiveUserCounter: 0,
    differenceByPercent: 0
  };
  //WEEKLY NEW USERS
  var otherWeeks = [{}];
  User.find({}, (err, users) => {
    if (err) console.log(err);
    else {
      users.forEach(function(user) {
        var userRegDate = new Date(user.date);
        var userRegWeek = weekBetween(userRegDate, siteReleaseDate);

        //CONVERTING WEEK DIFFERENCES TO INTIGER
        var userRegWeek_ = parseInt(userRegWeek);

        if (userRegWeek_ === currentWeek_) {
          weeklyRegCounter++;
          console.log(weeklyRegCounter);
          console.log("user registered @ the current week");
        }
        //checking if the user is registered in the last week
        else if (userRegWeek_ == currentWeek_ - 1) {
          console.log("user registered last week");
          lastWeekRegCounter++;
        }
        //CHECKING IF THE USER IS REGISTERED IN ANOTHER WEEK
        else {
          const data = { week: userRegWeek, freq: 1 };
          var founded = false;
          console.log(otherWeeks.length);
          if (otherWeeks.length > 0)
            otherWeeks.forEach(a => {
              if (a.week == userRegWeek) {
                a.freq++;
                founded = true;
                return;
              }
            });
          if (!founded) otherWeeks.push(data);
          otherWeeks.forEach(out => {
            console.log(
              "ot " + out.week + " " + out.freq,
              " " + otherWeeks.length
            );
          });

          console.log("user is registered @ the" + userRegWeek_ + "th week");
        }
      });
      var differenceByPercent =
        ((weeklyRegCounter - lastWeekRegCounter) * 100) / lastWeekRegCounter;

      weeklyRegisteredUsers.weeklyRegCounter = weeklyRegCounter;
      weeklyRegisteredUsers.lastWeekRegCounter = lastWeekRegCounter;
      weeklyRegisteredUsers.differenceByPercent = differenceByPercent;

      //WEEKLY SITE VISITS
      Statstics.find({}, (err, visits) => {
        if (err) {
          console.log(err);
        } else {
          visits.forEach(function(visit) {
            var visitedDate = new Date(visit.date);
            var visitedWeek = weekBetween(visitedDate, siteReleaseDate);

            //CONVERTING WEEK DIFFERENCES TO INTIGER
            var visitedWeek_ = parseInt(visitedWeek);
            //CHECKING IF STATSTICS FOR THIS WEED
            if (visitedWeek_ === currentWeek_) {
              console.log("website visited @ the current week");
              weeklySiteVisitCounter++;
            }
            //checking if the user is registered in the last week
            else if (visitedWeek_ == currentWeek_ - 1) {
              console.log("website visited last week");
              lastWeekVisitCounter++;
            }
            //CHECKING IF THE USER IS REGISTERED IN ANOTHER WEEK
            else {
              console.log("website visited @ the" + visitedWeek_ + "th week");
            }
          });
          var visitsDifferenceByPercent =
            ((weeklySiteVisitCounter - lastWeekVisitCounter) * 100) /
            lastWeekVisitCounter;

          weeklySiteVisits.weeklySiteVisitCounter = weeklySiteVisitCounter;
          weeklySiteVisits.lastWeekVisitCounter = lastWeekVisitCounter;
          weeklySiteVisits.differenceByPercent = visitsDifferenceByPercent;
        }
      });
      var activeUser = [];
      Order.find({}, (err, orders) => {
        if (err) {
          console.log(err);
        } else {
          var cart;
          orders.forEach(function(order) {
            console.log("ooooooorder" + order);
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
            var id = order.user;
            console.log("order.user", order.user);

            var acitveDate = new Date(order.deliverydate);
            var activeWeek = weekBetween(acitveDate, siteReleaseDate);

            //CONVERTING WEEK DIFFERENCES TO INTIGER
            var activeWeek_ = parseInt(activeWeek);

            //CHECKING IF STATSTICS FOR THIS WEED
            if (activeWeek_ === currentWeek_) {
              console.log("Weekly Active user counted");
              weeklyActiveUserCounter++;
            }
            //checking if the user is registered in the last week
            else if (activeWeek_ == currentWeek_ - 1) {
              console.log("last week Active user counted");
              lastWeekActiveUserCounter++;
            }
            //CHECKING IF THE USER IS REGISTERED IN ANOTHER WEEK
            else {
              console.log(
                "Active user counted @ the" + activeWeek_ + "th week"
              );
            }
            if (!activeUser.includes(id)) {
              activeUser.push(id);
            }
          });
        }
        var ActiveUsersDifferenceByPercent =
          ((weeklyActiveUserCounter - lastWeekActiveUserCounter) * 100) /
          lastWeekActiveUserCounter;

        weeklyActiveUser.weeklyActiveUserCounter = weeklyActiveUserCounter;
        weeklyActiveUser.lastWeekActiveUserCounter = lastWeekActiveUserCounter;
        weeklyActiveUser.differenceByPercent = ActiveUsersDifferenceByPercent;

        var WeeklyStatstics = {};

        WeeklyStatstics.weeklyRegisteredUsers = weeklyRegisteredUsers;
        WeeklyStatstics.weeklySiteVisits = weeklySiteVisits;
        WeeklyStatstics.weeklyActiveUser = weeklyActiveUser;
        res.json(WeeklyStatstics);
      });
    }
  });
});
//INDIVIDUAL WEEKLY STATSTICS
router.get("/new-users", (req, res) => {
  var y2k = new Date("2019-03-1 06:58:59.148Z");

  var today = new Date();
  res.json(Date.daysBetween(y2k, today));
});
router.get("/weekly-new-users", (req, res) => {
  var siteReleaseDate = new Date("2019-02-01 06:58:59.148Z");
  var today = new Date();

  var currentWeek = weekBetween(today, siteReleaseDate);
  var currentWeek_ = parseInt(currentWeek);

  var weeklyRegCounter = 0;
  var lastWeekRegCounter = 0;
  var otherWeeks = [{}];
  User.find({}, (err, users) => {
    if (err) console.log(err);
    else {
      users.forEach(function(user) {
        var userRegDate = new Date(user.date);
        var userRegWeek = weekBetween(userRegDate, siteReleaseDate);

        //CONVERTING WEEK DIFFERENCES TO INTIGER
        var userRegWeek_ = parseInt(userRegWeek);

        if (userRegWeek_ === currentWeek_) {
          weeklyRegCounter++;
          console.log(weeklyRegCounter);
          console.log("user registered @ the current week");
        }
        //checking if the user is registered in the last week
        else if (userRegWeek_ == currentWeek_ - 1) {
          console.log("user registered last week");
          lastWeekRegCounter++;
        }
        //CHECKING IF THE USER IS REGISTERED IN ANOTHER WEEK
        else {
          const data = { week: userRegWeek, freq: 1 };
          var founded = false;
          console.log(otherWeeks.length);
          if (otherWeeks.length > 0)
            otherWeeks.forEach(a => {
              if (a.week == userRegWeek) {
                a.freq++;
                founded = true;
                return;
              }
            });
          if (!founded) otherWeeks.push(data);
          otherWeeks.forEach(out => {
            console.log(
              "ot " + out.week + " " + out.freq,
              " " + otherWeeks.length
            );
          });

          console.log("user is registered @ the" + userRegWeek_ + "th week");
        }
      });
      var differenceByPercent =
        ((weeklyRegCounter - lastWeekRegCounter) * 100) / lastWeekRegCounter;
      res.json(
        weeklyRegCounter +
          " users registered this week " +
          "& last week is " +
          lastWeekRegCounter +
          " " +
          differenceByPercent +
          "% register when compared with last week"
      );
    }
  });
});
router.get("/weekly-site-visits", (req, res) => {
  var siteReleaseDate = new Date("2019-02-01 06:58:59.148Z");
  var today = new Date();

  var currentWeek = weekBetween(today, siteReleaseDate);
  var currentWeek_ = parseInt(currentWeek);

  var weeklySiteVisitCounter = 0;
  var lastWeekVisitCounter = 0;

  Statstics.find({}, (err, visits) => {
    if (err) {
      console.log(err);
    } else {
      visits.forEach(function(visit) {
        var visitedDate = new Date(visit.date);
        var visitedWeek = weekBetween(visitedDate, siteReleaseDate);

        //CONVERTING WEEK DIFFERENCES TO INTIGER
        var visitedWeek_ = parseInt(visitedWeek);
        //CHECKING IF STATSTICS FOR THIS WEED
        if (visitedWeek_ === currentWeek_) {
          console.log("website visited @ the current week");
          weeklySiteVisitCounter++;
        }
        //checking if the user is registered in the last week
        else if (visitedWeek_ == currentWeek_ - 1) {
          console.log("website visited last week");
          lastWeekVisitCounter++;
        }
        //CHECKING IF THE USER IS REGISTERED IN ANOTHER WEEK
        else {
          console.log("website visited @ the" + visitedWeek_ + "th week");
        }
      });
    }
  });
});
router.get("/weekly-active-users", (req, res) => {
  var siteReleaseDate = new Date("2019-02-01 06:58:59.148Z");
  var today = new Date();

  var currentWeek = weekBetween(today, siteReleaseDate);
  var currentWeek_ = parseInt(currentWeek);
  var weeklyActiveUserCounter = 0;
  var lastWeekActiveUserCounter = 0;

  var activeUser = [];
  Order.find({}, (err, orders) => {
    if (err) {
      console.log(err);
    } else {
      var cart;
      orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
        var id = order.user;

        var acitveDate = new Date(order.deliverydate);
        var activeWeek = weekBetween(acitveDate, siteReleaseDate);

        //CONVERTING WEEK DIFFERENCES TO INTIGER
        var activeWeek_ = parseInt(activeWeek);

        //CHECKING IF STATSTICS FOR THIS WEED
        if (activeWeek_ === currentWeek_) {
          console.log("website visited @ the current week");
          weeklyActiveUserCounter++;
        }
        //checking if the user is registered in the last week
        else if (activeWeek_ == currentWeek_ - 1) {
          console.log("website visited last week");
          lastWeekActiveUserCounter++;
        }
        //CHECKING IF THE USER IS REGISTERED IN ANOTHER WEEK
        else {
          console.log("website visited @ the" + activeWeek_ + "th week");
        }
        if (!activeUser.includes(id)) {
          activeUser.push(id);
        }
      });

      var differenceByPercent =
        ((weeklyActiveUserCounter - lastWeekActiveUserCounter) * 100) /
        lastWeekActiveUserCounter;

      var weeklyStatstics = {};

      weeklyStatstics.weeklyActiveUser = weeklyActiveUserCounter;
      weeklyStatstics.differenceByPercent = differenceByPercent;
      res.json(weeklyActiveUserCounter);
    }
  });
});

router.get("/weekly-percent", (req, res) => {
  res.json("wsssa");
});
//@route POST admin/active-delivery
//@desc  get all delivery that is on goinf
//access admin
//TODO: ALL THAT`
//DAY DIFFERENCE CALCULATOR
Date.daysBetween = function(date1, date2) {
  var one_day = 1000 * 60 * 60 * 24;
  //conver both to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  //calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  //convert back to days and return

  return Math.round(difference_ms / one_day);
};
// WEEK DIFFERENCE CALCULATOR
weekBetween = function(week1, week2) {
  var one_week = 24 * 3600 * 1000 * 7;
  var week1_ms = week1.getTime();
  var week2_ms = week2.getTime();

  return Math.ceil((week1_ms - week2_ms) / one_week);
};
module.exports = router;
