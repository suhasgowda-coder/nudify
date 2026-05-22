const router = require("express").Router();

router.get("/", (req, res) => {

    const quiz = [
        {
            question: "What is Kannada letter for A?",
            options: ["ಅ", "ಇ", "ಉ"],
            answer: "ಅ"
        },
        {
            question: "Meaning of Namaskara?",
            options: ["Hello", "Bye", "Thanks"],
            answer: "Hello"
        }
    ];

    res.json(quiz);
});

module.exports = router;
