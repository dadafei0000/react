import React from 'react';
import Paper from '@material-ui/core/Paper';

class MyHome extends React.Component
{
  render() {
    return (
      <Paper className = "home" elevation = {20}>
        <div>
        <h1 className = "title">Welcome</h1>
        </div>
        <br/>
        <div className = "text">
          <h4>It's the perfect place to declutter and discover items that are uniquely you. Say 'goodbye' to your old go-tos and 'hello' to one-of-a-kind treasures. </h4>
          <br/>
          <h4>baby chair is 60$,baby crib is 80$,baby toy are from 5$ to 50$ </h4>
          <br/>
          <h4>secondhand stuff is good to save money</h4>
          <br/>
         
        </div>
      </Paper>
    )
  }
}
export default MyHome
