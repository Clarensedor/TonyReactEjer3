import React, { useState, useEffect } from 'react';
import Card from '../Card';

const Dogis = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchdogis = async () => {
      try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        const data = await response.json();                         
        setBreeds(data.data);
      } catch (error) {
      }
    };

    fetchdogis();
  }, []);
  
  
  breeds.map((j) => (
    console.log()
  ));
  
  return (
    <div className="App">
      {breeds.map((j) => {
        return (
          <Card>
            <p>{j.attributes.name}</p>
            <p>{j.attributes.description}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Dogis;