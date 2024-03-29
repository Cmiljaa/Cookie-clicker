let cookie = document.querySelector('img');
let p = document.querySelector('p');
let counter = 0;

cookie.addEventListener('click', () => {
    let title = document.querySelector('title');
    p.innerText = `${counter} cookies`;
    counter++;
    title.innerText = `${counter} cookies`;
    
})

cookie.addEventListener('mouseover', () => {
    cookie.style.scale = 0.9;
})

cookie.addEventListener('mouseout', () => {
    cookie.style.scale = 0.8;
})