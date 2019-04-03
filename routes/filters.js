var express = require("express");
var router = express.Router();
var Product = require("../models/products"),
  Comment = require("../models/comments");

//COUNT CATAGORIES
router.get("/products/catagory", (req, res) => {
  let Catagory = {
    all: 0,
    clothing: 0,
    shoes: 0,
    beauty: 0,
    electronics: 0,
    household: 0,
    kitchen: 0,
    industrial: 0,
    tools: 0,
    fassion: 0,
    personalcare: 0,
    automotives: 0,
    others: 0
  };
  Product.count({}, (err, c) => {
    Catagory.all = c;

    Product.count({ "department.department": "clothing" }, (err, c) => {
      Catagory.clothing = c;

      Product.count({ "department.department": "shoes" }, (err, s) => {
        Catagory.shoes = s;

        Product.count({ "department.department": "beauty" }, (err, c) => {
          Catagory.beauty = c;

          Product.count(
            { "department.department": "electronics" },
            (err, c) => {
              Catagory.electronics = c;

              Product.count(
                { "department.department": "household" },
                (err, c) => {
                  Catagory.household = c;

                  Product.count(
                    { "department.department": "kitchen" },
                    (err, c) => {
                      Catagory.kitchen = c;

                      Product.count(
                        { "department.department": "industrial" },
                        (err, c) => {
                          Catagory.industrial = c;

                          Product.count(
                            { "department.department": "tools" },
                            (err, c) => {
                              Catagory.tools = c;

                              Product.count(
                                { "department.department": "fassion" },
                                (err, c) => {
                                  Catagory.kitchen = c;

                                  Product.count(
                                    { "department.department": "personalcare" },
                                    (err, c) => {
                                      Catagory.personalcare = c;

                                      Product.count(
                                        {
                                          "department.department": "automotives"
                                        },
                                        (err, c) => {
                                          Catagory.automotives = c;

                                          Product.count(
                                            {
                                              "department.department": "others"
                                            },
                                            (err, c) => {
                                              Catagory.others = c;

                                              res.json(Catagory);
                                            }
                                          );
                                        }
                                      );
                                    }
                                  );
                                }
                              );
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        });
      });
    });
  });
});
//CAAGORY FILTERS
//CLOTHING
router.get("/products/catagory/clothing", (req, res) => {
  Product.find({ "department.department": "clothing" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//shoes
router.get("/products/catagory/shoes", (req, res) => {
  Product.find({ "department.department": "shoes" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//beauty
router.get("/products/catagory/beauty", (req, res) => {
  Product.find({ "department.department": "beauty" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//electronics
router.get("/products/catagory/electronics", (req, res) => {
  Product.find({ "department.department": "electronics" }, function(
    err,
    product
  ) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//household
router.get("/products/catagory/household", (req, res) => {
  Product.find({ "department.department": "household" }, function(
    err,
    product
  ) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//kitchen
router.get("/products/catagory/kitchen", (req, res) => {
  Product.find({ "department.department": "kitchen" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//industrial
router.get("/products/catagory/industrial", (req, res) => {
  Product.find({ "department.department": "industrial" }, function(
    err,
    product
  ) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//tools
router.get("/products/catagory/tools", (req, res) => {
  Product.find({ "department.department": "tools" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//fassion
router.get("/products/catagory/fassion", (req, res) => {
  Product.find({ "department.department": "fassion" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//personalcare
router.get("/products/catagory/personalcare", (req, res) => {
  Product.find({ "department.department": "personalcare" }, function(
    err,
    product
  ) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//automotives
router.get("/products/catagory/automotives", (req, res) => {
  Product.find({ "department.department": "automotives" }, function(
    err,
    product
  ) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//other
router.get("/products/catagory/other", (req, res) => {
  Product.find({ "department.department": "other" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});

//TAG BASED FILTERS
//NEWLLYARRIVAL
router.get("/products/tags/new", (req, res) => {
  Product.find({ tags: "newlyarrival" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//FEATURED
router.get("/products/tags/featured", (req, res) => {
  Product.find({ tags: "featured" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
//discount
router.get("/products/tags/discount", (req, res) => {
  Product.find({ tags: "discount" }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(product);
    }
  });
});
module.exports = router;
