const shapes = ['circle', 'rec', 'parra', 'oval', 'shape'];
let shapeId = -1;
let shape = document.getElementById('shape');

shape.addEventListener('click', transform);

function transform(){
    shapeId++;
    if (shapeId == 5 ) {
        shapeId = 0;
        shape.className = 'shape';
        shape.classList.add(shapes[shapeId]);
    }
     else {
        shape.className = '';
        shape.classList.add(shapes[shapeId]);
    }
}