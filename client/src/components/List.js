import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './List.css'

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


 

    render() {

        const { values, handleChange } = this.props;
        
        return (
            <div className="list">
                <div className="Aligner">
                    <div className="Aligner-item Aligner-item--top"></div>
                    <div className="Aligner-item">
                        <TextField
                           onChange={handleChange('newItem')}
                        value={this.props.newItem}
                        placeholder="Enter in an item"
                        margin="normal"
        
                        className="col-sm-12 location-field"
                        id="new-item"

                        
                        />
                    
                        <ul className="demo-list-icon mdl-list">
                            {values.items.map((item) => (
                                <li  key={item.id} className="mdl-list__item">
                                    <span className="mdl-list__item-primary-content item">
                                    <i className="material-icons mdl-list__item-icon restaurant-icon">restaurant_menu</i>
                                    <div className="item-text">{item.item}</div>
                                    <i className="material-icons mdl-list__item-icon delete">delete</i>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="Aligner-item Aligner-item--bottom"></div>
                </div>                
            </div>
        )
    }
}

export default List
