

const question_number=document.querySelecter(",question_number");
const question_text=document.querySelecter(",question_text");
const question_container=document.querySelecter(",option-container");

let questioncounter=0;
let currentquestions;
let availablequestions=[]

function setavailableQ(){
	const totalQ=quiz.length;
	for(let i=0;i<totalQ;i++){
		availablequestions.push(quiz[i])
	}
function getnewQ(){
	question_number.innerHTML="Question"+(questioncounter+1)+ "of" +quiz.length;



}


}
window.onload=function(){
	setavailableQ();
	getnewQ()


}