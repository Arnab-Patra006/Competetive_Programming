# <a href="https://leetcode.com/discuss/general-discussion/3230772/weekly-contest-334">Weekly Contest 334</a>


# <a href="https://leetcode.com/problems/left-and-right-sum-differences/">2574. Left and Right Sum Differences</a>
## Using Prefix Sum 
```class Solution {
public:
    vector<int> leftRigthDifference(vector<int>& nums) {
        int n=nums.size();
        vector<int>ans(n,0);
        vector<int>curr_sum(n,0);
        int total_arr_sum=0;
        for(int i=0;i<n;i++)
        {
            total_arr_sum+=nums[i];
            curr_sum[i]=total_arr_sum;
        }
        for(int i=0;i<n;i++)
        {
            int left_sum=curr_sum[i]-nums[i];
            int right_sum=total_arr_sum-curr_sum[i];
            ans[i]=abs(left_sum-right_sum);
        }
        return ans;
    }
};
```
# <a href="https://leetcode.com/problems/find-the-divisibility-array-of-a-string/">2575. Find the Divisibility Array of a String</a>
```
class Solution {
public:
    vector<int> divisibilityArray(string word, int m) {
        int n=word.size();
        long long curr_num=0;
        vector<int>ans(n,0);
        for(int i=0;i<n;i++)
        {
            curr_num=(10*curr_num+(word[i]-'0'))%m;
            if(curr_num==0)
            {
                ans[i]=1;
            }
        }
        return ans;
    }
};
```

# <a href="https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/">2576. Find the Maximum Number of Marked Indices</a>

## Two Pointer Approach | C++
```
class Solution {
public:
    int maxNumOfMarkedIndices(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int n=nums.size();
        int mid=n/2;
        int j=mid;
        int cnt=0;
        for(int i=0;i<mid;)
        {
            if(j<n && nums[i]<=(nums[j]/2))
            {
                cnt++;
                i++;
                j++;
            }
            else
            {
                j++;
            }
            if(j==n)
            {
                break;
            }
        }
        return 2*cnt;
    }
};
```

# <a href="https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/">2577. Minimum Time to Visit a Cell In a Grid</a>
```
Pending
```