function checkFibonacci(num) {
    let a = 0;
    let b = 1;
    let c = null;
    for (let i = 2; ; i++) {
        c = a + b;
        a = b;
        b = c;
        if (c % num === 0) {
            document.write("số đầu tiên fibonacci chia hết cho 5 là: " + c);
            return c;
        }

    }

}

checkFibonacci(5);
