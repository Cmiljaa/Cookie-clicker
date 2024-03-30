let cookie = document.querySelector('#cookie');
let p = document.querySelector('.cookie-section p');
let autoclicker = document.querySelector('.cookie-section #autoclick');
let doubleclick = document.querySelector('.cookie-section #doubleclick');
let add = 1;  let counter = 0;

cookie.addEventListener('click', () => update(add))

cookie.addEventListener('mouseover', () => cookie.style.scale = 0.9)

cookie.addEventListener('mousedown',  () => cookie.style.scale = 0.8)

cookie.addEventListener('mouseup', () => cookie.style.scale = 0.9)

cookie.addEventListener('mouseout', () => cookie.style.scale = 0.8)

doubleclick.addEventListener('click', () => add=2)

autoclicker.addEventListener('click', () => {
    setInterval(() => {
        update(1);
    }, 200); 
})

const update = (i) => {
    counter+=i;
    let title = document.querySelector('title');
    p.innerText = `${counter} cookies`;
    title.innerText = `${counter} cookies`;
}