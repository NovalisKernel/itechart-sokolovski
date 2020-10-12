import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from 'components/Login';
import Home from 'components/Home';

const contacts = [
  { id:0, name: 'Paul', job: 'CEO', decision: 'Deside', promoter: 'Promoter', level: "High", relatOwner: 'Laura' },
  { id:4, name: 'Vladlen', job: 'CMO', decision: 'Recommend', promoter: 'Neutral', level: "Low", relatOwner: 'Laura' },
  { id:1, name: 'Maksim', job: 'CTO', decision: 'Deside', promoter: 'Strong Promoter', level: "Medium", relatOwner: 'John' },
  { id:2, name: 'Andrey', job: 'CMO', decision: 'Agree', promoter: 'Detractor', level: "Emerging", relatOwner: 'Laura' },
  { id:3, name: 'Vadim', job: 'Accountant', decision: 'Recommend', promoter: 'Neutral', level: "Medium", relatOwner: 'John' },
];

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/contacts" component={()=><Home contacts={contacts}/>}  />
    </Switch>
  );
}



export default App;
