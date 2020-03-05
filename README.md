![NHL Clicky Game](/public/assets/logo192.png)

**Created By**: `Shannen Grimes`
- - -

## Introduction
### :hockey:🏑NHL Match - Clicky Game
This is a web application built with React.  The application is a game that randomly generates images of hockey players.  Once you choose an image and click on it, images will shuffle.  The goal of the game is to click each image only once.  If you click an image more than once, you lose.  
- - - 

## Video of Bamazon working
![](https://j.gifs.com/VAroYv.gif)
- - -
[Click Here to Watch Video on YouTube](https://youtu.be/-24bN1DUXeg)

## Setup

1. Clone the repository
2. Run npm install to install the following packages:

      ### `npm install`
      - 
      | Package       | Descr                        | Link                                                            |
      | ------------- |:-------------:               | -----:                                                          |
      | mySQL         | Open Source Database         | [MySQL](https://www.mysql.com/downloads/)                       |
      | Inquirer      | Node.js Cmd Line Interface   | [Inquirer](https://www.npmjs.com/package/inquirer)              |
      | CLI Table     | Utilty for creating tables   | [CLI TABLE](https://www.npmjs.com/package/cli-table)            |
- - - 

## Command Line - Output Examples

3. Open the `bamazon.js` file in the terminal.
4. In the command line, type `node bamazon.js` and hit enter
5. The *Customer* will be provided a table of available inventory for sale.
6. The *Customer* is then prompted: `What would you like to purchase? Enter the Item ID.`
7. The *Customer* is prompted again: `Input the number of items you wish to purchase.` The result must be numeric.
8. After a purchase is made, the qty and the total of the order are confirmed in the command line.
9. The *Customer* is then prompted with `Would you like to purchase another item?`. 
10. Type *N*, to end the program.  Type *Y*, to make another purchase from the current *Inventory*. **BUG: The answer defaults to `Null`.

 - - - 

 ## Output Examples

 ### Successful Connection with current inventory displayed
 ![connection](/images/connection.png)

 ### Successful Purchase
![successfulPurchase](/images/successfulPurchase.png) 

### Invalid Selection
![invalid](/images/invalid.png)

### Reduction in inventory
![inventoryReduced](/images/inventoryReduced.png)

### Exiting the program
![Results](/images/exit.png)

- - - 

## Technologies Used
1. Node.js
2. Inquirer
3. CLI Table
4. Video Proc
5. YouTube
6. Gif.com

- - - 

## Known Issues
1. There is an error with the Y/N prompt.  It is defaulting to null and the prompt is repeating.
2. You cannot see the updated reduction in inventory, until you rerun the program.
