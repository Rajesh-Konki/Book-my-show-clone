import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-cards',
  templateUrl: './activity-cards.component.html',
  styleUrls: ['./activity-cards.component.css']
})
export class ActivityCardsComponent implements OnInit {
  dateNow:Date;
  options:string[]=[
    'All' ];
    days:any[]=[
      {text:"Today",checked:true},{text:"Tommorrow",checked:true},{text:"Weekend",checked:true}
    ];
    price:any[]=["0-500","501-2000","Above 2000"];
    filteredActivityCards:any=[];
    activityCards:any=[];
    monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  languageFilterPanelOpenState:boolean=false;
  constructor(private service:EventService,private router:Router) { }
  getMonth(dateOfStreaming: any) {
    let date =new Date(dateOfStreaming);
    return this.monthNames[date.getMonth()-1];
  }
  getDate(time:any){
    let date =new Date(time);
    return date.getDate();
  }
  navigate(event:any){
    this.router.navigate(['eventInfo',{event:event.id}]);
  }
  filterByType(type:string){
    this.filteredActivityCards=[];
    this.activityCards.forEach(e=>
      {
        if(e.type==type)
        this.filteredActivityCards.push(e);
        if(type=="All")
        this.filteredActivityCards.push(e);
      });
  }
  filterByDay(index:number){
    this.filteredActivityCards=[];
    this.activityCards.forEach(e=>{
      var date=new Date(e.streamDate);
      if(index==0 && date.getTime()===this.dateNow.getTime())
        this.filteredActivityCards.push(e);
      else if(index==1 && date.getDate()==this.dateNow.getDate()+1)
        this.filteredActivityCards.push(e);
        else if(index==2 && (date.getDay()==0 || date.getDay()==6))
         this.filteredActivityCards.push(e);  
    })
  }
  filterByPriceRange(index:number){
    this.filteredActivityCards=[];
    this.activityCards.forEach(e=>{
      if(e.price<500 && index==0){
        this.filteredActivityCards.push(e);
      }
      else if(e.price>=500 && e.price<2000 && index==1){
        this.filteredActivityCards.push(e);
      }
      else if(e.price>2000){
        this.filteredActivityCards.push(e);
      }
    });

  }

  
  ngOnInit(): void {
    this.dateNow=new Date();
    this.service.getAllCategories("Activities").subscribe((data:any)=>{
      data.forEach(element => {
        this.options.push(element);
        
      });

    });
    this.service.getEvents("Activities").subscribe(
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
       
        this.activityCards.push(e);
      this.filteredActivityCards.push(e);
         
       });

  });
  }

}
