#include <bits/stdc++.h>
using namespace std;

// 1. 0/1-KNAPSACK :Returns max Profit,we can make from certain elements(weight[] and value[])
//  till weight of considered elements don't exceed Weight.
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

// 2. SUBSET SUM :Says whether Its possible to achieve a sum of target from array elements
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

// 3. EQUAL SUM PARTATION : We need to tell If it is possible to distribute the array into exactly two parts i.e their sum is
// equal.
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

// 4. TARGET SUM /PERFECT SUM PROBLEM :Count of subsets of having a particuler sum [NOT Working]
// int targetSum(vector<int> arr, int target)
// {
//   int n = arr.size();
//   int dp[n + 1][target + 1];
//   for (int i = 0; i < n + 1; i++)
//   {
//     for (int j = 0; j < target + 1; j++)
//     {
//       if (j == 0)
//       {
//         dp[i][j] = 0;
//       }
//       if (i == 0)
//       {
//         dp[i][j] = 1;
//       }
//     }
//   }
//   for(int i=1;i<n+1;i++)
//   {
//     for(int j=1;j<target+1;j++)
//     {
//       if(arr[i-1]<=j)
//       {
//         dp[i][j]=dp[i-1][j-arr[i]]+dp[i-1][j];
//       }
//       else{
//         dp[i][j]=dp[i-1][j];
//       }
//     }
//   }
//   return dp[n][target];
// }

// 5. MIN SUBSET SUM DIFFERENCE : minimum difference of sum of all elements of the two subsets
int minSubsetSumDifference(vector<int> arr)
{
  int n = arr.size();
  int totalSum = 0;
  for (int i = 0; i < n; i++)
  {
    totalSum += arr[i];
  }
  bool dp[n + 1][totalSum + 1];
  for (int i = 0; i < n + 1; i++)
  {
    for (int j = 0; j < totalSum + 1; j++)
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
    for (int j = 1; j < totalSum + 1; j++)
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
  int sum = totalSum / 2;
  int leftSum = INT_MIN;
  for (int j = 0; j <= sum; j++)
  {
    if (dp[n][j] == true)
    {
      leftSum = max(leftSum, j);
    }
  }
  int rightSum = totalSum - leftSum;
  return abs(rightSum - leftSum);
}

// 6. UNBOUNDED KNAPSACK : We can consider any elements any number of times.(Rod Cutting problem,Coin exchange problem) [not working]
int unboundedKnapsack(vector<int> weight, vector<int> val, int Weight)
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
    for (int j = 1; j < Weight; j++)
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

// 7. COUNT SUBSET SUM WITH GIVEN DIFFERENCE :
int countSubsetSumWithGivenDiff()
{
}

int main()
{
  int n;
  cin >> n;
  vector<int> v;
  for (int i = 0; i < n; i++)
  {
    int a;
    cin >> a;
    v.push_back(a);
  }
  cout << minSubsetSumDifference(v);
  return 0;
}

int LCS(string s1, int n, string s2, int m)
{
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
