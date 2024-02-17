let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];
let a = 3;
let b = 3;

var merge = function(nums1, m, nums2, n) {
    let count = n-1;
    let j = 0;
    while (count >=0){
        if (nums2[0] > nums1[j]){
            j++
        } else{
            nums1.splice(j, 0, nums2.shift())
            count--;
            j=0
        }
    }
    count= m + n + n - 1;
    // console.log(count)
    while(count>=0){
        if(nums1[count]==0){
            nums1.splice(count, 1)
        } else {
            count--;
        }
    }
    // console.log(nums2)
    console.log(nums1)
}
let output = merge(arr1, a, arr2, b);










// var notmerge = function(nums1, m, nums2, n) { for(let j = m + n; j >= 0; j--){
//         for(let i = n - 1; i >= 0; i-- ){
//             // console.log(nums2[i])
//             if(nums2[i]>nums1[j]){
//             }
               
//             console.log(nums2.shift())
//         }
//     }
//     nums1.splice(0, 0, 'butts')
//     console.log(nums1)
//     let result = 'butts'
//     // console.log(typeof result);
//     // console.log(result)
//     return result;
// }