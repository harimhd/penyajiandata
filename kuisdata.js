var numQues = 4;
var numChoi = 3;
var answers = new Array(4);
answers[0] = "b";
answers[1] = "a";
answers[2] = "c";
answers[3] = "b";
var currSelection;

function getScore(form) {
    var score = 0;
    var currElt;

    for (i = 0; i < numQues; i++) {
        currElt = i * numChoi;
        answered = false;

        for (j = 0; j < numChoi; j++) {
            currSelection = form.elements[currElt + j];
            if (currSelection.checked) {
                answered = true;
                if (currSelection.value == answers[i]) {
                    document.getElementById(`ket-no${i}`).innerHTML =
                        "<span class='ket-benar'> Benar </span>";
                    document.getElementById(`ket-no${i}`).style = "display:none";
                    score++;
                } else {
                    document.getElementById(`ket-no${i}`).innerHTML =
                        "<span class='ket-salah'> Salah </span>";
                    document.getElementById(`ket-no${i}`).style = "display:none";
                }
            }
        }
        if (answered === false) {
            document.getElementById("ket").innerHTML = "Kamu belum menjawab soal!";
            document.getElementById("ket").style.color="red";

            return false;
        } else {
            document.getElementById("ket").innerHTML = "";
        }
    }


    var cek;

    for (k = 0; k < numQues * numChoi; k++) {
        if (form.elements[k].checked) {
            cek++;
        }
    }

    if (cek < numQues) {

    }
    else {
        var scoreper = Math.round(score / numQues * 100);

        var mark2 = numQues - score;
        document.getElementById("ket2").innerHTML = `<div class="center">
            <span class='benar'>Benar = ${score}</span><br>
            <span class='salah'>Salah = ${mark2}</span><br>
            <span class='nilai'>Skor kamu adalah : ${scoreper}</span></div>`;
        document.getElementById("ket2").style.color="blue"
        document.getElementById("ket2").style.fontFamily="Apple Chancery, cursive"
        for (l = 0; l < numQues; l++) {
            document.getElementById(`ket-no${l}`).style = "display:inline";
        }
    }

}

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById("ket").innerHTML = "";
    document.getElementById("ket2").innerHTML = "";
    for (i = 0; i < answers.length; i++) {
        document.getElementById(`ket-no${i}`).innerHTML = "";
    }
})
