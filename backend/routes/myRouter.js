const express = require('express');
const router = express.Router();

// หน้าแรก
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/history', (req, res) => {
    res.render('history');
});

router.get('page2', (req, res) => {
    res.render('page2');
});

module.exports = router;