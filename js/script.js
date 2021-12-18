// variables
let addNotes = document.querySelector('.add');
let notesContainer = document.querySelector('.notesContainer');
// Function
let createNoteBx = () => {
    let noteBx = document.createElement('div');
    let addBtn = document.createElement('div'); 
    let delBtn = document.createElement('div'); 
    let teaxtArea = document.createElement('textarea');
    noteBx.setAttribute('class','noteBx');
    teaxtArea.setAttribute('class','textBx');
    teaxtArea.setAttribute('placeholder','Take Note.');
    addBtn.setAttribute('class','addBtn');
    addBtn.innerHTML = `<ion-icon name="save-outline"></ion-icon>`;
    delBtn.setAttribute('class','delBtn');
    delBtn.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;

    noteBx.appendChild(teaxtArea);
    noteBx.appendChild(addBtn);
    noteBx.appendChild(delBtn);

    deleteNotes(delBtn);
    editNotes(addBtn,teaxtArea);

    notesContainer.appendChild(noteBx);
}

let deleteNotes = (delBtn) =>{
    delBtn.onclick = () => {
        delBtn.parentNode.remove();
    }
}


addNotes.onclick = () => {
    createNoteBx();
}

let editNotes = (addBtn,teaxtArea) => {
    addBtn.onclick = () => {
        addBtn.classList.toggle("read");
        teaxtArea.readOnly = true;
        
        
        if(addBtn.classList.contains("read") != true ){
            teaxtArea.readOnly = false;
            addBtn.innerHTML = `<ion-icon name="save-outline"></ion-icon>`;
        }
        else{
            addBtn.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;

        }
    }
}