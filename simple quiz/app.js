function mark() {
    let score = 0;
    var candName = localStorage.getItem('candName');
    let a1 = document.getElementById('a1').checked;
    let a2 = document.getElementById('a2').checked;
    let a3 = document.getElementById('a3').checked;
    let a4 = document.getElementById('a4').checked;
    let a5 = document.getElementById('a5').checked;
    let a6 = document.getElementById('a6').checked;
    let a7 = document.getElementById('a7').checked;

    if (a1) {
    score++;
    }

    if (a2) {
    score++;
    }

    if (a3) {
    score++;
    }

    if (a4) {
    score++;
    }

    if (a5) {
    score++;
    }

    if (a6) {
    score++;
    }

    if (a7) {
    score++;
    }

    localStorage.setItem('localScore', score);

    if (score == 0) {
    alert('Too bad ' + candName + '. You did not answer a single question correctly. You scored ' + score + '/7.' );
    location.reload();  
    }

    if (score >= 1 && score < 4) {
    alert('Too bad ' + candName + '. You scored ' + score + '/7.' );
    location.reload();  
    }

    if (score >= 4 && score < 7) {
    alert('Not bad ' + candName + '. You scored ' + score + '/7.' );
    location.reload();  
    }

    if (score == 7) {
    alert('Great! Excellent performance ' + candName + '. You scored ' + score + '/7.' );
    location.reload();  
    }  
}