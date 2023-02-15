# <a href="https://codeforces.com/contest/208/problem/A">A. Dubstep</a>

## Approach 1 : C++ | Brute Force | Strings
```
#include<bits/stdc++.h>
using namespace std;
int main()
{
    string str="";
    cin>>str;
    vector<int>idx;
    string ans="";
    int flag=0;
    for(int i=0;i<str.size();)
    {
        if(str.substr(i,3)=="WUB")
        {
            i=i+3;
            if(flag==1)
            {
                ans+=" ";
                flag=0;
            }
        }
        else
        {
            ans+=str[i];
            flag=1;
            i++;
        }
    }
    int i=ans.size()-1;
    for(;i>=0;i--)
    {
        if(ans[i]!=' ')
        {
            break;
        }
    }
    int j=ans.size()-(i+1);
    int n=ans.size()-j;
    string res=ans.substr(0,n);
    cout<<res;
    return 0;
}
```