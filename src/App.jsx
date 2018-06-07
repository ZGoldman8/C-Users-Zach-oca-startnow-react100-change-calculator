import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: "",
      amountReceived: "",
      change: "",
      twentyDollars: "",
      tenDollars: "",
      fiveDollars: "",
      dollars: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: "",
   }
   this.amountDueChange = this.amountDueChange.bind(this)
   this.amountReceivedChange = this.amountReceivedChange.bind(this)
   this.buttonClicked = this.buttonClicked.bind(this)
  } 

  buttonClicked () {
      var change = (this.state.amountReceived - this.state.amountDue).toFixed(2);
  
      var twentyDollars = Math.floor((change / 20)).toFixed(0);
      change -= twentyDollars * 20;
  
      var tenDollars = Math.floor((change / 10)).toFixed(0);
      change -= tenDollars * 10;
  
      var fiveDollars = Math.floor((change / 5)).toFixed(0);
      change -= fiveDollars * 5;
  
      var dollars = Math.floor((change / 1)).toFixed(0);
      change -= dollars;
      
      var quarters = Math.floor((change / 0.25)).toFixed(0);
      change -= quarters * .25;
  
      var dimes = Math.floor((change / 0.10)).toFixed(0);
      change -= dimes * .10;
  
      var nickels = Math.floor((change / 0.05)).toFixed(0);
      change -= nickels * .05;
  
      var pennies = Math.round((change / 0.01)).toFixed(0);

      change = (this.state.amountReceived - this.state.amountDue).toFixed(2);
      
      if (pennies == 5) {
          pennies = 0;
          nickels ++;
      }
  
      if (nickels == 2) {
          nickels = 0;
          dimes ++;
      }
      this.setState({
        twentyDollars: twentyDollars,
        tenDollars: tenDollars,
        fiveDollars: fiveDollars,
        dollars: dollars,
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies,
        change: "$" + change,
      }, () => console.log(this.state)
      )
  }

  amountDueChange (event) {
    this.setState({amountDue: event.target.value}, () => console.log(this.state))
  }
  
  amountReceivedChange (event) {
    this.setState({amountReceived: event.target.value}, () => console.log(this.state))
  }

  render() {
    return (
      <div><h1>Change Calculator</h1>
        <hr />
        {/* First DIV Box */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card p-0">
              <div className="card-body">
                <h5 className="card-title">Enter information</h5>
                <hr />
                <p className="card-text"><strong>How much is due?</strong></p>
                <input 
                  name="amountDue"
                  onChange = {this.amountDueChange}
                  value = {this.state.amountDue}
                /><br /><br />
                <p className="card-text"><strong>How much was received?</strong></p>
                <input
                  name="amountReceived"
                  onChange = {this.amountReceivedChange}
                  value = {this.state.amountReceived}
                /><br /><br />
                <button className="btn btn-primary" id="calculate-change" onClick={this.buttonClicked}>Calculate</button>
              </div>
            </div>
          </div>
          {/* Second DIV Box */}
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
              <div className="row">
                <div className="alert alert-success rounded top border col p-3 m-3">
                The total change due is {this.state.change}
                </div>
              </div>
              <div className="row">
                <div className="well bg bg-light rounded-top border col p-3 m-3"><strong><h3>Twenties</h3></strong>
                  <br /><p className="lead">{this.state.twentyDollars}</p></div>
                <div className="well bg bg-light rounded-top border col p-3 m-3"><strong><h3>Tens</h3></strong>
                  <br /><p className="lead">{this.state.tenDollars}</p></div>
                <div className="well bg bg-light rounded-top border col p-3 m-3"><strong><h3>Fives</h3></strong>
                  <br /><p className="lead">{this.state.fiveDollars}</p></div>
                <div className="well bg bg-light rounded-top border col p-3 m-3"><strong><h3>Ones</h3></strong>
                  <br /><p className="lead">{this.state.dollars}</p></div>
              </div>
              <div className="row">
                <div className="well bg bg-light rounded-top border col p-3 m-3"><strong><h3>Quarters</h3></strong>
                  <br /><p className="lead">{this.state.quarters}</p></div>
                <div className="well bg bg-light rounded-top border col p-3 m-3"><strong><h3>Dimes</h3></strong>
                  <br /><p className="lead">{this.state.dimes}</p></div>
                <div className="well bg bg-light rounded-top border col p-3 m-3"><strong><h3>Nickels</h3></strong>
                  <br /><p className="lead">{this.state.nickels}</p></div>
                <div className="well bg bg-light rounded-top border col p-3 m-3"><strong><h3>Pennies</h3></strong>
                  <br /><p className="lead">{this.state.pennies}</p></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
