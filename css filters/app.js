const filters = {
    filter1: '.filter-1 {-webkit-filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);}',
    filter2: '.filter-2 {-webkit-filter: sepia(.2) brightness(1.15) saturate(1.4);filter: sepia(.2) brightness(1.15) saturate(1.4);}',
    filter3: '.filter-3 {-webkit-filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);}',
    filter4: '.filter-4 {-webkit-filter: sepia(.5) contrast(1.2) saturate(1.8);filter: sepia(.5) contrast(1.2) saturate(1.8);}',
    filter5: '.filter-5 {-webkit-filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);}',
    filter6: '.filter-6 {-webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);}',
    filter7: '.filter-7 {-webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);}',
    filter8: '.filter-8 {-webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);}',
    filter9: '.filter-9 {-webkit-filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);}',
    filter10: '.filter-10 {-webkit-filter: sepia(.35) saturate(1.1) contrast(1.5);filter: sepia(.35) saturate(1.1) contrast(1.5);}',
    filter11: '.filter-11 {-webkit-filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);}',
    filter12: '.filter-12 {-webkit-filter: contrast(1.1) brightness(1.1);filter: contrast(1.1) brightness(1.1);}',
    filter13: '.filter-13 {-webkit-filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);}',
    filter14: '.filter-14 {-webkit-filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);}',
    filter15: '.filter-15 {-webkit-filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);}',
    filter16: '.filter-16 {-webkit-filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);}',
    filter17: '.filter-17 {-webkit-filter: brightness(1.25) contrast(.85) grayscale(1);filter: brightness(1.25) contrast(.85) grayscale(1);}',
    filter18: '.filter-18 {-webkit-filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);}',
    filter19: '.filter-19 {-webkit-filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);}',
    filter20: '.filter-20 {-webkit-filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);}',
    filter21: '.filter-21 {-webkit-filter: saturate(1.1) contrast(1.5);filter: saturate(1.1) contrast(1.5);}',
    filter22: '.filter-22 {-webkit-filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);}',
    filter23: '.filter-23 {-webkit-filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);}',
    filter24: '.filter-24 {-webkit-filter: contrast(1.1) brightness(1.15) saturate(1.1);filter: contrast(1.1) brightness(1.15) saturate(1.1);}',
    filter25: '.filter-25 {-webkit-filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);}',
    filter26: '.filter-26 {-webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);}',
    filter27: '.filter-27 {-webkit-filter: contrast(1.1) brightness(1.25) saturate(1.1);filter: contrast(1.1) brightness(1.25) saturate(1.1);}',
    filter28: '.filter-28 {-webkit-filter: sepia(.15) brightness(1.2);filter: sepia(.15) brightness(1.2);}',
    filter29: '.filter-29 {-webkit-filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);}',
    filter30: '.filter-30 {-webkit-filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);}',
    filter31: '.filter-31 {-webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);}',
    filter32: '.filter-32 {-webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);}',
    filter33: '.filter-33 {-webkit-filter: sepia(.35) contrast(1.25) saturate(1.25);filter: sepia(.35) contrast(1.25) saturate(1.25);}',
    filter34: '.filter-34 {-webkit-filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);}',
    filter35: '.filter-35 {-webkit-filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);}',
    filter36: '.filter-36 {-webkit-filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);}',
    filter37: '.filter-37 {-webkit-filter: sepia(.25) contrast(1.1) brightness(1.1);filter: sepia(.25) contrast(1.1) brightness(1.1);}',
    filter38: '.filter-38 {-webkit-filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);}',
    filter39: '.filter-39 {-webkit-filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);}',
    filter40: '.filter-40 {-webkit-filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);}',
    filter41: '.filter-41 {-webkit-filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);}',
    filter42: '.filter-42 {-webkit-filter: sepia(.45) contrast(1.50) brightness(0.75) saturate(1.3) hue-rotate(-5deg) invert(80%); filter: sepia(.45) contrast(1.50) brightness(0.75) saturate(1.3) hue-rotate(-5deg) invert(80%);}',
}

const
a = 'Upload any picture and browse through various CSS filters applied.',
b = "Click any of the previews to copy it's CSS code to clipboard.",
c = "Extract the code into your image's class.";

const container = document.querySelector('.container');

// genereates the divs for image filters
for (let i = 0; i < 42; i++) {
    let k = i + 1;
    container.innerHTML += 
    `<div id="filter${k}" class="item" ></div>`;
}

const divs = document.querySelectorAll('.container div');

// assigns click event listener to each div
divs.forEach(div => {
    div.addEventListener('click', () => {
        copy(div.id);
    })
})

function original() {
    alert('This is the original image.');
}

function howToUse() {
    alert(`${a} ${b} ${c}`);
}

// copies the filter code to clipboard
async function copy(param) {
    const filter = filters[param];
    try {
        await navigator.clipboard.writeText(filter);
        alert('Code copied to clipboard.'); 
    } catch (error) {
        alert(error);
    }
}

const inputElement = document.querySelector('input');
inputElement.addEventListener('change', handleFiles);

// function below handles image upload
function handleFiles() {
    const original = document.querySelector('.original'),
          fileList = this.files,
          img = document.createElement('img');
    img.src = URL.createObjectURL(fileList[0]);
    original.style.backgroundImage = `url(${img.src})`;
    divs.forEach((div) => {
        div.style.backgroundImage = `url(${img.src})`;
    })
}
