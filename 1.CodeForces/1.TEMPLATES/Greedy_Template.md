## 1. [Kadane's Algorithm](https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1) [Solved] : Max Sub-Array Sum
```
Input :
N = 5
Arr[] = {1,2,3,-2,5}
Output: 9
Explanation:
Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.
```
```
int KadanesAlgo(vector < int > arr) {
  int n = arr.size();
  int maxSum = LLONG_MIN;
  int currSum = 0;
  for (int i = 0; i < n; i++) {
    currSum += arr[i];
    maxSum = max(maxSum, currSum);
    if (currSum <= 0) {
      currSum = 0;
    }
  }
  return maxSum;
}
```
```
Activity Selection Problem
Job Sequencing Problem
Huffman Coding
Huffman Decoding
Water Connection Problem
Minimum Swaps for Bracket Balancing
Egyptian Fraction
Policemen catch thieves
Fitting Shelves Problem
Assign Mice to Holes
Fractional Knapsack Problem
Minimum number of coins required
```
