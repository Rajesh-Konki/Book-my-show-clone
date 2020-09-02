import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../Services/event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  languageFilterPanelOpenState=false;
  events=[];
  dateNow:Date;
  days:any[]=[
    {text:"Today",checked:true},{text:"Tommorrow",checked:true},{text:"Weekend",checked:true}
  ];
  price:any[]=["0-500","501-2000","Above 2000"];
  filteredEvents=[];
   monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
options:string[]=[
  'All',
]
 sreamDate:any;
  constructor(private service:EventService,private router:Router) { }
  navigate(event:any){
    this.router.navigate(['eventInfo',{event:event.id}]);
  }
  ngOnInit(): void {
    this.dateNow=new Date();
    this.service.getAllCategories("Events").subscribe((data:any)=>{
      data.forEach(element => {
        this.options.push(element);
      });
    });
  this.service.getEvents("Events").subscribe(
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
        this.events.push(e);
      this.filteredEvents.push(e);
       });
         }
    );
  }
  filterByDay(index:number){
    this.filteredEvents=[];
    this.events.forEach(e=>{
      var date=new Date(e.streamDate);
      if(index==0 && date.getTime()===this.dateNow.getTime())
        this.filteredEvents.push(e);
      else if(index==1 && date.getDate()==this.dateNow.getDate()+1)
        this.filteredEvents.push(e);
        else if(index==2 && (date.getDay()==0 || date.getDay()==6))
         this.filteredEvents.push(e);  
    })
  }
  getMonth(dateOfStreaming: any) {
    let date =new Date(dateOfStreaming);
    return this.monthNames[date.getMonth()-1];
  }
  filterByType(type:string){
    this.filteredEvents=[];
    this.events.forEach(e=>
      {
        if(e.type==type)
        this.filteredEvents.push(e);
        if(type=="All")
        this.filteredEvents.push(e);
      });
  }
  getDate(time:any){
    let date =new Date(time);
    return date.getDate();
  }
  filterByPriceRange(index:number){
    this.filteredEvents=[];
    this.events.forEach(e=>{
      if(e.price<500 && index==0){
        this.filteredEvents.push(e);
      }
      else if(e.price>=500 && e.price<2000 && index==1){
        this.filteredEvents.push(e);
      }
      else if(e.price>2000){
        this.filteredEvents.push(e);
      }
    });
  }
}
