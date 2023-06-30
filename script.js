console.clear();

document.querySelectorAll("video").forEach((i) => {
    i.play();
});

document.getElementById("button").addEventListener("mousedown", (e) => {
    let but = document.getElementById("button");
    but.dataset.active = "true";

    let rand = Math.random();
    if (rand < 0.9) {
        open("https://outlook.live.com/mail/0/");
    } else {
        open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
    }
    but.dataset.active = "false";
});

document.getElementById("button").addEventListener("mouseup", (e) => {
    let but = document.getElementById("button");
    but.dataset.active = "false";
});

var videoOpacity = 0;

const interval = setInterval(function() {
    document.querySelectorAll("video").forEach((i) => {
        i.style.opacity = videoOpacity += 0.01;
        if (videoOpacity >= 1) {
            clearInterval(interval);
        }
    });
}, 500);