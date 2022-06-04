document.getElementById("button").addEventListener("click", () =>{
    const incomeField = document.getElementById("income");
    const incomeAmount = incomeField.value;
    const income = parseInt(incomeAmount);
    const foodField = document.getElementById("food");
    const foodAmount = foodField.value;
    const food = parseInt(foodAmount);
    const rentField = document.getElementById("rent");
    const rentAmount = rentField.value;
    const rent = parseInt(rentAmount);
    const clothesField = document.getElementById("clothes");
    const clothesAmount = clothesField.value;
    const cloth = parseInt(clothesAmount);
    const cost = (food + rent + cloth)
    const balance = income - cost;
    if (income>cost) {
        const expences= document.getElementById("total_expenses");
        expences.innerText = cost;
        const remaining = document.getElementById("balance");
        remaining.innerText = balance;
    } else {
        alert("wrong input")
    }
})

document.getElementById("second-button").addEventListener("click", () =>{
    const savingParcentageField = document.getElementById("saving_parcent")
    const savingParcentageAmount = savingParcentageField.value;
    const parcent = parseInt(savingParcentageAmount)
    const balanceField = document.getElementById("balance");
    const balance = balanceField.innerText;
    const balanceAmount = parseInt(balance);
    const amount = (balanceAmount * (parcent/100)).toFixed(2);
    if (amount<balance) {
        const savingAmount = document.getElementById("saving-amount");
        savingAmount.innerText = amount;
        const remaingMoney = (balanceAmount - amount).toFixed(2);
        const remaingAmount = document.getElementById("remaing-balance");
        remaingAmount.innerText = remaingMoney;
    } else {
        alert("wrong input")
    }
})