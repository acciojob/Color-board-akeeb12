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
    let r = Math.floor(Math.random() * 256); // pick a "red" from 0 - 255
    let g = Math.floor(Math.random() * 256); // pick a "green" from 0 - 255
    let b = Math.floor(Math.random() * 256); // pick a "blue" from 0 - 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

squares.forEach(square => {
	square.addEventListener('mouseover', () =>{
		square.style.backgroundColor = getRandomColor();
	setTimeout (() =>{
		square.style.backgroundColor = 'white';
	}, 1000);
});
});






