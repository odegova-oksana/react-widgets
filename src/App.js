import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {title: 'What is React?', content: 'React is framework'},
  {title: 'Why to learn React?', content: 'React is super'},
  {title: 'What do you need to learn React?', content: 'Time'},
];

const options = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
];

export default () => {
  const [selected, setSelected] = useState (options[0]);
  const [showDropdown, setShowDropdown] = useState (true);

  return (
    <div>
      <Accordion items={items} />
      <Search />
      <button onClick={() => setShowDropdown (!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown
        ? <Dropdown
            onSelectedChange={setSelected}
            selected={selected}
            options={options}
          />
        : null}
    </div>
  );
};
