import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Search} from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (query) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <Paper
            onSubmit={handleSubmit}
            component='form'
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                mr: { sm: 5 },
                boxShadow: 'none',
            }}
        >
            <input
                placeholder='Search'
                className='search-bar'
                value={query}
                onChange={(e) => { setQuery(e.target.value) }}
                onSubmit={handleSubmit}
            />
            <IconButton type='submit' sx={{
                p: '10px',
                color: 'red'
            }}>
                <Search />
            </IconButton>
        </Paper>
    )
}
export default SearchBar