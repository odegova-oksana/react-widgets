import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {label: 'Afrikaans', value: 'af'},
  {label: 'Arabic', value: 'ar'},
  {label: 'Hindi', value: 'hi'},
];

const Translate = () => {
  const [selected, setSelected] = useState (options[0]);
  const [text, setText] = useState ('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={e => setText (e.target.value)} />
        </div>
      </div>

      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
        label="Select a language"
      />

      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={selected} text={text} />
    </div>
  );
};

export default Translate;
