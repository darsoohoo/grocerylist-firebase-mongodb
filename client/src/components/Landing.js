import React, { Component } from 'react'
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import Navbar from './Navbar'


export class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemInput: '',
            isLoaded: false
        }
    }
    

    componentDidMount() {
        fetch('./api/items')
        .then(res => res.json())
        .then(items => this.setState({items: items, isLoaded: true}, () => console.log('Items fetched...', items)))
        .catch(e => {
            console.log(`An error occured: ${e}`)
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        console.log(e.target.value)
    };

    submitHandler = event => {
        event.preventDefault();
        
      
    
            const addItem = async data => {
                const newItem = {
                    itemInput: data.itemInput,
                    purchased: false
                }
    
               try {
                const config = {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                };
                const body = JSON.stringify(newItem);
                const res = await axios.post('/api/items/', body, config);
                console.log(res.data)
               } catch(err) {
                console.log(err.response.data)
               }
            }
    
            addItem(event);
            console.log("item added")
    
  
         
        };
      
        
    render() {

        const listStyle = {
            marginLeft: "40%",
            marginRight: "50%",
            marginTop: "200px"
        }

        return (
            <div className="component-landing">
                <div className="Aligner flex-container">
                    <div id="grocery-table" className="mdl-data-table mdl-js-data-table mdl-button--colored">  
                        <div className="Aligner-item item-input-table">   
        
                            <form id="input-form"  onSubmit={this.submitHandler} >
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input  
                                   
                                    onChange={this.handleChange('itemInput')}
                                    value={this.state.itemInput}
                               
            
                                    margin="normal"
                                    variant="outlined"
                                    label="Grocery item"
                                    className="item-input-table"
                                    id="item-input"
                                    name="itemInput"
                                    />
                                <label class="mdl-textfield__label" for="sample3">Enter an item...</label>
                                <button  type="submit" id="submit-request" className="field mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                    Add Item
                                </button>  
                            </div>
                        
                            </form>                 
 
                            <table data-test="component-table" className="table flex mdl-data-table mdl-js-data-table mdl-button--colored" >

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>#</th>
                                        <th className="name">Name</th>
                                        <th className="price">Purchased</th>
                                        <th className="add">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.items.map((item, index) => (
                                    <tr key={item.key}>
                                        <td><button >Edit</button></td>
                                        <td>{index+1}</td>
                                        <td>{item.item}</td>
                                        <td>
                                       
                                                <Checkbox type="checkbox" 
                                                    checked={item.purchased} 
                                                    onClick={() => this.checkboxChange(item.purchased, item.key)} 
                                                />

                                        </td>
                                        <td><button onClick={() => this.removeItem(item.key)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" >Remove</button></td>
                                    </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Landing
