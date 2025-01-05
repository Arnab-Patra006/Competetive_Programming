# My DP Templates
## General Technique to solve any DP problem :
```
1. State : Clearly define the subproblem.
Clearly understand when you are saying dp[i][j],what does i&j represent exaxtly.
What are the exact params they are dependent upon.

2. Transition : Define a relation b/w states.Which states it is dependent to?

3. Base Case : When does my transaction fail?

4. Final Subproblem : What is the problem demanding me to find? 
```
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
## 12. [Shortest Common SuperSequence](https://www.geeksforgeeks.org/problems/shortest-common-supersequence0322/1) (Parent LCS)
```
int shortestCommonSupersequence(string s1, string s2, int m, int n) {
  int n = s1.size();
  int m = s2.size();
  int lcs = LCS(s1, s2);
  return (n + m - lcs);
}
```
## 13. [Minimum Number of Insertion and Deletion to convert  String A to String B](https://www.geeksforgeeks.org/problems/minimum-number-of-deletions-and-insertions0209/1) :(Parent LCS)
```
int minOperations(string str1, string str2) {
  int lcs = LCS(str1, str2);
  int deletion = str1.size() - lcs;
  int insertion = str2.size() - lcs;
  return deletion + insertion;
}
```
## 14. [Longest Palindromic Subsequence](https://www.geeksforgeeks.org/problems/longest-palindromic-subsequence-1612327878/1)(Parent LCS)
```
int LPS(string s1)
{
  string s2 = "";
  for (int i = s1.size() - 1; i >= 0; i--)
  {
    s2 += s1[i];
  }
  int lcs = LCS(s1, s2);
  return lcs;
}
```
## 15.[Minimum Number of Deletion in a String to make it Palindrome](https://www.geeksforgeeks.org/problems/minimum-number-of-deletions4610/1)
```
int minDeletions(string s1) {
  string s2 = "";
  for (int i = s1.size() - 1; i >= 0; i--) {
    s2 += s1[i];
  }
  int lcs = LCS(s1, s2);
  return s1.size() - lcs;
}
```
## 16.[Minimum Number of Insertion in a String to make it Palindrome](https://www.geeksforgeeks.org/problems/form-a-palindrome2544/1) 
```
int findMinInsertions(string S) {
  int ans = S.length() - LPS(S);
  return ans;
}
```
## 17. [Printing Shortest Common SuperSequence(SCS)](https://leetcode.com/problems/shortest-common-supersequence/) :(Parent-LCS)
```
string PrintSCS(string s1, string s2) {
//DO LCS(s1,s2) and have the DP here...
//Then remaining task...followiing
  string ans = "";
  int i = n, j = m;
  while (i > 0 && j > 0) {
    if (s1[i - 1] == s2[j - 1]) {
      ans += s1[i - 1];
      i--;
      j--;
    } else {
      if (dp[i - 1][j] > dp[i][j - 1]) {
        ans += s1[i - 1];
        i--;
      } else {
        ans += s2[j - 1];
        j--;
      }
    }
  }
  while (i > 0) {
    ans += s1[i - 1];
    i--;
  }
  while (j > 0) {
    ans += s2[j - 1];
    j--;
  }
  reverse(ans.begin(), ans.end());
  return ans;
}
```
## 17. [Longest Repeating Subsequence](https://www.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1) : (LCS)
```
int LongestRepeatingSubsequence(string str) {
  string s1 = str;
  string s2 = str;
  //Everything same as LCS only diff..
  //  ...
  if(s1[i-1]==s2[j-1] && i!=j) //that's all
  {
      dp[i][j]=1+dp[i-1][j-1];
  }
  //  ...
}
```
## 18. Sequence Pattern Matching :(Parent-LCS)
s1="AXY"
s2="ADXCPY"
We have to tell whether s1 is a Subsequence of s2 ?(True or False)
```
return s1.length()==LCS(s1,s2); 
```


## 19. Matrix Chain Multiplication ;
```
vector<vector<int>> dp; // DP table
// Recursive helper function
int helper(vector<int>& arr, int i, int j) {
    if (i >= j) return 0; // Base case: no cost for a single matrix

    if (dp[i][j] != INF) return dp[i][j]; // Use memoized value if available

    int mn = INF; // Initialize minimum cost as INF

    // Try all possible partitions
    for (int k = i; k < j; k++) {
        int temp = helper(arr, i, k) + helper(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
        mn = min(mn, temp); // Update minimum cost
    }

    return dp[i][j] = mn; // Memoize the result
}

// Solve function
void solve(int tc) {
    int n;
    cin >> n;
    vector<int> arr(n);

    for (int i = 0; i < n; i++) cin >> arr[i]; // Input the array

    dp.assign(n, vector<int>(n, INF)); // Initialize DP table

    cout << helper(arr, 1, n - 1) << endl; // Solve and output the result
}
```
## 20. Palindrome Partitioning :

