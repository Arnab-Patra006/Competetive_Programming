# CSES DP Problemset
# [1.Dice Combinations](https://cses.fi/problemset/task/1633)
```
void solve(int tc)
{
    int n;
    cin>>n;
    /*
    state: dp[i] :# of ways to construct sum i by throwing dice 1-6
    transition : dp[i]=dp[i-k]+1 where k=1,2,3,4,5,6
    final subproblem :dp[n]
    base case : dp[0]=0;
    */
    int dp[n+1];
    dp[0]=0;
    for(int i=1;i<=n;i++)
    {
        int t=0;
        for(int k=1;k<=6;k++)
        {
            if(i-k==0)
            {
                t++;
            }
            if(i-k>0)
            {
                t+=dp[i-k];
            }
            else 
            {
                break;
            }
        }
        dp[i]=t%mod; 
    }
    cout<<dp[n];
    return;
}
```
# [2.Minimizing Coins](https://cses.fi/problemset/task/1634)
```
void solve3(int tc)
{
    int x,n;
    cin>>n>>x;
    vi coins(n);
    for(int i=0;i<n;i++)
    {
        cin>>coins[i];
    }
    /*
    state :dp[i] :minimum no of coins to make money sum =i with n coins.
    final subproblem: dp[x] :minimum no of coins to make money sum=x with n coins.
    base case :
    transition :dp[i]=min(dp[i-k])+1 where k belongs to coins[].
    */
    int dp[x+1];
    dp[0]=0;
    for(int i=1;i<=x;i++)
    {
        int t=INT_MAX;
        for(int j=0;j<n;j++)
        {
            if((i-coins[j])>=0 && dp[i-coins[j]]!=-1)
            {
                t=min(t,dp[i-coins[j]]);
            }
        }
        if(t==INT_MAX)
        {
            dp[i]=-1;
        }
        else
        {
            t++;
            dp[i]=t;
        }
    }
    cout<<dp[x]<<endl;
    return;
}
```
# [3.Coin Combinations I](https://cses.fi/problemset/task/1635)
```
void solve3(int tc)
{
    int n,x;
    cin>>n>>x;
    vi coins(n);
    for(int i=0;i<n;i++)
    {
        cin>>coins[i];
    }
    /*
    state: dp[i]:# of distinct ways to produce money sum i using available coins
    final sub problem:dp[x]:# of distinct ways to produce money sum x using ava coins
    transition :dp[i]=sum of all possible i-coins[j]
    base case:should be i-coins[j]>=0
    */
    int dp[x+1];
    dp[0]=1;
    for(int i=1;i<=x;i++)
    {
        dp[i]=0;
        for(int j=0;j<n;j++)
        {
            if(i-coins[j]>=0)
            {
                dp[i]+=dp[i-coins[j]];
                dp[i]%=mod;
            }
        }
    }
    cout<<dp[x]<<endl;
    return;
}
```
# [4. Coin Combinations II](https://cses.fi/problemset/task/1636)
```
```
# [5. Grid Paths](https://cses.fi/problemset/task/1638/)
```
void solve3(int tc)
{
    int n;
    cin>>n;
    char grid[n][n];
    int dp[n][n];
    /*
    state : dp[i][j]: # of paths from (0,0) to (i,j)
    final sub problem : # of paths from (0,0) to (n-1,n-1)
    transition : dp[i][j]=(dp[i][j-1]+dp[i-1][j]); dependency on left and upper cell.
    base case : 
    1. dp[0][0]=1 unless grid[0][0]='*'
    2. for (TRAP) grid[i][j]='*' make dp[i][j]=0 & dont consider for calculation
    3. i-1>=0 ,j-1>=0
    */
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cin>>grid[i][j];
            if(grid[i][j]=='*')
            {
                dp[i][j]=0;
            }
        }
    }
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            if(i==0 && j==0 && grid[0][0]!='*')
            {
                dp[0][0]=1;
                continue;
            }
            if(grid[i][j]=='*')continue;
            int t=0;
            if(i-1>=0 && grid[i-1][j]!='*')
            {
                t+=dp[i-1][j];
                t%=mod;
            }
            if(j-1>=0 && grid[i][j-1]!='*')
            {
                t+=dp[i][j-1];
                t%=mod;
            }
            dp[i][j]=t;
        }
    }
    cout<<dp[n-1][n-1]<<endl;
    return;
}
```
# [6. Book Shop](https://cses.fi/problemset/task/1158)
```
State :
dp[i][j]=maximum number of pages I can read from 0 to i th book i.e I am allowed to spend j coins.

Transition :
+ Not reading i th book : dp[i][j]=dp[i-1][j] i.e no coins spent.
+ Reading the i th book : dp[i][j]=dp[i-1][j-cost[i-1]]+pages[i-1]
definitely I will consider maximum among them.

Base Case :
dp[0][anything]=0

Final sub problem :
dp[n][x] : maximum number of pages I can read from 1 to n th book i.e I am allowed to spend x coins.
```
```
void solve3(int tc)
{
    int n,x;
    cin>>n>>x;
    vi cost(n);
    for(int i=0;i<n;i++)
    {
        cin>>cost[i];
    }
    vi pages(n);
    for(int i=0;i<n;i++)
    {
        cin>>pages[i];
    }
    vector<vector<int>> dp(n + 1, vector<int>(x + 1, 0));
    /*
    By this I already covered if(i==0 || j==0) dp[i][j]=0 
    */
    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=x;j++)
        {
            if(j-cost[i-1]>=0)
            {
                dp[i][j]=max((pages[i-1]+dp[i-1][j-cost[i-1]]),dp[i-1][j]);
            }
            else
            {
                dp[i][j]=dp[i-1][j];
            }
        }
    }
    cout<<dp[n][x]<<endl;
    return;
}
```
+ But here int has to be integer not long long.That's how I resolved runtime error.
# [7. Array Description](https://cses.fi/problemset/task/1746/)
```
State :
dp[i][j]=number of ways to fill the prefix from 0 to ith element such that the ith element is j.
if(arr[i]!=0 && arr[i]!=j) then dp[i][j]=0. bcz arr[i] predefined & we can't change it.

Transition :
dp[i][j]=dp[i-1][j]+dp[i-1][j-1]+dp[i-1][j+1]
bcz for ith element to be j the i-1 th element has to be j,j-1 and j+1

Base Case :
Initialize :vector<vector<int>> dp(n, vector<int>(m + 1, 0));
+ for 0th element :
if(arr[i]==0) dp[0][anything]=1
else dp[i][anything]=0 but dp[i][arr[i]]=1 //bcz only possible element is arr[i] itself.

Final Subproblem :
dp[n-1][1]+dp[n-1][2]+........dp[n-1][m]
number of ways to fill n elements i.e that the n-1 element is j where m=1...m for all.
```
```
void solve(int tc)
{
    int n,m;
    cin>>n>>m;
    vi arr(n);
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    vector<vector<int>>dp(n,vector<int>(m+1,0));
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<=m;j++)
        {
            if(i==0)
            {
                if(arr[i]==0)
                {
                    dp[i][j]=1;
                }
                else
                {
                    dp[i][arr[i]]=1;  //rest are 0 already
                }
            }
        }
    }
    for(int i=1;i<n;i++)
    {
        if(arr[i]==0)
        {
            for(int j=1;j<=m;j++)
            {
                dp[i][j]+=dp[i-1][j];
                if(j-1>0) dp[i][j]+=dp[i-1][j-1];
                if(j+1<=m) dp[i][j]+=dp[i-1][j+1];
                dp[i][j]%=mod;
            }
        }
        else
        {
            dp[i][arr[i]]+=dp[i-1][arr[i]];
            if(arr[i]-1>0) dp[i][arr[i]]+=dp[i-1][arr[i]-1];
            if(arr[i]+1<=m) dp[i][arr[i]]+=dp[i-1][arr[i]+1];
            dp[i][arr[i]]%=mod;
        }
    }
    int ans=0;
    for(int j=1;j<=m;j++)
    {
        ans+=dp[n-1][j];
        ans%=mod;
    }
    cout<<ans<<endl;
    return;
}
```
