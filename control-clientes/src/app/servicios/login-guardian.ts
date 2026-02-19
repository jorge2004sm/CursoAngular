import { Injectable } from '@angular/core';
import { authState, Auth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardian implements CanActivate {

  constructor(private authService: Auth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return authState(this.authService).pipe(
      map(auth => !!auth),      
      tap(autenticado => {
        if (!autenticado) {
          this.router.navigate(['/login']);  
        }
      })
    );
  }
}