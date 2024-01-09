

document.getElementById('withdraw_btn').addEventListener('click',function(){

    const withdrawFieldElement = document.getElementById('withdraw_field');
    const withdrawFieldElementString =withdrawFieldElement.value;
    const newWithdrawAmount = parseFloat(withdrawFieldElementString);

    withdrawFieldElement.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a number');
        return;
    }


    const withdrawTotalElement =document.getElementById('withdraw_total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const previusWithdrawAmount = parseFloat(withdrawTotalElementString);


    


    const balenceTotalElement = document.getElementById('balence_total');
    const balenceTotalString =balenceTotalElement.innerText;
    const PreviusTotalbalance = parseFloat(balenceTotalString);

    
    if(newWithdrawAmount > PreviusTotalbalance){
        alert('Not satisfied Balance');
        return;
        
    }

    const totalWithdraw =previusWithdrawAmount+newWithdrawAmount;
    withdrawTotalElement.innerText = totalWithdraw; 



    const NewTotalbalance = PreviusTotalbalance-newWithdrawAmount;

    balenceTotalElement.innerText =NewTotalbalance;


 
   


})