function bankAccount(cName, balance = 0) {
        this.customerName = cName,
        this.accountNumber = Date.now(),
        this.currentBalance = balance
}
bankAccount.prototype.deposite = function (ammount) {
    this.currentBalance += ammount
}

bankAccount.prototype.withdraw = function (amount) {
    this.currentBalance -= amount
}

// ======================= taking value from html form ================================== 
const accountForm = document.querySelector('#accountForm')
const cName = document.querySelector('#cName')
const cBalance = document.querySelector('#cBalance')
const button = document.querySelector('button')

const accounts = [];

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new bankAccount(cName.value, cBalance.value)
    accounts.push(account)
    cName.value = ''
    cBalance.value = ''
    console.log(accounts);
})

// ======================= Updating balance from html form ================================== 
const depositeForm = document.querySelector('#depositeForm')
const accNum = document.querySelector('#accNum')
const updateBal = document.querySelector('#updateBal')
const UpdateAmount = document.querySelector('button')

depositeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const findedValue = accounts.find((account) =>
        account.accountNumber === +accNum.value
    )
    findedValue.deposite(+updateBal.value)
    console.log(accounts);
})