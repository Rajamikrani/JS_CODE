// Class and object
class Pen {
    constructor(name , color){
        this.name =  name;
        this.color = color;
    }
    getPen(){
        console.log("The Pen is " , this.name , " and color is " , this.color)
    }
}

let cello = new Pen("Celllo" , "Red")
cello.getPen();

let flair = new Pen("Flair" , "Black")
flair.getPen();

// Encapsulation (Data Hiding)
class BankAccount {
    #balance;
    constructor(owner , balance){
        this.owner = owner;
        this.#balance = balance;
    }
    deposit(amount){
        if(amount > 0){
            this.#balance +=amount;
            console.log("Deposited : " , amount);
        } else {
            console.log("Invalid Deposit amount");
        }
    }
    getBalance(){
        return `Balance : ${this.#balance}`;
    }
}

let account = new BankAccount("Alice" , 500);
account.deposit(200);
console.log(account.getBalance());