# Musanga.com fullstack: ECommerce Website
1. Website Template
   1. Create musanga.com folder
   2. create template folder
   3. create index.html
   4. add default HTML code
   5. link to style.css
   6. create header, main and footer
   7. style elements
2. Display Products
   1. create products div
   2. add product attributes
   3. add link, image, name and price
3. Create React App
   1. create frontend folder
   2. npx create-react-app frontend
   2. npm start
   3. Remove unused files
   4. copy index.html content to App.js
   5. copy style.css content to index.css
   6. replace class with className
   7. create data.js file
   8. create images file in public folder
   9. style className in the index.css
4. Share Code On Github
   1. Initialize git repository
   2. Commit changes
   4. Create repo on github
   5. connect local repo to github repo
   6. push changes to github
5. Create Rating and Product Component
   1. create components/Rating.js
   2. create div.rating
   3. style div.rating, span and last span
   4. Create Product component
   5. Use Rating component
6. Now Build Product Screen
   1. Install react-router-dom
   2. Use BrowserRouter and Route for Home Screen
   3. Create HomeScreen.js
   4. Add product list code there
   5. Create ProductScreen.js
   6. Add new Route from product details to App.js
   7. Create 3 columns for product image, info and action
7. Create Node.JS Server
   1. run npm init in musanga.com folder
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. Update package.json set type: module
   8. require express
   9. create route for / return backend is ready.
   10. move products.js from frontend to backend
   11. create route for /api/products
   12. istall jason viewer in chrome webstore to view your data better
   13. return products
   14. npm install --save-dev nodemon and update in package.json
   14. run npm start
8. Loading products from the backend
   1. edit HomeScreen.js
   2. define products, loading and error.
   3. create useEffect
   4. define async fetchData and call it
   5. install axios
   6. get data from /api/products
   7. show them in the list
   8. create Loading Component
   9. create Message Box Component
   10. use them in HomeScreen
9. Redux-To-Homescreen
   1. npm install redux react-redux
   2. Create store.js
   3. npm install redux-thunk
   3. initState= {products:[]}
   4. create Types, Actions and Reducers files for products
   4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
   5. export default createStore(reducer, initState)
   6. Edit HomeScreen.js
   7. shopName = useSelector(state=>state.products)
   8. const dispatch = useDispatch()
   9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
   10. Add store to index.js
10. Add Redux to Product Screen
     1. create product details types, actions and reducers in their respective files
     2. add reducer to store.js
     3. use action in ProductScreen.js
     4. add /api/product/:id to backend api
11. addToCart Button
    1. Handle addToCart in ProductScreen.js
    2. create CartScreen.js
12. Implement addToCart Redux
    1. create addToCart types, actions and reducers
    2. add reducer to store.js
    3. use action in Cartscreen.js
    4. render cartItems.length 
13. Build cartScreen
    1. create 2 columns for cart items and cart action
    2. cartItems.length === 0 ? cart is empty
    3. show item image, name, qty and price
    4. Proceed to Checkout button
    5. Implement remove from cart action
14. Implement removeFromCart Redux
    1. create removeFromCart types, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
15. Create Sample Users In MongoDB
    1. npm install mongoose
    2. connect to mongodb
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create userRouter
    9. Seed sample data
    10. connect to database in server.js
    11. download mongodb compass to view user data in the database
16. Create Sample Products In MongoDB
    1. create models/productModel.js
    2. create productSchema and productModel
    3. create productRouter
    4. Seed sample data
    5. Edit data.js file by removing all productId because database automatically creates new Id
    6. In sever.js create general api for products, productList and productDetails.
    7. view data with newly created ids in mongoDB compass database
17. Implement SignIn Backend
    1. create /signIn api in userRouter
    2. check email and password
    3. generate token
    4. install json web token to use in userRouter
    5. create utils.js in backend folder to define utility function like generate token
    6. create .env file in root folder and npm install dotenv
    7. return token and data
    8. test it using postman   
    9. add .env file to the gitignore file
18.  Design/create SignIn Screen
    1. create SigninScreen
    2. render email and password fields
    3. In app.js and style in index.css
    4. Update Header based on user login
19. Implement SignIn  in signInscreen (Frontend)
    1. create signin types, actions and reducers
    2. add reducer to store.js
    3. use action in SignInscreen.js
    4. style in index.css file
20. Create registerScreen
    1. create API for /api/users/register in userRouter.js in backend folder
    2. insert new user to database
    3. return user info and token
    4. create RegisterScreen in frontend folder
    5. Add fields
    6. Style fields
    7. Add Registerscreen to App.js
    8. create register action and reducer and add registerReducer to store.js
    9. check validation and create user
