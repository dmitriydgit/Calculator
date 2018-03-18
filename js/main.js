"use strict";


document.addEventListener("DOMContentLoaded", function() {
class Calculator {
    constructor(obj){
        this.DOMs = obj;
				this.expression = "";
				this.memory = "";
				this.equals = "0";
				this.numberBtns = [this.DOMs.zero, this.DOMs.one, this.DOMs.two, this.DOMs.three, this.DOMs.four,											this.DOMs.fife, this.DOMs.six, this.DOMs.seven,this.DOMs.eight,this.DOMs.nine]
    }



    display(event){
			if(event.target.type !== "button"  ) {
				return;
			}


			
			// if(event.target == this.DOMs.display) {
			// 		return ;
			// }

			// if(event.target.value >= 0 && event.target.value <= 9 ) {
			// 	this.DOMs.display.value = "";
			// 	//this.expression = "";
			// }

			if(event.target === this.DOMs.backspace) {
				this.expression = this.DOMs.display.value;
				this.expression = this.expression.substring(0, this.expression.length - 1);
				this.DOMs.display.value = this.expression;
				return false;
			}
			
			// if(event.target === this.DOMs.persent) {
			// 	let temp = this.expression.replace("%" , "/")
			// 	//this.expression = this.expression.substring(0, this.expression.length - 1);
			// 	this.DOMs.display.value = this.expression;
			// 	return false;
			// }


			if (event.target == this.DOMs.memory){
				if(this.memory == ""){
					this.DOMs.display.value = "";
					return;
				}
				var temp = eval(this.memory);
				this.DOMs.display.value = temp;
				this.expression += this.memory;
					return ;				
			}
			if (event.target == this.DOMs.mplus){
			  if(this.expression == "") {
					this.memory += "";
					return ;
				}
				this.memory += eval(this.expression); 
				this.expression = "";
				this.DOMs.display.value = "";
					return ;				
			}
			if (event.target == this.DOMs.mminus){
			  if(this.expression == "") {
					this.memory += 0;
					return ;
				}
				this.memory -= eval(this.expression); 
				this.expression = "";
					return ;				
			}
			
			if (event.target.value == "AC"){
				this.memory = "";
				this.DOMs.display.value = "";
				this.expression = "";
				return false;				
			}
			if(event.target.value === "CE" ){
					this.DOMs.display.value = "";
					this.expression = "";
					return false;
			}
			if(event.target.value === "="){
				if(this.expression == ""){
					this.DOMs.display.value = "";
					return;
				}
				var temp;
				if(this.expression.includes("%")){
					this.expression = this.expression.replace("%" , "/") + "*100";
				}
				temp = eval(this.expression); 
				if(temp == "Infinity"){
					return;
				}
				this.DOMs.display.value = temp; 
				this.expression = temp.toString();
				this.equals = "1";
				return;
			}
			if (this.equals == "0"){
				this.DOMs.display.value += event.target.value;
				this.expression +=  event.target.value; 
			}
			if (this.equals == "1"){
				if(this.numberBtns.includes(event.target)){
					this.DOMs.display.value = event.target.value;
					this.expression = event.target.value;
					this.equals = "0"
					return;	 	
				}	
				this.DOMs.display.value += event.target.value;
				this.expression += event.target.value; 
				this.equals = "0"
			}
			
		};
		displayunicode (e){
			var unicode = e.keyCode? e.keyCode : e.charCode
			console.log(unicode);
			}
		
    
    initListeners(){
			this.DOMs.display.focus();
			this.DOMs.calc.addEventListener("keydown", this.displayunicode.bind(this));
			this.DOMs.calc.addEventListener("click", this.display.bind(this));

			// document.addEventListener("keydown", function(event) {
			// 	console.log(event.which);
			// })

			

			// document.addEventListener('keypress', function(eventObject) {
			// 	if (!
			// 				(
			// 					((eventObject.which >= 48) && 
			// 						(eventObject.which <= 57))
			// 					|| (eventObject.which == 13) 
			// 					|| (eventObject.which == 32)
			// 					|| (eventObject.which == 8)
			// 					|| (eventObject.which == 45) 
			// 					|| (eventObject.which == 40) 
			// 					|| (eventObject.which == 41) 
			// 					|| (eventObject.which == 43)
			// 					|| (eventObject.which == 106)
			// 					|| (eventObject.which == 107)
			// 					|| (eventObject.which == 187)
			// 					|| (eventObject.which == 109)
			// 					|| (eventObject.which == 189)
			// 					|| (eventObject.which == 189)
				
			// 				)) {
			// 		//console.log()
			// 		eventObject.preventDefault();
			// 	}
			// });

			
			
    }
    
    
}
let calculator = new Calculator({
    calc : document.querySelector("#calculator-body"),
    display : document.querySelector("#calc-display"),
    leftBracket : document.querySelector("#left-bracket"),
    rightBracket : document.querySelector("#right-bracket"),
    persent : document.querySelector("#persent"),
    CE : document.querySelector("#CE"),
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
		plus : document.querySelector("#plus"),
		memory : document.querySelector("#memory"),
		AC : document.querySelector("#ac"),
		mplus : document.querySelector("#mplus"),
		mminus : document.querySelector("#mminus"),
    backspace : document.querySelector("#backspace"),
    
})    

calculator.initListeners();


// console.log(calculator);
// console.log(calculator.result);
/*
let equally = document.querySelector("#equally");
console.log(equally)*/

}); // END DocReady
