// Display data from config.js

document.getElementById("title").innerHTML = CONFIG.title;

document.getElementById("coupleName").innerHTML =
CONFIG.groom + " ❤️ " + CONFIG.bride;

document.getElementById("date").innerHTML =
CONFIG.weddingDate;


document.getElementById("watchBtn").onclick = function () {

    document.getElementById("story").scrollIntoView({

        behavior: "smooth"

    });

};

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function () {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

    }

};
