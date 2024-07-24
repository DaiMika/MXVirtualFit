import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkoutList from './components/WorkoutList';
import WorkoutDetail from './components/WorkoutDetail';
import AddWorkout from './components/AddWorkout';
import './App.css';

/**
 * Main application component.
 * Sets up the routing for the application.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={WorkoutList} />
            <Route path="/workout/:id" component={WorkoutDetail} />
            <Route path="/add-workout" component={AddWorkout} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
