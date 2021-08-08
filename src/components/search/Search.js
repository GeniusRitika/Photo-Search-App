import { TextField, Select, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import axios from 'axios';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import {IconButton, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import './Search.css';

const Search = () =>
{

    const [ searchText, setSearchText ] = useState("");
    const [images, setImages] = useState([]);
    const [ amount, setAmount ] = useState(15);
    const url = 'https://pixabay.com/api';
    const apiKey = "20235236-5265aa72e995e4f7b473ce76f";
    
    const imageSearch = (e) =>
    {
        console.log(e.target.value);
        if(e.key === 'Enter' )
        {
            setSearchText('');
            setImages([]);
        }

        else{
             axios.get(url, {
                params: {
                    q: searchText,
                    per_page: amount,
                    key: apiKey
                }})
                .then((r) => { setImages(r.data.hits) });
            
            console.log(images); 
        }
    }

    const searchImage = (e) =>
    {
        axios.get(url, {
            params: {
                q: searchText,
                per_page: amount,
                key: apiKey
            }})
            .then((r) => { setImages(r.data.hits) });
        
        console.log(images); 
    }

    const updateSearch = (e) =>
    {
        if(e.key === "Delete" || e.key === "Backspace")
        {
            imageSearch(e);
        }
    }

    const handleEvent = (e) =>
    {
        setAmount(e.target.value);
    }

    return(
        <div className="main-container"> 
            <TextField
                className="Search"
                label="Search for image"
                value={searchText}
                onChange={(e) => {
                    console.log(e.target.value);
                    setSearchText(e.target.value);
                }}
                onKeyPress={imageSearch}   
                onKeyDown={updateSearch}
                InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon onClick={searchImage}/>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                
                
            />
            <br />
            <Select
                className="Select"
                style={{color: "black", fontSize: "20px"}}
                defaultValue={15}
                value={amount}
                onChange={handleEvent}
                
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

    );
}

export default Search;