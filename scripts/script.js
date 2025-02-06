// noise //
const canvas = document.getElementById('noise');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawNoise() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const color = Math.random() * 255;
        data[i] = color;
        data[i + 1] = color;
        data[i + 2] = color;
        data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(drawNoise);
}

drawNoise();

// Add class to animate
// setTimeout(() => {
//     canvas.classList.add('noise-animate');
// }, 0);




console.log("Hi, welcome to my portfolio!");





document.querySelectorAll("img").forEach(image => {
    image.onclick = () =>{
        document.querySelector(".popup-img").style.display = "block";
        document.querySelector(".popup-img img").src = image.getAttribute("src");
    }
});


document.querySelector(".popup-img span").onclick = () => {
    document.querySelector(".popup-img").style.display = "none";
}

document.querySelector(".popup-img").onclick = () => {
    document.querySelector(".popup-img").style.display = "none";
}


document.querySelectorAll("video").forEach(video => {
    video.onclick = () =>{
        document.querySelector(".popup-video").style.display = "block";
        document.querySelector(".popup-video video").src = video.getAttribute("src");
    }
});

document.querySelector(".popup-video span").onclick = () => {
    document.querySelector(".popup-video").style.display = "none";
}

document.querySelector(".popup-video").onclick = () => {
    document.querySelector(".popup-video").style.display = "none";
}

window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    if(scroll > 1) {
       let el = document.querySelector(".top_button");
       el.classList.add("button_fade_up");
    } else {
        let el = document.querySelector(".top_button");
       el.classList.remove("button_fade_up");
    }
})

