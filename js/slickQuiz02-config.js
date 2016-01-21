// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Session 2 Quiz",
        "main":    "<p>The quiz will consist of six (6) multiple choice and  four (4) true/false questions.</p><br>",
        // "results": [
        //             "pass": "<p>Congratulations! You have passed the Session 1 quiz. Please complete the session evaluation to receive your completion certificate. <a class='btn btn-default' href='' role='button'>Session Evaluation</a></p>",
        //             "fail": "<p>I'm sorry but a score of 8 to 10 is needed to successfully pass this quiz. Please retake the quiz until a passing score is acheived.<a class='btn btn-default' href='session01uiz.html' role='button'>Session 1 Quiz</a></p>",
        //             ],
    },
    "questions": [
        { // Question 1
            "q": "It’s important to feel comfortable with some of the vocabulary of abuse because:",
            "a": [
                {"option": "It helps to break the silence that perpetrators depend upon to keep perpetuate abuse", 
                    "correct": true},
                {"option": "It helps when describing situations to medical evaluators",
                    "correct": false},
                {"option": "It increases the vocabulary of feelings",
                    "correct": false},
                {"option": "It reduces stress levels when discussing uncomfortable events",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 2
            "q": "One of the hallmarks of sexual abuse of children is: ",
            "a": [
                {"option": "Stranger danger",
                    "correct": false},
                {"option": "Coercion of the child because perpetrator is in role with power and authority over the child",
                   "correct": true},
                {"option": "Children who wear provocative styles of clothing and makeup",
                    "correct": false},
                {"option": "Internet pornography",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 3
            "q": "It is estimated that as many as ____children have experienced childhood trauma.",
            "a": [
                {"option": "9 out of 10",   "correct": false},
                {"option": "1 out of 4",    "correct": true},
                {"option": "50%",           "correct": false},
                {"option": "1% of all children",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 4
            "q": "Although evidence is scant, we know that children with disabilities:",
            "a": [
                {"option": "Are almost twice as likely as their non-disabled peers to experience abuse and neglect",
                    "correct": false},
                {"option": "Are 1.5 times more likely to be seriously hurt by the abuse",
                    "correct": false},
                {"option": "Are almost three times more likely to experience sexual abuse",
                    "correct": false},
                {"option": "All of the above",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 5
            "q": "Child abuse of children with disabilities may appear to be different because:",
            "a": [
                {"option": "The families experience so much stress that parents become abusive",
                    "correct": false},
                {"option": "Children with disabilities frequently fantasize about things that are not true",
                    "correct": false},
                {"option": "The child’s specific disability is used as part of the abuse",
                    "correct": true},
                {"option": "Children with disabilities do not get upset if they are abused",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 6
            "q": "Children with disabilities are at higher risk for abuse because:",
            "a": [
                {"option": "They have a higher number of caregivers than typically developing children",
                    "correct": false},
                {"option": "They may not have learned boundaries surrounding touch",
                    "correct": false},
                {"option": "Perpetrators of abuse seek out victims who appear vulnerable",
                    "correct": false},
                {"option": "All of the above",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 7 
            "q": "People who are abusive lose control and cannot control themselves.",
            "a": [
                {"option": "True",    
                    "correct": false},
                {"option": "False",    
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 8
            "q": "Abuse is perpetuated by a need for power and control over the victim.",
            "a": [
                {"option": "True",    
                    "correct": true},
                {"option": "False",   
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 9
            "q": "One way of nurturing children is to take care of yourself.",
            "a": [
                {"option": "True",
                    "correct": true},
                {"option": "False",     
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 10
            "q": "If we do not address abuse, we are helping people who perpetuate abuse.",
            "a": [
                {"option": "True", 
                    "correct": true},
                {"option": "False",     
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        } // no comma here
    ]
};