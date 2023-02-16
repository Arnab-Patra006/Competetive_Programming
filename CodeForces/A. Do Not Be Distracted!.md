# <a href="https://codeforces.com/problemset/problem/1520/A">A. Do Not Be Distracted!</a>

```
bool is_suspecious(string s,int n)
{
    unordered_map<char,int>mp;
    if(n==1)
    {
        return false;
    }
    mp[s[0]]++;
    for(int i=1;i<n;i++)
    {
        char c1=s[i];
        char c2=s[i-1];
        if(c1!=c2)
        {
            if(mp.find(c1)!=mp.end())
            {
                return true;
            }
        }
        mp[c1]++;
    }
    return false;
}
void solve1()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        string s;
        cin>>s;
        if(!is_suspecious(s,n))
        {
            cout<<"YES"<<endl;
        }
        else
        {
            cout<<"NO"<<endl;
        }
    }
}
```
