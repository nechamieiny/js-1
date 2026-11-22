// ב
let userName = "רחל"; // הבעיה: השתמשנו ב-const למרות שרצינו לשנות את הערך
userName = "שרה";

let score = 10;
score = score + 5; // הבעיה: חיברנו מחרוזת במקום מספר

console.log("הציון הוא: " + score);

if (score === 100) { // הבעיה: השתמשנו בהשמה במקום בהשוואה
    console.log("מושלם!");
}

for (let i = 0; i < 3; i++) { // הבעיה: הייתה חסרה סוגריים עגולים )
    console.log(i);
}

console.log(userName); // הבעיה: הייתה טעות בשם המשתנה usrName