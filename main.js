var name = "";
var name2 = "";
var tag = "";
var tag2 = "";
function onload() {
    localStorage.clear();
}

function login() {
    var name_ = document.getElementById("log-name").value;
    var tag_ = document.getElementById("log-tag").value;

    if (name_ == "" || tag_ == "") {
        if (tag_ == "") {
            document.getElementById("p-danger-log-tag").innerHTML = "Please write your tag";
            document.getElementById("p-danger-log-name").innerHTML = "";
        }
        if (name_ == "") {
            document.getElementById("p-danger-log-name").innerHTML = "Please write your name";
            document.getElementById("p-danger-log-tag").innerHTML = "";
        }
    }else{
        document.getElementById("loading-log").style.width = "150px";
        document.getElementById("p-danger-log-tag").innerHTML = "";
        document.getElementById("p-danger-log-name").innerHTML = "";
        document.getElementById("btn-log").innerHTML = "";
        document.getElementById("btn-log").style.width = "0px";
        document.getElementById("btn-log").remove();
        setTimeout(function(){
            document.getElementById("loading-log").style.width = "0px";
            name = document.getElementById("log-name").value;
            tag = document.getElementById("log-tag").value;
            localStorage.setItem("name", name);
            localStorage.setItem("tag", tag);
            document.getElementById("name").innerHTML = name;
            document.getElementById("tag").innerHTML = tag;
            document.getElementById("log").remove();
            verify();
        }, 2000);
    }
}
function login2() {
    var name_ = document.getElementById("log-name2").value;
    var tag_ = document.getElementById("log-tag2").value;

    if (name_ == "" || tag_ == "") {
        if (tag_ == "") {
            document.getElementById("p-danger-log-tag2").innerHTML = "Please write your tag";
            document.getElementById("p-danger-log-name2").innerHTML = "";
        }
        if (name_ == "") {
            document.getElementById("p-danger-log-name2").innerHTML = "Please write your name";
            document.getElementById("p-danger-log-tag2").innerHTML = "";
        }
    }else{
        document.getElementById("loading-log2").style.width = "150px";
        document.getElementById("p-danger-log-tag2").innerHTML = "";
        document.getElementById("p-danger-log-name2").innerHTML = "";
        document.getElementById("btn-log2").innerHTML = "";
        document.getElementById("btn-log2").style.width = "0px";
        document.getElementById("btn-log2").remove();
        setTimeout(function(){
            document.getElementById("loading-log2").style.width = "0px";
            var name2 = document.getElementById("log-name2").value;
            var tag2 = document.getElementById("log-tag2").value;
            localStorage.setItem("name2", name2);
            localStorage.setItem("tag2", tag2);
            document.getElementById("name").innerHTML = name2;
            document.getElementById("tag").innerHTML = tag2;
            document.getElementById("log2").remove();
            verify();
        }, 2000);
    }
}
function verify() {
    var namos = localStorage.getItem("name");
    var namos2 = localStorage.getItem("name2");
    if(namos !== null){
        if (namos2 !== null) {
            window.location.href = "Quize.html";
        }
    }
}