

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
                block.style.backgroundColor = 'lightblue';
            })
    
            row.appendChild(block);
        }
        document.body.appendChild(row);
    }
}



createGrid(10);



