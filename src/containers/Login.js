import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { changeTitle } from '../redux/title';

const Login = () => {
  const dispatch = useDispatch();
  const type = 'Login';
  useEffect(() => {
    dispatch(changeTitle(type));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form type={type} handleSubmit={handleSubmit} />
  );
};

export default Login;