let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contents = document.querySelectorAll('.content .item');
    
let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;


/*making a function so that it goes to the next food item*/
function nextSlider(){
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd; 
    show();
}
/*making a function so that it goes to the previous food item*/
function prevSlider(){
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate - rotateAdd; 
    show();             
}
/*updates the images so that it rotates and align with the food items*/
function show(){
    image.style.setProperty("--rotate", rotate + 'deg');
    image.style.setProperty("--rotate", rotate + 'deg');
    contents.forEach((content, key) => {
        if(key == active){
           content.classList.add('active');
        }else{
            content.classList.remove('active');
            }
        })
}

/*goes to next food when clicked*/
next.onclick = nextSlider;
/*goes to the previous food when clicked*/
prev.onclick = prevSlider;
/*setting a delay for the food to switch to the next so user can see the food the wheel is more smooth and see it more clearly */
const autoNext = setInterval(nextSlider, 4500);

