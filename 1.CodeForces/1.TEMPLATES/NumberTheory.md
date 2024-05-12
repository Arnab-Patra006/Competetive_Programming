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

# bit manipulation
## set/unset bits
+ MSB - Most Significant bit (left most bit)
+ LSB - Lowest significant bit. (rightmost bit)

+ if any power of 2 - 1 => a number who has binary rep of all '1' except MSB
eg. 8-1=7 in Binary 1000-0001 => 111=>7

+ Left Shift 1<<n means 2^n
1<<0 -> 01 No change =1
1<<1 -> 10 =2
1<<2 ->100 =4
1<<3 ->1000 =8
+ Right Shift 1>>i means 2^-n

+ n<<i means n*2^i
+ n>>i means n/2^i

### Counting Setbits :
+ __builtin_popcount(n) for counting set bits in int
+ __builtin_popcountll(n) for counting set bits in long
+ Manually : counting no. of setbits :
```
int ct=0;
for(int i=31;i>=0;i--)
{
    if((a&(1<<i))!=0)
    {
        ct++;
    }
}
return ct;
```
+ set i th bit of n: (n | (1<<i))
+ unset i th bit of n: (n & ~(1<<i))
+ toggle i th bit of n : (a^(1<<i))

+ Print binary of n :
```
for(int i=10;i>=0;i--)
{
    cout<<((n>>i)&1);
}
cout<<endl;   
```
```
void printBinary(int num)
{
    for(int i=10;i>=0;i--)
    {
        cout<<((num>>i)&1);
    }
    cout<<endl;
}
void checkSetBit(int num,int i)
{
    i;
    int mask=(1<<i);
    if((num & mask)==0)
    {
        cout<<"Not Set"<<endl;
    }
    else
    {
        cout<<"Set"<<endl;
    }
    return;
}
void setBitCount(int num)
{
    // cout<<__builtin_popcount(num);
    //Alternative
    //from msb to lsb i am checking i-th bit is set or not.
    int cnt=0;
    for(int i=10;i>=0;i--)
    {
        int a=((1<<i)&num);
        if(a!=0)
        {
            cnt++;
        }
    }
    cout<<cnt<<endl;
    return;
}
void setBit(int num,int i) //OR
{
    int mask=(1<<i);
    int a=(num | mask);
    printBinary(a);
    return;
}
void unsetBit(int num,int i) //AND
{
    int mask=(1<<i);
    int a=(num & ~mask);
    printBinary(a);
    return;
}
void toggleBit(int num,int i)
{
    int mask=(1<<i);
    int a=(num ^ mask);
    printBinary(a);
    return;
}
void checkOddEven(int n)
{
    //'+,-,*'are fast but '%,/' are slow 
    //so this approach is better than n%2
    if((n&1)!=0)
    {
        cout<<"Odd"<<endl;
    }
    else
    {
        cout<<"Even"<<endl;
    }
    return;
}
void divideBy2(int num)
{
    cout<<(num>>1)<<endl;
    return;
}
void multiplyBy2(int num)
{
    cout<<(num<<1)<<endl;
    return;
}
void checkPowerOf2(int num)
{
    //Bcz any power of 2 has only one set bit and if I do -1 from that
    //It will make LSB's 1 and that bit 0 So if I do & of them this will be 0.
    if(num&(num-1)) //non-zero
    {
        cout<<"Not Power of 2"<<endl;
    }
    else
    {
        cout<<"Power of 2"<<endl;
    }
    return;
}
void solve1(int tc)
{
    int n;
    cin>>n;
    printBinary(n);
    int i=3;
    checkSetBit(n,i);
    setBit(n,2);
    unsetBit(n,i);
    toggleBit(n,5);
    setBitCount(n);
    checkOddEven(n);
    divideBy2(n);
    multiplyBy2(n);
    //Trick 1:
    //Only diff btw 'A' and 'a' is that 'a'has 5th bit set
    //but 'A' doesn't have that.(for all capital 5th is unset)
    char A='A';
    char a='A'|(1<<5);
    cout<<a<<endl;
    //Trick 2:
    //If I wanna make uppercase to lowercase :do OR operation with ' '(space)
    //If I wanna make lowercase to uppercase :do AND operation with '_'(underscore)

    //Trick 3:
    //I want to unset all LSB till i-th bit
    int b=(n&(~((1<<(i+1))-1)));
    printBinary(b);
    //I want to unset all MSB till i-th bit
    int c=(n&((1<<(i+1))-1));
    printBinary(c);

    //Trick 4: Check If a number is a power of 2
    checkPowerOf2(n);
    return;
}
```


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