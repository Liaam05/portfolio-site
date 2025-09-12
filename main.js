let myButton = document.querySelector('button');


function chengeImg() {
    let myImage = document.querySelector('img');
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/first_img.png") {
        myImage.setAttribute("src", "images/second_img.png");
    } else {
        myImage.setAttribute("src", "images/first_img.png");
    }
}

myButton.onclick = chengeImg;

/*
const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/first_img.png") {
        myImage.setAttribute("src", "images/second_img.png");
    } else {
        myImage.setAttribute("src", "images/first_img.png");
    }
}
*/