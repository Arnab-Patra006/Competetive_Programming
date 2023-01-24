## Conest Link :(https://leetcode.com/contest/biweekly-contest-85/)

## Problem link 1 :(https://leetcode.com/contest/biweekly-contest-85/problems/minimum-recolors-to-get-k-consecutive-black-blocks/)

## Solution 1:
```
class Solution {
public:
    int minimumRecolors(string blocks, int k) {
        int n=blocks.size();
        int mn=INT_MAX;
        for(int i=0;i<=n-k;i++)
        {
            int w=0;
            for(int j=i;j<i+k;j++)
            {
                if(blocks[j]=='W')
                {
                    w++;
                }
            }
            mn=min(mn,w);
        }
        return mn;
    }
};
```

## Problem link 2 :(https://leetcode.com/contest/biweekly-contest-85/problems/time-needed-to-rearrange-a-binary-string/)

## Solution 2:
```
class Solution {
public:
    int secondsToRemoveOccurrences(string s) {
        int cnt=0;
        int flag=1;
        int n=s.size();
        while(flag==1)
        {
            flag=0;
            for(int i=0;i<n-1;)
            {
                if(s[i]=='0' && s[i+1]=='1')
                {
                    s[i]='1';
                    s[i+1]='0';
                    flag=1;
                    i=i+2;
                }
                else
                {
                    i++;
                }
            }
            if(flag==1)
            {
                cnt++;
            }
            else
            {
                break;
            }
        }
        return cnt;
    }
};
```

## Problem link 3 :(https://leetcode.com/contest/biweekly-contest-85/problems/shifting-letters-ii/)

## Solution 3:

```
Haven't solve yet.
```

## Problem link 4 :(https://leetcode.com/contest/biweekly-contest-85/problems/maximum-segment-sum-after-removals/)

## Solution 4:

```
Haven't solve yet.
```
