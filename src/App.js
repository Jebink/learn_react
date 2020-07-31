import React from 'react';
// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';


const books = [{
  Title:"Angels and Demons",
  Publisher:"Penguin Random House",
  Auther:"Dan Brown",
  Price:406,
  ProdId:2012
},
{
  Title:"Norse Mythology",
  Publisher:"Bloomsbury Publishing",
  Auther:"Neil Gaiman",
  Price:300,
  ProdId:2019
}]
function generateCard(){
  let oparr = []
  books.forEach(book => {
    var row = (
    <div className="col-md-4">
      <div className="card shadow p-3 mb-5 bg-white rounded">
      <div className="card-body">
      <h4 className="card-title text-center font-weight-bold">{book.Title}</h4>
      <div className = "card-text">
    <p>Author: <span className="font-weight-bold"> {book.Auther}</span><br/>
    Publisher: <span className="font-weight-bold"> {book.Publisher}</span><br/>
    Price: <span className="font-weight-bold"> {book.Price}</span></p><br/>
      </div>
      <div className = "card-bottom">
        <span>Product ID: {book.ProdId}</span>
      </div>
      </div>
      </div>
    </div>)
    oparr.push(row)
  })
  return (<div><h1 className="text-primary text-center">Featured Titles</h1>
  
  <div className="row">
  <div className="col-md-2"></div>    {oparr}
  </div>
  </div>)
}
function App(){
  return generateCard()
}
export default App;