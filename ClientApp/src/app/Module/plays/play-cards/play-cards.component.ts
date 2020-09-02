import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.css']
})
export class PlayCardsComponent implements OnInit {
  options:string[]=[
    'All' ];
    days:any[]=[
      {text:"Today",checked:true},{text:"Tommorrow",checked:true},{text:"Weekend",checked:true}
    ];
    languages:any[]=[
      {text:"English",checked:true},{text:"Hindi",checked:true},{text:"Hindusthani",checked:true}
    ];
    price:any[]=["0-500","501-2000","Above 2000"];
    filteredPlayCards:any=[];
    playCards:any[]=[];
    monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  dateNow:Date;
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
  filterByType(type:string){
    this.filteredPlayCards=[];
    this.playCards.forEach(e=>
      {
        if(e.type==type)
        this.filteredPlayCards.push(e);
        if(type=="All")
        this.filteredPlayCards.push(e);
      });
  }

  navigate(event:any){
    this.router.navigate(['eventInfo',{event:event.id}]);
  }
  filterByLanguage(event:any,language:string){
    this.filteredPlayCards=[];
   
    this.languages.forEach((lan)=>{
      if(lan.text==language){
        lan.checked=event.checked;
      }
    });
    this.playCards.forEach((l)=>{
      this.languages.forEach((lan)=>{
        if(lan.text==l.language && lan.checked){
          this.filteredPlayCards.push(l);
        }
      });
    
    });
      
  }
  filterByPriceRange(index:number){
    this.filteredPlayCards=[];
    this.playCards.forEach(e=>{
      if(e.price<500 && index==0){
        this.filteredPlayCards.push(e);
      }
      else if(e.price>=500 && e.price<2000 && index==1){
        this.filteredPlayCards.push(e);
      }
      else if(e.price>2000){
        this.filteredPlayCards.push(e);
      }
    });

  }
  filterByDay(index:number){
    this.filteredPlayCards=[];
    this.playCards.forEach(e=>{
      var date=new Date(e.streamDate);
      if(index==0 && date.getTime()===this.dateNow.getTime())
        this.filteredPlayCards.push(e);
      else if(index==1 && date.getDate()==this.dateNow.getDate()+1)
        this.filteredPlayCards.push(e);
        else if(index==2 && (date.getDay()==0 || date.getDay()==6))
         this.filteredPlayCards.push(e);  
    })
  }

  ngOnInit(): void {
    this.dateNow=new Date();
    this.service.getAllCategories("Plays").subscribe((data:any)=>{
      data.forEach(element => {
        this.options.push(element);
        
      });

    });
    this.service.getEvents("Plays").subscribe(
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
       
        this.playCards.push(e);
      this.filteredPlayCards.push(e);
         
       });

  });}

}
