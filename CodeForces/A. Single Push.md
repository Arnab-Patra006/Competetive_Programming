# <a href="https://codeforces.com/problemset/problem/1253/A">A. Single Push</a>

# Approach 1 : Brute force | Bad Approach | Huge Space Complexity
```
#include<bits/stdc++.h>
using namespace std;
bool helper(vector<int> &v1,vector<int> &v2)
{
    int l=-1,r=-1;
    for(int i=0;i<v2.size();i++)
    {
        int diff=v2[i]-v1[i];
        if(diff<0)
        {
            return false;
        }
        else if(diff>0)
        {
            l=i;
            break;
        }
    }
    
    for(int i=v2.size()-1;i>=0;i--)
    {
        int diff=v2[i]-v1[i];
        if((diff<0))
        {
            return false;
        }
        else if(diff>0)
        {
            r=i;
            break;
        }
    }
    if(l==-1 || r==-1)
    {
           return true;
    }
    int temp=-1;
    for(int i=l;i<=r;i++)
    {
        if(temp!=-1 && (v2[i]-v1[i]!=temp))
        {
            return false;
        }
        temp=v2[i]-v1[i];
    }
    return true;
}
void solve()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        vector<int>v1(n,0);
        for(int i=0;i<n;i++)
        {
            cin>>v1[i];
        }
        vector<int>v2(n,0);
        for(int i=0;i<n;i++)
        {
            cin>>v2[i];
        }
        if(helper(v1,v2))
        {
            cout<<"YES"<<endl;
        }
        else
        {
            cout<<"NO"<<endl;
        }
    }
    return;
}
int main()
{
    solve();
    return 0;
}
```