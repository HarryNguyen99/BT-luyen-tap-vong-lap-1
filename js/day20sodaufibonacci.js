let a = 0;
let b = 1;
let c = null;
document.write(a + '<br>');
document.write(b + '<br>');
for (i = 2; i < 21; i++) {
    c = a + b;
    document.write(c + '<br>');
    a = b;
    b = c;
}