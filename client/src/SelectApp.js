import React, { useState } from 'react';
import data from './current.city.list.json';

function SelectApp({ onSubmit }) {
  const [selectedOption, setSelectedOption] = useState('');
  const filteredOptions = data.filter((item) =>
    item.name.toLowerCase().includes(selectedOption.toLowerCase())
  );

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedOption);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={selectedOption}
        onChange={handleOptionChange}
        list="options"
        placeholder="Enter city"
      />
      {selectedOption && (
        <datalist id="options">
          {filteredOptions.map((item, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>
      )}
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default SelectApp;