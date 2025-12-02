// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

var runningSum = function(nums) {
    let total=0;
    let newArr=[];
    for (let i =0; i < nums.length; i++){
        total += nums[i]
        newArr.push(total)
    }
    return newArr
};

//second try, needed to declare newArr as an array not just empty variable. 
//maybe just initialize variables instead of being lazy 