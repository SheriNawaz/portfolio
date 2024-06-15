let isScrolling = false;
const sky = document.getElementById('sky');
const clouds = document.getElementById('clouds');
const clouds2 = document.getElementById('clouds2');
const mountains = document.getElementById('mountains');
const mountains2 = document.getElementById('mountains2');
const mountains3 = document.getElementById('mountains3');
const fields = document.getElementById('fields');
const fields2 = document.getElementById('fields2');
const fields3 = document.getElementById('fields3');
const fields4 = document.getElementById('fields4');

const email = document.getElementById('email')

email.addEventListener('click', function(){
    window.location.href = 'mailto:sherinawaz495@gmail.com';
})

document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollX;
    var totalScrollableWidth = document.documentElement.scrollWidth - window.innerWidth;
    var train = document.getElementById('train');
    var trainPosition = (scrollPosition / totalScrollableWidth) * (window.innerWidth - train.clientWidth);
    train.style.left = trainPosition + 'px';
    if (train.src.indexOf('trainmove.gif') === -1) {
        train.src = 'trainmove.gif';
    }
    clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        train.src = 'train.png';
    }, 100);

    clouds.style.transform = `translateX(${-scrollPosition * 0.3}px)`;
    clouds2.style.transform = `translateX(${-scrollPosition * 0.3}px)`;
    mountains.style.transform = `translateX(${-scrollPosition * 0.4}px)`;
    mountains2.style.transform = `translateX(${-scrollPosition * 0.4}px)`;
    mountains3.style.transform = `translateX(${-scrollPosition * 0.4}px)`;
    fields.style.transform = `translateX(${-scrollPosition * 0.6}px)`;
    fields2.style.transform = `translateX(${-scrollPosition * 0.6}px)`; 
    fields3.style.transform = `translateX(${-scrollPosition * 0.6}px)`; 
    fields4.style.transform = `translateX(${-scrollPosition * 0.6}px)`; 

    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        var rect = page.getBoundingClientRect();
        var pageCenter = rect.left + rect.width / 2;
        var viewportCenter = window.innerWidth / 2;
        var threshold = rect.width / 3; // Adjust this value for a tighter or looser range
        if (Math.abs(pageCenter - viewportCenter) < threshold) {
            page.classList.add('visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Sheriyar Nawaz";
    let i = 0;
    const speed = 100; // Speed in milliseconds
    const typewriterText = document.getElementById('name');
    function typeWriter() {
        if (i < text.length) {
            typewriterText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typewriterText.style.visibility = 'visible'; 
        }
    }

    typewriterText.style.visibility = 'visible';
    typeWriter();

    document.querySelector('.page').classList.add('visible');
});
