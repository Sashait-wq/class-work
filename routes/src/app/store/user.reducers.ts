import {User} from '../shared/user.interface';
import {createReducer, on} from '@ngrx/store';
import {userLoad, userLoadError, userLoadSuccess} from './user.actions';

export interface UserState {
  user: User | null;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null
}

export const userReducers = createReducer(
  initialState,
  on(userLoad, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(userLoadSuccess, (state, {user}) => ({
    ...state,
    loading: false,
    error: null,
    user
  })),
  on(userLoadError, (state, {error}) => ({
    ...state,
    loading: false,
    error
  }))
)
