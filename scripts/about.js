// JAVASCRIPT SOURCE CPODE FOR ABOUT PAGE

let count = 0
const img = [
    'images/AboutPage/SaudiArabia.jpg',
    'images/AboutPage/SU.jpg',
    'images/AboutPage/myCollege.jpg'
]

document.getElementById('Linux').src = img[count]

let changeImage = () => {
    count++
    count < img.length ? document.getElementById('Linux').src = img[count] : count = -1
}
function showContent() {
    let article  = document.querySelectorAll('.narrative')
    let buttonID = document.querySelector('.readme')
    if (article[0].style.display === "flex") {
        article.forEach(k=>k.style.display ="none")
        buttonID.innerHTML = "Read Article ⮟"
    } else {
        article.forEach(k=>k.style.display ="flex")
        buttonID.innerHTML = "Close Article ⮝"   
    }
}