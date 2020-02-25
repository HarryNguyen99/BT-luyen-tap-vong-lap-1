let temperature = parseInt(prompt("Nhập nhiệt độ"));
for (; temperature == temperature; temperature++ ) {
    if (temperature < 20 ){
        temperature = parseInt(prompt("Nhiệt độ quá thấp nhập lại"));
    }else if (temperature > 100 ) {
        temperature = parseInt(prompt("Nhiệt độ quá cao nhập lại"));
    } else
    alert("Nhiệt độ là: " + temperature);
}
