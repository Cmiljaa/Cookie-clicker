class CookieClicker{

    constructor(){
        this.cookie = document.querySelector('#cookie');
        this.p = document.querySelector('.cookie-section p');
        this.autoclicker = document.querySelector('.cookie-section #autoclick');
        this.doubleclick = document.querySelector('.cookie-section #doubleclick');
        this.reset = document.querySelector('.cookie-section button');
        this.add = 1;  this.counter = 0; this.interval; this.bool = true;
        this.events();
    }

    events = () => {
        this.cookie.addEventListener('click', () => this.update(this.add))

        this.cookie.addEventListener('mouseover', () => this.cookie.style.scale = 0.9)

        this.cookie.addEventListener('mousedown',  () => this.cookie.style.scale = 0.8)

        this.cookie.addEventListener('mouseup', () => this.cookie.style.scale = 0.9)

        this.cookie.addEventListener('mouseout', () => this.cookie.style.scale = 0.8)

        this.doubleclick.addEventListener('click', () => this.add=2)

        this.autoclicker.addEventListener('click', () => {
            if(this.bool)
            {
                this.interval = setInterval((intervalid) => {
                    this.update(1);
                }, 200);
                this.bool = false; 
            }
            else
                alert("Autoclicker has already started!");
        })

        this.reset.addEventListener('click', () => {
            this.add=1;
            this.counter = -1;
            this.update(this.add);
            clearInterval(this.interval);
            this.bool = true;
        
        })
    }

    update = (i) => {
        this.counter+=i;
        let title = document.querySelector('title');
        this.p.innerText = `${this.counter} cookies`;
        title.innerText = `${this.counter} cookies`;
    }

}

kolacic = new CookieClicker();