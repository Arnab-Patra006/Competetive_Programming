# POTD :18-01-23 :Find the first node of loop in linked list
### Problem Link :
(https://practice.geeksforgeeks.org/problems/44bb5287b98797782162ffe3d2201621f6343a4b/1)

### Floyd's Cycle Detection Algorithm tutorial :
i.e detect a cycle in a liked list. Anuj Bhaiya's video with proof :
(https://www.youtube.com/watch?v=jcZtMh_jov0&ab_channel=AnujBhaiya)
## Approach 1 : Floyd's Cycle Detection Algorithm :
```
class Solution
{
    public:
     //Function to find first node if the linked list has a loop.
    int findFirstNode(Node* head)
    {
        // your code here
        Node* fast=head->next->next;
        Node* slow=head->next;
        Node* temp=head;
        while(fast!=NULL)
        {
            if(fast==slow)
            {
                /*cycle present in the linked list now start moving temp towards fast
                as well as fast towards temp.Eventuallu whenever they meet in a certain node
                that is the node from where the loop started
                This concept is proved in this video too.*/
                while(temp!=fast)
                {
                    temp=temp->next;
                    fast=fast->next;
                }
                return temp->data;
            }
            fast=fast->next->next;
            slow=slow->next;
        }
        /*there is no cycle present in the linked list*/
        return -1;
    }
};
```