import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './component/home/home';
import BranchOffice from './component/branchOffice/branchOffice';

const Routes = () => {
    return (
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />
        <Route path="/branchoffice" component={BranchOffice} />
      </Switch>
    );
}

export default Routes;