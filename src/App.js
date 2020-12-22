import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {title: 'What is React?', content: 'React is framework'},
  {title: 'Why to learn React?', content: 'React is super'},
  {title: 'What do you need to learn React?', content: 'Time'}
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
      <Search />
    </div>
  );
};