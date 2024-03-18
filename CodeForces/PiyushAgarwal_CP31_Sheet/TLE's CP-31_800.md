# 1. 1903 A.Halloumi Boxes
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
void solve()
{
    ll n,k;
    cin>>n>>k;
    bool is_sorted=true;
    ll is_sorted_checker=INT_MIN;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        if(is_sorted_checker>a)
        {
            is_sorted=false;
            is_sorted_checker=a;
        }
        else
        {
            is_sorted_checker=a;
        }
    }
   if(k==1 && is_sorted==false)
   {
       cout<<"NO"<<endl;
       return;
   }
    cout<<"YES"<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

2. 1901 A. Line Trip
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
void solve()
{
    ll n,x;
    cin>>n>>x;
    ll mx=INT_MIN;
    ll cur_pos=0;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        mx=max(mx,(a-cur_pos));
        if(i==n-1)
        {
            mx=max(mx,2*(x-a));
        }
        cur_pos=a;
    }
    cout<<mx<<endl;
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

3. 1900 A. Cover in Water
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
void solve()
{
    ll n;
    cin>>n;
    vector<char>v;
    ll dot=0;
    for(ll i=0;i<n;i++)
    {
        char a;
        cin>>a;
        v.push_back(a);
        if(a=='.')
        {
            dot++;
        }
    }
    //If any consecutive 3 then 2 ans else whatever
    bool is_present=false;
    for(ll i=0;i<n;i++)
    {
        if(v[i]=='.' && v[i-1]=='.' && v[i+1]=='.')
        {
            is_present=true;
            cout<<2<<endl;
            return;
        }
    }
    cout<<dot<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

4. 1899.A. Game with Integers
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
void solve()
{
    ll n;
    cin>>n;
    if((n-1)%3==0)
    {
        cout<<"First"<<endl;
        return;
    }
    else if((n+1)%3==0)
    {
        cout<<"First"<<endl;
        return;
    }
    cout<<"Second"<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

5. 1896.A. Jagged Swaps
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
void solve()
{
   ll n;
   cin>>n;
   vector<ll>v;
   ll mn=INT_MAX;
   for(ll i=0;i<n;i++)
   {
       ll a;
       cin>>a;
       mn=min(mn,a);
       v.push_back(a);
   }
   if(v[0]!=mn)
   {
       cout<<"NO"<<endl;
   }
   else
   {
       cout<<"YES"<<endl;
   }
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

6. 1890.A.A. Doremy's Paint 3
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1890 A.Doremy's Paint 3
void solve()
{
    ll n;
    cin>>n;
    unordered_map<ll,ll>mp;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        mp[a]++;
    }
    if(mp.size()>2)
    {
        cout<<"No"<<endl;
        return;
    }
    else if(mp.size()==1)
    {
        cout<<"Yes"<<endl;
        return;
    }
    ll per=n/mp.size();
    for(auto it:mp)
    {
        if(n%2==0 && it.second!=per) //n-even->it.second has to be equal as per
        {
            cout<<"No"<<endl;
            return;
        }
        else if(n%2==0 && it.second==per)
        {
            cout<<"Yes"<<endl;
            return;
        }
        else if(n%2!=0 && it.second!=per && it.second!=per+1) //n-odd->it.second is either(per,per+1)
        {
            cout<<"No"<<endl;
            return;
        }
        else
        {
            cout<<"Yes"<<endl;
            return;
        }
    }
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

7. 1881. A. Don't Try to Count
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1881 A.Don't Try to Count
bool check_substring(string x,string s)
{
    ll m=s.size();
    ll n=x.size();
    for(ll i=0;i<=n-m;i++)
    {
        string sub=x.substr(i,m);
        if(sub==s)
        {
            return true;
        }
    }
    return false;
}
void solve()
{
    ll n,m;
    cin>>n>>m;
    string s,x;
    cin>>x>>s;
    ll ans=0;
    while(x.size()<s.size())
    {
        ans++;
        x=x+x;
    }
    if(check_substring(x,s)==false)
    {
        ans++;
        x=x+x;
        if(check_substring(x,s)==false)
        {
            cout<<-1<<endl;
            return;
        }
    }
    cout<<ans<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

8. 1878.A. How Much Does Daytona Cost?
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1878. A. How Much Does Daytona Cost?
void solve()
{
    ll n,k;
    cin>>n>>k;
    string ans="NO";
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        if(a==k)
        {
            ans="YES";
        }
    }
    cout<<ans<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```
9. 1877.A. Goals of Victory
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1890 A.Doremy's Paint 3
void solve()
{
    ll n;
    cin>>n;
    ll ans=0;
    for(ll i=0;i<n-1;i++)
    {
        ll a;
        cin>>a;
        ans+=a;
    }
    ans=0-ans;
    cout<<ans<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

10. 1873.C. Target Practice
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1873. C. Target Practice
void solve(vector<vector<int>>&v)
{
    ll score=0;
   for(int i=0;i<10;i++)
   {
       string s;
       cin>>s;
       for(int j=0;j<10;j++)
       {
           if(s[j]=='X')
           {
               score+=v[i][j];
           }
       }
   }
   cout<<score<<endl;
    return;
}
 
void helper(vector<vector<int>>&v)
{
    int n=10;
    for(int i=0;i<10;i++)
    {
        for(int j=0;j<10;j++)
        {
            if(i==0 || i==n-1 || j==0 || j==n-1)
            {
                v[i][j]=1;
            }
            else if(i==1 || i==n-2 || j==1 || j==n-2)
            {
                v[i][j]=2;
            }
            else if(i==2 || i==n-3 || j==2 || j==n-3)
            {
                v[i][j]=3;
            }
            else if(i==3 || i==n-4 || j==3 || j==n-4)
            {
                v[i][j]=4;
            }
            else if(i==4 || i==n-5 || j==4 || j==n-5)
            {
                v[i][j]=5;
            }
        }
    }
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    vector<vector<int>>v;
    for(int i=0;i<10;i++)
    {
        vector<int>v1;
        for(int j=0;j<10;j++)
        {
            v1.push_back(0);
        }
        v.push_back(v1);
    }
    helper(v);
    while(t--)
    {
        solve(v);
    }
    return 0;
}
```

11. 1866.A. Ambitious Kid
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1866 A.A. Ambitious Kid
void solve()
{
    ll n;
    cin>>n;
    ll ans=INT_MAX;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        if(a<0)
        {
            a*=-1;
        }
        ans=min(ans,a);
    }
    cout<<ans<<endl;
    return;
}
 
int main()
{
    ll t;
    // cin>>t;
    t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

12. 1862.B. Sequence Game
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1862.B. Sequence Game
void solve()
{
    ll n;
    cin>>n;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        v.push_back(a);
    }
    vector<ll>ans;
    ans.push_back(v[0]);
    for(ll i=1;i<n;i++)
    {
        if(v[i]>=v[i-1])
        {
            ans.push_back(v[i]);
        }
        else
        {
            ans.push_back(v[i]);
            ans.push_back(v[i]);
        }
    }
    cout<<ans.size()<<endl;
    for(ll i=0;i<ans.size();i++)
    {
        cout<<ans[i]<<" ";
    }
    cout<<endl;
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

13. 1859.A. United We Stand
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1859. A. United We Stand
void solve()
{
    ll n;
    cin>>n;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        v.push_back(a);
    }
    sort(v.begin(),v.end());
    ll lb=0,lc=0;
    vector<ll>b;
    vector<ll>c;
    ll temp=v[n-1];
    ll i=n-1;
    while(i>=0 && v[i]==temp)
    {
        c.push_back(v[i]);
        i--;
    }
    while(i>=0)
    {
        b.push_back(v[i]);
        i--;
    }
    if(b.size()==0){
        cout<<-1<<endl;
        // cout<<"--------"<<endl;
        return;
    }
    cout<<b.size()<<" "<<c.size()<<endl;
    for(ll i=0;i<b.size();i++)
    {
        cout<<b[i]<<" ";
    }
    cout<<endl;
    for(ll i=0;i<c.size();i++)
    {
        cout<<c[i]<<" ";
    }
    cout<<endl;
    //  cout<<"--------"<<endl;
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

14. 1858.A. Buttons
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1858. A. Buttons
void solve()
{
    ll a,b,c;
    cin>>a>>b>>c;
    ll anna=c/2,katie=c/2;
    anna+=c%2;
    anna+=a;
    katie+=b;
    if(anna>katie)
    {
        cout<<"First"<<endl;
    }
    else
    {
        cout<<"Second"<<endl;
    }
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

15. 1875.A. Array Coloring
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1857. A. Array Coloring
void solve()
{
    ll n;
    cin>>n;
    ll sum=0;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        sum+=a;
    }
    if(sum%2==0)
    {
        cout<<"YES"<<endl;
    }
    else
    {
        cout<<"NO"<<endl;
    }
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

16. 1853.A. Desorting
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1853 A. Desorting
void solve()
{
    ll n;
    cin>>n;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        v.push_back(a);
    }
    ll mn=INT_MAX;
    for(ll i=1;i<v.size();i++)
    {
        ll gap=v[i]-v[i-1];
        if(gap<0)
        {
            cout<<0<<endl;
            return;
        }
        mn=min(mn,gap);
    }
    if(mn==0)
    {
        cout<<1<<endl;
        return;
    }
    else
    {
        cout<<(mn/2)+1<<endl;
        return;
    }
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

17. 1854.A. Forbidden Integer
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1845 A. Forbidden Integer
void solve()
{
    ll n,k,x;
    cin>>n>>k>>x;
    if(k==1)
    {
        cout<<"NO"<<endl;
        return;
    }
    else if(x!=1)
    {
        cout<<"YES"<<endl;
        cout<<n<<endl;
        for(ll i=1;i<=n;i++)
        {
            cout<<1<<" ";
        }
        cout<<endl;
        return;
    }
    else if(x==1 && k==2)
    {
        if(n%2!=0)
        {
            cout<<"NO"<<endl;
            return;
        }
        else
        {
            cout<<"YES"<<endl;
            cout<<n/2<<endl;
            for(ll i=1;i<=n/2;i++)
            {
                cout<<2<<" ";
            }
            cout<<endl;
            return;
        }
    }
    else //if(x==1 && k==3)
    {
        if(n%2==0)
        {
            cout<<"YES"<<endl;
            cout<<n/2<<endl;
            for(int i=1;i<=n/2;i++)
            {
                cout<<"2"<<" ";
            }
            cout<<endl;
            return;
        }
        if(n%3==0)
        {
            cout<<"YES"<<endl;
            cout<<n/3<<endl;
            for(int i=1;i<=n/3;i++)
            {
                cout<<"3"<<" ";
            }
            cout<<endl;
            return;
        }
        cout<<"YES"<<endl;
        ll t=n-3;
        cout<<(t/2)+1<<endl;
        for(ll i=1;i<=t/2;i++)
        {
            cout<<2<<" ";
        }
        cout<<3<<endl;
        return;
    }
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
        // cout<<"-----------"<<endl;
    }
    return 0;
}
```

18. 1873.A. Grasshopper on a Line
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1873 A. Grasshopper on a Line
void solve()
{
    ll x,k;
    cin>>x>>k;
    if(x%k!=0)
    {
        cout<<1<<endl;
        cout<<x<<endl;
    }
    else
    {
        cout<<2<<endl;
        cout<<x-1<<" "<<1<<endl;
    }
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
        // cout<<"-----------"<<endl;
    }
    return 0;
}
```

19. 1834.A. Unit Array
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1834 A. Unit Array
void solve()
{
    ll n;
    cin>>n;
    ll curr_sum=0;
    ll neg=0;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        if(a==-1)
        {
            neg++;
        }
        curr_sum+=a;
    }
    ll ans=0;
    while(curr_sum<0)
    {
        curr_sum+=2;
        neg--;
        ans++;
    }
    if(neg%2==1)
    {
        ans++;
    }
    cout<<ans<<endl;
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
        // cout<<"--------->"<<endl;
    }
    return 0;
}
```

20. 1831.A. Twin Permutations
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1831. A. Twin Permutations
void solve()
{
    ll n;
    cin>>n;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        v.push_back(n-a+1);
    }
    for(ll i=0;i<v.size();i++)
    {
        cout<<v[i]<<" ";
    }
    cout<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

21. 1829.B. Blank Space
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1829. B. Blank Space
void solve()
{
    ll n;
    cin>>n;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        v.push_back(a);
    }
    ll ans=INT_MIN;
    for(ll i=0;i<n;i++)
    {
        ll j=i;
        while(j<n && v[j]==0)
        {
            j++;
        }
        ans=max(ans,(j-i));
        i=j;
    }
    cout<<ans<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

22. A. Coins
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1814. A. Coins
void solve()
{
    ll n,k;
    cin>>n>>k;
    if(n%2==0 || n%k==0)
    {
        cout<<"YES"<<endl;
        return;
    }
    //4 possible cases -
    // both n,k even -possible
    //botn n,k odd -possible
    if((n%2==0 && k%2==0)||(n%2==1 && k%2==1))
    {
        cout<<"YES"<<endl;
        return;
    }
    //n odd ,k even -never possible
    if(n%2==1 && k%2==0)
    {
        cout<<"NO"<<endl;
        return;
    }
    //n even,k odd -n>=k+2 -possible else not posible 
    if(n%2==0 && k%2==1 && n>=k+2)
    {
        cout<<"YES"<<endl;
        return;
    }
    cout<<"NO"<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

23. 1806.A. Walking Master
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1806. A. Walking Master
void solve()
{
    ll a,b,c,d;
    cin>>a>>b>>c>>d;
    if(d<b)
    {
        cout<<"-1"<<endl;
        return;
    }
    ll ans=0;
    ans+=(d-b);
    a+=(d-b);
    if(a<c)
    {
        cout<<"-1"<<endl;
        return;
    }
    ans+=(a-c);
    cout<<ans<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

24. 1805.A. We Need the Zero
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1805. A. We Need the Zero
void solve()
{
    ll n;
    cin>>n;
    if(n%2==0)
    {
        ll curr;
        for(ll i=0;i<n;i++)
        {
            ll a;
            cin>>a;
            if(i==0)
            {
                curr=a;
            }
            else
            {
                curr=curr^a;
            }
        }
        if(curr==0)
        {
            cout<<curr<<endl;
        }
        else{
            cout<<-1<<endl;
        }
    }
    else
    {
        ll curr;
        for(ll i=0;i<n;i++)
        {
            ll a;
            cin>>a;
            if(i==0)
            {
                curr=a;
            }
            else
            {
                curr=curr^a;
            }
        }
        cout<<curr<<endl;
    }
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
        // cout<<"--------->"<<endl;
    }
    return 0;
}
 
```

25. 1791. C. Prepend and Append
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1791. C. Prepend and Append
void solve()
{
    ll n;
    cin>>n;
    string s;
    cin>>s;
    ll l=0,r=n-1;
    while(l<r && s[l]!=s[r])
    {
        l++;
        r--;
    }
    
    cout<<r-l+1<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

26. 1789.A. Serval and Mocha's Array
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//A. Serval and Mocha's Array
void solve()
{
    ll n;
    cin>>n;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        v.push_back(a);
    }
    for(ll i=0;i<n;i++)
    {
        for(ll j=0;j<n;j++)
        {
            if(j==i)
            {
                continue;
            }
            if(__gcd(v[i],v[j])<=2)
            {
                cout<<"Yes"<<endl;
                return;
            }
        }
    }
    cout<<"No"<<endl;
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
        // cout<<"--------->"<<endl;
    }
    return 0;
}
```

27. 1788.A. One and Two
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1788. A. One and Two
void solve()
{
    ll n;
    cin>>n;
    ll two=0;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        if(a==2)
        {
            two++;
        }
        v.push_back(a);
    }
    if(two%2==0)
    {
        two=two/2;
        for(ll i=0;i<v.size();i++)
        {
            if(v[i]==2)
            {
                two--;
                if(two==0)
                {
                    cout<<i+1<<endl;
                    return;
                }
            }
        }
        cout<<1<<endl;
    }
    else
    {
        cout<<-1<<endl;
    }
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
        // cout<<"--------->"<<endl;
    }
    return 0;
}
```

28. 1783.A. Make it Beautiful
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1783 A. Make it Beautiful
void solve()
{
    ll n;
    cin>>n;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        v.push_back(a);
    }
    sort(v.begin(),v.end(),greater<int>());
    ll t=v[1];
    v[1]=v[n-1];
    v[n-1]=t;
    if(v[0]==v[1])
    {
        cout<<"NO"<<endl;
        return;
    }
    cout<<"YES"<<endl;
    for(ll i=0;i<n;i++)
    {
        cout<<v[i]<<" ";
    }
    cout<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

29. 1777.A. Everybody Likes Good Arrays!
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1777 A. Everybody Likes Good Arrays!
void solve()
{
    ll n;
    cin>>n;
    vector<ll>v;
    for(ll i=0;i<n;i++)
    {
        ll a;
        cin>>a;
        v.push_back(a);
    }
    ll ans=0;
    for(ll i=0;i<n-1;i++)
    {
        if(v[i]%2==0 && v[i+1]%2==0)
        {
            ans++;
        }
        else if(v[i]%2==1 && v[i+1]%2==1)
        {
            ans++;
        }
    }
    cout<<ans<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

30. 1766.A. Extremely Round
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1766. A. Extremely Round
void solve()
{
    unordered_map<int,int>mp;
    mp[0]=0;
    mp[1]=9;
    mp[2]=18;
    mp[3]=27;
    mp[4]=36;
    mp[5]=45;
    mp[6]=54;
    mp[7]=63;
    ll n;
    cin>>n;
    int degree=0;
    int first_digit=-1;
    while(n)
    {
        if(n<10)
        {
            first_digit=n;
        }
        degree++;
        n=n/10;
    }
    ll ans=mp[degree-1]+first_digit;
    cout<<ans<<endl;
    return;
}
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
    }
    return 0;
}
```

31. 1761.A. Two Permutations
```
#include<bits/stdc++.h>
using namespace std;
#define ll long long int
 
//1761 A. Two Permutations
void solve()
{
    ll n,a,b;
    cin>>n>>a>>b;
    if((a==b && a==n) || (a+b<=n-2))
    {
        cout<<"Yes"<<endl;
    }
    else
    {
        cout<<"No"<<endl;
    }
    return;
}
 
 
int main()
{
    ll t;
    cin>>t;
    // t=1;
    while(t--)
    {
        solve();
        // cout<<"--------->"<<endl;
    }
    return 0;
}
```