// 1- Variáveis

// Var
var x = 10;
var y = 15;

if(y > 10){
    var x = 5;
    console.log(x);
}

console.log(x);

//Let
let a = 10;
let b = 15;

if(b > 10){
    let a = 5;
    console.log(a);
}
console.log(a)

let i = 100;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i)

// Const
function logName() {
    const name = "Tiago";
    console.log(name);
}

const name = "José";

logName();

console.log(name);

// name = "Maria"; //TypeError: Assignment to constant variable.


//2 - Arrow Functions
const sum = function sum(a, b) {
    return a + b;
}

// const arrowSum = (a,b) => {
//     return a + b
// };
const arrowSum = (a,b) => a + b;
//Caso eu tenha apenas uma linha de função, posso tirar o return e o corpo da função {}

console.log(sum(5,5));
console.log(arrowSum(10,16));

//Corpo completo
const greeting = (name) => {
    if(name) {
        return `Hello ${name}`;
    } else {
        return "Bye!";
    }
}

console.log(greeting("Tiago"));
console.log(greeting());

//Caso não precise de parâmetro
const greeting2 = () => console.log("Hello World!");
greeting2();

//This no arrow Function
const user = {
    name: "Tiago",
    // sayUserName() {
    //     var self = this;
    //     setTimeout(function() {
    //         console.log(self);
    //         console.log("Usuário: " + self.name);
    //     },500);
    // },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log("Usuário: " + this.name);
        }, 700)
    }
}

// user.sayUserName();
user.sayUserNameArrow();