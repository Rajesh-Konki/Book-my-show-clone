import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import {LoginService} from './login.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from '../../shared/login-popup/login-popup.component';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  userData: any [] = [];
  alreadySignedIn=false;
  constructor(private authService: SocialAuthService,private loginService:LoginService,public dialog: MatDialog) { }
  resultMessage: string;
  @ViewChild('modal', {read: ElementRef})
  sample:ElementRef;
  signInWithGoogle(): void {
    
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {
      width: '430px',
     
    });

  
  }
  
  ngOnInit(): void {
  }

}
