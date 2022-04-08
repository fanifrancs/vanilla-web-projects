document.getElementById('start').addEventListener('click', animation);
function animation() {
    animate();
    setTimeout(animateii, 1000);
    setTimeout(animateiii, 2000);
    setTimeout(btn, 3000);
    function animate() {
        let x =  document.getElementById('demo');
        x.innerHTML = 3;
        x.classList.remove('demo');
        x.classList.add('demo');
    }

    function animateii() {
        let x =  document.getElementById('demo');
        x.innerHTML = 2;
        x.classList.remove('demo')
        x.classList.add('demoi')
    }

    function animateiii() {
        let x =  document.getElementById('demo');
        x.innerHTML = 1;
        x.classList.remove('demoi')
        x.classList.add('demoii')
    }

    function btn() {
        location.reload();
    }
}