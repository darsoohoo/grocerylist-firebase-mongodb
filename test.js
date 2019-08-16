import React from 'react'
import TextField from '@material-ui/core/TextField';
import './Table.css'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import { Fragment } from 'react';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));
  
const keyPressed = event => {
    console.log(event.itemInput)
    if (event.key === "Enter") {

        const addItem = async data => {
            const newItem = {
                itemInput: data.itemInput,
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

    }
     
    };
  


const Table = props => {
   
        return (
                <div className="flex-container">
                <div id="grocery-table" className="mdl-data-table mdl-js-data-table mdl-button--colored">  
                <div className="item-input-table">
                    <form >                    
                        <TextField
                        onChange={e => props.handleChange(e)}
                        value={props.itemInput}
                        onKeyPress={keyPressed}
                        placeholder="Garlic Bread"
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        label="Grocery item"
                        className="item-input-table"
                        id="item-input"
                        name="itemInput"
                    />    
                    </form>

    
                    <table className="flex mdl-data-table mdl-js-data-table mdl-button--colored" >
 
                
                        <thead>
                            <th class="name">Name</th>
                            <th class="price">Purchased</th>
                            <th class="add">Remove</th>
                        </thead>
                        <tbody>
                        {props.items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.item}</td>
                                <td></td>
                                <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="addEthereum()" type="button">Remove</button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
        
        )
}


export default Table
