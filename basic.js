/*Conditionals

let shouldRun = false;

if (shouldRun) {
    console.log('Running');
} else {
    console.log('Not running');
}
*/

/*  variables

const name = "Jean";
const age = 35;
const teatcher = false;

console.log(`oas ${name} asf ${age} asfasfg  age asgfag ${teatcher} teatcherasfg`);
*/

/* calculator

const Compare = (x, y) => {

    let msg;
    if(x > y){
        msg = `${x} is greater than ${y}`;
    }
    else if(x < y){
        msg = `${x} is less than ${y}`;
    }
    else{
        msg = `${x} is equal to ${y}`;
    }
    console.log(msg);
}

export default Compare;
*/

/*loops

import Compare from "./calculator.js";

const numberList = [[5,4], [3,5], [0,0], [157,158], [158.5,5]];

for(let i = 0; i < numberList.length; i++){
    if(numberList[i][0] != numberList[i][1]){
        Compare(numberList[i][0], numberList[i][1]);
    } else {
        Compare(numberList[i][0], numberList[i][1]);
    }
}

let i = 0;
while(i < numberList.length){
    if(numberList[i][0] != numberList[i][1]){
        Compare(numberList[i][0], numberList[i][1]);
    } else {
        Compare(numberList[i][0], numberList[i][1]);
    }
    i++;
}

numberList.map(function(args){
    return Compare(args[0], args[1]);
});

numberList.map((args) => {
    return Compare(args[0], args[1]);
});

numberList.map(([x, y]) => {
    return Compare(x, y);
});
*/


/* operadores

const soma = 2 +4;

console.log(soma);
*/


const person = {
    name: "josf climber",
    age: 35,
    teacher: true,
    sayHello: function(){
    //ou sayHello(){console.log(`Hello my name is ${this.name} and i'm ${this.age} yo`)}
        console.log(`Hello my name is ${this.name} and i'm ${this.age} yo`)
    },
}

//person.sayHello();

Object.keys(person).map(key => console.log(`${key}: ${person[key]}`));