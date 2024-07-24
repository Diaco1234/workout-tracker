import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getExerciseData, addExerciseData } from '../services/api';
import Toggle from './Toggle';

const Exercise = ({ name }) => {
  const [data, setData] = useState({});
  const [timeframe, setTimeframe] = useState('Day');
  const [newReps, setNewReps] = useState('');
  const [newWeight, setNewWeight] = useState('');

  useEffect(() => {
    fetchExerciseData();
  }, [timeframe]);

  const fetchExerciseData = async () => {
    try {
      const response = await getExerciseData(name, timeframe);
      const fetchedData = response.data;
      const dates = fetchedData.map(set => new Date(set.date).toLocaleDateString());
      const reps = fetchedData.map(set => set.reps);

      setData({
        labels: dates,
        datasets: [
          {
            label: 'Reps',
            data: reps,
            borderColor: 'cyan',
            backgroundColor: 'rgba(0, 255, 255, 0.3)',
            fill: true,
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddData = async () => {
    try {
      const date = new Date().toISOString();
      await addExerciseData(name, { reps: newReps, weight: newWeight, date });
      fetchExerciseData();
      setNewReps('');
      setNewWeight('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="exercise">
      <h3>{name}</h3>
      <Toggle options={['Day', 'Week', 'Month', 'Year']} onChange={setTimeframe} />
      <Line data={data} />
      <div>
        <input
          type="number"
          placeholder="Reps"
          value={newReps}
          onChange={(e) => setNewReps(e.target.value)}
        />
        <input
          type="text"
          placeholder="Weight"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
    </div>
  );
};

export default Exercise;
