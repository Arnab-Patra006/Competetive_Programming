# My DP Templates

```
vector<vector<long long int>> dp(n+1,vector<long long int>(m+1));
is Faster than arr[n+1][m+1]
```
## 1. Bounded Knapsack OR 0/1 Knapsace
Returns max Profit,we can make from certain elements(weight[] and value[])till weight of considered elements don't exceed Weight.
```
int boundedKnapsack01(vector<int> weight, vector<int> val, int Weight)
{
  int n = weight.size();
  int dp[n + 1][Weight + 1];
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
  return dp[n][Weight];
}
```

## 2. SubSet Sum
Says whether Its possible to achieve a sum of target from array elements
```
bool subsetSum(vector<int> arr, int target)
{
  int n = arr.size();
  int dp[n + 1][target + 1];
  for (int i = 0; i < n + 1; i++)
  {
    for (int j = 0; j < target + 1; j++)
    {
      if (i == 0)
      {
        dp[i][j] = false;
      }
      if (j == 0)
      {
        dp[i][j] = true;
      }
    }
  }
  for (int i = 1; i < n + 1; i++)
  {
    for (int j = 1; j < target + 1; j++)
    {
      if (arr[i - 1] <= j)
      {
        dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
      }
      else
      {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][target];
}
```

## 3. Equal Sum Partition
We need to tell If it is possible to distribute the array into exactly two parts i.e their sum is equal.
```
bool equalSumPartation(vector<int> arr)
{
  int totalSum = 0;
  for (int i = 0; i < arr.size(); i++)
  {
    totalSum += arr[i];
  }
  if (totalSum % 2 != 0) // Not possible if sum is odd
  {
    return false;
  }
  // Now see if it's possible to achieve the subset Sum(i.e totalSum/2)from array elements.
  return subsetSum(arr, totalSum / 2);
}
``` 

## 4. Perfect Sum Problem (working)
Count of subsets of having a particuler sum.
```
Input: arr[] = {1, 2, 3, 3}, X = 6 
Output: 3 
All the possible subsets are {1, 2, 3}, 
{1, 2, 3} and {3, 3}
```

```
int perfectSum(vector<int> arr, int target)
{
  int n = arr.size();
  //int dp[n + 1][target + 1];
  vector<vector<int>> dp(n+1,vector<int>(target+1));//Better Declaration
  int totalSum = 0;
  for (int i = 0; i < n; i++)
  {
    totalSum += arr[i];
  }
  if (target > totalSum)
  {
    return 0;
  }
  for (int i = 0; i < n + 1; i++)
  {
    for (int j = 0; j < target + 1; j++)
    {
      if (i == 0)
      {
        dp[i][j] = 0;
      }
      if (j == 0)
      {
        dp[i][j] = 1;
      }
    }
  }
  for (int i = 1; i < n + 1; i++)
  {
    for (int j = 0; j < target + 1; j++)
    {
      if (arr[i - 1] <= j)
      {
        dp[i][j] = (dp[i - 1][j - arr[i - 1]] % MOD + dp[i - 1][j] % MOD) % MOD;
      }
      else
      {
        dp[i][j] = dp[i - 1][j] % MOD;
      }
    }
  }
  return dp[n][target];
}
``` 

