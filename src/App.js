// Actions
// import { setStateAppReducer } from './storage/reducers/app/app.actions'

// Libraries
import AppRouter from './routes/app-root.router';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';

function App (props) {

  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}



export default connect()(App);