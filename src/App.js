import React from 'react';
import FormSignUpLogin from './components/FormSignUpLogin';
import Main from './components/Main';
import Title from './components/Title';

function App() {
  return (
    <Main>
      <Title>Signup/Login</Title>

      <FormSignUpLogin />
    </Main>
  );
}

export default App;
