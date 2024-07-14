#! usr/bin/env node
import inquirer from "inquirer";
import chalk  from "chalk";

console.log(chalk.bgCyan("\t\n ***Welcome to a simple cake maker designed by Syeda Ashna Ghazanfar*** "));

const message1 = await inquirer.prompt([
{
        message:"\nPlease select any one of the following flavours",
        type:"list",
        name :"flavour",
         choices :[{value :"chocolate"},{value : "vanilla"},{value : "strawberry"}]
},
    {
        message: "\nPlease select any one of the following toppings",
        type: "list",
        name: "Toppings",
        choices: [{ value: "Caramel Syrup" }, { value: "Choco Chips" }, { value: "Cherries" }]
    }

]);
if(message1.flavour === "chocolate"){
console.log (chalk.red("Your chocolate cake is baking..."));
setTimeout(() => {
    console.log(chalk.red("Your chocolate cake has baked!"))
}, 3000);
}else if(message1.flavour === "vanilla"){
    console.log(chalk.red("Your vanilla cake is baking..."));
    setTimeout(() => {
        console.log(chalk.red("Your vanilla cake has baked!"))
    }, 3000);
}
else if (message1.flavour === "strawberry"){
    console.log(chalk.red("Your strawberry cake is baking..."));
    setTimeout(() => {
        console.log(chalk.red("Your strawberry cake has baked!"))
    }, 3000);
};

 let Toppings = setTimeout(() => {
    console.log(chalk.cyanBright("Addings your desired toppings..."));
 }, 4000);
 let toppingsAftermessage = setTimeout(() => {
    console.log(chalk.cyanBright("Your toppings are added!"))
 }, 6000);
 let LastMessage = setTimeout(() => {
    console.log(chalk.bold("\t\n Your cake is ready, ENJOY!!"));

 }, 7000);
 


// if(message2.Toppings === "Caramel Syrup"){
//     console.log(chalk.italic("Adding Caramel Syrup..."));
//     setTimeout(() => {
//         console.log(chalk.bold("Caramel syrup added!"))
//     }, 3000);
// }
// else if(message2.Toppings === "Choco Chips"){
//     console.log(chalk.italic("Adding Choco Chips..."));
//     setTimeout(() => {
//         console.log(chalk.bold("Chocochips added!"))
//     }, 3000);
// }
//  else if(message2.Toppings === "Cherries"){
//     console.log(chalk.italic("Adding Cherries..."));
//     setTimeout(() => {
//         console.log(chalk.bold("Cherries added!"))
//     }, 3000);
// }
