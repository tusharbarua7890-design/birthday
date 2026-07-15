function nextPage() {
    window.location.href = "surprise.html";
}

// Floating Hearts
const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.color = "rgba(255,255,255,0.8)";
    heart.style.animation = `float ${4 + Math.random() * 4}s linear forwards`;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);

// Floating animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes float{
    0%{
        transform:translateY(0) rotate(0deg);
        opacity:1;
    }
    100%{
        transform:translateY(-120vh) rotate(360deg);
        opacity:0;
    }
}
`;

document.head.appendChild(style);
