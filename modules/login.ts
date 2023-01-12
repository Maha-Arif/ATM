import users from "./user.js";
import inquirer from "inquirer";
import mainScreen from "./screen.js";

async function login(){
    const answer = await inquirer.prompt([
        {
            name:"accountNo",
            type:"number",
            message:"Enter your Account Numbers"
        },
        {
            name:"Pin",
            type:"password",
            message:"Enter your Pin Code"
        }
    ]);
    let user = users.find(x => x.AccountNo == answer.accountNo && x.pinCode ==answer.Pin)
    if( typeof user != "undefined"){
        console.log(`Welcome ${user.name}`);
       // mainScreen(user.balance);
    }
    else{
        console.log("Your enter invalid pin or account number")
    }
}
export default login;