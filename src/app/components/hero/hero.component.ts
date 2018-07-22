import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Hero, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero:Hero

  constructor(private activatedRouter: ActivatedRoute , private _heroService:HeroesService) { 
    this.activatedRouter.params.subscribe(params => {
      this.hero = this._heroService.getHero(params['id']);
    })
  }

  ngOnInit() {
  }

}
