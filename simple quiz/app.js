const quizData = [
    {
        question: 'Node.js runtime environment is written in',
        a: 'C++',
        b: 'C',
        c: 'C#',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Entomology is the science that studies',
        a: 'human behaviour',
        b: 'insects',
        c: 'rock formation',
        d: 'scientific history',
        correct: 'b'
    },
    {
        question: 'Epsom is the place associated with',
        a: 'horse racing',
        b: 'polo',
        c: 'shooting',
        d: 'snooker',
        correct: 'a'
    },
    {
        question: 'The following are scripting languages except?',
        a: 'Python',
        b: 'JavaScript',
        c: 'PHP',
        d: 'Java',
        correct: 'd'
    },
    {
        question: 'The following are Frontend JavaSript libraries/frameworks except',
        a: 'Svelte',
        b: 'React',
        c: 'Express',
        d: 'Angular',
        correct: 'c'
    },
    {
        question: 'GTA V was developed by',
        a: 'Ubisoft',
        b: 'Rockstar',
        c: 'Santa Monica Studio',
        d: 'Konami',
        correct: 'b'
    },
    {
        question: '____ is the language of science',
        a: 'Mathematics',
        b: 'Physics',
        c: 'Chemisrty',
        d: 'English',
        correct: 'a'
    },
    {
        question: 'Fire temple is the place of worship of which of the following religion?',
        a: 'Taoism',
        b: 'Judaism',
        c: 'Zoroastrianism',
        d: 'Shintoism',
        correct: 'c'
    },
    {
        question: 'How many years make a silver jubilee?',
        a: '10',
        b: '15',
        c: '25',
        d: '30',
        correct: 'c'
    },
    {
        question: 'Fathometer is used to measure',
        a: 'earthquakes',
        b: 'rainfall',
        c: 'ocean depth',
        d: 'sound intensity',
        correct: 'c'
    }
];

let i = -1,
score = 0;

const
container = document.querySelector('div'),
question = document.querySelector('p'),
opt_a = document.querySelector('#a'),
opt_b = document.querySelector('#b'),
opt_c = document.querySelector('#c'),
opt_d = document.querySelector('#d'),
submit_btn = document.querySelector('#submit');

renderQuestion();
submit_btn.addEventListener('click', submit);

function mark() {
    const opts = document.querySelectorAll('input[type=radio]');
    opts.forEach(opt => {
        if (opt.checked) {
            if (opt.id === quizData[i].correct) {
                score++;
            }
        }
    })
}

function uncheckOptions() {
    const opts = document.querySelectorAll('input[type=radio]');
    opts.forEach(opt => {
        opt.checked = false;
    })
}

function renderQuestion() {
    if (i === quizData.length - 2) {
        submit_btn.value = 'Submit';
    }
    
    if (i === quizData.length - 1) {
        submit_btn.removeEventListener('click', submit);
        container.innerHTML = `You scored ${score}/${quizData.length}`;
        submit_btn.value = 'Reload';
        submit_btn.addEventListener('click', () => {
            location.reload();
        })
    } else {
        i++;
        const opts = document.querySelectorAll('input[type=radio]');
        question.innerText = quizData[i].question;
        opt_a.nextElementSibling.innerText = quizData[i].a;
        opt_b.nextElementSibling.innerText = quizData[i].b;
        opt_c.nextElementSibling.innerText = quizData[i].c;
        opt_d.nextElementSibling.innerText = quizData[i].d;
        submit_btn.style.display = 'none';
        opts.forEach((opt) => {
            opt.addEventListener('click', () => {
                submit_btn.style.display = 'block';
            })
        })
    }
}

function submit() {
    mark();
    renderQuestion();
    uncheckOptions();
}
