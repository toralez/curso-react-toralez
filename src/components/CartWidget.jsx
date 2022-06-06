//@ts-check
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0 15px 0 0;
  padding: 4px;
  color: #e4a101;
  font-size: 14px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #07f;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  & .${badgeUnstyledClasses.invisible} {
    display: none;
  }
`;

export default function CartWidget({ cartCount }) {
  return (
    <Stack spacing={4} direction="row">
      <StyledBadge badgeContent={ cartCount } showZero>
        <Link to="/cart" style={{color: 'inherit',}}>
          <ShoppingCartIcon />
        </Link>
      </StyledBadge>
    </Stack>
  );
}
