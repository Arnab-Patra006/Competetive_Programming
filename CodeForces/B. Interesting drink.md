# <a href="https://codeforces.com/contest/706/problem/B">B. Interesting drink</a>

## Approach 1 : C++ | Binary Search on possible store costs O(NlogN) | 1100

```
#include<bits/stdc++.h>
using namespace std;
int find_max_idx(vector<int>&prices,int coins)
{
    int l=0;
    int r=prices.size()-1;
    int idx=-1;
    while(l<=r)
    {
        int mid=l+(r-l)/2;
        if(prices[mid]<=coins)
        {
            idx=mid;
            l=mid+1;
        }
        else if(prices[mid]>coins)
        {
            r=mid-1;
        }
    }
    int ans=idx+1;
    return ans;
}
int main()
{
    int n;
    cin>>n;
    vector<int>prices(n,0);
    for(int i=0;i<n;i++)
    {
        cin>>prices[i];
    }
    sort(prices.begin(),prices.end());
    int q;
    cin>>q;
    while(q--)
    {
        int coins;
        cin>>coins;
        cout<<find_max_idx(prices,coins)<<endl;
    }
    return 0;
}
```