import {createAction, props} from '@ngrx/store';
import {User} from '../shared/user.interface';

export enum userActionsType {
  Load = '[Users] Load users]',
  Success = '[Users] Load users successfully]',
  Error = '[Users] Load users errorfully]'
}

export const userLoad = createAction(userActionsType.Load);
export const userLoadSuccess = createAction(userActionsType.Success, props<{ user: User }>());
export const userLoadError = createAction(userActionsType.Error, props<{ error: any }>());
