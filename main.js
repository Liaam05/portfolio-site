const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/first_img.png") {
        myImage.setAttribute("src", "images/second_img.png");
    } else {
        myImage.setAttribute("src", "images/first_img.png");
    }
}