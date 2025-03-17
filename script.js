const hamburger = document.querySelector('.hamburger-nav')
const hatas = document.querySelector('.hatas')
const htengah = document.querySelector('.htengah')
const hbawah = document.querySelector('.hbawah')
const menuDalam = document.querySelector('.menuDalam-nav')
let gerak = 0;

hamburger.addEventListener("click", () => {
    gerak = !gerak;
    gerak ? hatas.style.transform = "rotate(35deg)" : hatas.style.transform = "rotate(0deg)";
    gerak ? htengah.style.opacity = "0" : htengah.style.opacity = "1";
    gerak ? hbawah.style.transform = "rotate(-35deg)" : hbawah.style.transform = "rotate(0deg)";
    gerak ? menuDalam.style.height = "10em" : menuDalam.style.height = "0px";
})

document.addEventListener("DOMContentLoaded", function () {
    let marquee = document.querySelector(".skilba");
    let clone = marquee.cloneNode(true); // Duplikasi elemen marquee
    clone.classList.add("cloned"); // Tambahkan class agar bisa diatur dengan CSS
    marquee.parentElement.appendChild(clone); // Tambahkan duplikat setelahnya
});

