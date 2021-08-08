import React, { Component } from 'react';
import { TextField, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

class SearchText extends Component{
    state = {
        searchText: '',
        amount: 15,
        images: [],
        url = 'https://pixabay.com/api',
        apiKey = "20235236-5265aa72e995e4f7b473ce76f"
    }

    onTextChange = (e) =>{
       this.setState({[e.target.name]: e.target.value});
       axios.get(url, {
        params: {
            q: searchText,
            per_page: amount,
            key: apiKey
        }})
        .then((r) => this.setState({images: r.data.hits}))
        .catch((err) => console.log(err));
    
    console.log(this.state.images); 
    }

    onAmountChange = (e) => {
        this.setState({amount: e.target.value})
    }


    render(){
        return(
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    className="TextField"
                    fullWidth
                    label="Search for image"
                />

                <Select
                    name="amount"
                    className="Select"
                    style={{color: "#FF0000"}}
                    defaultValue={15}
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>


                <br></br>
                <br></br>
                {
                    images.length>0 && (
                        <GridList cellHeight={300} cols={3}>
                            {images.map((image) => (
                            <GridListTile key={image.id} cols={image.cols || 1} >
                                <img src={image.largeImageURL} alt="Object Images" />
                                <GridListTileBar
                                    title={<span>by <strong>{image.user}</strong></span>}
                                />
                            </GridListTile>
                            ))}
                        </GridList>
                    )
                    
                }
            </div>

            
        )
    }
}

export default SearchText;