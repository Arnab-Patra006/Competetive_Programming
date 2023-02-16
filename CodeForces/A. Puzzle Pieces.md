# <a href="https://codeforces.com/problemset/problem/1345/A">1345.A. Puzzle Pieces</a>

### Approach :
+ if there is single row or column any no of pices can be added no problem. first two if states that.
+ second condition is that if none of the row or column is one then only one possibility is there that is when they are 2,2.
+ everything else is impossible to make a puzzle.

As the image shows you can imagine :
 
<img src="img/1345A.png" width="500px">

```
#include<bits/stdc++.h>
using namespace std;
bool is_valid(int n,int m)
{
    if(n==1)
    {
        return true;
    }
    else if(m==1)
    {
        return true;
    }
    else if(n==2 && m==2)
    {
        return true;
    }
    return false;
}
void solve()
{
    int n,m;
    cin>>n>>m;
    if(is_valid(n,m))
    {
        cout<<"YES"<<endl;
    }
    else
    {
        cout<<"NO"<<endl;
    }
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