import { Component, OnInit } from '@angular/core';
import {IMovie} from './IMovie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movies:IMovie[]=[
    {id:1,image:"../assets/images/mv1.jfif",title:"Matrix",date:new Date(),language:"English",genre:"Action",likesCount:5},
    {id:1,image:"../assets/images/mv2.jfif",title:"Matrix",date:new Date(),language:"English",genre:"Action",likesCount:5},
    {id:1,image:"../assets/images/mv3.jfif",title:"Matrix",date:new Date(),language:"English",genre:"Action",likesCount:5}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
