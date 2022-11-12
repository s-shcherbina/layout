import { Box, TextField } from '@mui/material';
import React from 'react';
import search from '../../assets/search.svg';

const Input = ({
  value,
  changeValue,
  showInput = { xs: 'none', sm: 'flex' },
  changeInput,
}) => {
  return (
    <TextField
      label={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={search} alt='search' />{' '}
          <Box sx={{ ml: 1, color: '#B0B0B0' }}>пошук новин</Box>
        </Box>
      }
      size='small'
      sx={{
        display: showInput,
        width: { md: '17rem' },
        bgcolor: '#F7F7F7',
        borderRadius: 5,
        '& fieldset': { border: 'none' },
      }}
      value={value}
      onChange={changeValue}
      onBlur={changeInput}
    />
  );
};

export default Input;
