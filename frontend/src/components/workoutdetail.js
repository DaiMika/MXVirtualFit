import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './WorkoutDetail.css';

/**
 * Component for displaying details of a selected workout.
 * Fetches and displays detailed information about the workout.
 */
function WorkoutDetail() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    // Fetch workout details from an API or data source
    fetch(`/api/workouts/${id}`)
      .then(response => response.json())
      .then(data => setWorkout(data))
      .catch(error => console.error('Error fetching workout details:', error));
  }, [id]);

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <div className="WorkoutDetail">
      <h2>{workout.name}</h2>
      <p>{workout.description}</p>
      <ul>
        {workout.exercises.map(exercise => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutDetail;
