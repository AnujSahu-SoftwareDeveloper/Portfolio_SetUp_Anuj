let menu = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');


menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const words = ["Unity Game Developer", "Immersive AR/VR Developer"];
let index = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

// ---- SPEED CONTROL ----
let typingSpeed = 120;   // lower = faster
let deletingSpeed = 60;  // lower = faster
let delayBetweenWords = 1000; // pause before next word

function typeEffect() {
    const display = document.querySelector(".typing-text");

    if (!isDeleting) {
        // Typing
        currentWord = words[index].substring(0, charIndex + 1);
        charIndex++;
    } else {
        // Deleting
        currentWord = words[index].substring(0, charIndex - 1);
        charIndex--;
    }

    display.textContent = currentWord;

    // When word is fully typed
    if (!isDeleting && charIndex === words[index].length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
        return;
    }

    // When word is fully deleted
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length; // move to next word
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();




// const text = "I hope you enjoyed seeing my work!";
// const thank_typingSpeed = 60;
// const eraseSpeed = 40;
// const delayAfterTyping = 1000;
// let thank_index = 0;
// let isTyping = true;

// function Thank_typeEffect() {
//     const element = document.getElementById("thankLine");

//     if (isTyping) {
//         if (thank_index < text.length) {
//             element.textContent += text.charAt(thank_index);
//             thank_index++;
//             setTimeout(Thank_typeEffect, thank_typingSpeed);
//         } else {
//             isTyping = false;
//             setTimeout(Thank_typeEffect, delayAfterTyping);
//         }
//     } else {
//         if (thank_index > 0) {
//             element.textContent = text.substring(0, thank_index - 1);
//             thank_index--;
//             setTimeout(Thank_typeEffect, eraseSpeed);
//         } else {
//             isTyping = true;
//             setTimeout(Thank_typeEffect, thank_typingSpeed);
//         }
//     }
// }

// window.onload = function () {
//     Thank_typeEffect();
// };

const lastwordElement = document.getElementById("lastText");
const lastwordText = "Thank you for visiting my portfolio! ";

let lw_index = 0;
let lw_typing = true;

const lw_typeSpeed = 80;
const lw_eraseSpeed = 60;
const lw_delay = 2000; // <-- Increase delay to see full text

function lastwordTyping() {
    if (lw_typing) {
        if (lw_index < lastwordText.length) {
            lastwordElement.innerHTML = lastwordText.substring(0, lw_index);
            lw_index++;
            setTimeout(lastwordTyping, lw_typeSpeed);
        } else {
            lw_typing = false;
            setTimeout(lastwordTyping, lw_delay);
        }
    } else {
        if (lw_index > 0) {
            lw_index--;
            lastwordElement.innerHTML = lastwordText.substring(0, lw_index);
            setTimeout(lastwordTyping, lw_eraseSpeed);
        } else {
            lw_typing = true;
            setTimeout(lastwordTyping, lw_typeSpeed);
        }
    }
}

lastwordTyping();

const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(item => {
    const img = item.querySelector(".project-thumb");
    const iframe = item.querySelector(".project-video");
    const videoUrl = item.getAttribute("data-video");

    img.addEventListener("click", () => {

        // Reset all other videos
        projectItems.forEach(other => {
            if (other !== item) {
                const otherImg = other.querySelector(".project-thumb");
                const otherIframe = other.querySelector(".project-video");

                otherIframe.src = "";
                otherIframe.style.display = "none";
                otherImg.style.display = "block";
            }
        });

        // Hide image and show YouTube
        img.style.display = "none";
        iframe.style.display = "block";
        iframe.src = videoUrl;  // autoplay
    });
});