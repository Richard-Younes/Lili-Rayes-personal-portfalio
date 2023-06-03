
let imageCont1 = document.getElementById('set1');
let imageCont2 = document.getElementById('set2');
let imageCont3 = document.getElementById('set3');

let imageFlex1 = document.getElementById('set11');
let imageFlex2 = document.getElementById('set22');
let imageFlex3 = document.getElementById('set33');

imageFlex1.style.display = 'none';
imageFlex2.style.display = 'none';
imageFlex3.style.display = 'none';

// console.log(imageCont1, imageCont2, imageCont3);

let circle1 = document.getElementsByClassName('sec2-circl1');
let circle2 = document.getElementsByClassName('sec2-circl2');
let circle3 = document.getElementsByClassName('sec2-circl3');

function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 }  

async function hide(elementNb){
    let elmt_hide = null;
    let elmt_s = null;
    await sleep(150);
    if (elementNb === 1){
        elmt_hide = imageCont1;
        elmt_s = imageFlex1;
    } else if (elementNb === 2) {
        elmt_hide = imageCont2;
        elmt_s = imageFlex2;
    } else if (elementNb === 3) {
        elmt_hide = imageCont3;
        elmt_s = imageFlex3;
    }   
    


    elmt_hide.hidden = true;
    elmt_s.style.display = 'flex';

}

async function show(elementNb) {
    let elmt_hide = null;
    let elmt_s = null;
    await sleep(150);
    if (elementNb === 1){
        elmt_hide = imageCont1;
        elmt_s = imageFlex1;
    } else if (elementNb === 2) {
        elmt_hide = imageCont2;
        elmt_s = imageFlex2;
    } else if (elementNb === 3) {
        elmt_hide = imageCont3;
        elmt_s = imageFlex3;
    }   

    elmt_hide.hidden = false;
    elmt_s.style.display = 'none';
}

// function pseudo_animation(elmt){
//     elmt.style.top = '10rem';
// }

// async function reverse_anim(elementNb){
//     if (elementNb === 1){
//         elmt = imageCont1;
//     } else if (elementNb === 2) {
//         elmt = imageCont2;
//     } else if (elementNb === 3) {
//         elmt = imageCont3;
//     } 
//     elmt.style.top = '-5.5rem';
// }
