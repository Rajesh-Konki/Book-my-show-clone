import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input() id:any;
  movie:any;
  constructor(private route:ActivatedRoute,private movieService:MovieService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('movie');
    this.movie=this.movieService.getMovie(this.id).subscribe(
      (data: any) =>{
   
         this.movie={
          id: data.movieId,
          date: data.dateOfRelease,
          title: data.title,
          likesCount: data.reactions,
          language: data.language,
          image: data.imageUrl,
          genre: data.genre,
          casting:data.casting,
          crew:data.crew,
          synopsis:data.synopsis
          
         }});
     
         
        }
 
}
