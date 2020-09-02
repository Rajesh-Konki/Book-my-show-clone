import { Component, OnInit } from '@angular/core';
import { IMovie } from '../IMovie';
import {MovieService} from '../services/movie.service'
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {
  public filteredMovies:IMovie[]=[]
  public movies:IMovie[]=[
   
  ]
  public genre:any[]=[
    {language:'Action',selected:false},
    {language:'Adventure',selected:true},{language:'Comedy',selected:false},
    {language:'Biography',selected:true},{language:'Crime',selected:false},
    {language:'Thriller',selected:false},{language:'Family',selected:false},
    

  ];
  public languages:any[]=[
    {language:'Hindi',selected:false},
    {language:'English',selected:true},{language:'Marathi',selected:false},
    {language:'Gujarati',selected:true},{language:'Telugu',selected:false},
    {language:'Kannada',selected:false},{language:'Malayalam',selected:false},
    

  ];
  public dateNow: Date ;  
  nowMonthIndex:number;
  yearIndex=[0,1,2];
  calYear:number;
  public months:any[]=[
    'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'
  ]
  languageFilterPanelOpenState = false;
  genreFilterPanelOpenState=false;
  public regularDistribution=100/3+'%';



  constructor(private movieService:MovieService,private router:Router) { }
  navigate(movie:any){
    this.router.navigate(['movieInfo',{movie:movie.id}]);
  }
  filterByDay(index:number){
    this.filteredMovies=[];
    this.movies.forEach(e=>{
      var date=new Date(e.date);
      if(index==0 && date.getTime()===this.dateNow.getTime())
        this.filteredMovies.push(e);
      else if(index==1 && date.getDate()==this.dateNow.getDate()+1)
        this.filteredMovies.push(e);
        else if(index==2 && (date.getDay()==0 || date.getDay()==6))
         this.filteredMovies.push(e);  
    })
  }

  getYearCards(year:any){
    this.filteredMovies=[];
    this.movies.forEach(m=>{
      if(m.date.getFullYear()==year){
        this.filteredMovies.push(m);

      }
    })
  }


  ngOnInit(): void {
    this.dateNow= new Date();
    this.calYear=this.dateNow.getFullYear();
    this.nowMonthIndex=this.dateNow.getMonth();
    try{
      this.movieService.getMovies("Movie").subscribe(
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
          this.movies.push(movie);
          this.filteredMovies.push(movie);
           
         });
           }
      );
     

    }catch(e){
    
    }
   

  }
  checkMonth(index:number):boolean{
    return index>=this.nowMonthIndex;

  }
  filterByLanguage(event:any,language:string){
    this.filteredMovies=[];
   
    this.languages.forEach((lan)=>{
      if(lan.language==language){
        lan.selected=event.checked;
      }
    });
    this.movies.forEach((l)=>{
      this.languages.forEach((lan)=>{
        if(lan.language==l.language && lan.selected){
          this.filteredMovies.push(l);
        }
      });
    
    });
      
  }
  filterByGenre(event:any,language:string){
    this.filteredMovies=[];
   
    this.genre.forEach((genre)=>{
      if(genre.language==language){
        genre.selected=event.checked;
      }
    });
    this.movies.forEach((l)=>{
      this.genre.forEach((genre)=>{
        if(genre.language==l.genre && genre.selected){
          this.filteredMovies.push(l);
        }
      });
    
    });
    

  }

 
}
