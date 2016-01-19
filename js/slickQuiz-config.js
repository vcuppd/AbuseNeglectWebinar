// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Session 1 Quiz",
        "main":    "<p>The quiz will consist of ten (10) multiple choice questions.</p><br>",
        // "results": [
        //             "pass": "<p>Congratulations! You have passed the Session 1 quiz. Please complete the session evaluation to receive your completion certificate. <a class='btn btn-default' href='' role='button'>Session Evaluation</a></p>",
        //             "fail": "<p>I'm sorry but a score of 8 to 10 is needed to successfully pass this quiz. Please retake the quiz until a passing score is acheived.<a class='btn btn-default' href='session01uiz.html' role='button'>Session 1 Quiz</a></p>",
        //             ],
    },
    "questions": [
        { // Question 1
            "q": "Adults and children with disabilities:",
            "a": [
                {"option": "Make up the largest minority group in the US", 
                    "correct": false},
                {"option": "May have disabilities that are not visible to a casual observer",
                    "correct": false},
                {"option": "Experience abuse at much higher rates than their non-disabled peers",
                    "correct": false},
                {"option": "All of the above",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 2
            "q": "Children with disabilities: ",
            "a": [
                {"option": "Will need to be supported by tax payers for the rest of their lives",
                    "correct": false},
                {"option": "Can never expect to work",
                   "correct": false},
                {"option": "Should be sheltered away where they can be safe",
                    "correct": false},
                {"option": "Deserve to be treated fairly and with dignity",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 3
            "q": "One of the best ways to help prevent abuse of children with disabilities is to:",
            "a": [
                {"option": "Keep them close to law enforcement",
                    "correct": false},
                {"option": "Use people first language",
                    "correct": true},
                {"option": "Teach them to scream “No” if someone touches them inappropriately",
                    "correct": false},
                {"option": "Surround them with others who also have disabilities",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 4
            "q": "One of the reasons that children with disabilities are at higher risk than their non-disabled peers is because:",
            "a": [
                {"option": "Children with disabilities are typically not taught boundaries",
                    "correct": false},
                {"option": "Children with disabilities have a high number of care providers",
                    "correct": false},
                {"option": "Children with disabilities have a hard time identifying who can be trusted",
                    "correct": false},
                {"option": "All of the above",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 5
            "q": "Families of children with disabilities:",
            "a": [
                {"option": "Experience lifelong depression",
                    "correct": false},
                {"option": "Should keep their expectations low",
                    "correct": false},
                {"option": "Should not speak to other parents of children with disabilities",
                    "correct": false},
                {"option": "Can be resilient, healthy and happy.",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 6
            "q": "We can help children become resilient by:",
            "a": [
                {"option": "Reminding them of their faults and weaknesses",
                    "correct": false},
                {"option": "Allowing them the dignity of risk",
                    "correct": true},
                {"option": "Encouraging them only to try things that will bring them success",
                    "correct": false},
                {"option": "Addressing all questions to their parent or interpreter",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 7 
            "q": "If a child does not make eye contact:",
            "a": [
                {"option": "You can assume that he has no idea what you are talking about",
                    "correct": false},
                {"option": "You should speak to him as if he is part of the conversation",
                    "correct": true},
                {"option": "You should wear bright colors to get his attention",
                    "correct": false},
                {"option": "You should remain quiet until you receive eye contact",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 8
            "q": "People with disabilities should be addressed as:",
            "a": [
                {"option": "individuals",
                    "correct": false},
                {"option": "consumers",
                    "correct": false},
                {"option": "clients",
                    "correct": false},
                {"option": "the same way that we talk about the typical population",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 9
            "q": "The word handicapped came from:",
            "a": [
                {"option": "Those who used to beg with cap in hand",
                    "correct": true},
                {"option": "Those who use wheelchairs",
                    "correct": false},
                {"option": "Accessible parking places",
                    "correct": false},
                {"option": "People with intellectual disabilities",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 10
            "q": "When describing children with disabilities, some things you should talk about first are:",
            "a": [
                {"option": "Their IQ",
                    "correct": false},
                {"option": "Their diagnosis",
                    "correct": false},
                {"option": "Things that people like and admire about them",
                    "correct": true},
                {"option": "Their hair color",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        } // no comma here
    ]
};