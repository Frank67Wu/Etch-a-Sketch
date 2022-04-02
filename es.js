

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.width = '960px';
        row.style.height = 960 / n + "px";
        
        for (let j = 0; j < n; j++) {
            let block = document.createElement('div');
            
            block.classList.add('singleBlock');
            block.style.width = 960/n + "px";
            block.style.height = 960/n + "px";
            block.addEventListener('mouseenter', e => {
                block.style.backgroundColor = 'black';
            })
    
            row.appendChild(block);
        }
        let myContainer = document.getElementsByClassName('container')[0];
        myContainer.appendChild(row);
    }
}


function removeGrid() {
    let myContainer = document.getElementsByClassName('container')[0];
    for (let i = 0; i  < myContainer.children.length; i++) {
        myContainer.remove(myContainer.firstChild);
    }   
    let newContainer = document.createElement('div');
    newContainer.classList.add('container');
    document.body.appendChild(newContainer);
}

function userPrompt() {
    removeGrid();
    let a = prompt();
    if (a <= 100) {
        createGrid(a);
    }
    else {
        a = prompt();
    } 
}

let resetButton = document.body.getElementsByTagName('button')[0];
resetButton.addEventListener('click', e => {
    userPrompt();
})



