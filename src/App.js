import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
const Home = () => <h2> Home </h2>;
const NewsFeed = () => <h2> News Feed </h2>;
class App extends React.Component {
    render() {
        return (
          <Router>
            <React.Fragment>
                <nav>
                    <Link to={'/home'}> Home </Link><br />
                    <Link to={'/news'}> News feed </Link><br />
                    <Link to={'/contact'}> Contact </Link><br />
                </nav>
                <div>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/news" component={NewsFeed}/>
                    <Route path="/contact" render={() => <h3>Contact Us</h3>}/>
                </div>
            </React.Fragment>
          </Router>   
        );
    }
}
export default App;