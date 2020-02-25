function checkFibonacci(num) {
    let a = 0;
    let b = 1;
    let c = null;
    let sum = null;
    for (let i = 0; i < num ; i++) {
        c = a + b;
        a = b;
        b = c;
        sum += c;
    }
    alert(sum);
}

checkFibonacci(20);