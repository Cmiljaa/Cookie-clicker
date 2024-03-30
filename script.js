let cookie = document.querySelector('img');
let p = document.querySelector('p');
let counter = 0;

cookie.addEventListener('click', () => {
    let title = document.querySelector('title');
    p.innerText = `${counter} cookies`;
    counter++;
    title.innerText = `${counter} cookies`;
    
})

cookie.addEventListener('mousedown',  () => cookie.style.scale = 0.8)

cookie.addEventListener('mouseup', () => cookie.style.scale = 0.9)