21. Create shippingScreen
    1. create checkoutSteps.js component
    2. style chekoutSteps in index.css
    3. create shipping fields and add Shippingscreen.js to app.js
    4. implement shipping types, actions and reducers.
    5. Add shipping from reducer in Cart local storage in store.js
22.  Create Payment Screen
    1. create payment fields
    2. implement shipping type, actions and reducers
    3. Add  localStorage.removeItem('shippingAddress'), in userActions file
23. Create placeOrder Screen
    1. design order summary fields including calculations
    2. Add placeOrderscreen.js to app.js and view the formating
24.  Create placeOrder API in backend folder
    1. create Order api
    2. create orderModel
    3. create orderRouter
    4. create a post orderRouter in orderRouter.js and isAUTh in utils.js and import isAuth in orderRouter.js
    5. And finally import orderRouter in store.js
25.  Implement placeOrder Function
    1. handle placeOrder button click
    2. create placeOrder types, action and reducer
    3. Add type in cartType and cartReducer to implement EMPTY_CART 
26. Create and Implement orderScreen
    1. build order api for /api/orders/:id in orderRouter
    2. create OrderScreen.js
    3. dispatch order details action in useEffect
    4. load data with useSelector
    5. show data like placeOrder screen
    6. create orderDetails types, action and reducer, add reducer in store.
27. Add Paypal Button
    1. get client id from paypal
    2. set it in .env file
    3. First the sandbox clientId and secondly the live clientId
    4. create route form /api/paypal/clientId
    5. create getPaypalClientID in api.js
    6. add paypal checkout script in OrderScreen.js
    7. cd frontend in terminal npm install react-paypal-button-v2 
    8. show paypal button
28. Implement Order Payment
    1. update order after payment
    2. create payOrder in api.js
    3. create route for /:id/pay in orderRouter.js
    4. rerender after pay order
    5. create paymentResults in orderModel.js and orderRouter.js in backend folder
29. Display Order History
    1. Create OrderHistoryScreen
    2. create types, actions, reducer and import reducer in store.js
    3. create customer orders api
    4. use state to bring reducer and dispatch action to orderhistoryscreen.
    5. create api for getMyOrders
    6. show orders in orderHistory screen
    7. style orders in a table and include path "/mine" in oderRouter.
30. Display User Profile
    1. create user details api in userProfilescreen
    2. create types, actions and reducer. reducer in store.js
    3. use state to bring reducer and dispatch action to userProfile.
    4. show user information
31. Update userProfile
    1. create user update api
    2. update user info
32. Create Admin View
    1. Create Admin Menu
    2. Create Admin Middleware in Backend
    3. Create Admin Route in Frontend
33. List Products
    1. Create Product List Screen
    2. show products on the List screen
34. Create Product
    1. build create product api
    2. build Create Product button
    3. define product create types, action and reducer and reducer in store.js
    4. use action in Product List Screen
35. Create product edit screen
    1. define state
    2. create fields
    3. load product details
    4. add to routes
36. Update Product
    1. define update api
    2. define product update types, action and reducer
    3. use action in Product Edit Screen
37. Upload Product Image
    1. npm install multer to manage uploadRouter
    2. define uploadRouter in backend folder
    3. create uploads folder and file.txt in it in thr root folder musanga.com
    4. Handle frontend
38. Delete Product
    1.  create delete api in backend in the productRouter.js
    2.  create delete types, action and reducer and reducer in store.js
    3.  use action in productList screen
39. List Orders
    1. create order list api in orderRouter in backend
    2. create Order List Screen
    3. create delete types, action and reducer
    4. Add reducer to store
    5. show products on the screen
40. Delete Order
    1. create delete order action and reducer
    2. add order delete action to order list
41. Deliver Order
    1. create types, actions and reducers for deliver order
    2. add order deliver action to order details screeen
42. Publish To Heroku
    1. Create git repository
    2. Create heroku account
    3. install Heroku CLI
    4. heroku login
    5. heroku apps:create <yourname>amazona
    6. Edit package.json for build script
    10. Create Procfile
    12. Create mongodb atlas database
    19. Set database connection in heroku env variables
    20. Commit and push
43. List Users
    1. build api for list users in userRouter in backend
    2. Create UserList Screen
    3. create order details type, action and reducer
44. Delete Users
    1. build api for delete users in userRouter
    2. create order details types, action and reducer
    3. Use action in UserListScreen
45. Edit Users
    1. build api for update users 
    2. create edit user screen UI
    3. dispatch type: USER_DETAIL_RESET in UserList screen
46. Implement Seller View
    1. add seller menu
    2. create seller route
    3. list products for seller
    4. list orders for seller
    5. add Seller to Product List and Details Screen
47. Create Seller Page
    1. create seller page
    2. update product component and product screen
    3. update product routes
 

