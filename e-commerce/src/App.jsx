import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(20);

  const increment = () => {
    setNumber(number + 1);
  };

  const decremnet = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="h-screen w-full bg-amber-50 flex justify-center items-center gap-6">
      <button
        onClick={decremnet}
        className="border border-black p-3  rounded"
      >
        -
      </button>
      <p>{number}</p>
      <button onClick={increment} className="border border-black p-3  rounded">
        +
      </button>
    </div>
  );
};

export default App;
