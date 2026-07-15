function nextPage(){
    window.location.href="surprise.html";
}


// ❤️ Floating Hearts

const hearts = document.getElementById("hearts");

if(hearts){

function createHeart(){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-20px";
heart.style.fontSize=(15+Math.random()*25)+"px";
heart.style.animation="heartMove 5s linear";

hearts.appendChild(heart);


setTimeout(()=>{
heart.remove();
},5000);

}

setInterval(createHeart,400);

}



// 🎮 Quiz Game

const questionBox=document.getElementById("question");
const answersBox=document.getElementById("answers");
const result=document.getElementById("result");
const scoreText=document.getElementById("score");


if(questionBox){


let current=0;
let score=0;


const questions=[

{
q:"My favourite colour? 🎨",
answers:["Black 🖤","Pink 💗","Blue 💙"],
correct:0
},

{
q:"What makes me happiest? 😊",
answers:["Your smile ❤️","Money 💰","Food 🍕"],
correct:0
},

{
q:"My favourite type of moment? ✨",
answers:["Beautiful memories ❤️","Sleeping 😴","Nothing"],
correct:0
},

{
q:"Who is my special person? 👑",
answers:["Nobody","Mim ❤️","Random"],
correct:1
},

{
q:"What do I want most for you? 💖",
answers:["Happiness ❤️","Sadness","Nothing"],
correct:0
}

];



function loadQuestion(){

let q=questions[current];

questionBox.innerHTML=q.q;

answersBox.innerHTML="";


q.answers.forEach((answer,index)=>{

let btn=document.createElement("button");

btn.innerHTML=answer;


btn.onclick=function(){

if(index===q.correct){

score++;

}


current++;


if(current<questions.length){

loadQuestion();

}

else{

questionBox.innerHTML="🎉 Quiz Finished ❤️";

answersBox.innerHTML="";

result.innerHTML="Your Score: "+score+"/"+questions.length+" 💖";


if(score===questions.length){

scoreText.innerHTML="🥰 You know me perfectly ❤️";

}

else{

scoreText.innerHTML="❤️ Thank you for trying";

}

}

};


answersBox.appendChild(btn);


});


}


loadQuestion();

}


// 🎆 Fireworks

const canvas=document.getElementById("fireworks");


if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;


let particles=[];


function firework(){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height/2;


for(let i=0;i<40;i++){

particles.push({

x:x,
y:y,
dx:(Math.random()-0.5)*5,
dy:(Math.random()-0.5)*5,
life:70

});

}

}


function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);


particles.forEach((p,i)=>{


ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle="white";

ctx.fill();


p.x+=p.dx;
p.y+=p.dy;

p.life--;


if(p.life<=0){

particles.splice(i,1);

}


});


requestAnimationFrame(animate);

}


setInterval(firework,1200);

animate();

}
function openGift(){

document.getElementById("giftMessage").innerHTML =
"✨ Surprise Opened! 🎁<br><br>" +
"Dear Mim ❤️<br><br>" +
"You are one of the most special people in my life. " +
"I hope your every day is filled with happiness, smiles and beautiful moments.<br><br>" +
"Always keep shining like the queen you are 👑❤️";

}
