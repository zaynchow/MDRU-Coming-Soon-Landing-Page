let currIdx  = 1;
let clicked = false;


const changeImage = () => {
    currIdx++;
    if (currIdx>3){
        currIdx=1;
    }
    let slider = document.getElementById("sliderImg");
    let imgUrl = `https://www.mdru.ubc.ca/wp-content/uploads/2022/09/img${currIdx}.jpg` 
    slider.src = imgUrl;
    document.getElementById('radio'+currIdx).checked =true;
}


const autoSlide = setInterval(changeImage , 5000)

document.querySelectorAll(".button").forEach((el, index) => {
    el.addEventListener("click", () => {
        clearInterval(autoSlide);
        let slider = document.getElementById("sliderImg");
        let imgUrl = `https://www.mdru.ubc.ca/wp-content/uploads/2022/09/img${index+1}.jpg` 
        slider.src = imgUrl;
        document.getElementById(`radio${index+1}`).checked =true;
    }
  )
}
)

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

