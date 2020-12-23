import {render} from '@testing-library/react';
import React, {useEffect, useState} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
  const [open, setOpen] = useState (false);

  useEffect (() => {
    document.body.addEventListener (
      'click',
      () => {
        console.log ('BODY CLICK!');
        setOpen (false);
      },
      {capture: true}
    );
  }, []);

  const renderedOptions = options.map (option => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          console.log ('ITEM CLICK!');
          onSelectedChange (option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a colour</label>
        <div
          onClick={() => {
            console.log ('LABEL CLICK!');
            setOpen (!open);
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
