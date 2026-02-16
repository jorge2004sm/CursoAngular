import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Firebase } from './firebase';

@Injectable({
  providedIn: 'root',
})
export class loginService {
  token: string = ''

  constructor(private router: Router, private firebaseService: Firebase) {

  }

  login(email: string, password: string) {
    const auth = this.firebaseService.auth

    signInWithEmailAndPassword(auth, email, password).then(() => {
      auth.currentUser?.getIdToken().then((token: string) => {
        this.token = token;
        this.router.navigate(['/'])
      })
    })
      .catch((error: any) => {
        console.error('Error al iniciar sesion', error)
      })
  }

  getIdToken(){
    return this.token
  }

  isAutenticado(){
    return this.token != null
  }

  // Metodo para cerrar sesion
  logout(){
    const auth = this.firebaseService.auth;
    auth.signOut().then(() => {
      this.token = ''; // resetea el token al cerrar sesion
      this.router.navigate(['login'])
    })
    .catch((error) => console.error('Error de logout', error))
  }
}
