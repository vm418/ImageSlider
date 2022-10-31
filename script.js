const container = document.querySelector('.container');
const nxt = document.querySelector('.next');
const prev = document.querySelector('.prev');

const pictures = [
    './images/mrana.jpg);',
    './images/ashoka-the-great.jpg);',
    './images/baji.jpg);',
    './images/raja.jpg);',
    './images/samg.jpg);',
    './images/shivaji-maharaj.jpg);'
];

let current = 0;

function forward(){
    if (current == 5 ){
        current = 0;
    }else{
        current ++;
    }
    container.style.cssText = "background-image: url(" + pictures[current];
}

nxt.addEventListener('click', () => {
    if (current == 5 ){
        current = 0;
    }else{
        current ++;
    }
    container.style.cssText = "background-image: url(" + pictures[current];
});

prev.addEventListener('click', () => {
    if (current == 0 ){
        current = 5;
    }else{
        current -= 1;
    }
    container.style.cssText = "background-image: url(" + pictures[current];
});


const btns = document.querySelectorAll('.dot');
const arr = [...btns];
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        current = arr.indexOf(btn);
        container.style.cssText = "background-image: url(" + pictures[arr.indexOf(btn)];
    });
});


setInterval(forward, 5000);