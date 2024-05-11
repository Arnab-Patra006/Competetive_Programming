## [B. Roof Construction](https://codeforces.com/problemset/problem/1632/B)
```
in range 0 to n-1, the highest set bit starts from biggest power of 2.Let it be 2^k.And here k
is the highest set bit in n-1.So any number greater than 2^k will have smaller value if we do XOR.bcz MSB of them will be canceled out.
This way we can reduce them from n-1 to 2^k but after that when ever I do XOR of 2^k to any smaller that it will make bigger result but not 0.
So better to put 0 after that and then smaller nos till 1.  
```
## MEX and XOR :
```
- MEX :(Minimum EXcluded) of an array is the minimum non-negative integer that does not belong to the array.the shortest array with MEX a
 is the array [0,1,…,a−1], which has length a.

- XOR :if (A XOR B)=C => B=(A XOR C)
```
# Number theory by LUV playlist :
## Moduler Arithmetic :
```
% spelled Moudulo.
+ (a+b)%M =(a%M + b%M)%M
+ (a*b)%M =(a%M * b%M)%M
+ (a-b)%M = ((a%M) - (b%M) +M)%M
+ (a/b)%M = ((a%M) * (b^-1)%M)%M
+ 1e9+7 is a Prime number.
```
Q. Why mod 1e9+7?

# Binary Numbers : 
+ signed integer range : -2^31 to 2^31-1
+ unsigned integer range : 0 to 2^32-1
## set/unset bits
```
Left Shift 1<<n means 2^n
1<<0 -> 01 No change =1
1<<1 -> 10 =2
1<<2 ->100 =4
1<<3 ->1000 =8
Right Shift 1>>i means 2^-n
```
```
+ __builtin_popcount(n) for counting set bits in int
+ __builtin_popcountll(n) for counting set bits in long

+ Manually : counting no. of setbits :
int ct=0;
for(int i=31;i>=0;i--)
{
    if((a&(1<<i))!=0)
    {
        ct++;
    }
}
return ct;

+ set i th bit of n: (n | (1<<i))
+ unset i th bit of n: (n & ~(1<<i))
+ toggle i th bit of n : (a^(1<<i))

+ Print binary of n :
for(int i=10;i>=0;i--)
{
    cout<<((n>>i)&1);
}
cout<<endl;
```
## bit manipulation
```
```
tricks
bit masking
subset generation
```
# ECD using Euclid's Method
# Binary Exponentiation :
# Prime Nos & Divisors :
```
sieve
Greatest/Lowest common divisor
Prime Calculation
Prime Factorization
```
# Extended Euclidiean Algo : not much Imp
# Miller Rabin : not much Imp