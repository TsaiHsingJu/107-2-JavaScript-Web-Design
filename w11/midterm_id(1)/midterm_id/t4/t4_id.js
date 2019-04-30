const lottoInfo =[
    {
        id:1,
        date:new Date('4/1/2019'),
        num:[10,13,23,34,39,43],
        winners:[
            {
                name:'John Smith',
                money:20000
            }
        ]

    },
    {
        id:2,
        date:new Date('4/8/2019'),
        num:[9,15,18,22,34,40],
        winners:[]
    },
    {
        id:3,
        date:new Date('4/15/2019'),
        num:[18,21,28,33,39,40],
        winners:[
            {
                name:'Amy Mary',
                money:3000
            },
            {
                name:'Steve Cash',
                money:25000
            },
            {
                name:'Helen Kinster',
                money:87000
            }
        ]
    },
];

function printLottoInfo(){
    let htmlcode = `<ul style="list-style:none">`;
    lottoInfo.forEach(function(p){
        let date = p.date.getFullYear()+'-'+(p.date.getMonth()+1)+'-'+p.date.getDate();
        htmlcode = htmlcode + `
            <li>id: ${p.id}</li>
            <li>date: ${date}</li>
            <li>num: ${p.num}</li>
        `;
        p.winners.forEach(function(w){
            htmlcode = htmlcode + `
                <li>winnner: ${w.name}</li>
                <li>money: ${w.money}</li>
            `;
        });
        htmlcode += `<br>`;
    });
    htmlcode += `</ul>`;
    document.body.innerHTML = htmlcode;
}

printLottoInfo();

let lotto={};
lotto.id = 4;
lotto.date =new Date('4/22/2019');
lotto.num = [5,15,18,22,32,48];

let winner = {};
winner.name = 'George Dole';
winner.money = 50000;
lotto.winners = [winner];
lottoInfo.push(lotto);

printLottoInfo();
