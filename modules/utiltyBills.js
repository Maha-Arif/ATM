import inquirer from "inquirer";
const Electric = Math.ceil(Math.random() * 1000 + 1);
const Gas = Math.ceil(Math.random() * 1000 + 1);
const Phone = Math.ceil(Math.random() * 1000 + 1);
async function utility(balance) {
    const input = await inquirer.prompt([{
            name: "BillType",
            type: "list",
            choices: ["electricity", "gas", "phone"],
            message: "select bill type ?"
        }]);
    if (input.BillType == "electricity") {
        console.log(`your bill amount: ${Electric}`);
        balance -= Electric;
    }
    else if (input.BillType == "gas") {
        console.log(`your bill amount: ${Gas}`);
        balance -= Gas;
    }
    else if (input.BillType == "phone") {
        console.log(`your bill amount: ${Phone}`);
        balance -= Phone;
    }
    return balance;
}
export default utility;
