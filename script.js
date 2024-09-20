//your JS code here. If required.
let container = document.createElement('div');
container.className = 'container';
for(let i = 0; i <800; i ++){
	let square = document.createElement('div');
	square.className = 'square';
	container.appendChild(square);
}
document.body.appendChild(container);
let squares = document.querySelectorAll('.square');

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

squares.forEach(square => {
	square.addEventListener('mouseover', () =>{
		square.style.backgroundColor = getRandomColor();
	setTimeout (() =>{
		square.style.backgroundColor = 'white';
	}, 1000);
});
});






