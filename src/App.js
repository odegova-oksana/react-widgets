import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import DropdownPanel from './components/DropdownPanel';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {title: 'What is React?', content: 'React is framework'},
  {title: 'Why to learn React?', content: 'React is super'},
  {title: 'What do you need to learn React?', content: 'Time'},
];

export default () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropdownPanel showStr={true}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
