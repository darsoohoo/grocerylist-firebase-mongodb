import React, { Component } from 'react';
import './LandingFb.css'
import Checkbox from '@material-ui/core/Checkbox';


class LandingFb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: '',
            items: [],
            item: '',
            purchased: false
        }
        this.itemsRef = this.props.firebase.database().ref('items')
    }

    componentDidMount() {
 
        this.itemsRef.on('child_added', snapshot => {
            const item = snapshot.val()
            item.key = snapshot.key;
            this.setState({ items: this.state.items.concat( item ) })
        });

        this.itemsRef.on('child_removed', snapshot => {
            this.setState({ items: this.state.items.filter( item => item.key !== snapshot.key )})
        })

      }

      handleChange(event) {
        this.setState({ newItem: event.target.value});
    }

    addItem(event) {
        event.preventDefault();
        if(this.state.newItem !== '') {
            this.itemsRef.push({
                name: this.state.newItem,
                purchased: this.state.purchased
            });
            this.setState({newItem: '' })
        }
    }

    removeItem = (itemKey) => {
        const item = {...this.state.item}
        if(itemKey !== ''){
            this.props.firebase.database().ref(`items/${itemKey}`).remove();
           
         this.setState({ item: item})
     
        }
    }

    checkboxChange(checkboxValue, itemKey) {
        if(checkboxValue === true){
            // change to false
            this.props.firebase.database().ref(`items/${itemKey}`).update({
                purchased: false
            })
        } else {
            // change to true
            this.props.firebase.database().ref(`items/${itemKey}`).update({
                purchased: true
            })
            
        }
        
        this.setState(items => this.setState({ items: this.state.items}, () => console.log('item setstate...', items)))
        window.location.reload();
    }


    render(){
        return (
            <div className="component-landing">
                <div className="Aligner flex-container">
                    <div id="grocery-table" className="mdl-data-table mdl-js-data-table mdl-button--colored">  
                        <div className="Aligner-item item-input-table">   
        
                            <form id="input-form" onSubmit={(e) => this.addItem(e)}>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input  onChange={(e) => this.handleChange(e)}
                                    value={this.state.newItem}
                                    id="outlined-name"
                                    margin="normal"
                                    variant="outlined"
                                    label="Grocery item"
                                    className="item-input-table"
                                    id="item-input"
                                    name="newItem"
            
                                    class="mdl-textfield__input" 
                                    type="text" />
                                <label class="mdl-textfield__label" for="sample3">Enter an item...</label>
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
                                        <td><button>Edit</button></td>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
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

export default LandingFb;