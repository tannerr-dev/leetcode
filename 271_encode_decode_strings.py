##Encode and Decode Strings
from typing import List
class Solution:
    def encode(self, strs: List[str]) -> str:
        newStr= ""
        for s in strs:
            newStr += f"{str(len(s))}#{s}"
        return newStr

    def decode(self, s: str) -> List[str]:
        newList = []
        pos = 0
        strLen = ""
        while pos < len(s):
            if s[pos] != "#":
                strLen += s[pos]
                pos +=1
            else:
                pos += 1
                strLen = int(strLen)
                word = s[pos : pos + strLen]
                # word = ""
                # for i in range(0, strLen):
                #     word += s[pos+i]
                pos = pos + strLen
                newList.append(word)
                strLen = ""
        return newList

strs = ["neet","code","love","you"]

print("")
res = Solution().encode(strs)
print(res)
print("")
res1 = Solution().decode(res)
print(res1)
print("")

