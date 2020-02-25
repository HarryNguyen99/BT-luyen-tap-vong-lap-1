let a = parseInt(prompt("nhập số đầu "));
let b = parseInt(prompt("nhập số cuối "));
let c = Math.floor(Math.random() * (b - a + 1)) + a;
alert(c);
for (let i = 1; i <= 3; i++) {
    let d = parseInt(prompt("nhập số đoán "));

    if (d === c) {
        alert("Chúc mừng");
        break;
    } else if (d > c) {
        alert("lớn hơn ");continue;
    }else {
        alert("nhỏ hơn");continue;
    }

}
