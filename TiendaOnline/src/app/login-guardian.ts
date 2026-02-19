import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { loginService } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardian implements CanActivate{

  constructor(private loginService: loginService, private router: Router){

  }

  // Se verifica si el usuario esta autenticado antes de activar la ruta
  canActivate(): boolean {
    if(this.loginService.isAutenticado()){
      return true
    } else {
        this.router.navigate(['login'])
        return false
    }
    
  }
  
}
