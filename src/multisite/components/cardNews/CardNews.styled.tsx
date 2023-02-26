import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const BodyCard = styled((props) => <Card sx={{ m: 2 }} {...props} />)``;

export const CardStyled = styled((props) => <CardHeader {...props} />)``;

export const CardTitle = styled((props) => <Typography variant="h2" {...props} />)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const CardNameAutor = styled((props) => <Typography variant="h4" {...props} />)``;
export const ButtonBlock = styled(Box)`
  margin: ${({ theme }) => theme.spacing(3, 'auto', 6)};
`;
export const ButtonNews = styled((props) => <Button variant="contained" {...props} />)`
  width: 200px;
`;
