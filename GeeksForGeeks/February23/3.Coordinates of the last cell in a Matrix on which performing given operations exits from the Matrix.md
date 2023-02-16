# <a href="https://practice.geeksforgeeks.org/problems/2e068e2342b9c9f40cfda1ed8e8119542d748fd8/1">Coordinates of the last cell in a Matrix on which performing given operations exits from the Matrix</a>

## Approach 1 : C++ | Recursion

```
class Solution{
    public:
    int r,c;
    void dfs(vector<vector<int>>& matrix,int row,int col,int dir)
    {
        if(matrix[row][col]==0)
        {
            if(dir==1)
            {
                if(row-1<0)
                {
                    r=row;
                    c=col;
                    return;
                }
                dfs(matrix,row-1,col,1);
            }
            else if(dir==2)
            {
                if(col+1==matrix[0].size())
                {
                    r=row;
                    c=col;
                    return;
                }
                dfs(matrix,row,col+1,2);
            }
            else if(dir==3)
            {
                if(row+1==matrix.size())
                {
                    r=row;
                    c=col;
                    return;
                }
                dfs(matrix,row+1,col,3);
            }
            else
            {
                if(col-1<0)
                {
                    r=row;
                    c=col;
                    return;
                }
                dfs(matrix,row,col-1,4);
            }
        }
        else
        {
            if(dir==1)
            {
                if(col+1==matrix[0].size())
                {
                    r=row;
                    c=col;
                    return;
                }
                matrix[row][col]=0;
                dfs(matrix,row,col+1,2);
            }
            else if(dir==2)
            {
                if(row+1==matrix.size())
                {
                    r=row;
                    c=col;
                    return;
                }
                matrix[row][col]=0;
                dfs(matrix,row+1,col,3);
            }
            else if(dir==3)
            {
                if(col-1<0)
                {
                    r=row;
                    c=col;
                    return;
                }
                matrix[row][col]=0;
                dfs(matrix,row,col-1,4);
            }
            else
            {
                if(row-1<0)
                {
                    r=row;
                    c=col;
                    return;
                }
                matrix[row][col]=0;
                dfs(matrix,row-1,col,1);
            }
        }
        return;
    }
    pair<int,int> endPoints(vector<vector<int>> matrix){
        //code here
        r=-2,c=-2;
        //let's Assume, up=1,right=2,down=3,left=4,
        dfs(matrix,0,0,2);
        return {r,c};
    }

};
```
Please Upvote if you like it.