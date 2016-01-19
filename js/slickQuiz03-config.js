// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Session 3 Quiz",
        "main":    "<p>The quiz will consist of ten (10) multiple choice questions.</p><br>",
        // "results": [
        //             "pass": "<p>Congratulations! You have passed the Session 1 quiz. Please complete the session evaluation to receive your completion certificate. <a class='btn btn-default' href='' role='button'>Session Evaluation</a></p>",
        //             "fail": "<p>I'm sorry but a score of 8 to 10 is needed to successfully pass this quiz. Please retake the quiz until a passing score is acheived.<a class='btn btn-default' href='session01uiz.html' role='button'>Session 1 Quiz</a></p>",
        //             ],
    },
    "questions": [
        { // Question 1
            "q": "Unlike discipline, physical abuse contains these elements:",
            "a": [
                {"option": "Unpredictability", 
                    "correct": false},
                {"option": "Lashing out in anger to control victims",
                    "correct": false},
                {"option": "Using fear to control behavior",
                    "correct": false},
                {"option": "All of the above",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 2
            "q": "Sexual abuse is complicated further because: ",
            "a": [
                {"option": "Some children really want to have sex",
                    "correct": false},
                {"option": "It involves guilt and shame on the part of the victim",
                   "correct": true},
                {"option": "The perpetrators are usually strangers",
                    "correct": false},
                {"option": "Only girls are victims",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 3
            "q": "The overwhelming majority of men who sexually assault boys are:",
            "a": [
                {"option": "usually homosexuals",
                    "correct": false},
                {"option": "usually unmarried men",
                    "correct": false},
                {"option": "Heterosexuals from all walks of life",
                    "correct": true},
                {"option": "Coaches of sports",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 4
            "q": "For kids with significant disabilities, the best way to tell if a unusual behavior is a sign of abuse is to:",
            "a": [
                {"option": "Ask many questions to the child about your suspicions",
                    "correct": false},
                {"option": "Give the child a physical check over everyday",
                    "correct": false},
                {"option": "Ask someone who knows the child’s typical behavior",
                    "correct": true},
                {"option": "All of the above",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 5
            "q": "Red flags in the classroom may include:",
            "a": [
                {"option": "Sudden change in academic performance",
                    "correct": false},
                {"option": "Fear of going home",
                    "correct": false},
                {"option": "Constant fatigue, listlessness, or constantly falling asleep",
                    "correct": false},
                {"option": "All of the above",
                    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 6
            "q": "A mandated reporter who does not report abuse:",
            "a": [
                {"option": "May be guilty of a class 1 misdemeanor and fined",
                    "correct": true},
                {"option": "Is permitted as long as they tell their supervisor",
                    "correct": false},
                {"option": "Should contact the family before they contact child protective services",
                    "correct": false},
                {"option": "Should tell everyone who knows the family to be alert for signs of abuse",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 7 
            "q": "If you report abuse to Child Protective Services for a case that is determined unfounded, and then months later notice the same red flags of abuse, you should:",
            "a": [
                {"option": "Not contact CPS again because there is no proof",
                    "correct": false},
                {"option": "Contact CPS again because there may be reports from others in addition to yours",
                    "correct": true},
                {"option": "Contact adult protective services as an alternate",
                    "correct": false},
                {"option": "Send an email to your supervisor",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 8
            "q": "If a child does not communicate verbally and uses sign language:",
            "a": [
                {"option": "You should ask a family member to interpret for him or her",
                    "correct": false},
                {"option": "You should write questions down",
                    "correct": false},
                {"option": "You should get a professional sign language interpreter",
                    "correct": true},
                {"option": "All of the above",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 9
            "q": "People with disabilities:",
            "a": [
                {"option": "Do not know how to distinguish the truth in a situation involving abuse",
                    "correct": false},
                {"option": "Have an excellent recall of traumatic or special events in their lives",
                    "correct": true},
                {"option": "Cannot respond to interview questions unless someone speaks very loudly and clearly",
                    "correct": false},
                {"option": "Will not be able to testify in court against their abuser",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
        { // Question 10
            "q": "Recognizing and responding to abuse:",
            "a": [
                {"option": "Is the responsibility of law enforcement",
                    "correct": false},
                {"option": "Is the responsibility of child protective services",
                    "correct": false},
                {"option": "Is everyone’s responsibility",
                    "correct": true},
                {"option": "Should be left to skilled professionals",
                    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        } // no comma here
    ]
};