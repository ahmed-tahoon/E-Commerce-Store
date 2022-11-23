
# MERN Ecommerce


## Description

An ecommerce store.This ecommerce store enable three main
different flows or implementations:
  
   - Buyers browse the store categories, products and brands
   - Sellers or Merchants manage their own brand component
   - Admins manage and control the entire store components

## Features
 - Buyers
      - can view and purchase products.
      - browse the store categories, products and brands
      - Filters by Category, options, price, rate, etc
      - Add/update to cart
- Sellers
  - Add/update /Delete Own Brand
  - Add/update /Delete products for its own brand
  - Manage orders
- Admins
  - Add/update/Delete products for Available Sellers
  - Manage Categories
  - Accept or Reject new Sellers
  - Manage Sellers Brands. (Active/Deactivate)
  - Manage Users (Delete)
  - Manage Merchants ( Delete / Active/Deactivate)
  - Manage Orders
  - Manage Reviews       
### Tech Stack:
- Node provides the backend environment for this application
- Express middleware is used to handle requests, routes
- Mongoose schemas to model the application data
- React for displaying UI components
- Redux to manage application's state
- Redux Thunk middleware to handle asynchronous redux actions
## ERD
![4897fd2f-fd95-4bd8-b7b9-1d7cdf377cd5](https://user-images.githubusercontent.com/77838959/203483364-020fef80-952d-4f52-a17a-c6a76c0672d7.jpeg)
## Use case
![29ad9375-5d5d-4aaa-81be-14c97b20cbd6](https://user-images.githubusercontent.com/77838959/203483469-2e148e25-8632-4d49-b2a7-f95f10c87f2e.jpeg)
## DFD
  [DFD (1).pdf](https://github.com/ahmed-tahoon/E-commerce/files/10073153/DFD.1.pdf)

  
  
## Screenshots  
 - HomePage
 ![screely-1669185763127](https://user-images.githubusercontent.com/77838959/203486286-0347109e-0d08-48cb-b7d0-3529f1b448c0.png)
 - Shop Page
 ![screely-1669185870305](https://user-images.githubusercontent.com/77838959/203486483-c18dbdbe-60c6-4c1b-bf9c-9ddf055b670c.png)
 - Single Page
 ![screely-1669185936223](https://user-images.githubusercontent.com/77838959/203486576-421fec3c-3b0e-4e3e-bdf4-02820dce2652.png)
 - Order 
 ![screely-1669185985243](https://user-images.githubusercontent.com/77838959/203486752-988143b3-fc97-4a69-a26e-449c38e65f92.png)
![screely-1669185996786](https://user-images.githubusercontent.com/77838959/203486771-425e930f-4f06-45e4-b91c-6197afcc5a04.png)
![screely-1669186008163](https://user-images.githubusercontent.com/77838959/203486779-b07ad2a4-55a6-4c9f-b67f-80c98c6d7bdf.png)
![screely-1669186072680](https://user-images.githubusercontent.com/77838959/203486907-97fd8eb8-2b8c-436a-a336-aea9a99f2ff0.png)
![screely-1669186088783](https://user-images.githubusercontent.com/77838959/203486918-48565035-f049-4863-827d-4cdf0ed39c71.png)

## Cart 
![screely-1669186156499](https://user-images.githubusercontent.com/77838959/203487074-a871340b-b588-40b6-ac7f-9cd1af44bd2e.png)

## Admins dashboard
![screely-1669186352465](https://user-images.githubusercontent.com/77838959/203487433-961578d6-c50c-416b-bdde-7185ca73d889.png)
![screely-1669186402030](https://user-images.githubusercontent.com/77838959/203487523-874385c8-dfd5-4fe7-9ec7-4ea0b0207d2e.png)
![screely-1669186413648](https://user-images.githubusercontent.com/77838959/203487532-26b14840-26a4-4023-bc52-e737e7d94a43.png)

## Sellers dashboard
![screely-1669186528339](https://user-images.githubusercontent.com/77838959/203487867-576c0c36-8226-4101-ae07-170b664ef59f.png)


  
  

# How to run this application

- Make sure MongoDB is running on your system or online.
- include MongoDB database link in .env file.
- Open command line in the cloned folder,
- To install dependencies for backend, run npm install in main folder.
- To run backend type command node server in main folder.
- To install dependencies for frontend , run npm install in /FrontEnd folder.
- To run frontend type command npm start in /FrontEnd folder.
    
