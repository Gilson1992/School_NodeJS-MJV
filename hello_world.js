console.log("Meu primeiro arquivo em NodeJS");

function soma(a, b) {
    this.a = a;
    this.b = b;
    return a + b;
};

console.log(soma(2,2));