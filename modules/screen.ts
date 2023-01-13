import inquirer from "inquirer";
import cashwithdraw from "./cashwithdraw.js";
import cashDeposite from "./cashDeposite.js";
import transfer from "./transfer.js";
import utility from "./utiltyBills.js";

async function anotherTransation() {
    const oTrans= await inquirer.prompt([{
        name:"otherTrans",
        type:"list",
        choices:["yes","no"],
        message:"do you want another Trancation ?"
    }])
    return oTrans.otherTrans;
}

async function mainScreen(balance:number){
    do {
    const options = await inquirer.prompt([
        {
            name:"menu",
            type: "list",
            message:"Please Select your desired option",
            choices: ["Balance Inquiry","cash withdraw","Utility Bills","Cash Deposit", "Money Transfer","Exit"]
        }
    ]);
    switch(options.menu){
        case "Balance Inquiry":
          console.log(`Your Current Balance is ${balance}`);
        break;
        case "cash withdraw":
           await cashwithdraw(balance);
           console.log(`your transaction is successfull and your new balance is : ${balance}`);
        break;
        case "Utility Bills":
            balance= await utility(balance);
            console.log(`your transaction is successfull and your new balance is : ${balance}`);
            break;
        case "Cash Deposit":
            balance= await cashDeposite(balance);
            console.log(`your transaction is successfull and your new balance is : ${balance}`);
        break;
            case "Money Transfer": 
            balance= await transfer(balance);
        break;
        case "Exit": 
        anothertrans = "no";
        break;
    }
    if(options.menu !== "Exit"){
  var anothertrans = await anotherTransation();  
}
if(anothertrans =="no"){
    console.log("Thanku for using Services");
}
    }
while(anothertrans != "no")
}

export default mainScreen;