class bankAccount {
    customerName;
    accountNum = Date.now();
    balance;
    constructor(customerName, balance = 0) {
        this.customerName = customerName,
            this.balance = balance;
    }
    deposite(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        this.balance -= amount
    }
}

class currentAccount extends bankAccount {
    transactionLimit = 50000

    // constructor(customerName, balance = 0){
    //     super(customerName, balance)
    // }

    takeBussinessLoan(loanAmmount){
        console.log(`Taking a bussiness loan ${loanAmmount}`);
    }



}
const NikleshAcc = new bankAccount("Niklesh", 1000)
const SonuhAcc = new currentAccount("Sonu", 1000)

SonuhAcc.deposite(500)
console.log(SonuhAcc);
console.log(SonuhAcc.takeBussinessLoan(1000));