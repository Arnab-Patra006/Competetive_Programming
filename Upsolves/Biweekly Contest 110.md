# <a href="https://leetcode.com/contest/biweekly-contest-110/">Biweekly Contest 110</a>

## <a href="https://leetcode.com/contest/biweekly-contest-110/problems/minimum-seconds-to-equalize-a-circular-array/">2808. Minimum Seconds to Equalize a Circular Array</a>
## <a href="https://leetcode.com/contest/biweekly-contest-110/problems/minimum-time-to-make-array-sum-at-most-x/">2809. Minimum Time to Make Array Sum At Most x</a>



## <a href="https://leetcode.com/contest/biweekly-contest-110/problems/account-balance-after-rounded-purchase/">2806. Account Balance After Rounded Purchase</a>
```
class Solution {
    public int accountBalanceAfterPurchase(int purchaseAmount) {
        if(purchaseAmount%10==0)
        {
            return 100-purchaseAmount;
        }
        int n=purchaseAmount/10;
        int left=n*10;
        int right=(n+1)*10;
        if(left==right)
        {
            return 100-right;
        }
        else
        {
            int diff_l=purchaseAmount-left;
            int diff_r=right-purchaseAmount;
            if(diff_l<diff_r)
            {
                return 100-left;
            }
            else
            {
                return 100-right;
            }
        }
    }
}
```

## <a href="https://leetcode.com/contest/biweekly-contest-110/problems/insert-greatest-common-divisors-in-linked-list/">2807. Insert Greatest Common Divisors in Linked List</a>
```
class Solution {
public:
    ListNode* insertGreatestCommonDivisors(ListNode* head) {
        ListNode* h=head;
        
        while(head!=NULL && head->next!=NULL)
        {
            ListNode* curr=head;
            ListNode* curr_next=head->next;
            int t1=curr->val;
            int t2=curr_next->val;
            int g=__gcd(t1,t2);
            ListNode* n=new ListNode(g);
            curr->next=n;
            n->next=curr_next;
            head=head->next->next;
        }
        return h;
    }
};
```

