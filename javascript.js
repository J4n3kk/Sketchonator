const canva = document.querySelector('.working-space');
let slider = document.querySelector('.value');
let gridSize = slider.value;

function createCanva(){
    for (let i = 0; i<gridSize*gridSize; i++){
     const grid = document.createElement('div');
     const blockSize = 500 / gridSize;
     grid.classList.add('block');
     grid.setAttribute('data-badges', 'block');
     grid.style.width = `${blockSize}px`;
     grid.style.height = `${blockSize}px`;
     grid.style.boxSizing = "border-box";
     //grid.style.border = '2px solid orange'
     grid.style.backgroundColor = 'red';
     canva.appendChild(grid);
     console.log(i)
}
}

function removeCanva(){
    let canvaRemove = document.querySelector('.working-space');
    console.log(canvaRemove)
    let child = canvaRemove.lastElementChild;
    while (child){
        canvaRemove.removeChild(child);
        child = canvaRemove.lastElementChild;
    }
}

function getSliderValue(){
    slider = document.querySelector('.value');
    gridSize = slider.value;
}

function changeSliderValue(){
    const sliderNumber = document.querySelector('.slider-value');
    console.log(sliderNumber)
    sliderNumber.textContent =`${gridSize}`;
}



slider.addEventListener('change',() => {
    removeCanva();
    getSliderValue();
    createCanva();
    changeSliderValue();
});

window.addEventListener('mousedown', function (e){
    
    const btn = Array.from(document.querySelectorAll('.block'));
    btn.forEach(btn => btn.addEventListener('mouseover', changeColor))
     }
);

window.addEventListener('mouseup', function (e){
    
    const btn = Array.from(document.querySelectorAll('.block'));
    btn.forEach(btn => btn.removeEventListener('mouseover', changeColor))
     }
);
/*
function changeColor(){
    console.log('change color triggered')
    this.style.backgroundColor = 'rgb(225, 211, 110)';
};*/

function changeColor(){
    console.log('change color triggered');
    const number1 = Math.random()*255;
    const number2 = Math.random()*255;
    const number3 = Math.random()*255;

    this.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
};

createCanva();
