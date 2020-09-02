import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { MovieService } from 'src/app/Module/movie/services/movie.service';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  slides:any=[];
  @Input() type:string;
  constructor(private route:ActivatedRoute,private service : EventService,private router:Router,private movieService:MovieService) { }
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
  getMonth(dateOfStreaming: any) {
    let date =new Date(dateOfStreaming);
    return this.monthNames[date.getMonth()-1];
  }
  getDate(time:any){
    let date =new Date(time);
    return date.getDate();
  }
  navigate(event:any){
    if(this.type!="Movies")
    this.router.navigate(['eventInfo',{event:event.id}]);
    else{
      this.router.navigate(['bookMovie']);
    }
  }
  ngOnInit(): void {
    if(this.type!=undefined && this.type!="Movies")
    this.service.getEvents(this.type).subscribe(
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
       
         this.slides.push(e);
      
         
       });

  });
  else if(this.type=="Movies"){
    this.movieService.getMovies("Exclusive").subscribe(
      (data: any) =>{
       data.forEach(movie => {
         var movie:any={
          id: movie.movieId,
          date: movie.dateOfRelease,
          title: movie.title,
          likesCount: movie.reactions,
          language: movie.language,
          image: movie.imageUrl,
          genre: movie.genre
    };
        this.slides.push(movie);
       
         
       });
         }
    );
  }

   
  }
  

}
