# React_Shopping_Cart

## Task

Create web-app with shopping cart and quantity of items in cart at site`s header.


## Stack
**Frontend:**
React, Redux, redux-persist for creating localStorage, JavaScript

**Backend:**
For data was used  https://fakestoreapi.com/products 


## Description
There was created basic React-app with Create React App. App consist from several pages (main page, product page and order page) that were created with the 'react-router-dom'. 

On the product page there are cards with buttons, the functionality of which is to add the product to the cart in and reflect the count of the added product in the shopping cart in the header. 

On the order page reflects the list of  products previously selected by the user. It was realised using Redux. There is implemented  functions of changing quantity of product with authomatically cahanging product's summ and total amount of order. There is also function of delete product from order with auto change the total amount. All functionality was realized using JavaScript and Redux.

For storage order's data is using the Redux store and localStorage. Local Storage is automatically changing  with redux store because of using redux-persist library.


## View



