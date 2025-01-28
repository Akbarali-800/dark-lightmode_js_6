function toggleMode() {
    const body = document.body;
    const p = document.querySelector("p");
    
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "rgba(196, 181, 165, 1)";
        body.style.color = "black";
        p.style.color = "black"; 
        body.querySelector(".md_btn").style.color = "black";
        body.querySelector(".LightMode").style.color = "white";
        body.querySelector(".LightMode").style.backgroundColor = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        p.style.color = "white"; 
        body.querySelector(".md_btn").style.color = "white";
        body.querySelector(".LightMode").style.color = "black";
        body.querySelector(".LightMode").style.backgroundColor = "white";
    }
}