const 
q1 = 'Intelligence is the ability to adapt to change.',
cap1 = 'Stephen Hawking',
q2 = 'Heroes are not born. They are forged in darkness. Shaped in battle. Defined by sacrifice.',
cap2 = 'The Watcher',
q3 = 'Am like an addict. Oh I got a habit.',
cap3 = 'Neffex',
q4 = 'I had a dream, I was king. Woke up, still king.',
cap4 = 'Eminem';

const 
quotes = [q1, q2, q3, q4],
captions = [cap1, cap2, cap3, cap4];

let i = -1;

const
quote = document.querySelector('#quote'),
caption = document.querySelector('#caption');

function changequote() {
	i++
	if (i === 4) {
	    i = 0;
	    render(i);
	} else {
	    render(i);
	}
}

function render(param) {
	quote.innerHTML = quotes[param];
    caption.innerHTML = captions[param]; 
}

setInterval(changequote, 4000);
