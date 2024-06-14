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
