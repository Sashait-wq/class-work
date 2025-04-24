import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, of} from 'rxjs';
import {UserService} from '../service/user.service';
import {userActionsType} from './user.actions';

@Injectable()

export class UserEffect {
  private actions$ = inject(Actions);
  private moviesService = inject(UserService);

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActionsType.Load),
      exhaustMap(() => this.moviesService.getUser()
        .pipe(
          map(user => ({type: userActionsType.Success, payload: user})),
          catchError((error) => of({type: userActionsType.Error, payload: error}))
        ))
    );
  });
}

