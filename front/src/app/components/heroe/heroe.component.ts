import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  id:number;

  constructor(private _activatedRouter:ActivatedRoute, 
              private _heroesService:HeroesService
  ) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe((params) => this.id = parseInt(params.id));
    this.heroe = this._heroesService.getHeroeData(this.id);
  }
}
