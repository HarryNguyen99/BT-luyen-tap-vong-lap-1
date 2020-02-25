let i;
let text = "";
for (i = 1; i < 100; i++) {
    text += "Số là " + i + "<br>";
    if (i == 99) {
        document.getElementById("finish").innerHTML = "Hoàn Thành";
    }
}
document.getElementById("result").innerHTML = text;
