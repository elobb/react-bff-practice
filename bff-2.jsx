import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://google.com';

function MyComponent({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

function MyBFF() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/x-data`).then((response) => {
      setData(response.data);
    });
  }, []);

  return <MyComponent data={data} />;
}
