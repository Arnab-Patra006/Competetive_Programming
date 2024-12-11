# [A - Frog 1 1D](https://atcoder.jp/contests/dp/tasks/dp_a)
```
void solve2(int tc)
{
    int n;
    cin>>n;
    vi arr(n,0);
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    vi dp(n,0);
    dp[0]=0;
    dp[1]=abs(arr[0]-arr[1]);
    for(int i=2;i<n;i++)
    {
        int t1=dp[i-1]+abs(arr[i]-arr[i-1]);
        int t2=dp[i-2]+abs(arr[i]-arr[i-2]);
        dp[i]=min(t1,t2);
    }
    cout<<dp[n-1];
    return;
}
```
# [B - Frog 2 1D](https://atcoder.jp/contests/dp/tasks/dp_b)
```
void solve2(int tc)
{
    int n,k;
    cin>>n>>k;
    vi arr(n,0);
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    vi dp(n,0);
    dp[0]=0;
    for(int i=1;i<n;i++)
    {
        int temp=INT_MAX;
        for(int j=max((int)0,i-k);j<i;j++)
        {
            temp=min(temp,(abs(arr[i]-arr[j])+dp[j]));
        }
        dp[i]=temp;
    }
    cout<<dp[n-1]<<endl;
    return;
}
```
# [C - Vacation 2D](https://atcoder.jp/contests/dp/tasks/dp_c)
```
void solve2(int tc)
{
    int n;
    cin>>n;
    int dp[n+1][3];
    for(int i=1;i<=n;i++)
    {
        int a,b,c;
        cin>>a>>b>>c;
        if(i==1)
        {
            dp[i][0]=a;
            dp[i][1]=b;
            dp[i][2]=c;
        }
        else
        {
            int t1=a+dp[i-1][1];
            int t2=a+dp[i-1][2];
            dp[i][0]=max(t1,t2);
            t1=b+dp[i-1][0];
            t2=b+dp[i-1][2];
            dp[i][1]=max(t1,t2);
            t1=c+dp[i-1][0];
            t2=c+dp[i-1][1];
            dp[i][2]=max(t1,t2);
        }
    }
    cout<<max(dp[n][0],max(dp[n][1],dp[n][2]));
    return;
}
```
# [D - Knapsack 1 2D](https://atcoder.jp/contests/dp/tasks/dp_d)
```
void solve2(int tc)
{
    int n,Weight;
    cin>>n>>Weight;
    vi val(n,0);
    vi weight(n,0);   
    for(int i=0;i<n;i++)
    {
        int w,v;
        cin>>w>>v;
        val[i]=v;
        weight[i]=w;
    }
    int dp[n+1][Weight+1];
    for (int i = 0; i < n + 1; i++)
  {
    for (int j = 0; j < Weight + 1; j++)
    {
      if (i == 0 || j == 0)
      {
        dp[i][j] = 0;
      }
    }
  }
  for (int i = 1; i < n + 1; i++)
  {
    for (int j = 1; j < Weight + 1; j++)
    {
      if (weight[i - 1] <= j)
      {
        dp[i][j] = max(val[i - 1] + dp[i - 1][j - weight[i - 1]], dp[i - 1][j]);
      }
      else
      {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  cout<<dp[n][Weight];
  return;
}
```
# [F - LCS](https://atcoder.jp/contests/dp/tasks/dp_f)
```
string LCSPrint(string s1, string s2)
{
  int n = s1.size();
  int m = s2.size();
  vector<vector<int>> dp(n + 1, vector<int>(m + 1));
  for (int i = 0; i < n + 1; i++)
  {
    for (int j = 0; j < m + 1; j++)
    {
      dp[i][j] = 0;
    }
  }
  for (int i = 1; i < n + 1; i++)
  {
    for (int j = 1; j < m + 1; j++)
    {
      if (s1[i - 1] == s2[j - 1])
      {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      }
      else
      {
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  int i = n;
  int j = m;
  string ans = "";
  while (i > 0 && j > 0)
  {
    if (s1[i - 1] == s2[j - 1])
    {
      ans += s1[i - 1];
      i--;
      j--;
    }
    else
    {
      if (dp[i - 1][j] > dp[i][j - 1])
      {
        i--;
      }
      else
      {
        j--;
      }
    }
  }
  reverse(ans.begin(), ans.end());
  return ans;
}
void solve2(int tc)
{
    string s1,s2;
    cin>>s1>>s2;
    cout<<LCSPrint(s1,s2);
  return;
}
```
# [G - Longest Path 1D DAG](https://atcoder.jp/contests/dp/tasks/dp_g)
```
vector<int>adj[100005];
vector<bool>visited(100005,false);
vector<int>dp(100005,0);
void helper(int vertex)
{
    visited[vertex]=true;
    dp[vertex]=0;
    for(auto child:adj[vertex])
    {
        if(!visited[child])
        {
            helper(child);
        }
        dp[vertex]=max(dp[vertex],1+dp[child]);
    }
}
void solve2(int tc)
{
    int n,m;
    cin>>n>>m;
    for(int i=1;i<=m;i++)
    {
        int x,y;
        cin>>x>>y;
        adj[x].push_back(y);
    }
    for(int i=1;i<=n;i++)
    {
        if(!visited[i])
        {
            helper(i);
        }
    }
    int ans=0;
    for(int i=1;i<=n;i++)
    {
        ans=max(ans,dp[i]);
    }
    cout<<ans;
    return;
}
```
# [H - Grid 1](https://atcoder.jp/contests/dp/tasks/dp_h)
```
void solve2(int tc)
{
    int n,m;
    cin>>n>>m;
    char grid[n][m];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cin>>grid[i][j];
        }
    }
    int MOD=1e9+7;
    int dp[n][m];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            dp[i][j]=0;
        }
    }
    dp[0][0]=1;
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            if(grid[i][j]=='.')
            {
                if(i-1>=0 && grid[i][j]=='.')
                {
                    dp[i][j]+=dp[i-1][j];
                    dp[i][j]%=MOD;
                }
                if(j-1>=0 && grid[i][j]=='.')
                {
                    dp[i][j]+=dp[i][j-1];
                    dp[i][j]%=MOD;
                }
            }
        }
    }
    cout<<dp[n-1][m-1]<<endl;
    return;
}
```
# [I - Coins 2D](https://atcoder.jp/contests/dp/tasks/dp_i)
```
void solve2(int tc)
{
    int n;
    cin>>n;
    vector<double>p;
    for(int i=0;i<n;i++)
    {
        double q;
        cin>>q;
        p.push_back(q);
    }
    double dp[3000][3000]={0.0};
    dp[0][0]=1.0;
    dp[0][1]=0.0;
    for(int i=1;i<=n;i++)
    {
        for(int j=0;j<=n;j++)
        {
            if(j==0)
            {
                dp[i][j]=(1-p[i-1])*dp[i-1][j];
            }
            else
            {
                dp[i][j]=(p[i-1]*dp[i-1][j-1]+(1-p[i-1])*dp[i-1][j]);
            }
        }
    }
    double ans=0.0;
    for(int j=(n/2)+1;j<=n;j++)
    {
        ans+=dp[n][j];
    }
    cout<<setprecision(10);
    cout<<ans<<endl;
    return;
}
```