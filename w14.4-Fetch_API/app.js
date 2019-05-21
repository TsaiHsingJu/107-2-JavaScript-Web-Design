document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExtrenal);

function getText() {
    fetch('data.txt')
        .then(function (res) {
            // console.log(res);
            return res.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });

}

function getJson() {
    fetch('customers.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);

            let output = '';

            data.forEach(function (customer) {
                output += `
            <ul>
                <li>ID:${customer.id}</li>
                <li>Name:${customer.name}</li>
                <li>Company:${customer.company}</li>
                <li>Phone:${customer.phone}</li>
            </ul>
            `;
            });

            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getExtrenal() {


    fetch('http://api.icndb.com/jokes/random/5')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let output = ``;
            if (data.type === 'success') {
                data.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Error: Something went wrong</li>'
            }
            document.querySelector('#output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}