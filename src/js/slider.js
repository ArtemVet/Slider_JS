let sliderLine = document.querySelector('.slider_line');
let article = sliderLine.querySelectorAll('article').length;
let position = 0;
let activArticle = 1;
let btn = document.querySelectorAll('.btn');

for(let i = 0; i < article; i++) {
	let span = document.createElement('span');
	document.querySelector('.items').appendChild(span);
	if(i == activArticle - 1) {
		document.querySelector('.items').querySelectorAll('span')[i].classList.add('active');
	}
}

function itemsActive() {
	for(let i = 0; i < article; i++) {
		if(i == activArticle - 1) {
			document.querySelector('.items').querySelectorAll('span')[i].classList.add('active');
		}else{
			document.querySelector('.items').querySelectorAll('span')[i].classList.remove('active');
		}
	}
}


btn[1].onclick = () => {
	if(activArticle < article) {
		position += 500;
		sliderLine.style.transform = 'translateX(-' + position + 'px)';
		activArticle++;
	}
	itemsActive();
};

btn[0].onclick = () => {
	if(activArticle > 1) {
		position -= 500;
		sliderLine.style.transform = 'translateX(-' + position + 'px)';
		activArticle--;
	}
	itemsActive();
};

