# <a href="https://leetcode.com/contest/weekly-contest-357">Weekly Contest 357</a>


# <a href="https://leetcode.com/problems/check-if-it-is-possible-to-split-array/">2811. Check if it is Possible to Split Array</a>

```
class Solution {
public:
    bool canSplitArray(vector<int>& nums, int m) {
        int n=nums.size();
        if(n==1 || n==2)
        {
            return true;
        }
        for(int i=0;i<n-1;i++)
        {
            if(nums[i]+nums[i+1]>=m)
            {
                return true;
            }
        }
        return false;
    }
};
```
# <a href="https://leetcode.com/contest/weekly-contest-357/problems/faulty-keyboard/">2810. Faulty Keyboard</a>
```
class Solution {
public:
    string finalString(string s) {
        string ans="";
        for(int i=0;i<s.size();i++)
        {
            if(s[i]=='i')
            {
                reverse(ans.begin(),ans.end());
            }
            else
            {
                ans+=s[i];
            }
        }
        return ans;
    }
};
```