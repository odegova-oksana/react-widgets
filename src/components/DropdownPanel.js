import React, {useState} from 'react';
import Dropdown from './Dropdown';

const options = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
];

const DropdownPanel = () => {
  const [selected, setSelected] = useState (options[0]);
  const [showDropdown, setShowDropdown] = useState (true);

  return (
    <div>
      <button onClick={() => setShowDropdown (!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown
        ? <Dropdown
            onSelectedChange={setSelected}
            selected={selected}
            options={options}
            label="Select a color"
          />
        : null}
    </div>
  );
};

export default DropdownPanel;
