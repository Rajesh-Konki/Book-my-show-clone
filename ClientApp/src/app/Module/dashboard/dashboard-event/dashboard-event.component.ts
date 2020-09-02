import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-dashboard-event',
  templateUrl: './dashboard-event.component.html',
  styleUrls: ['./dashboard-event.component.css']
})
export class DashboardEventComponent implements OnInit {
  cards:any[]=[];
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  types:any[]=[{name:"Events" ,cards:[]},
  {name:"Sports" ,cards:[]},
  {name:"Plays" ,cards:[]},{name:"Activities" ,cards:[]}]
  constructor(private service:EventService) { }

  getMonth(dateOfStreaming: any) {
    let date =new Date(dateOfStreaming);
    return this.monthNames[date.getMonth()-1];
  }
  getDate(time:any){
    let date =new Date(time);
    return date.getDate();
  }

  ngOnInit() : void  {
    if(this.types!=undefined)
    this.types.forEach(type =>{
     this.service.getEvents(type.name).subscribe(
        (data: any) =>{
         data.forEach(event => {
           var e:any={
             about:event.about,
             date:this.getDate(event.dateOfStreaming),
             month:this.getMonth(event.dateOfStreaming),
             image:event.image,
             language:event.language,
             price:event.price,
             streamingOn:event.streamingOn,
             title:event.title,
             type:event.type,
             id:event.eventId,
             streamDate:event.dateOfStreaming,
             
           }
         
          type.cards.push(e);
        
           
         });
  
    });

    });
   
  }

}
