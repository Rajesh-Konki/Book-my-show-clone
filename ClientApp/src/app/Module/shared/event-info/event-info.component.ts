import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../../Services/event.service';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {
  @Input() eventId:any;
  event:any;
  organizers:any;
  constructor(private route:ActivatedRoute,private eventService:EventService,public dialog:MatDialog) { }
  streamOn:any;
  duration:string;
  desclamerPanelState=false;
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginPopupComponent, {
      width: '430px',
     
    });}
  ngOnInit(): void {
    this.eventId=this.route.snapshot.paramMap.get('event');
     this.event=this.eventService.getEvent(this.eventId).subscribe(
       (data)=>{
         this.event=data;
         this.organizers=this.event.organizers;
         var d=new Date(Date.parse(this.event.dateOfStreaming));
         this.streamOn=this.convertDate(d.toString());
         this.duration=this.convertTime(this.event.duration);
       }
     );
     




     

  }
  convertDate(d:string){
    var parts = d.split(" ");
    
    return parts[0]+ " "+ parts[2] +" "+parts[1] +" "+parts[3];
   }
   convertTime(t:string){
     var parts=t.split(":");
     return parts[0]+" hours "+parts[1]+" minutes ";
   }

}
