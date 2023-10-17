class bankAccount {
    customerName;
    accountNum = Date.now();
    #balance;
    constructor(customerName, balance = 0) {
        this.customerName = customerName,
            this.#balance = balance;
    }
    deposite(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }
//    Without setter method: start 
/*
setBalance(amount) {
    if(isNaN(amount)){
       throw new Error('Wrong Amount input')
    }
    this.#balance = amount
}
getBalance() {
   return this.#balance 
}
*/
// Without setter method: End 

set balance(amount) {
    if(isNaN(amount)){
       throw new Error('Wrong Amount input')
    }
    this.#balance = amount
}
get balance() {
   return this.#balance 
}
}

class currentAccount extends bankAccount {
    transactionLimit = 50000

    // constructor(customerName, balance = 0){
    //     super(customerName, balance)
    // }

    takeBussinessLoan(loanAmmount) {
        console.log(`Taking a bussiness loan ${loanAmmount}`);
    }



}
const NikleshAcc = new bankAccount("Niklesh", 1000)
const SonuhAcc = new currentAccount("Sonu", 1000)
// SonuhAcc.deposite(500)
// SonuhAcc.setBalance(5000);
SonuhAcc.balance = 5000;
console.log(SonuhAcc.balance);