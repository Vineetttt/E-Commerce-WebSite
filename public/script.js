const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav =document.getElementById('navbar')

//navbar icon clickable  int the tablet view and mobile view, upon clicking it displays the nav elements 
if(bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}
//button for closing the navbar icon in the tablet view and mobile view
if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}

//script for single product page 
var MainImg = document.getElementById("MainImg");
var SmallImg = document.getElementsByClassName("small-img");
//Once the user clicks the small image we replace it with the big image and dispaly it 
SmallImg[0].onclick =function(){
    MainImg.src = SmallImg[0].src;
}
SmallImg[1].onclick =function(){
    MainImg.src = SmallImg[1].src;
}
SmallImg[2].onclick =function(){
    MainImg.src = SmallImg[2].src;
}
SmallImg[3].onclick =function(){
    MainImg.src = SmallImg[3].src;
}