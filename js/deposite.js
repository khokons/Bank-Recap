

document.getElementById('Button_diposit').addEventListener('click',function(){


const depositeField =document.getElementById('Deposite_field');
const depositAmountString =depositeField.value;
const newDepositAmount = parseFloat(depositAmountString);


const depositElement =document.getElementById('deposite_total');
const previusDepositString =depositElement.innerText;
const previusDeposit = parseFloat(previusDepositString);


const newDepositTotal =previusDeposit+newDepositAmount;

depositElement.innerText = newDepositTotal;



// Balance=====================

const balanceTotalElement =document.getElementById('balence_total');
const previusBalanceString =balanceTotalElement.innerText;
const previusBalanceTotalAmount =parseFloat(previusBalanceString);


const newBalanceTotal =previusBalanceTotalAmount+newDepositAmount;

balanceTotalElement.innerText=newBalanceTotal;


depositeField.value = '';

})