let i;
let text = "";
for (i = 1; i < 101; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        text +=  " FizzBuzz <br>";
        continue;
    } else if (i % 3 === 0) {
        text +=  " Fizz <br>";
        continue;
    } else if (i % 5 === 0) {
        text +=  " Buzz <br>";
        continue;
    }
    text += i + "<br>";
}
document.getElementById("result").innerHTML = text;
