let cookie = document.querySelector('img');
let counter = 0;

cookie.addEventListener('click', () => {
    let title = document.querySelector('title');
    counter++;
    title.innerText = `${counter} cookies`;
})

cookie.addEventListener('mouseover', () => {
    cookie.style.scale = 1.05;
})

cookie.addEventListener('mouseout', () => {
    cookie.style.scale = 1;
})