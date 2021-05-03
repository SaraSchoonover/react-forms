import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Students from '../views/Students';
// import { AddStudent } from './data/StudentData';
import AddStudent from '../views/AddStudent';
import singleStudent from '../views/singleStudent';
import NotFound from '../views/NotFound';

export default function Routes({ students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route
        exact path='/' component={Home}
        />

        <Route
        exact
        path='/students'
        component={() => <Students students={students} setStudents={setStudents} /> }
        />

        <Route
        path='/students/:firebaseKey'
        component={singleStudent}
        />

        <Route path='/add-students'
        component={() => <AddStudent setStudents={setStudents} /> }
        />

        <Route
        path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};
