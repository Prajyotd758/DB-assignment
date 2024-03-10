Question 1) Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

ans : the relation between the product and product_category is one-to-many because one category can have many products but opposite to that one product can not have many categories.

In product_category "category_id" is the primary key and the "category_id" is the foreign key in the product table , means multiple tuples in product table can have same category_id , but single tuple in product table can not have multiple category-id.


Question 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

ans : The category_id in product is primary key in product_category, and category_id in product table is refernced from product_category

the "catrgory_id" in product only accepts values that already exist in the product_category table.