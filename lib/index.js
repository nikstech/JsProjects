// Constructor
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}


// Add Method to display
 function Display(){

 } 

// Add submit event to library form

let libraryForm =  document.getElementById('libraryForm');

libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("Success");
    let name = document.getElementById('book-name').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let cooking = document.getElementById('cooking');
    let programming = document.getElementById('programming');
    let type;
    
     if (fiction.checked){
        type = fiction.value;   
     }
     else if (cooking.checked){
        type = cooking.value;     
     }
     else if (programming.checked){
        type = programming.value;      
     }
    e.preventDefault();            // Stop the loading 
    let book = new Book(name,author, type)
    console.log(book);
    // debugger;
     
}
