// ג1
const secret = Math.floor(Math.random() * 20) + 1;

let guess = 0;
let attempts = 0;

while (guess !== secret) {
    guess = Number(prompt("נחשי את המספר הסודי בין 1 ל-20"));
    attempts++;


    if (guess > secret) {
        alert("גבוה מדי!");
    }
    else if (guess < secret) {
        alert("נמוך מדי!");
    }
}
alert("מדהים! ניחשת אחרי " + attempts + " ניסיונות");

