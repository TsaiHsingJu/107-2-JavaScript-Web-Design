document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create an XHR Object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        console.log(xhr);
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        } else {
            console.log("Request error ...");
        }
    }


    xhr.onerror = function () {
        console.log("Request error ...");
    }

    xhr.send();
}