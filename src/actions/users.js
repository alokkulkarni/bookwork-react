import api from '../api/api';
import { userLoggedIn } from './auth';


export const signup = (data) => (dispatch) => api.user.signup(data).then(user => {
	localStorage.bookworkJWT = user.token;
	dispatch(userLoggedIn(user))
});