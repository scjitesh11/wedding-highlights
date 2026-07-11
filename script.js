// Display data from config.js

document.getElementById("title").innerHTML = CONFIG.title;

document.getElementById("coupleName").innerHTML =
CONFIG.groom + " ❤️ " + CONFIG.bride;

document.getElementById("date").innerHTML =
CONFIG.weddingDate;

const music = document.getElementById("bgMusic");
document.getElementById("watchBtn").onclick = function () {

    if (music.paused) {
        music.play();
    }

    document.getElementById("story").scrollIntoView({

        behavior: "smooth"

    });

};
