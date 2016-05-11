/**
 * Created by yangyue on 16-5-9.
 */
var btnSubmit=document.getElementById("btnSubmit");
btnSubmit.onclick=function(){
    var scores=document.getElementById("score");
    var allScore=0;
    if(checkInformation()){
        allScore=countScore();
    }

    scores.innerHTML=allScore;
    alert("你的成绩是：\n"+allScore);
};

function checkInformation() {
    var className=document.getElementsByName("className")[0].value;
    var studentNumber=document.getElementsByName("studentNumber")[0].value;
    var studentName=document.getElementsByName("studentName")[0].value;
    if(className && studentNumber && studentName){
        return true;
    }
    else{
        alert("请补充个人信息！");
    }
}

function countScore(){
    var score=0;

    score += getFIllInScore();
    score += getSimpleChoiceScore();
    score += getManyChoiceScore();
    score += getJudgeScore();
    score += getSimpleAnswerScore();

    return score;
}

function getFIllInScore(){
    var fillInScore=0;
    var fillInOne=document.getElementById("fill_in_1_1");
    var fillInTwoOne=document.getElementById("fill_in_2_1");
    var fillInTwoTwo=document.getElementById("fill_in_2_2");
    var fillInTwoThree=document.getElementById("fill_in_2_3");
    var fillInTwoAnswers=["继承性","封装性","多态性"];

    if(fillInOne.value=="统一建模语言"){
        fillInScore+=5;
    }

    fillInTwoAnswers.forEach(function(fillInTwoAnswer) {
        if(fillInTwoOne.value==fillInTwoAnswer){
            fillInScore+=5;
        }
    });
    fillInTwoAnswers=del(fillInTwoAnswers,fillInTwoOne.value);

    fillInTwoAnswers.forEach(function(fillInTwoAnswer) {
        if(fillInTwoTwo.value==fillInTwoAnswer){
            fillInScore+=5;
        }
    });
    fillInTwoAnswers=del(fillInTwoAnswers,fillInTwoTwo.value);

    fillInTwoAnswers.forEach(function(fillInTwoAnswer) {
        if(fillInTwoThree.value==fillInTwoAnswer){
            fillInScore+=5;
        }
    });

    return fillInScore;
}

function del(Array,value) {
    var number=Array.indexOf(value);

    if(number>-1)
        Array.splice(number,1);

    return Array;
}

function getSimpleChoiceScore(){
    var simpleChoiceScore=0;
    var choiceOne=document.getElementsByName("choice_1");
    var choiceTwo=document.getElementsByName("choice_2");
    var answerOne=1;
    var answerTwo=0;

    if(choiceOne[answerOne].checked){
        simpleChoiceScore += 10;
    }
    if(choiceTwo[answerTwo].checked){
        simpleChoiceScore += 10;
    }

    return simpleChoiceScore;
}

function getManyChoiceScore() {
    var manyChoiceScore=0;
    var manyChoiceOne=document.getElementsByName("manyChoice_1");
    var manyChoiceTwo=document.getElementsByName("manyChoice_2");

    if(manyChoiceOne[0].checked && manyChoiceOne[1].checked && manyChoiceOne[3].checked){
        manyChoiceScore += 10;
    }
    if(manyChoiceTwo[0].checked && manyChoiceTwo[1].checked && manyChoiceTwo[2].checked){
        manyChoiceScore += 10;
    }

    return manyChoiceScore;
}

function getJudgeScore(){
    var judgeScore=0;
    var judgeOne=document.getElementsByName("judge_1");
    var judgeTwo=document.getElementsByName("judge_2");

    if(judgeOne[0].checked){
        judgeScore += 10;
    }
    if(judgeTwo[1].checked){
        judgeScore += 10;
    }

    return judgeScore;
}

function getSimpleAnswerScore() {
    var simpleAnswerScore=0;
    var textOne=document.getElementsByName("text_1")[0].value;
    var answerOne=new RegExp("\u7b80\u5316.*\u62bd\u8c61","g");
    var answerTwo=new RegExp("\u8868\u8fbe\u5f62\u5f0f","g");
    var answerThere=new RegExp("\u7269\u7406\u5b9e\u4f53","g");
    var answerFour=new RegExp("\u67d0\u79cd\u56fe\u5f62","g");

    if(answerOne.test(textOne)){
        simpleAnswerScore += 5;
    }
    if(answerTwo.test(textOne)){
        simpleAnswerScore += 5;
    }
    if(answerThere.test(textOne)){
        simpleAnswerScore += 5;
    }
    if(answerFour.test(textOne)){
        simpleAnswerScore += 5;
    }

//模型　简化啦啦啦抽象轻轻巧巧表达形式，某种图形，目力所及、物理实体。

    return simpleAnswerScore;
}