import inquirer from "inquirer";
async function otherAmount(balance) {
    const otherAmt = await inquirer.prompt([
        {
            name: "other Amount",
            type: "number",
            message: "Enter your Amount"
        }
    ]);
    if (otherAmt.otherAmount < balance) {
        balance -= otherAmt.otherAmount;
    }
    else {
        console.log("you have insuffient balance");
        balance = await otherAmount(balance);
    }
    return balance;
}
;
async function cashwithdraw(balance) {
    const cash = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: ["500", '1000', '2000', '5000', 'other Amount'],
            message: "Select Amount"
        }
    ]);
    switch (cash.amount) {
        case '500':
            if (balance > Number(cash.amount)) {
                balance -= 500;
                console.log(`your remaning balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance, please recharge your account");
            }
            break;
        case '1000':
            if (balance > Number(cash.amount)) {
                balance -= 1000;
                console.log(`your remaning balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance, please recharge your account");
            }
            break;
        case '2000':
            if (balance > Number(cash.amount)) {
                balance -= 2000;
                console.log(`your remaning balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance, please recharge your account");
            }
            break;
        case '5000':
            if (balance > Number(cash.amount)) {
                balance -= 5000;
                console.log(`your remaning balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance, please recharge your account");
            }
            break;
        case "other Amount":
            balance = await otherAmount(balance);
            console.log(`your remaning balance is: ${balance}`);
            break;
    }
}
export default cashwithdraw;
