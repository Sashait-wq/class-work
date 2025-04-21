import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const routes = inject(Router);

  routes.navigate(['login']);

  return false;
};
