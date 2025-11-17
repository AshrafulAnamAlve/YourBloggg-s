import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router =inject(Router)
  const isLoggedIn = localStorage.getItem("isLoggedIn")=='true';
  if(!isLoggedIn){
    alert('Please Login');
    router.navigateByUrl("/login");
    return false;
  }
  return true;
};
