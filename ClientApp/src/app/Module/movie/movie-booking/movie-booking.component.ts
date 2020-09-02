import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { LoginPopupComponent } from 'src/app/Module/shared/login-popup/login-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css']
})
export class MovieBookingComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {
      width: '430px',
     
    });

  
  }


}
