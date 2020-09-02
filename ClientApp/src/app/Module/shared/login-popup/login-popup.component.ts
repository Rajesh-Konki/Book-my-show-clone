import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { LoginService } from '../../top-header/top-header/login.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  userData: any [] = [];
  alreadySignedIn=false;
  resultMessage: string;
  constructor(
    private dialogRef: MatDialogRef<LoginPopupComponent>,private authService: SocialAuthService,private loginService:LoginService
    ) {}
    signInWithFB(): void {
   
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
        (response) => {
          //Get all user details
               console.log('Facebook' + ' logged in user data is= ' , response);
          //Take the details we need and store in an array
               this.userData.push({
                 UserId: response.id,
                 Provider: response.provider,
                 FirstName: response.firstName,
                 LastName: response.lastName,
                 EmailAddress: response.email,
                 PictureUrl: response.photoUrl
               });
               this.loginService.Login(this.userData[0]).subscribe(
                 result=>{
                   console.log('success',result);
                  
                 }
               );
               this.alreadySignedIn=true;
           },
           (error) => {
             console.log(error);
             this.resultMessage = error;
          }
          
      );
      this.onNoClick();
    }
  
    signOut(): void {
      this.authService.signOut();
    }
  
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
