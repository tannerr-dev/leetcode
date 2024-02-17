let arr1 = [-1,0,0,3,3,3,0,0,0];
let a = 6;
let arr2 = [1,2,2];
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
    while(count>=0){
        if(nums1[count]==0){
            nums1.splice(count, 1)
        } else {
            count--;
        }
    }
    console.log(nums1)
}
merge(arr1, a, arr2, b);