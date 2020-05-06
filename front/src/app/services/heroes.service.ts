import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroesService {

  heroesData:any[] = [
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    }
  ];

  heroesUrl:string = "http://localhost:3000/api/heroes";
  heroeData:any=[];
  heroesSearchResults:any[]=[];

  constructor(
    private http:HttpClient
  ) {
    http.get(this.heroesUrl).subscribe((res:any) => {
      this.heroesData = res;
      //console.log("res:",res);
      //console.log("array updated:",this.heroesData);
    });
    //console.log("array:",this.heroesData);
    //console.log("CONSTRUCTOR TERMINADO");
  }

  getHeoresData(){
    //console.log("GET EJECUTADO");
    return this.heroesData;
  };

  getHeroeData(idx:number){
    return this.heroesData[idx];
  }

  searchHeroe(heroeName:String){
    this.heroesSearchResults = [];
    this.heroeData = this.heroesData.map((heroe,index) => {
          if(heroe.nombre.toLowerCase().indexOf(heroeName.toLowerCase()) >= 0 ){
            this.heroesSearchResults.push(index);
          }
    });
    for (let index = 0; index < this.heroesSearchResults.length; index++) {
      console.log(this.heroesSearchResults[index]);
    }
    return this.heroesSearchResults;
  }

  getHeroesDataFiltered(heroesArray:String[]){
    console.log(heroesArray);
    this.heroesSearchResults =[];
    heroesArray.map((id)=>{
      this.heroesSearchResults.push(this.heroesData[+id]);
    });
    return this.heroesSearchResults;
  }

}
