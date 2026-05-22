const router = require("express").Router();

router.get("/", (req, res) => {

    res.json({
        completedLessons: 5,
        averageScore: 80
    });
});

module.exports = router;