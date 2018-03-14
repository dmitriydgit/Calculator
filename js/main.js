"use strict";

class Calculator {
    constructor(obj){
        this.DOMs = obj;
        this.result = "";
        this.temp = 0;
    }

    display(event){
        let temp = 0;
        if(event.target === this.DOMs.display) {
            return false;
        }
        if(event.target.value === "AC" ){
            this.DOMs.display.value = "";
            this.result = "";
            return false;
        }
        if(event.target.value === "="){
            this.temp = eval(this.result);
            if(this.temp == "undefined"){
                return false;
            }
            console.log(this.temp);
            this.DOMs.display.value = this.temp;
            this.result = this.temp;
            event.preventDefault();
            return false;
        }
        


        //this.DOMs.display.value = "";
        this.result +=  event.target.value;
        this.DOMs.display.value += event.target.value;


        
        //console.log(this.result);


        //event.target.value == "=" || 
    }
    
    initListeners(){
        this.DOMs.calc.addEventListener("click", this.display.bind(this));

    }
    
    /*
    get (){
        console.log(this.DOMs.equally);
    }
    */


}
let calculator = new Calculator({
    calc : document.querySelector("#calculator-body"),
    display : document.querySelector("#calc-display"),
    leftBracket : document.querySelector("#left-bracket"),
    rightBracket : document.querySelector("#right-bracket"),
    persent : document.querySelector("#persent"),
    AC : document.querySelector("#AC"),
    seven : document.querySelector("#seven"),
    eight : document.querySelector("#eight"),
    nine : document.querySelector("#nine"),
    divide : document.querySelector("#divide"),
    four : document.querySelector("#four"),
    fife : document.querySelector("#fife"),
    six : document.querySelector("#six"),
    multiply : document.querySelector("#multiply"),
    one : document.querySelector("#one"),
    two : document.querySelector("#two"),
    three : document.querySelector("#three"),
    minus : document.querySelector("#minus"),
    zero : document.querySelector("#zero"),
    dot : document.querySelector("#dot"),
    equally : document.querySelector("#equally"),
    plus : document.querySelector("#plus")
    
    
})    
console.log(calculator);
calculator.initListeners();


console.log(calculator);
console.log(calculator.result);
/*
let equally = document.querySelector("#equally");
console.log(equally)*/