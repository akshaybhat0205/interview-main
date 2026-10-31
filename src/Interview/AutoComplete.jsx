import { useState } from "react";

function Autocomplete() {
  const [input, setInput] = useState("");

  const names = [
    "Akshay",
    "Rahul",
    "Rohit",
    "Amit",
    "Ankit",
    "Arjun",
    "Priya",
    "Pooja",
  ];

  // Filter names based on input
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(input.toLowerCase()),
  );

  // Select a suggestion
  const selectName = (name) => {
    setInput(name);
  };

  return (
    <div>
      <h2>Autocomplete</h2>

      <input
        type="text"
        value={input}
        placeholder="Search name..."
        onChange={(e) => setInput(e.target.value)}
      />

      {input && (
        <ul>
          {filteredNames.map((name, index) => (
            <li
              key={index}
              onClick={() => selectName(name)}
              style={{ cursor: "pointer" }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}

      {input && filteredNames.length === 0 && <p>No results found</p>}
    </div>
  );
}

export default Autocomplete;
