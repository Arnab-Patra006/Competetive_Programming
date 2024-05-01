# <a href="">D. Distinct Split</a>

## Approach 1 : HashMap | C++ | O(N)

```
#include<bits/stdc++.h>
using namespace std;
void solve()
{
    int n;
    string s;
    cin>>n;
    cin>>s;
    unordered_map<char,int>total_map;
    for(int i=0;i<n;i++)
    {
        total_map[s[i]]++;
    }
    unordered_map<char,int>prefix;
    int ans=0;
    for(int i=0;i<n;i++)
    {
        prefix[s[i]]++;
        total_map[s[i]]--;
        if(total_map[s[i]]==0)
        {
            total_map.erase(s[i]);
        }
        int t=prefix.size()+total_map.size();
        ans=max(ans,t);
    }
    cout<<ans<<endl;
    return;
}
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```