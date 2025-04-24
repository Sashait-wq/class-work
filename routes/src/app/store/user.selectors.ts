import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './user.reducers';

const selectUserState = createFeatureSelector<UserState>('user');

const selectorUser = createSelector(selectUserState, (state: UserState) => state.user);
