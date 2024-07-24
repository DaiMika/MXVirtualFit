// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component to display a list of workouts
const WorkoutList = () => {
  // State to hold workout data
  const [workouts, setWorkouts] = useState([]);

  // Fetch workout data from the API when component mounts
  useEffect(() => {
    axios.get('/api/workouts')
      .then(response => {
        // Update state with fetched workout data
        setWorkouts(response.data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error("There was an error fetching the workouts!", error);
      });
  }, []);

  return (
    <div>
      <h1>Workout List</h1>
      <ul>
        {workouts.map(workout => (
          // Display each workout as a list item
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