```
class Solution {
public:
    vector<int> dp; // dp[i] = min number of cuts needed from i to n-1

    bool isPalindrome(int i, int j, string &s) {
        while(i < j) {
            if(s[i] != s[j]) return false;
            i++; j--;
        }
        return true;
    }

    int solve(int i, int n, string &s) {
        if(i == n || isPalindrome(i, n - 1, s)) {
            return dp[i] = 0;
        }

        if(dp[i] != -1) return dp[i]; // If already computed

        int ans = INT_MAX;
        for(int k = i; k < n; k++) {
            if(isPalindrome(i, k, s)) {
                int temp = 1 + solve(k + 1, n, s);
                ans = min(ans, temp);
            }
        }

        return dp[i] = ans; // Store the result
    }

    int minCut(string s) {
        int n = s.size();
        dp = vector<int>(n, -1);  // Correctly initialize dp for range 0 to n-1

         solve(0, n, s); // Start solving from 0 to n-1
         return dp[0];
    }
};
```

## [Boolean Parenthesization (MCM O^3 Hard)](https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1)

```
const static int N=201;
const static int mOd=1003;
int dp[N][N][2];
int mcm(int i,int j,string &s,bool isTrue)
{
    if(i>j)
    {
        return false;
    }
    if(i==j)
    {
        if(isTrue==true)
        {
            // return s[i]=='T';
            return dp[i][j][isTrue]=(s[i]=='T');
        }
        else
        {
            // return s[i]=='F';
            return dp[i][j][isTrue]=(s[i]=='F');
        }
    }
    if(dp[i][j][isTrue]!=-1)
    {
        return dp[i][j][isTrue];
    }
    int ans=0;
    for(int k=i+1;k<=j-1;k+=2)
    {
        int leftTrue=mcm(i,k-1,s,true)%mOd;
        int leftFalse=mcm(i,k-1,s,false)%mOd;
        int rightTrue=mcm(k+1,j,s,true)%mOd;
        int rightFalse=mcm(k+1,j,s,false)%mOd;
        if(s[k]=='^')
        {
            if(isTrue==true)
            {
                ans+=(leftTrue*rightFalse)%mOd+(leftFalse*rightTrue)%mOd;
            }
            else
            {
                ans+=(leftTrue*rightTrue)%mOd+(leftFalse*rightFalse)%mOd;
            }
        }
        else if(s[k]=='&')
        {
            if(isTrue==true)
            {
                ans+=(leftTrue*rightTrue)%mOd;
            }
            else
            {
                ans+=(leftTrue*rightFalse)%mOd+(leftFalse*rightTrue)%mOd+(leftFalse*rightFalse)%mOd;
            }
        }
        else if(s[k]=='|')
        {
            if(isTrue==true)
            {
                ans+=(leftTrue*rightTrue)%mOd+(leftTrue*rightFalse)%mOd+(leftFalse*rightTrue)%mOd;
            }
            else
            {
                ans+=(leftFalse*rightFalse)%mOd;
            }
        }
    }
    return dp[i][j][isTrue]=ans%mOd;
}
int countWays(int n, string &s)
{
    // cout<<s<<endl;
    for(int i=0;i<N;i++)
    {
        for(int j=0;j<N;j++)
        {
            for(int k=0;k<2;k++)
            {
                dp[i][j][k]=-1;
            }
        }
    }
    // return mcm(0,n-1,s,true);
    mcm(0,n-1,s,true);
    return dp[0][n-1][true];
}
```

# Blogs

## [20 patterns to Master DP](https://blog.algomaster.io/p/20-patterns-to-master-dynamic-programming)

1. Fibonacci Seq.
   [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/) done
   [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/description/) done
   [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/description/) done
2. 2. Kadane's Algorithm

## [Some Good DP Problems 1 :](https://leetcode.com/discuss/general-discussion/1050391/Must-do-Dynamic-programming-Problems-Catefory-wise)

