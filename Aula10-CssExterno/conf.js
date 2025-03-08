function yellow() {
    let text = document.getElementById("box0");
    let text2 = document.getElementById("box1");
    console.log(text);
    console.log(text2);
    text.style.backgroundColor = "yellow";
    text2.style.backgroundColor = "yellow";
}

function white() {
    const text = document.getElementsByClassName("boxes");
    for(let i=0; i<text.length; i++) {
        text[i].style.backgroundColor= "white";
    }
}