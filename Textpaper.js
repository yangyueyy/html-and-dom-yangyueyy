var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function () {
    var scores = document.getElementById("score");
    var allScore = 0;
    if (checkInformation()) {
        allScore = countScore();
        scores.innerHTML = allScore;
        alert("你的成绩是：\n" + allScore);
    }
};

function checkInformation() {
    var className = document.getElementsByName("className")[0].value;
    var studentNumber = document.getElementsByName("studentNumber")[0].value;
    var studentName = document.getElementsByName("studentName")[0].value;
    if (className && studentNumber && studentName) {
        return true;
    }
    else {
        alert("请补充个人信息！");
    }
}

function countScore() {
    var score = 0;

    score += getFIllInScore();
    score += getSimpleChoiceScore();
    score += getManyChoiceScore();
    score += getJudgeScore();
    score += getSimpleAnswerScore();

    return score;
}

function getFIllInScore() {
    var fillInScore = 0;
    var fillInOne = document.getElementById("fill_in_1_1");
    var answers = answer();

    if (fillInOne.value === answers.fillIn.answerFillInOne) {
        fillInScore += 5;
    }
    fillInScore += getFillInTwoScore();

    return fillInScore;
}

function getFillInTwoScore() {
    var fillInTwoOne = document.getElementById("fill_in_2_1");
    var fillInTwoTwo = document.getElementById("fill_in_2_2");
    var fillInTwoThree = document.getElementById("fill_in_2_3");
    var answers = answer();
    var fillInTwoAnswers = answers.fillIn.answerFillInTwo;
    var fillInTwoScore = 0;

    fillInTwoScore += getAnswerScore(fillInTwoAnswers, fillInTwoOne.value);
    fillInTwoAnswers = deleteArray(fillInTwoAnswers, fillInTwoOne.value);

    fillInTwoScore += getAnswerScore(fillInTwoAnswers, fillInTwoTwo.value);
    fillInTwoAnswers = deleteArray(fillInTwoAnswers, fillInTwoTwo.value);

    fillInTwoScore += getAnswerScore(fillInTwoAnswers, fillInTwoThree.value);

    return fillInTwoScore;
}
function getAnswerScore(answerArray, value) {
    var i = 0;
    var answerScore = 0;

    for (i = 0; i < answerArray.length; i++) {
        if (value === answerArray[i]) {
            answerScore += 5;
        }
    }

    return answerScore;
}

function deleteArray(Array, value) {
    var number = Array.indexOf(value);

    if (number > -1) {
        Array.splice(number, 1);
    }

    return Array;
}

function getSimpleChoiceScore() {
    var simpleChoiceScore = 0;
    var choiceOne = document.getElementsByName("choice_1");
    var choiceTwo = document.getElementsByName("choice_2");
    var answers = answer();

    if (choiceOne[answers.simpleChoice.answerChoiceOne].checked) {
        simpleChoiceScore += 10;
    }
    if (choiceTwo[answers.simpleChoice.answerChoiceTwo].checked) {
        simpleChoiceScore += 10;
    }

    return simpleChoiceScore;
}

function getManyChoiceScore() {
    var manyChoiceScore = 0;
    var manyChoiceOne = document.getElementsByName("manyChoice_1");
    var manyChoiceTwo = document.getElementsByName("manyChoice_2");
    var answers = answer();

    if (manyChoiceOne[answers.manyChoice.answerManyChoiceOne[0]].checked && manyChoiceOne[answers.manyChoice.answerManyChoiceOne[1]].checked && manyChoiceOne[answers.manyChoice.answerManyChoiceOne[2]].checked && !manyChoiceOne[answers.manyChoice.noanswerManyChoiceOne[0]].checked) {
        manyChoiceScore += 10;
    }
    if (manyChoiceTwo[answers.manyChoice.answerManyChoiceTwo[0]].checked && manyChoiceTwo[answers.manyChoice.answerManyChoiceTwo[1]].checked && manyChoiceTwo[answers.manyChoice.answerManyChoiceTwo[2]].checked && !manyChoiceTwo[answers.manyChoice.noanswerManyChoiceTwo[0]].checked) {
        manyChoiceScore += 10;
    }

    return manyChoiceScore;
}

function getJudgeScore() {
    var judgeScore = 0;
    var judgeOne = document.getElementsByName("judge_1");
    var judgeTwo = document.getElementsByName("judge_2");
    var answers = answer();

    if (judgeOne[answers.judge.answerJudgeOne].checked) {
        judgeScore += 10;
    }
    if (judgeTwo[answers.judge.answerJudgeTwo].checked) {
        judgeScore += 10;
    }

    return judgeScore;
}

function getSimpleAnswerScore() {
    var simpleAnswerScore = 0;
    var textOne = document.getElementsByName("text_1")[0].value;
    var answers = answer();
    var answerOne = new RegExp(answers.shortAnswer.answerShortAnswerOneone, "g");
    var answerTwo = new RegExp(answers.shortAnswer.answerShortAnswerOnetwo, "g");
    var answerThere = new RegExp(answers.shortAnswer.answerShortAnswerTwoone, "g");
    var answerFour = new RegExp(answers.shortAnswer.answerShortAnswerTwotwo, "g");

    if (answerOne.test(textOne)) {
        simpleAnswerScore += 5;
    }
    if (answerTwo.test(textOne)) {
        simpleAnswerScore += 5;
    }
    if (answerThere.test(textOne)) {
        simpleAnswerScore += 5;
    }
    if (answerFour.test(textOne)) {
        simpleAnswerScore += 5;
    }

    return simpleAnswerScore;
}