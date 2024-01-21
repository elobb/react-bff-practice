import { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  const processData = (rawData) => {
    // long data processing here
  };

  const loadData = () => {
    const rawData = [
      { id: 1, title: 'Smartphone', category: 'electronics' },
      { id: 2, title: 'Laptop', category: 'electronics' },
      { id: 3, title: 'Chair', category: 'furniture' },
      { id: 4, title: 'Table', category: 'furniture' },
    ];

    const processedData = processData(rawData);
    setData(processedData);
  };

  loadData();

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
