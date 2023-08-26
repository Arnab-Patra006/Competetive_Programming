# <a href="https://leetcode.com/contest/weekly-contest-354/problems/length-of-the-longest-valid-substring/">2781. Length of the Longest Valid Substring</a>


# <a href="https://leetcode.com/contest/weekly-contest-354/problems/minimum-index-of-a-valid-split/">2780. Minimum Index of a Valid Split</a>



# <a href="https://leetcode.com/contest/weekly-contest-354/problems/maximum-beauty-of-an-array-after-applying-operation/">2779. Maximum Beauty of an Array After Applying Operation</a>
```
class Solution {
public:
    int maximumBeauty(vector<int>& nums, int k) {
        int n=nums.size();
        int range=1e5;
        vector<int>v(range+1,0);
        
        for(int i=0;i<n;i++)
        {
            int t1=nums[i]-k;
            int t2=nums[i]+k;
            t1=max(0,t1);
            t2=min(range,t2+1);
            v[t1]++;
            v[t2]--;
        }
        int mx=INT_MIN;
        int prev=0;
        for(int i=0;i<v.size();i++)
        {
            int temp=v[i]+prev;
            v[i]=max(v[i],temp);
            prev=v[i];
            mx=max(mx,v[i]);
        }
        return mx;
    }
};
```
# <a href="https://leetcode.com/contest/weekly-contest-354/problems/sum-of-squares-of-special-elements/">2778. Sum of Squares of Special Elements</a>

```
class Solution {
public:
    int sumOfSquares(vector<int>& nums) {
        int ans=0;
        for(int i=1;i<=nums.size();i++)
        {
            if(nums.size()%i==0)
            {
                ans+=(nums[i-1]*nums[i-1]);
            }
        }
        return ans;
    }
};
```