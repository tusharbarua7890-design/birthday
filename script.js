function nextPage() {
    window.location.href = "surprise.html";
}


// Floating Hearts ❤️

const hearts = document.getElementById("hearts");

if(hearts){

    function createHeart(){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-20px";
        heart.style.fontSize = (15 + Math.random()*25) + "px";

        heart.style.animation =
        `heartMove ${4 + Math.random()*4}s linear`;

        hearts.appendChild(heart);


        setTimeout(()=>{
            heart.remove();
        },8000);

    }

    setInterval(createHeart,300);
}



// Typewriter Effect ✨

const message = document.querySelector(".message");

if(message){

    const text = message.innerHTML;

    message.innerHTML="";

    let index=0;


    function type(){

        if(index < text.length){

            message.innerHTML += text.charAt(index);

            index++;

            setTimeout(type,35);

        }

    }

    type();

}



// Heart Animation

const style=document.createElement("style");

style.innerHTML=`

@keyframes heartMove{

0%{
transform:translateY(0) scale(1);
opacity:1;
}

100%{
transform:translateY(-110vh) scale(1.5);
opacity:0;
}

}

`;

document.head.appendChild(style);
// Fireworks 🎆

const canvas = document.getElementById("fireworks");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];


function createFirework(){

    let x = Math.random() * canvas.width;
    let y = Math.random() * (canvas.height / 2);

    for(let i = 0; i < 40; i++){

        particles.push({
            x:x,
            y:y,
            dx:(Math.random()-0.5)*5,
            dy:(Math.random()-0.5)*5,
            life:80
        });

    }
}


function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    particles.forEach((p,index)=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fillStyle="white";

        ctx.fill();


        p.x += p.dx;
        p.y += p.dy;

        p.life--;


        if(p.life <= 0){
            particles.splice(index,1);
        }

    });


    requestAnimationFrame(animate);

}


setInterval(createFirework,1200);

animate();

}
