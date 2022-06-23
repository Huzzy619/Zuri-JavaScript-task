
function calculate(){
    let total = 0;
    let num1, num2;
    let data;
    let counter;

    let choice = parseInt( prompt("Please select the operation to be performed, Using the serial number attached to them \n1.Addition\n2.Subtraction\
    \n3.Multiplication\n4.Division\n5.Modulus\n6.Power\n7.Squareroot"))

    switch(choice){
            
        case 1:

            counter= parseInt(prompt("Enter the number of values to be Added"));

            if (counter > 10){
                
                while(counter > 10){
                counter= parseInt(prompt("Enter the number of values to be Added (max: 10)"));
                }

            }
    
            while (counter>0 ){
            
                data= parseFloat((prompt("Input Values")));
                
                if (Number.isNaN(data)){
                    data = 0
                }
                total += data;
                
                counter--;
            }
            alert("The sum of the inputted numbers = " + total);

            repeat();


        
        break;
        case 2:
             num1 = (prompt("Enter First digit"));
             num2 = (prompt("Enter Second digit"))

             total = num1 - num2
             
             alert(num1 + " - " + num2 + " = " + total);

        repeat();

             

             
         break;

         case 3:
             counter=  parseInt(prompt("Enter the number of values to be multiplied"));
             console.log();
             total = 1
            while (counter>0 ){
            
                data=prompt("input values");

                if (Number.isNaN(data)){
                    data = 1
                }
                
                total *= data;
                
                counter--;
            }
            
            alert("The multiplication of the inputted numbers = " + total);

        repeat();


            
       break; 

         case 4:
             num1 = (prompt("Enter First digit"));
             num2 = (prompt("Enter Second digit"))

             if (num2 == 0 ){
                alert("*Error \n Invalid Denominator");
                // repeat();
             }
             else{

                total = num1 / num2
             
                alert(num1 + " / " + num2 + " = " +total);

             }
        
             repeat();


             
             
         break;
        
         case 5:
            
             num1= prompt("Enter the number to be divided ");
             num2= prompt("divided by ");

             total= num1 % num2;
            alert("The remainder is = " + total);

        repeat();


            
         break;   
        case 6:
             num1= prompt("Enter the number");
             num2= prompt("raised to power");

             total = Math.pow(num1, num2);
            
            alert(num1+ "**" + num2 +' = ' +total);

            
            break;
        case 7:
             num1= prompt("input value for its Squareroot");

             total = Math.sqrt(num1);
            
            alert("The square root of " + num1 + " = " + total );

        repeat();


            
            break;

        default:
            console.log("Invalid operator selected \nChoose from the given list ")
            alert("Invalid operator selected \nChoose from the given list ")
            repeat();
            
    }
}


function repeat(){
    rep = prompt("Would you like to run another calculation ?\nInput Yes or No [y/n]")

    rep = rep.toLowerCase()
    
    if (rep == "y" || rep =='yes'){

        calculate();
    }

    else if (rep == "n" || rep == 'no') {
        alert("Thank you for using the calculator")
    }

    else {
        alert("*Invalid input*")
        repeat();
    }
}

calculate();
    
