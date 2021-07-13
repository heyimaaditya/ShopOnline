import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fAuth: AngularFireAuth, private router:Router) { }


  loginViaGoogle(){
    return this.authLoginPopUpProvider(new firebase.auth.GoogleAuthProvider());
  }

  
  authLoginPopUpProvider(provider : any){
    return this.fAuth.signInWithPopup(provider)
                      .then(response => {
                        console.log('Successfully Logged In!: ',response.additionalUserInfo?.profile);
                        localStorage.setItem('user',JSON.stringify(response.additionalUserInfo?.profile));
                        this.router.navigate(['/sign-in']);
                      })
                      .catch(error => {
                        console.log('Failed to login: ',error);
                      })
  }

  logout(){
    return this.fAuth.signOut()
                      .then(response => {
                        console.log('loggedOut');
                        this.router.navigate(['/']);
                      })
                      .catch(error => {
                        console.log('Error',error);
                      })
  }
}
