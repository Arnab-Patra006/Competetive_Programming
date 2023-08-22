# <a href="https://leetcode.com/contest/biweekly-contest-111/">Biweekly Contest 111</a>

# <a href="https://leetcode.com/contest/biweekly-contest-111/problems/number-of-beautiful-integers-in-the-range/">2827. Number of Beautiful Integers in the Range</a>


# <a href="https://leetcode.com/contest/biweekly-contest-111/problems/sorting-three-groups/">2826. Sorting Three Groups</a>


# <a href="https://leetcode.com/contest/biweekly-contest-111/problems/make-string-a-subsequence-using-cyclic-increments/">2825. Make String a Subsequence Using Cyclic Increments</a>

```
class Solution {
public:
    bool canMakeSubsequence(string str1, string str2) {
        int j=0;
        for(int i=0;i<str2.size();i++)
        {
            int flag=0;
            for(;j<str1.size();j++)
            {
                char need2=(char)str2[i]-'a'+96;
                if(str2[i]==str1[j])
                {
                    flag=1;
                    j++;
                    break;
                }
                else if(str2[i]=='a' && str1[j]=='z')
                {
                    flag=1;
                    j++;
                    break;
                }
                
                else if(str1[j]==need2)
                {
                    flag=1;
                    j++;
                    break;
                }
            }
            if(flag==0)
            {
                return false;
            }
        }
        return true;
    }
};
```



# <a href="https://leetcode.com/contest/biweekly-contest-111/problems/count-pairs-whose-sum-is-less-than-target/">2824. Count Pairs Whose Sum is Less than Target</a>
```
class Solution {
public:
    int countPairs(vector<int>& nums, int target) {
        int n=nums.size();
        int cnt=0;
        for(int i=0;i<n;i++)
        {
            for(int j=i+1;j<n;j++)
            {
                if(i==j)continue;
                else if(nums[i]+nums[j]<target)
                {
                    cnt++;
                }
            }
        }
        return cnt;
    }
};
```