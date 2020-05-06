import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html'
})
export class SearchHeroesComponent implements OnInit {

  heroes:any[]=[];

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      this.heroes = this._heroeService.getHeroesDataFiltered(Object.values(params));
      console.log(this.heroes);
    }
    );
  }

  showMore(idx:number){
    this._activatedRoute.params.subscribe(params =>{
      this._router.navigate(['/heroe',params[idx]]);
    });
  }
  
}
