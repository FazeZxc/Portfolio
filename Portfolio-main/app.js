let circle = document.querySelector("#circle");
let para = document.querySelector("#p");
let colorChange = document.querySelectorAll(".color-change");
let nav = document.querySelector("#nav");
window.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
};

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY;
    if (verticalScrollPx < 200) {
        document.body.style.backgroundColor = '#FFFFFF';
        // circle.style.backgroundColor = '#272727';
        para.style.display = 'none';
        colorChange.forEach((e) => {
            e.style.color = 'black';
        })
        nav.style.backgroundColor = '#FFFFFF';
       

    } else if (verticalScrollPx > 200 && verticalScrollPx < 1500) {
        document.body.style.backgroundColor = '#181716';
        // circle.style.backgroundColor = '#EBEAE5';
        para.style.display = 'block';
        colorChange.forEach((e) => {
            e.style.color = 'white';
        })
        nav.style.backgroundColor = '#EBEAE5';
    }
    else if (verticalScrollPx > 3400 && verticalScrollPx < 4000) {
        document.body.style.backgroundColor = '#818069';
        nav.style.backgroundColor = '#818069';
    }
    else if (verticalScrollPx > 1500 && verticalScrollPx < 2600) {
        document.body.style.backgroundColor = '#ffffff';
        nav.style.backgroundColor = '#ffffff';
    }
    
    else if (verticalScrollPx > 4700 && verticalScrollPx < 6000) {
        document.body.style.backgroundColor = 'black';
        nav.style.backgroundColor = 'black';
    }
});
