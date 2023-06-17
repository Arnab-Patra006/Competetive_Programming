# Biweekly Contest 106 (3/4)

# P-3 : 2731. Movement of Robots
```
class Solution {
public:
    int sumDistance(vector<int>& nums, string s, int d) {
        
        int n=nums.size();
        //Move robots irrespective of collisons.
        for(int i=0;i<n;i++)
        {
            if(s[i]=='L')
            {
                nums[i]-=d;
            }
            else
            {
                nums[i]+=d;
            }
        }
        //sort robot positions to calculate sum of distances effectively.
        sort(nums.begin(),nums.end());
       
        //To calculate total distance among all pairs
        int mod=1e9+7;
        long long prev_sum=0;
        long long total_dist=0;
        for(long long i=0;i<n;i++)
        {
            total_dist=((((i*nums[i])-prev_sum)%mod)+total_dist)%mod;
            prev_sum=(prev_sum+nums[i])%mod;
        }
        return total_dist;
    }
};
```
# P-2 : 2730. Find the Longest Semi-Repetitive Substring
```
class Solution {
public:
    int longestSemiRepetitiveSubstring(string s) {
        int left=0,right=1;
        if(s.size()==1)
        {
            return 1;
        }
        int allow=0;
        int ans=INT_MIN;
        while(right<s.size())
        {
            if(s[right]==s[right-1] && allow==0)
            {
                allow++;
            }
            else if(s[right]==s[right-1] && allow==1)
            {
                allow++;
                while(left<right && allow==2)
                {
                    if(s[left]==s[left+1] && allow==2)
                    {
                        allow--;
                    }
                    left++;
                }
            }
            ans=max(ans,right-left+1);
            right++;
        }
        return ans;
    }
};
```
# P-1 : 2729. Check if The Number is Fascinating
```
class Solution {
public:
    bool isFascinating(int n) {
        int n2=n*2;
        int n3=n*3;
        string s=to_string(n);
        s+=to_string(n2);
        s+=to_string(n3);
        unordered_map<char,int>mp;
        for(int i=0;i<s.size();i++)
        {
            mp[s[i]]++;
        }
        for(auto it:mp)
        {
            if(it.first=='0')
            {
                return false;
            }
            if(it.first!=0 && it.second!=1)
            {
                return false;
            }
        }
        return true;
    }
};
```