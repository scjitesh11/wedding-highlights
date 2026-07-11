// Display data from config.js

document.getElementById("title").innerHTML = CONFIG.title;

document.getElementById("coupleName").innerHTML =
CONFIG.groom + " ❤️ " + CONFIG.bride;

document.getElementById("date").innerHTML =
"📅 " + CONFIG.weddingDate;


document.getElementById("watchBtn").onclick = function () {

    document.getElementById("story").scrollIntoView({

        behavior: "smooth"

    });

};

