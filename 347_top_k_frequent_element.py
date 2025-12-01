# 347. Top K Frequent Elements
# Solved
# Medium
# Topics
# premium lock iconCompanies
#
# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
#
#
#
# Example 1:
#
# Input: nums = [1,1,1,2,2,3], k = 2
#
# Output: [1,2]
#
# Example 2:
#
# Input: nums = [1], k = 1
#
# Output: [1]
#
# Example 3:
#
# Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
#
# Output: [1,2]
#
#
#
# Constraints:
#
#     1 <= nums.length <= 105
#     -104 <= nums[i] <= 104
#     k is in the range [1, the number of unique elements in the array].
#     It is guaranteed that the answer is unique.
#
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count_dict = {}
        for num in nums:
            if num not in count_dict.keys():
                count_dict[num] = 1
            else:
                count_dict[num] += 1

        top_k = []
        for j in range(k):
            highest_count = (0,0)
            for i in count_dict.keys():
                if count_dict[i] > highest_count[1]:
                    highest_count = (i, count_dict[i])
            top_k.append(highest_count[0])
            count_dict[highest_count[0]] = 0
            
        return top_k
# this is my first attempt and is NOT performant at all maybe O(n^2)
# as always i try an attempt before looking up the answer






