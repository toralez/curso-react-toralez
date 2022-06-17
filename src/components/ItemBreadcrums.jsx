import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      cursor: 'pointer',
      textTransform: 'capitalize',
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });

export default function ItemBreadcrums({ item }) {
  return (
    <Breadcrumbs sx={{marginBottom: '10px',}}>
        <StyledBreadcrumb component={Link} label="Home" icon={<HomeIcon fontSize="small" />} to="/" />
        <StyledBreadcrumb component={Link} label={item.category} to={"/categoria/" + item.category} />
        <Typography>{item.title}</Typography>
    </Breadcrumbs>
  )
}
