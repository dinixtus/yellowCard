const rootElement = document.getElementById('root')

console.log('work');


//Button`s script for hide and show 'hideBlock'

let showButton = document.getElementById('showButton');
let hideBlock = document.getElementById('hideBlock');
let closeButton = document.getElementById('closeButton');

showButton.addEventListener('click', function(){
    hideBlock.style.display = 'flex';
});

closeButton.addEventListener('click', function(){
    hideBlock.style.display = 'none';
})

//Input´s script


let addCard = document.getElementById('addCard');


addCard.addEventListener('click', function() {

    let titleValue = document.getElementById('titleInput').value;
    let textValue = document.getElementById('textInput').value;
    let nameValue = document.getElementById('nameInput').value;

    const newBlock = document.createElement('div');
    newBlock.className = 'card';
    newBlock.innerHTML = `
        <img src="imges/blogimage.png" alt="img">
        <div class="cardTittle">Learning</div>
        <h2>Published 21 Dec 2023</h2>
        <a href="#">${titleValue}</a>
        <p>${textValue}</p>
        <div class="author">
            <div class="authorName">${nameValue}</div>
        </div>
    `;

    document.getElementById('cards').appendChild(newBlock);

    // Optionally, clear the form inputs after creation
    document.getElementById('form').reset();
})
