const util = require('./util');
var kahoot = require("kahoot.js-updated");

class Kahoot {
    constructor(pin, botName) {
        this.pin = pin;
        this.botName = botName;
        this.k = new kahoot;
    }

    join() {
        this.k.join(this.pin, this.botName).then(() => {
            console.log("joined quiz");
            this.k.on("quizStart", quiz => {
                console.log("quiz " + quiz.name + " has started");
            });
            this.k.on("question", question => {
                console.log("Recieved a new question. waiting until it starts..");
            });
            this.k.on("questionStart", question => {
                console.log("question started. answering answer id 1 (answer 2)");
                question.answer(1);
            });
            this.k.on("questionSubmit", event => {
                console.log("Submitted the answer. Kahoot says", event.message);
            });
            this.k.on("questionEnd", e => {
                console.log("the question ended.");
                if (e.correct) {
                    console.log("i got the question right!");
                } else {
                    console.log("my answer was incorrect. the correct answer is", e.correctAnswer);
                }
            });
            this.k.on("finishText", e => {
                console.log("the quiz is finishing, Kahoot says", e.firstMessage);
            });
            this.k.on("quizEnd", () => {
                console.log("the quiz ended");
            });  
        });      
    };

    toString() {
        return this.botName + ' joined game with pin ' + this.pin;
    };
};

module.exports = Kahoot;