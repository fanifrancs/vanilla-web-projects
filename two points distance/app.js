let x1 = document.getElementById('x1');
let y1 = document.getElementById('y1');
let x2 = document.getElementById('x2');
let y2 = document.getElementById('y2');
let btn = document.querySelector('button');
let resultDisp = document.querySelector('p');

btn.addEventListener('click', calculate)

function calculate() {
   let x1Value = x1.value;
   let y1Value = y1.value;
   let x2Value = x2.value;
   let y2Value = y2.value;

   if (x1Value == '' || y1Value == '' || x2Value == '' || y2Value == '') {
        resultDisp.innerHTML = `All values are required`
     } else {
        let xDiff = x2Value - x1Value;
        let yDiff = y2Value - y1Value;
    
        let xDiffSq = xDiff ** 2;
        let yDiffSq = yDiff ** 2;
        
        let diffSqSum = xDiffSq + yDiffSq;
    
        let result = Math.sqrt(diffSqSum);
    
        resultDisp.innerHTML = `The distance between the points (${x1Value},${y1Value}) and (${x2Value},${y2Value}) is ${result} units` 
     }
   
}