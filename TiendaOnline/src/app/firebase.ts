import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
   firebaseConfig = {
  apiKey: "AIzaSyAnv6lJwpTvK5dklJspxd5j51GqBKgpWeU",
  authDomain: "tienda-online-9631d.firebaseapp.com",
  databaseURL: "https://tienda-online-9631d-default-rtdb.firebaseio.com",
  projectId: "tienda-online-9631d",
  storageBucket: "tienda-online-9631d.firebasestorage.app",
  messagingSenderId: "805066127864",
  appId: "1:805066127864:web:4d6aa9d02de38e04743e0d"
};


public auth: Auth;
public firebase: Firestore

constructor(){
  const app = initializeApp(this.firebaseConfig)
  this.auth = getAuth(app)
  this.firebase = getFirestore(app)
}
}
