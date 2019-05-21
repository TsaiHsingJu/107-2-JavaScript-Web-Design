class Book{
    constructor(title1,title2,title3){
        this.title1 = title1;
        this.title2 = title2;
        this.title3 = title3;
    }
}



class UI{
    addBookToList(book){
        const list = document.getElementById('book-list');
        //create an element
        const row = document.createElement('tr');
        //insert cols
        row.innerHTML = `
            <td>${book.title1}</td>
            <td>${book.title2}</td>
            <td>${book.title3}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById('title1').value ='';
        document.getElementById('title2').value ='';
        //document.getElementById('title3').value ='title3 = title1/title2*title2';
    };
    showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.getElementById('book-form');
        container.insertBefore(div,form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
}

document.getElementById('book-form').addEventListener('submit',function(e){
    //get form values
    const title1 = document.getElementById('title1').value;
    const title2 = document.getElementById('title2').value;
    //const title3 = document.getElementById('title3').value;

    //Instantiate a book
    const book = new Book(title1,title2
        );

    //Instantiate UI
    const ui = new UI();
    if(title1 === '' || title2 === ''){
        ui.showAlert('Please fill in all fields','error');
    }
    else{
        ui.addBookToList(book);
        ui.showAlert('BMI Added!','success');
        ui.clearFields();
    }
    
    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('BMI removed!','success');
    e.preventDefault();
})