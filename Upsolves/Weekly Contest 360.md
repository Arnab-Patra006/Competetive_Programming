# <a href="https://leetcode.com/contest/weekly-contest-360">Weekly Contest 360</a>

## 3 & 4th remaining

# 2834. Find the Minimum Possible Sum of a Beautiful Array
```
class Solution {
public:
    long long minimumPossibleSum(int n, int target) {
        long long sum=1;
        n--;
        int i=1;
        unordered_map<int,int>mp;
        mp[1]=1;
        i++;
        while(n>0)
        {
            int can=target-i;
            if(mp.find(can)==mp.end())
            {
                sum+=i;
                n--;
                mp[i]=1;
            }
            i++;
        }
        return sum;
    }
};
```
# 2833. Furthest Point From Origin
```
class Solution {
public:
    int furthestDistanceFromOrigin(string moves) {
        int l=0,r=0,d=0;
        for(int i=0;i<moves.size();i++)
        {
            if(moves[i]=='L')
            {
                l++;
            }
            else if(moves[i]=='R')
            {
                r++;
            }
            else 
            {
                d++;
            }
        }
        int ans=abs(l-r)+d;
        return ans;
    }
};
```
