# <a href="https://practice.geeksforgeeks.org/problems/find-all-possible-paths-from-top-to-bottom/1">Find all possible paths from top to bottom</a>

## Approach 1 : Easy | C++ | Recursive
```
class Solution
{
public:
vector<vector<int>>ans;
void dfs(int i,int j,int n,int m,vector<vector<int>>&grid,vector<int>v)
{
    if(i==n-1 && j==m-1)
    {
        v.push_back(grid[i][j]);
        ans.push_back(v);
        return;
    }
    else if(i==n || j==m)
    {
        return;
    }
    v.push_back(grid[i][j]);
    
    dfs(i+1,j,n,m,grid,v);
    dfs(i,j+1,n,m,grid,v);
    return;
    
}
    vector<vector<int>> findAllPossiblePaths(int n, int m, vector<vector<int>> &grid)
    {
        // code here
        vector<int>v;
        dfs(0,0,n,m,grid,v);
        return ans;
    }
};
```