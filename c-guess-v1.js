
// ג1
let playAgain = true;

while (playAgain) {

    const secret = Math.floor(Math.random() * 20) + 1;

    let guess = 0;
    let attempts = 0;
    let cancelled = false;

    while (guess !== secret) {

        let answer = prompt("נחשי את המספר הסודי בין 1 ל-20");

        if (answer === null) {
            cancelled = true;
            break;
        }

        guess = Number(answer);
        attempts++;

        if (guess > secret) {
            alert("גבוה מדי!");
        }
        else if (guess < secret) {
            alert("נמוך מדי!");
        }
    }

    if (cancelled) {
        break;
    }

    if (attempts <= 3) {
        alert("מדהים! ניחשת אחרי " + attempts + " ניסיונות");
    }
    else if (attempts <= 6) {
        alert("יפה מאוד! ניחשת אחרי " + attempts + " ניסיונות");
    }
    else {
        alert("אפשר לשפר! ניחשת אחרי " + attempts + " ניסיונות");
    }

    playAgain = confirm("לשחק שוב?");
}
