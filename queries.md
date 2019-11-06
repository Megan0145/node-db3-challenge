# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName 
FROM Products as p 
JOIN Categories as c 
ON p.CategoryId = c.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName 
FROM Orders as o
JOIN Shippers as s
ON o.ShipperID = s.ShipperID
WHERE o.OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity 
FROM OrderDetails as o
JOIN Products as p
ON o.ProductID = p.ProductID
WHERE OrderID = 10251
ORDER BY ProductName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, e.LastName as EmployeeLastName
FROM Orders as o
JOIN Customers as c
ON o.CustomerID = c.CustomerID
JOIN Employees as e 
ON o.EmployeeID= e.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT c.CategoryName, count(p.ProductID) as Count
FROM Categories as c
LEFT JOIN Products as p
ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT o.OrderID, sum(o.Quantity) as ItemCount
FROM OrderDetails as o
JOIN Products as p
ON o.ProductID = p.ProductID
GROUP BY o.OrderID;
