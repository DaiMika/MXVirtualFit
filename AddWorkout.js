import React, { useState } from 'react';
import './AddWorkout.css';

/**
 * Component for adding a new workout.
 * Handles form input and submission for creating a new workout.
 */
function AddWorkout() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send workout data to an API or data source
    const newWorkout = { name, description };
    fetch('/api/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWorkout),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Workout added:', data);
        // Redirect or update UI as needed
      })
      .catch(error => console.error('Error adding workout:', error));
  };

  return (
    <div className="AddWorkout">
      <h2>Add Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}

export default AddWorkout;

