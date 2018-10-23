import React, { Component } from 'react';


class Ledger extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    textOnChange (e) {
        alert('The value is: ' + e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.name.value, this.email.value);
    }

    render() {
        return (
            
            <div className="row_center">
              
                <form onSubmit={this.handleSubmit}>
                   
                   <div className="row_left">
                       <label>Debit</label>
                       <br></br>
                       <input className="resultAmount_green" type="text" ref={(credit) => this.credit = credit} />
                   </div>
               
                   <div className="row_left">
                       <label>Credit</label>
                       <br></br>
                       <input  className="resultAmount_red" type="text" ref={(debit) => this.debit = debit} />
                   </div>
               
                   <div className="row_left">
                           <label>Balance</label>
                           <br></br>
                           <input className="resultAmount_blue" type="text" ref={(balance) => this.balance = balance} />
                   </div>


                    </form>
{/*  <input placeholder="Ex. bind" type="text" onChange={this.textOnChange}/> */}
             
            </div>
          
        );
    }
}

export default Ledger;