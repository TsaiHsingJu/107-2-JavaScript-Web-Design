class Book {
    constructor(title1, title2, title3) {
        this.title1 = title1;
        this.title2 = title2;
        this.title3 = title3;
    }
}

class UI {
    addBookToList(book) {
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
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById('title1').value = '';
        document.getElementById('title2').value = '';
        //document.getElementById('title3').value ='title3 = title1/title2*title2';
    };
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.getElementById('book-form');
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('book-form').addEventListener('submit', function (e) {
    //get form values
    const title1 = document.getElementById('title1').value;
    const title2 = document.getElementById('title2').value;
    //const title3 = document.getElementById('title3').value;

    //Instantiate a book
    const book = new Book(title1, title2);

    //Instantiate UI
    const ui = new UI();
    if (title1 === '' || title2 === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('BMI Added!', 'success');
        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('BMI removed!', 'success');
    e.preventDefault();
})

////////////////////////////////////////////////////////////////////////////////////
// document.getElementById('book-form').addEventListener('submit', function (e) {
//             const title1 = document.getElementById('title1');
//             const title2 = document.getElementById('title2');
//             const title3 = document.getElementById('title3');
//             const title4 = document.getElementById('title4');
//             const title5 = document.getElementById('title5');
//             const title6 = document.getElementById('title6');
//             const title7 = document.getElementById('title7');

let title1 = title1 / 100;
let title3 = title1 / (title2 * title2);
let title4 = 18.5 * (title2 * title2);
let title5 = 24 * (title2 * title2);
let title6 = (title2 - title4).toFixed(1);
let title7 = (title5 - title2).toFixed(1);

if (title1 === 0 || title2 === 0) {
    row.innerHTML = `
            <td>打字阿~</td>
    `;
} else if (18.5 > title3) {
    row.innerHTML = `
            <td>${title2} 體重過輕</td>
            <td>${title3}</td>
            <td>應該增加${title6}公斤</td>
    `;
} else if (18.5 <= title3 && title3 < 24) {
    row.innerHTML = `
            <td>${title2} 正常範圍</td>
            <td>${title3}</td>
            <td>繼續保持</td>
    `;
} else if (24 <= title3 && title3 < 27) {
    row.innerHTML = `
            <td>${title2} 體重稍重</td>
            <td>${title3}</td>
            <td>應該增加${title7}公斤</td>
    `;
} else if (27 <= title3 && title3 < 30) {
    row.innerHTML = `
            <td>${title2} 輕度肥胖</td>
            <td>${title3}</td>
            <td>應該增加${title7}公斤</td>
    `;
} else if (30 <= title3 && title3 < 35) {
    row.innerHTML = `
            <td>${title2} 中度肥胖</td>
            <td>${title3}</td>
            <td>應該增加${title7}公斤</td>
    `;
} else if (35 <= title3) {
    row.innerHTML = `
            <td>${title2} 重度肥</td>
            <td>${title3}</td>
            <td>應該增加${title7}公斤</td>
    `;
}
e.preventDefault();
