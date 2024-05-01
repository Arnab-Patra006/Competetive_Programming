# <a href="">B. MKnez's ConstructiveForces Task | 900 </a>

## Approach : Puzzle 
- only 1,3 are not eligible for.
else everyone eligible.
+ Now for all even no this will be : -1 1 -1 1 ...n numbers alternatively.
+ But for even>3 we have to mark it seperately i.e =>
for 
+ 5 ==> 1 -2 1 -2 1
+ 7 ==> 2 -3 2 -3 2 -3 2
+ 9 ==> 3 -4 3 -4 3 -4 3 -4 3

like that 

```
#include<bits/stdc++.h>
using namespace std;

void solve()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        if(n%2!=0)
        {
             if(n==1 || n==3)
             {
                 cout<<"NO"<<endl;
             }
             else
             {
                 cout<<"YES"<<endl;
                 int key=(n-5)/2;
                 key++;
                 for(int i=0;i<(n/2);i++)
                 {
                     cout<<key<<" "<<-(key+1)<<" ";
                 }
                 cout<<key<<endl;
             }
        }
        else
        {
               cout<<"YES"<<endl;
               for(int i=0;i<(n/2)-1;i++)
               {
                   cout<<-1<<" "<<1<<" ";
               }
               cout<<-1<<" "<<1;
               cout<<endl;
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