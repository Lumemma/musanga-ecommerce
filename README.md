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