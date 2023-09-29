// 1672. Richest Customer Wealth
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
    let richest=0;
    for(let i = 0; i < accounts.length; i++){
        let wealth = 0;
        for (let j = 0; j < accounts[i].length; j++){
            wealth += accounts[i][j]
        }
        if (wealth > richest){
            richest = wealth;
        }
    }
    return richest;
};


//first tryyyy