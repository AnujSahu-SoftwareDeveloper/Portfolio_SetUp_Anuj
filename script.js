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