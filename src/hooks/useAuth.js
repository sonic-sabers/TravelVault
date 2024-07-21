import { useSelector, useDispatch } from 'react-redux';
import { loginThunk, registerThunk, logout } from '../features/auth/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading, error, token } = useSelector((state) => state.auth);

  const handleLogin = (credentials) => {
    dispatch(loginThunk(credentials));
  };

  const handleRegister = (userData) => {
    dispatch(registerThunk(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    token,
    loading,
    error,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};

export default useAuth;
