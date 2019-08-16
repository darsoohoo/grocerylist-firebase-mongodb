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
        this.removeItem = this.removeItem.bind(this)
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
        const itemInput = this.state.itemInput
    
            const addItem = async data => {
                const newItem = {
                    itemInput: data,
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
            addItem(itemInput);
    
        };

        removeItem(id) {
            axios.delete('/api/items/'+id)
              .then(response => { console.log(response.data)});
        
            this.setState({
              items: this.state.items.filter(item => item._id !== id)
            })
        }

        updateItem(id, newItem, checkboxValue) {
            //e.preventDefault();
            let purchased;

            if(checkboxValue === true){ purchased = false
                } else { 
                purchased = true
            }
            const item = {  
              item: newItem,
              purchased: purchased,
            }
        
            axios.post('/api/items/update/' + id, item)
              .then(res => console.log(res.data));
        
            window.location = '/';
          }
      
        
    render() {

        const buttonStyle = {
            visibility: "hidden"
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
                                    label="Grocery item"
                                    className="item-input-table"
                                    id="item-input"
                                    name="itemInput"
                                    />
                                <label className="mdl-textfield__label" for="sample3">Enter an item...</label>
                                <input style={buttonStyle} type="submit"></input>
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
                                    <tr key={item._id}>
                                        <td><button >Edit</button></td>
                                        <td>{index+1}</td>
                                        <td>{item.item}</td>
                                        <td>
                                       
                                                <Checkbox type="checkbox" 
                                                    checked={item.purchased} 
                                                    onClick={() => this.updateItem(item._id, item.item, item.purchased)} 
                                                />

                                        </td>
                                        <td><button onClick={() => this.removeItem(item._id)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" >Remove</button></td>
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
