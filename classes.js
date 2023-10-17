class bankAccount  {
    customerName;
    accountNum = Date.now();
    balance;
     constructor(customerName,balance=0){
        this.customerName = customerName,
        this.balance = balance;
     }
     deposite(amount){
        this.balance+=amount
     }
     withdraw(amount){
        this.balance-=amount
     }
}

const NikleshAcc = new bankAccount("Niklesh",1000)
NikleshAcc.deposite(200)
NikleshAcc.withdraw(100)
console.log(NikleshAcc);