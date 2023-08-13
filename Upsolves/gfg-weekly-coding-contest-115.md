# <a href="https://practice.geeksforgeeks.org/contest/gfg-weekly-coding-contest-115/problems">gfg-weekly-coding-contest-115</a>

## <a href="https://practice.geeksforgeeks.org/contest/gfg-weekly-coding-contest-115/problems">LCA Pairs</a>

## <a href="https://practice.geeksforgeeks.org/contest/gfg-weekly-coding-contest-115/problems">Complete the Staircase</a>
```
class Solution {
  public:
    int completeRows(int n) {
        // code here
        int i=0;
        int sum=0;
        while(sum<=n)
        {
            i++;
            sum+=i;
        }
        return i-1;
    }
};
```
## <a href="https://practice.geeksforgeeks.org/contest/gfg-weekly-coding-contest-115/problems">String Matching</a>
```
class Solution {
  public:
  int get_min_diff_among_letters(char let1,char let2)
  {
      int n2=max(let1-'a',let2-'a');
      int n1=min(let1-'a',let2-'a');
      int diff=abs(n1-n2);
      return diff;
  }
    int minimum_difference(int n, vector<string> &words) {
        // Code here.
        
        
        int m=words[0].size();
        int ans=INT_MAX;
        for(int i=0;i<n-1;i++)
        {
            for(int j=i+1;j<n;j++)
            {
                int letter_dif=0;
                for(int k=0;k<m;k++)
                {
                    letter_dif+=get_min_diff_among_letters(words[i][k],words[j][k]);
                }
                ans=min(ans,letter_dif);
            }
        }
        return ans;
    }
};
```