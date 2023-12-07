import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/slices/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, isLoading, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>Greetings</h1>
      <p>{message}</p>
    </div>
  );
};

export default Greeting;
