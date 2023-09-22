let comscore=0;
let userscore=0;
let isComputerTrun=true;
let shotleft=15;

function onComputerShoot() {

    if(!isComputerTrun)return;

    let shootType = Math.random() < 0.5 ? 2 : 3;

    if(shootType === 2) {
        if(Math.random()<0.5) {
            showText("태웅이가 2점슛 성공");
            updateComputerScore(2);
        }
        else {
            showText("태웅이가 2점슛 실패");
        }
    }
    else {
        if(Math.random()<0.33) {
            showText("태웅이가 3점슛 성공");
            updateComputerScore(3);
        }
        else {
            showText("태웅이가 3점슛 실패");
        }
    }
    isComputerTrun=false;
    disableComputerButtons(true);
    disableUserButtons(false);
}

 function onUserShoot(shootType) {
    if(isComputerTrun) return;
    const testElem = document.getElementById("text");
    if(shootType === 2) {
        if(Math.random()<0.5) {
            showText("백호가 2점슛 성공");
            updateUserScore(2);
        }
        else {
            showText("백호가 2점슛 실패");
        }
    }
    else {
        if(Math.random()<0.33) {
            showText("백호가 3점슛 성공");
            updateComputerScore(3);
        }
        else {
            showText("백호가 3점슛 실패");
        }
    }

    isComputerTrun = true;
    disableComputerButtons(false);
    disableUserButtons(true);
    shotleft--;
    const shotlLeftElem = document.getElementById("shots-left");
    shotlLeftElem.innerHTML = shotleft;

    if (shotleft === 0) {
        console.log("작동");
        if(userscore > comscore) textElen.innerHTML = "승리";
        else if(userscore < comscore) textElen.innerHTML = "패배";
        else testElem.innerHTML = "무승부";
        showText();
        disableComputerButtons(true);
        disableUserButtons(true);
    }

}

function showText(str) {
    const textElen = document.getElementById("text");
    textElen.innerHTML =str;
}

function updateComputerScore(score) {
    comscore += score;
    const comScoreElrm = document.getElementById("computer-score");
    comScoreElrm.innerHTML = comscore;
}

function updateUserScore(score) {
    userscore += score;
    const usercoreElrm = document.getElementById("user-score");
    usercoreElrm.innerHTML = userscore;
}

function disableComputerButtons(flag) {
    const computerButton=document.getElementsByClassName("btn-computer");
    for (let index = 0; index < computerButton.length; index++) {
        computerButton[index].disables = flag;
        
    }
}

function disableUserButtons(flag) {
    const userrButton=document.getElementsByClassName("btn-user");
    for (let index = 0; index < userrButton.length; index++) {
        userrButton[index].disables = flag;
        
    }
}