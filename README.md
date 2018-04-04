<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="sketch/logo.png" alt="Markdownify" width="200"></a>

</h1>

<h4 align="center">TodoList is a web application built to for storing to do items</h4>


<div align="center">
  Built with ❤︎  
</div>
  

## Architecture

<img src="sketch/architecture.png" alt="architecture" />

- ### Back end
    - [Express](https://expressjs.com/)- Nodejs framwork for building the REST Apis
    - [Mongodb](http://mongodb.com/)-  Document oriented NoSQL database
    - [Mongoose](https://http://mongoosejs.com)- MongoDB object modeling tool
    - [Redis](https://redis.io/)- In memory key-value database
- ### Front end
    - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
    - [Redux](https://redux.js.org/)- Redux is a predictable state container for JavaScript applications.
    - [React-router](https://github.com/ReactTraining/react-router)- Complete routing library for React
    - [Materialize css](http://materializecss.com/)- Responsive front-end framework based on Material Design

## Getting Started

#### Clone the project
```sh
# clone it
git clone https://github.com/muhzi4u/todo-list.git
cd todo-list
# Make it your own
rm -rf .git && git init
```
#### Run back end

```
# Move to server folder
cd server/
# Install dependencies
yarn install

# Start  server
yarn run start
```
#### Run front end
```
# Move to client folder 
cd client/
# Install dependencies
yarn install
# Start  client
yarn run start
```


## ☑ TODO

* [x] Confirm box for delete item
* [ ] Edit items
* [ ] Movie auth apis to Redux
* [ ] Change Form validation
* [ ] Implement Passport for authentication.
* [ ] Code beautification
* [ ] Divide active and non-active items
* [ ] Documentation
* [ ] CI with Travis
* [ ] Add PWA support

## License

MIT
