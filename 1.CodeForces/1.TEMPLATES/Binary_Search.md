## upper_bound & lower_bound

```
vector<int>::iterator lower, upper;
lower = lower_bound(arr.begin(), arr.end(), val);
upper = upper_bound(arr.begin(), arr.end(), val);

// Handle boundary conditions for leftTeacher
int lowVal = (lower == arr.begin()) ? INT_MIN : *(lower - 1);

// Handle boundary conditions for rightTeacher
int upVal = (upper == arr.end()) ? INT_MAX : *upper;
```
### lowVal:

If lower == arr.begin(), this means there is no val smaller than the student. So, we assign lowVal as INT_MIN to indicate no valid low value.
Otherwise, we use *(lower - 1) to get the value just smaller than val.
```
lower_bound gives not less than(>=) the given val.Hence *(lower-1)
```
### upVal

If upper == arr.end(), this means there is no value greater than the val. So, we assign upVal as INT_MAX.
Otherwise, *upper gives us the first value greater than val.
```
upper_bound gives greater than(>) the given val.Hence *(upper)
```
