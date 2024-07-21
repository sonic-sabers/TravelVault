import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfileThunk, fetchUserListThunk } from '../features/user/userThunks';

const useUsers = () => {
  const dispatch = useDispatch();
  const { profile, users, loading, error } = useSelector((state) => state.user);

  const fetchUserProfile = () => {
    dispatch(fetchUserProfileThunk());
  };

  const fetchUserList = () => {
    dispatch(fetchUserListThunk());
  };

  return {
    profile,
    users,
    loading,
    error,
    fetchUserProfile,
    fetchUserList,
  };
};

export default useUsers;
