const router = require("express").Router();

router.post("/", (req, res) => {

    const { text } = req.body;

    const dictionary = {
        hello: "ನಮಸ್ಕಾರ",
        water: "ನೀರು",
        food: "ಆಹಾರ"
    };

    const translated =
        dictionary[text.toLowerCase()] || "Translation not found";

    res.json({
        translated
    });
});

module.exports = router;
