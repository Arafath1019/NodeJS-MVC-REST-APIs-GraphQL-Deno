const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

// /admin/add-product
router.get("/add-product", (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/product
router.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;