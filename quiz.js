var answer = 0;
var num1 = 0;
var num2 = 0;
var score1 = 0;
var score2 = 0;
var chance = 1;
var chanceQ = 0;
function onload() {
    chanceQ = chance + 1;
    document.getElementById("name1").innerHTML = localStorage.getItem("name");
    document.getElementById("coins").innerHTML = 0;

    document.getElementById("name2").innerHTML = localStorage.getItem("name2");
    document.getElementById("coins2").innerHTML = 0;

    document.getElementById("nosilionQ").innerHTML = "Chance of " + document.getElementById("name" + chanceQ).innerHTML;
}
function send() {
    var name_ = document.getElementById("num1").value;
    var tag_ = document.getElementById("num2").value;

    if (name_ == "" || tag_ == "") {
        if (tag_ == "") {
            document.getElementById("num2").innerHTML = "Please write your number 2";
            document.getElementById("num1").innerHTML = "";
            document.getElementById("tcv").style.visibility = "hidden";
        }
        if (name_ == "") {
            document.getElementById("num1").placeholder = "Please write your number 1";
            document.getElementById("num2").placeholder = "Number 1";
            document.getElementById("tcv").style.visibility = "hidden";
        }
    }else{
        answer = name_ * tag_;
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;
        document.getElementById("questin").innerHTML = num1 + " x " + num2;
        document.getElementById("tcv").style.visibility = "visible";
        document.getElementById("ttc").style.visibility = "hidden";
        document.getElementById("gentorium2").style.visibility = "hidden";
        if (chance == 1) {
            document.getElementById("nosilion").innerHTML = "Chance of " + document.getElementById("name1").innerHTML;
            document.getElementById("gentorium1").style.visibility = "visible";
            document.getElementById("gentorium2").style.visibility = "hidden";
        } else{
            document.getElementById("nosilion").innerHTML = "Chance of " + document.getElementById("name2").innerHTML;
            document.getElementById("gentorium1").style.visibility = "visible";
            document.getElementById("gentorium2").style.visibility = "hidden";
        }
    }
}
function submit() {
    var input = document.getElementById("answer").value;
    var coins_1 = document.getElementById("coins");
    var coins_2 = document.getElementById("coins2");
    if (input == answer) {
        if (chance == 1) {
            score1 = score1 + 1;
            coins_1.innerHTML = score1;
            document.getElementById("tcv").style.visibility = "hidden";
            document.getElementById("ttc").style.visibility = "visible";
            document.getElementById("gentorium1").style.visibility = "hidden";
            document.getElementById("gentorium2").style.visibility = "visible";
            chance = 2;
            chanceQ = chanceQ - 1;
            document.getElementById("nosilionQ").innerHTML = "Chance of " + document.getElementById("name" + chanceQ).innerHTML;
        } else{
        score2 = score2 + 1;
        coins_2.innerHTML = score2;
        document.getElementById("tcv").style.visibility = "hidden";
        document.getElementById("ttc").style.visibility = "visible";
        document.getElementById("gentorium1").style.visibility = "hidden";
        document.getElementById("gentorium2").style.visibility = "visible";
        chance = 1;
        chanceQ = chanceQ + 1;
        document.getElementById("nosilionQ").innerHTML = "Chance of " + document.getElementById("name" + chanceQ).innerHTML;
    }
}else{
    if (chance == 1) {
        score1 = score1 - 1;
        coins_1.innerHTML = score1;
        document.getElementById("tcv").style.visibility = "hidden";
        document.getElementById("ttc").style.visibility = "visible";
        document.getElementById("gentorium1").style.visibility = "hidden";
        document.getElementById("gentorium2").style.visibility = "visible";
        chance = 2;
        chanceQ = chanceQ - 1;
        document.getElementById("nosilionQ").innerHTML = "Chance of " + document.getElementById("name" + chanceQ).innerHTML;
    } else{
    score2 = score2 - 1;
    coins_2.innerHTML = score2;
    document.getElementById("tcv").style.visibility = "hidden";
    document.getElementById("ttc").style.visibility = "visible";
    document.getElementById("gentorium1").style.visibility = "hidden";
    document.getElementById("gentorium2").style.visibility = "visible";
    chance = 1;
    chanceQ = chanceQ + 1;
    document.getElementById("nosilionQ").innerHTML = "Chance of " + document.getElementById("name" + chanceQ).innerHTML;
}
}
}