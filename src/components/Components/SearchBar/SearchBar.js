import React from 'react'
import { TextField } from '@mui/material'
import { height } from '@mui/system'

const SearchBar = ({ onChange, value, placeholder, width, height, marginRight }) => {
    return (

        <TextField
            sx={{ width: width, height: height ,marginRight:(marginRight===undefined?"0px":marginRight) }}
            id="outlined-basic"
            variant="outlined"
            color='primary'
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
        // </div>
    )
}

const styles = {
    searchBar: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
    },
    input: {
        // width: '100%',
        border: 'none',
        outline: 'none',
        fontSize: '16px',
        borderRadius: '5px',
        backgroundColor: '#fff',

    },
    button: {
        width: '100%',
        height: '40px',
        border: 'none',
        outline: 'none',
        fontSize: '16px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#333',
        color: '#fff',
        cursor: 'pointer',
    },
}


export default SearchBar