let cookie = document.querySelector('#cookie');
let p = document.querySelector('.cookie-section p');
let autoclicker = document.querySelector('.cookie-section #autoclick');
let doubleclick = document.querySelector('.cookie-section #doubleclick');
let reset = document.querySelector('.cookie-section button');
let add = 1;  let counter = 0; let interval; let bool = true;

cookie.addEventListener('click', () => update(add))

cookie.addEventListener('mouseover', () => cookie.style.scale = 0.9)

cookie.addEventListener('mousedown',  () => cookie.style.scale = 0.8)

cookie.addEventListener('mouseup', () => cookie.style.scale = 0.9)

cookie.addEventListener('mouseout', () => cookie.style.scale = 0.8)

doubleclick.addEventListener('click', () => add=2)

autoclicker.addEventListener('click', () => {
    if(bool)
    {
        interval = setInterval((intervalid) => {
            update(1);
        }, 200);
        bool = false; 
    }
    else
        alert("Autoclicker has already started!");
})

reset.addEventListener('click', () => {
    add=1;
    counter = -1;
    update(add);
    clearInterval(interval);
    bool = true;

})

const update = (i) => {
    counter+=i;
    let title = document.querySelector('title');
    p.innerText = `${counter} cookies`;
    title.innerText = `${counter} cookies`;
}