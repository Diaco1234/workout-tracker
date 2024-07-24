import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Section = ({ title }) => {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  const exercises = {
    Chest: ['Bench Press', 'Pushups', 'Inclined Bench Press', 'Chest Press', 'Tricep Pulley with Rope', 'Triceps Pulley with Bar', 'Unilateral Tricep Pulley', 'Front Raises', 'Lateral Raises'],
    Leg: [], // Add exercises here
    Back: [], // Add exercises here
    FullBody: [] // Add exercises here
  };

  const handleClick = (exercise) => {
    history.push(`/exercise/${exercise}`);
  };

  return (
    <div className="section" onClick={() => setExpanded(!expanded)}>
      <h2>{title}</h2>
      {expanded && (
        <div className="exercises">
          {exercises[title].map((exercise, index) => (
            <div key={index} onClick={() => handleClick(exercise)}>
              {exercise}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
