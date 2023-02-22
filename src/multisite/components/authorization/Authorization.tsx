import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Styled from './Authorization.styled';
type FormItems = {
  username: String;
  password: String;
};
const userLogin = {
  username: 'admin',
  password: '12345'
};

const Authorization: React.FC = () => {
  const [dataForm, setDataForm] = React.useState<FormItems>({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };
  console.log(localStorage.getItem('authorization'));
  localStorage.clear();
  const handlerSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(dataForm);
    if (dataForm.username === userLogin.username && dataForm.password === userLogin.password) {
      setDataForm({
        username: '',
        password: ''
      });
      localStorage.setItem('authorization', 'true');
    }

    // const formData = compliteFormData(dataForm, fileField);
    // postFofm(formData);
  };
  return (
    <Styled.Page>
      <Styled.FormBlock>
        <FormControl variant="standard">
          <InputLabel htmlFor="sstandard">Login</InputLabel>
          <Input id="standard" name="username" onChange={(event) => handleChange(event)} />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) => handleChange(event)}
          />
        </FormControl>

        <Button variant="contained" type="submit" onClick={(e) => handlerSubmit(e)}>
          Contained
        </Button>
      </Styled.FormBlock>
    </Styled.Page>
  );
};
export default Authorization;