import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function ItemListSort({ handleChangeSort }) {
    const [sort, setSort] = useState('');

    const handleChange = (event) => {
      handleChangeSort(event.target.value);
    };
  
    return (
      <Box sx={{textAlign: 'end', margin: "auto", maxWidth: "90%",}}>
        <FormControl sx={{ minWidth: 135, }} size="small">
          <InputLabel id="select-label">Ordenar por:</InputLabel>
          <Select
            labelId="select-label"
            id="products-select"
            value={sort}
            autoWidth
            label="Ordenar por:"
            onChange={handleChange}
            sx={{background: '#121212',}}
          >
            <MenuItem value={''} disabled>Seleccionar</MenuItem>
            <MenuItem value={'title'} onClick={() => setSort('title')}>Nombre</MenuItem>
            <MenuItem value={'priceAsc'} onClick={() => setSort('priceAsc')}>Precio (menor a mayor)</MenuItem>
            <MenuItem value={'priceDes'} onClick={() => setSort('priceDes')}>Precio (mayor a menor)</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
}
