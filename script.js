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
