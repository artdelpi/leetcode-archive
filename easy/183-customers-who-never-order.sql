SELECT name AS Customers
FROM customers as c
LEFT JOIN orders as o
ON o.customerId = c.id
WHERE o.id IS NULL;