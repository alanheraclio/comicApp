import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroesService:HeroesService, 
               private router:Router
    ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeoresData();
    console.log("heroes:",this._heroesService.getHeoresData());
  }

  showMore(id:number){
    console.log(id);
    this.router.navigate(['heroe',id]);

  }

}
