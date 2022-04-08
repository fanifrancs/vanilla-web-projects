function func() {
  let r = document.getElementById('r').value;
  let g = document.getElementById('g').value;
  let b = document.getElementById('b').value;
  document.getElementById('rslider').innerHTML = r;
  document.getElementById('gslider').innerHTML = g;
  document.getElementById('bslider').innerHTML = b;
  document.getElementById('rdisp').innerHTML = r +', ';
  document.getElementById('gdisp').innerHTML = g + ', ';
  document.getElementById('bdisp').innerHTML = b;
  document.getElementById('colordisplay').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}