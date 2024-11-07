//Task #1: Logical NOT
    let firstValue = prompt("Enter first boolean value (true/false): ").toLowerCase() === "true";
    let secondValue = prompt("Enter second boolean value (true/false): ").toLowerCase() === "true";  
    let thirdValue = prompt("Enter third boolean value (true/false): ").toLowerCase() === "true";

    let result = !firstValue && !secondValue && !thirdValue;
    console.log("Result after negating and combining with AND: ", result);

//Task #2: Logical AND
    firstValue = prompt("Enter first boolean value (true/false): ").toLowerCase() === "true";
    secondValue = prompt("Enter second boolean value (true/false): ").toLowerCase() === "true";

    let combine = (firstValue && secondValue);
    console.log("Resut: ", combine);

//Task #3: Logical OR
    firstValue = prompt("Enter first boolean value (true/false): ").toLowerCase() === "true";
    secondValue = prompt("Enter second boolean value (true/false): ").toLowerCase() === "true";

    combine = (firstValue || secondValue);
    console.log("Resut: ", combine);

//Task #4: Logical Operator Precedence
    firstValue = prompt("Enter first boolean value (true/false): ").toLowerCase() === "true";
    secondValue = prompt("Enter second boolean value (true/false): ").toLowerCase() === "true";  
    thirdValue = prompt("Enter third boolean value (true/false): ").toLowerCase() === "true";

    let ORresult = (firstValue || secondValue);
    let ANDresult = (ORresult && thirdValue);
    console.log("Result: ", ANDresult);

//Task #5: Negating and Comparing Values
    let num1 = parseInt(prompt("Enter first number: "));
    let num2 = parseInt(prompt("Enter second number: "));

    let equalCheck = (num1 === num2);
    let gtCheck = (num1 > 0);
    let negated = (!equalCheck && !gtCheck);
    console.log("Result: ",negated);

//Task #6: Logical Operators with Mixed Data Types
    let num = parseInt(prompt("Enter a number: "));
    let booleanValue = prompt("Enter a boolean value (true/false): ").toLowerCase() === "true";

    result = (num > 0) && (booleanValue == true);
    console.log("Result: ", result);