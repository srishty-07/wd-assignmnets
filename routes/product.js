const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Review = require("../models/review");

// this display all the products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.render("products/index", { products });
  } catch (e) {
    console.log(e.message);
    req.flash("error", "Oops!! Cannot be shown product due to some reason");
    res.redirect('/error');
  }
});

// get the form for the new products

router.get("/products/new", (req, res) => {
  res.render("products/new");
});

// CReating a new product
router.post("/products", async (req, res) => {
    // try catch to catch the error
  try {
    await Product.create(req.body.product);

    req.flash("success", "Congratulations!! Product created Successfully");

    res.redirect("/products");
  } catch (e) {
    console.log(e.message);
    req.flash("error", "Oops!! Cannot be shown product due to some reason");
    res.redirect('/error');
  }
});

// show particular product
router.get("/products/:id", async (req, res) => {
    try {
  const product = await Product.findById(req.params.id).populate("reviews");

  console.log(product);

  res.render("products/show", { product });
} catch (e) {
    console.log(e.message);
    req.flash("error", "Oops!! Cannot be shown product due to some reason");
    res.redirect('/error');
  }
});

// edit page
router.get("/products/:id/edit", async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.render("products/edit", { product });
});

// update a particular product
router.patch("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body.product);

  req.flash("success", "Succesfuly Updated");

  res.redirect(`/products/${req.params.id}`);
});

// deletre a particular product

router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

// commenting on a product
router.post("/products/:id/review", async (req, res) => {
  const product = await Product.findById(req.params.id);
  const review = new Review(req.body);
  console.log(review);

  // now storing it in review vali array
  product.reviews.push(review);

  // now saving the review and product
  await review.save();
  await product.save();

  res.redirect(`/products/${req.params.id}`);
});

router.get('/error',(req,res)=>{
    res.status(500).render('error');
})

module.exports = router;
