import React, { Component } from 'react'
import Table from './Table'
import { minWidth, maxWidth } from '@material-ui/system';
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
    
    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        console.log(e.target.value)
    };
        
    render() {

        const { items } = this.state;
        const values = { items }
        const listStyle = {
            marginLeft: "40%",
            marginRight: "50%",
            marginTop: "200px"
        }

        return (
                <div>
                    <div style={listStyle} >
                        <Table 
                        handleChange={this.handleChange}
                        values={this.state.itemInput}
                        items={this.state.items}
                        />

                    </div>
                </div>
        )
    }
}



export default Landing
