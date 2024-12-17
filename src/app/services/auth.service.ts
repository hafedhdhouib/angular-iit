import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

import * as auth from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userClaims: any;
  //  public userClaims$ = new Subject<any>();

  constructor(private afAuth: AngularFireAuth) {}

  getUserClaims(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (!!user) {
          this.setUserClaims(user);
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  getUserToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (!!user) {
          user
            .getIdToken()
            .then((token) => resolve(token))
            .catch(() => reject('No token Available.'));
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  setUserClaims(user: any): void {
    this.userClaims = user;
    //    this.userClaims$.next(user);
  }

  // doFacebookLogin(): Promise<any> {
  //     return this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  // }
  //
  // doTwitterLogin(): Promise<any> {
  //     return this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  // }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('User logged in:', result.user);
      })
      .catch((error) => {
        console.error('Error during login:', error.message);
      });
  }

  doGoogleLogin(): Promise<any> {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  doLogout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!!this.afAuth.currentUser) {
        this.afAuth.signOut().then(
          () => {
            this.setUserClaims(null);
            resolve();
          },
          (err) => reject(err)
        );
      } else {
        reject();
      }
    });
  }
}
