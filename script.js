function nextPage() {
    window.location.href = "surprise.html";
}


// ❤️ Floating Hearts

const hearts = document.getElementById("hearts");

if (hearts) {

    function createHeart() {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-20px";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animation = "heartMove 5s linear";

        hearts.appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, 5000);

    }

    setInterval(createHeart, 400);

}


// ⌨️ Typewriter Effect

const message = document.querySelector(".message");

if (message) {

    const text = message.innerHTML;

    message.innerHTML = "";

    let i = 0;


    function typing() {

        if (i < text.length) {

            message.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 30);

        }

    }

    typing();

}


// 🎆 Fireworks

const canvas = document.getElementById("fireworks");


if (canvas) {

    const ctx = canvas.getContext("2d");


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    let particles = [];


    function firework() {

        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height / 2;


        for (let i = 0; i < 40; i++) {

            particles.push({

                x: x,
                y: y,
                dx: (Math.random() - 0.5) * 5,
                dy: (Math.random() - 0.5) * 5,
                life: 80

            });

        }

    }


    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);


        particles.forEach((p, index) => {

            ctx.beginPath();

            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);

            ctx.fillStyle = "white";

            ctx.fill();


            p.x += p.dx;
            p.y += p.dy;

            p.life--;


            if (p.life <= 0) {

                particles.splice(index, 1);

            }

        });


        requestAnimationFrame(animate);

    }


    setInterval(firework, 1200);

    animate();

}
