

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
	}
function getnewQ(){
	question_number.innerHTML="Question"+(questioncounter+1)+ "of" +quiz.length;
	const questionindex=availablequestions[Math.floor(Math.random()*availablequestions.length)]
	currentquestions=questionindex;
	question_text.innerHTML=currentquestions.q;
	const index1=availablequestions.indexof(questionindex);
	availablequestions.splice(index1,1);
	const optionlen=currentquestions.option.length
	for(let i=0;i<optionlen;i++){
		availableoption.push(i)
	}
	for(let i=0;i<optionlen;i++){
		const option=document.createElement("div");
		option.innerHTML=currentquestions.options[i];
		option.id=i;
		option.className="option";
		option-container.appendChild(option)
	}
	questioncounter++


	


}
function next(){
	if (questioncounter===quiz.length){
		console.log("Quiz Over")
	}
	else{
		getnewQ();
	}
}



window.onload=function(){
	setavailableQ();
	getnewQ()


}