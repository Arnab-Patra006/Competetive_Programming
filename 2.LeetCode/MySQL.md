# Crack SQL Interview in 50 Qs.

## <a href="https://leetcode.com/problems article-views-i/">1148.Article Views I</a>
```
select distinct author_id as id from Views where author_id=viewer_id order by author_id asc;
```

## <a href="https://leetcode.com/problems/recyclable-and-low-fat-products/">1757.Recyclable and Low Fat Products</a>


```
select product_id from Products where low_fats='Y' && recyclable='Y';
```
## <a href="https://leetcode.com/problems/invalid-tweets/">1683. Invalid Tweets</a>
```
select tweet_id from Tweets where (char_length(content)>15);
```

## <a href="https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/">1378. Replace Employee ID With The Unique Identifier</a>

+ The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.

+ Syntax : 
```
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```
```
select unique_id,name from Employees left join EmployeeUNI on Employees.id=EmployeeUNI.id;
```

## <a href="https://leetcode.com/problems/product-sales-analysis-i/">1068. Product Sales Analysis I</a>

```
select product_name,year,price from Sales natural join Product where Sales.product_id=Product.product_id;
```
+ The query you provided is using the NATURAL JOIN syntax to join the Sales and Product tables based on the matching column names. However, it's generally not recommended to use NATURAL JOIN because it can lead to unexpected results when the column names overlap or change.

Instead, it's better to use explicit join syntax with the ON or USING clause to specify the join condition. Here's the corrected version of your query using the ON clause:
```
select product_name,year,price from Sales join Product on Sales.product_id =Product.product_id;
```
+ And here's the corrected version of your query using the USING clause:
```
select product_name,year,price from Sales join Product using(product_id);
```

# Basic Aggregate Functions
## <a href="https://leetcode.com/problems/not-boring-movies/">620. Not Boring Movies</a>
```
select * from Cinema where Cinema.id%2!=0 and Cinema.description!='boring' order by rating desc;
```

# 7.Advanced String Functions / Regex / Clause
## <a href="https://leetcode.com/problems/fix-names-in-a-table/">1667. Fix Names in a Table</a>

+ Write an SQL query to fix the names so that only the first character is uppercase and the rest are lowercase.

Return the result table ordered by user_id.
```
# SUBSTR(string_name , start_index ,end_index)
select user_id,
concat(
    upper
    (
        substr(name,1,1)
    ),
    lower
    (
        substr(name,2,length(name))
    )
)
as name from Users order by Users.user_id;

```

## <a href="https://leetcode.com/problems/patients-with-a-condition/">1527. Patients With a Condition</a>

+ Write an SQL query to report the patient_id, patient_name and conditions of the patients who have Type I Diabetes. Type I Diabetes always starts with DIAB1 prefix.
```
Input: 
Patients table:

+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 1          | Daniel       | YFEV COUGH   |
| 2          | Alice        |              |
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 |
| 5          | Alain        | DIAB201      |
+------------+--------------+--------------+

Output: 
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 | 
+------------+--------------+--------------+
Explanation: Bob and George both have a condition that starts with DIAB1.
```
```
select * from Patients where Patients.conditions like 
    '% DIAB1%'
or
conditions like
    'DIAB1%'
;
```