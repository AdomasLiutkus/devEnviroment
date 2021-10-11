import { createReducer, on } from '@ngrx/store';
import { clearUser, setUser } from '../action/user.actions';
 
export const initialState = '';
 
const _userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => user),
  on(clearUser, (state) => '')
);
 
export function userReducer(state, action) {
  return _userReducer(state, action);
}