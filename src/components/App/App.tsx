import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import routes, { AppRoute } from './App.routes';



class App extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          {
            routes.map((route: AppRoute) => <Route key={uuid()} {...route} />)
          }
        </Switch>
      </div>
    )
  }
}


export default App;
