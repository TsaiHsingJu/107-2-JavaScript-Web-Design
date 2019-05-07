document.getElementById('loan-form')
.addEventListener('submit',function(e){
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    setTimeout(calculateResults,2000);
    e.preventDefault();
});

function calculateResults(){
    console.log("Calculating ...");
    //UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;

    const x = Math.pow(1+calculateInterest, calculatePayments);
    const monthly = (principal * calculateInterest * x)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
    }

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}