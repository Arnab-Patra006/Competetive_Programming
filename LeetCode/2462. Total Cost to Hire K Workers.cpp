/*2462. Total Cost to Hire K Workers
C++|| Two Min Heaps || easy Approach:
//By me
Runtime: 280 ms, faster than 81.11% of C++ online submissions for Total Cost to Hire K Workers.
Memory Usage: 72.9 MB, less than 62.30% of C++ online submissions for Total Cost to Hire K Workers.*/
class Solution {
public:
    long long totalCost(vector<int>& costs, int k, int candidates) {
        
        priority_queue<int,vector<int>,greater<int>>pq1,pq2;
        /*
        Taking two min heaps (i.e top of heap is having the minimum value) 
        1st heap is having 1st candidates no. of elements 
        & 
        2nd heap is having last candidates no. of elements.
        
        now we will run a loop for k times as we have to selects k workers.
        we will keep one element only in one heap,for that we have used i & j in that way.
        min heap1=pq1
        min heap2=pq2;
        */
        int i=0,j=costs.size()-1;
        long long ans=0;
        for(;i<candidates;i++)
        {
            pq1.push(costs[i]);
        }
        i--;
        for(int x=0;x<candidates && j>i;x++)
        {
            pq2.push(costs[j]);
            j--;
        }
        j++;
        /*
        Now within k iteration their can be these 4 cases :
        1.) pq1.size()!=0 && pq2.size()!=0 && pq1.top()<=pq2.top().
        2.) pq1.size()!=0 && pq2.size()!=0 && pq2.top()<pq1.top().
        3.) pq1.size()!=0 && pq2.size()==0.
        4.) pq2.size()!=0 && pq1.size()==0.
        & for every iteration we keep adding the cost of the worker & finally return the ans.
        */
        while(k>0)
        {
            if(pq1.size()!=0 && pq2.size()!=0 && pq1.top()<=pq2.top())
            {
                ans+=pq1.top();
                pq1.pop();
                /*
                if there are elements in the right side of pq1 which are not a part of any heap.
                we will include it in pq1.
                */
                if(i<j-1)
                {
                    i++;
                    pq1.push(costs[i]);
                }
            }
            else if(pq1.size()!=0 && pq2.size()!=0 && pq2.top()<pq1.top())
            {
                ans+=pq2.top();
                pq2.pop();
                /*
                if there are elements in the left side of pq2 which are not a part of any heap.
                we will include it to pq2
                */
                if(j>i+1)
                {
                    j--;
                    pq2.push(costs[j]);
                }
            }
            /*
            These two cases comes iff each & every element of costs either part of pq1 or pq2.
            */
            else if(pq1.size()!=0 && pq2.size()==0)
            {
                ans+=pq1.top();
                pq1.pop();
            }
            else if(pq2.size()!=0 && pq1.size()==0)
            {
                ans+=pq2.top();
                pq2.pop();
            }
            k--;
        }
        return ans;
    }
};
/*
Please Upvote iff you like it. 
*/