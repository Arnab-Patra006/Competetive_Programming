# <a href="https://leetcode.com/contest/biweekly-contest-97/ranking">Biweekly Contest 97</a>

## <a href="https://leetcode.com/contest/biweekly-contest-97/problems/separate-the-digits-in-an-array/">6303. Separate the Digits in an Array</a>

### Accepted
```
class Solution {
public:
    vector<int> separateDigits(vector<int>& nums) {
        vector<int>ans;
        int n=nums.size();
        for(int i=0;i<n;i++)
        {
            int t=nums[i];
            stack<int>sk;
            while(t)
            {
                sk.push(t%10);
                t/=10;
            }
            while(!sk.empty())
            {
                ans.push_back(sk.top());
                sk.pop();
            }
        }
        return ans;
    }
};
```
## <a href="https://leetcode.com/contest/biweekly-contest-97/problems/maximum-number-of-integers-to-choose-from-a-range-i/">6304. Maximum Number of Integers to Choose From a Range I</a>

### Accepted
```
class Solution {
public:
    int maxCount(vector<int>& banned, int n, int maxSum) {
        unordered_map<int,int>mp;
        for(int i=0;i<banned.size();i++)
        {
            mp[banned[i]]=1;
        }
        int cnt=0;
        int sum=0;
        for(int i=1;i<=n;i++)
        {
            if(mp.find(i)==mp.end())
            {
                sum+=i;
                cnt++;
            }
            if(sum>maxSum)
            {
                if(cnt==0)
                {
                    return cnt;
                }
                return cnt-1;
            }
        }
        return cnt;
    }
};
```

## <a href="https://leetcode.com/contest/biweekly-contest-97/problems/maximize-win-from-two-segments/">6331. Maximize Win From Two Segments</a>

### upsolve pending
## <a href="https://leetcode.com/contest/biweekly-contest-97/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/">6305. Disconnect Path in a Binary Matrix by at Most One Flip</a>
### upsolve pending
