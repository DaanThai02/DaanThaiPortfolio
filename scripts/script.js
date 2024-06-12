console.log("hello");

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





