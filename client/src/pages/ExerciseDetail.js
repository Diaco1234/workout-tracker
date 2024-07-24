import React from 'react';
import { useParams } from 'react-router-dom';
import Exercise from '../components/Exercise';

const ExerciseDetail = () => {
  const { name } = useParams();
  return <Exercise name={name} />;
};

export default ExerciseDetail;
