const name = 'Amy';
const age = 19;
const job = 'Student';
const city = 'NewTaipai';
let html;

// Without template strings (es5)
html = '<ul>'+
       '<li> Name:  '+ name + '</li>'+
       '<li> Age: ' + age + '</li>' +
       '</ul>';
document.body.innerHTML = html;

// With template strings (es6)

function hi(){
        return 'Hi';
}

html =`
    <ul>
        <li> Name: ${name}</li>
        <li> Age: ${age}</li>
        <li> Job: ${job}</li>
        <li> City: ${city}</li>
        <li> ${(age>=20 ?'Over 20':'Under 20')}</li>
        <li> ${hi()}</li>
    </ul>
`;

document.body.innerHTML = html;
