

const question_number=document.querySelecter(".question_number");
const question_text=document.querySelecter(".question_text");
const question_container=document.querySelecter(".option-container");

let questioncounter=0;
let currentquestions;
let availablequestions=[];
let availableoption=[];

function setavailablequestions(){
	const totalQ=quiz.length;
	for(let i=0;i<totalQ;i++){
		availablequestions.push(quiz[i])
	}
	}
function getnewQ(){
	question_number.innerHTML="Question"+(questioncounter+1)+ "of" +quiz.length;
	const questionindex=availablequestions[Math.floor(Math.random()*availablequestions.length)];
	currentquestions=questionindex;
	question_text.innerHTML=currentquestions.q;
	const index1=availablequestions.indexof(questionindex);
	availablequestions.splice(index1,1);
	const optionlen=currentquestions.option.length
	for(let i=0;i<optionlen;i++){
		availableoption.push(i)
	}
	let animationDelay=0.2;
	for(let i=0;i<optionlen;i++){
		const optionIndex=availableoptions[Math.floor(Math.random()*availablequestions.length)];
		const index2=availableoptions.indexof(optionIndex);
		availablequestions.splice(index2,1);
		console.log(optionIndex)
		const option=document.createElement("div");
		option.innerHTML=currentquestions.options[optionIndex];
		option.id=optionIndex;
		option.style.animationDelay=animationDelay+'s';
		animationDelay=animationDelay+0.2;
		option.className="option";
		option-container.appendChild(option)
		option.setAttribute("onclick","getResult(this)");
	}
	questioncounter++


	


}
function getelement(element){
	const id =element.id;
	if(id===currentquestions.answer){
		console.log("Anser is correct");
	}
	else {
		console.log("Anser is worng");
	}
	unclickbleOptions();
}
function unclickbleOptions(){
	const optionlen=option-container.chlidern.length;
	for(let i=0;i<optionlen;i++){
		option-container.chlidern[i].classList.add("already-answered");
	}
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