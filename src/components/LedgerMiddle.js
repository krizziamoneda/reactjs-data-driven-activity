import React, { Component } from 'react';
import './ledger.css'

class LedgerMiddle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            combi:[{date:"1999-12-01", title:"SAMPLE ENTRY", amount:"123"}
            
         ],
        }


        this.handleSubmit = this.handleSubmit.bind(this);
    }




    handleSubmit = (e) => {
        e.preventDefault();
        let date = this.date.value;
        let title = this.title.value;
        let amount = this.amount.value;

        this.state.combi.push({date, title, amount});

        this.setState(
            this.state 
        )

        console.log(this.state);

        
    }

    render() {
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <center>
                        <div className="row_left">
                            <label>Debit</label>
                            <br></br>
                            <input readonly className="resultAmount_green" type="text" ref={(credit) => this.credit = credit} />
                        </div>
               
                        <div className="row_left">
                            <label>Credit</label>
                            <br></br>
                            <input  readonly className="resultAmount_red" type="text" ref={(debit) => this.debit = debit} />
                        </div>
               
                        <div className="row_left">
                                <label>Balance</label>
                                <br></br>
                                <input readonly className="resultAmount_blue" type="text" ref={(balance) => this.balance = balance} />
                        </div>
                        <br></br>
                        <br></br>
                        <div>
                            <label>Date</label>
                            <input type="date" ref={(date) => this.date = date} placeholder="Date"/>
                    
                            <label>Title</label>
                            <input type="text" ref={(title) => this.title = title} placeholder="Title"/>

                            <label>Amount</label>
                            <input type="text" ref={(amount) => this.amount = amount} placeholder="Amount"/>

                            <input type="submit" value="Create Record" />
                        </div>
                  
                         
                    </center>
                   
                  
                </form>
                <br></br>
                         <div>
                             <table>
                                 <tr>
                                     <th>Date</th>
                                     <th>Title</th>
                                     <th>Amount</th>
                                     <th>Action</th>
                                 </tr>
                                 <tbody>
                                    {this.state.combi.map(combi => (
                                        <tr>
                                        <td>{combi.date}</td>
                                        <td>{combi.title}</td>
                                        <td>{combi.amount}</td>
                                        
                                        <td><input type="button" value="Edit"/><input type="button" value="Delete"/></td>
                                        </tr>
                                    ))}

                                 </tbody>
                                        
                             </table>
                         </div>

            </div>
          
        );
    }
}

export default LedgerMiddle;