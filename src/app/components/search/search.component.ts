import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private _heroesService: HeroesService, private router: Router, private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.heroes = this._heroesService.findHero(params['find']);
    })
    console.log(this.heroes);
  }

  seeHero(i: number) {
    this.router.navigate(['/hero', i]);
    console.log(i);
  }
}