## 5. Minimum Subset Sum Difference
minimum difference of sum of all elements of the two subsets
```
int minSubsetSumDifference(vector<int>arr)
{
  int n=arr.size();
  int totalSum=0;
  for(int i=0;i<n;i++)
  {
    totalSum+=arr[i];
  }
  bool dp[n+1][totalSum+1];
  for(int i=0;i<n+1;i++)
  {
    for(int j=0;j<totalSum+1;j++)
    {
      if(i==0)
      {
        dp[i][j]=false;
      }
      if(j==0)
      {
        dp[i][j]=true;
      }
    }
  }
  for(int i=1;i<n+1;i++){
    for(int j=1;j<totalSum+1;j++)
    {
      if(arr[i-1]<=j)
      {
        dp[i][j]=dp[i-1][j-arr[i-1]]||dp[i-1][j];
      }
      else{
        dp[i][j]=dp[i-1][j];
      }
    }
  }
  int sum=totalSum/2;
  int leftSum=INT_MIN;
  for(int j=0;j<=sum;j++)
  {
    if(dp[n][j]==true)
    {
      leftSum=max(leftSum,j);
    }
  }
  int rightSum=totalSum-leftSum;
  return abs(rightSum-leftSum);
}
``` 
## 6. Count Of Partitions with Given Difference :
'Array' and 'diff' given.How many ways we can make 2 subsets whose sum difference is 'diff'.
Input: N = 5, arr[] = [1, 2, 3, 1, 2], diff = 1
Output: 5
Explanation: We can have five partitions which is shown below
{1, 3, 1} and {2, 2} – S1 = 5, S2 = 4
{1, 2, 2} and {1, 3} – S1 = 5, S2 = 4
{3, 2} and {1, 1, 2} – S1 = 5, S2 = 4
{1, 2, 2} and {1, 3} – S1 = 5, S2 = 4
{3, 2} and {1, 1, 2} – S1 = 5, S2 = 4
Approach :
rightSum=totalSum-leftSum
rightSum=leftSum-diff
leftSum=(diff+totalSum)/2
so we will basically calculate no of subsets to get leftSum.
```
int countPartitions(int n, int d, vector<int> &arr)
{
  int totalSum = 0;
  for (int i = 0; i < n; i++)
  {
    totalSum = (totalSum + arr[i]) % MOD;
  }
  if ((totalSum + d) % 2 != 0 || totalSum < d)
    return 0;
  int sum1 = (totalSum + d) / 2;
  sum1 = min(sum1, totalSum - sum1);
  int target = sum1;
  return perfectSum(arr, target);
}
```
## 7. Target Sum 
```
```


## 8. Unbounded KnapSack (Working)
. We can consider any elements any number of times.(Rod Cutting problem,Coin exchange problem).
```
int unboundedKnapsack(vector<int> weight, vector<int> val, int Weight)
{
  int n = weight.size();
  vector<vector<int>>dp(n+1,vector<int>(Weight+1));
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
    for (int j = 1; j < Weight+1; j++)
    {
      if (weight[i - 1] <= j)
      {
        dp[i][j] = max(val[i - 1] + dp[i][j - weight[i - 1]], dp[i - 1][j]);
      }
      else
      {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][Weight];
}
```
### [i.Rod Cutting (gfg)](https://www.geeksforgeeks.org/problems/rod-cutting0840/1)[solved]

### [ii.Coin Exchange-1 (gfg)](https://www.geeksforgeeks.org/problems/coin-change2448/1)[solved]
```
. Tip1- When only 1 array given it has to be wt[].
. Tip2- It's a mix of Unkbounded KP and Perfect Sum Problem.Bcz supply in unlimited & want no of ways
```

### [ii.Coin Exchange-2](https://www.geeksforgeeks.org/problems/number-of-coins1824/1)

## 9. Longest Common Subsequence (LCS) :
```
int LCS(string s1,string s2)
{
  int n=s1.size();
  int m=s2.size();
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
  return dp[n][m];
}
```
### [LCS (gfg)](https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1) [solved]

## 10. Printing LCS :(Parent LCS)
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
```
## 11. [Longest Common SubString](https://www.geeksforgeeks.org/problems/longest-common-substring1452/1) :(Parent LCS)(solved) 
```
int LCSS(string s1, string s2) {
  int n = s1.size();
  int m = s2.size();
  vector < vector < int >> dp(n + 1, vector < int > (m + 1));
  for (int i = 0; i < n + 1; i++) {
    for (int j = 0; j < m + 1; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      }
    }
  }
  int mx = INT_MIN;
  for (int i = 1; i < n + 1; i++) {
    for (int j = 1; j < m + 1; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = 0;
      }
      mx = max(dp[i][j], mx);
    }
  }
  return mx;
}
```
## 12. Shortest Common SuperSequence (Parent LCS)
```
int shortestCommonSupersequence(string s1, string s2, int m, int n) {
  int n = s1.size();
  int m = s2.size();
  int lcs = LCS(s1, s2);
  return (n + m - lcs);
}
```
## 13. Minimum Number of Insertion and Deletion to convert  String A to String B :(Parent LCS)
```
```
## 14. Longest Palindromic Subsequence :(Parent LCS)
```
```
## 15. Printing Shortest Common SuperSequence :
```
```
## 16. Longest Repeating Subsequence : (LCS)
```
```
## 17. Sequence Pattern Matching :
```
```


## 18. Matrix Chain Multiplication ;
```
```
