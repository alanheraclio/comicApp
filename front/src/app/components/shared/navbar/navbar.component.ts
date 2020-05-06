import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes:any[] = [];

  constructor(
    private _heroesService:HeroesService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  searchHeroe(heroeName:String){
    this.heroes = this._heroesService.searchHeroe(heroeName);
    this._router.navigate(['/search-heroes',this.heroes]);
    //console.log(this.heroes);
  }

}
