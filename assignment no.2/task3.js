var a = 4;
    if (++a === 5) {
        alert("give condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83){
        alert("give condition for variable b is true");
    }

    var c = 12;
    if (c++ == 13){
        alert("condition 1 is true");
    }
    if (c === 13){
        alert("Condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
    }
    if (c === 14){
        alert("Condition 4 is true");
    }

    var materialCost = 2000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost
    if (totalCost === materialCost + laborCost) {
        alert("The Cost equals");
    }
    
    else {
        alert("the cost is not equal");
    }