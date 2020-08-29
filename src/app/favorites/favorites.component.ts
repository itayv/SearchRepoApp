import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private repositoryService: RepositoryService) { }

  favoritesArr: Array<string>;

  ngOnInit(): void {
    this.repositoryService.getFavorites()
    .then(res =>
      {
        console.log('getFavorites', res);

        this.favoritesArr = res;
      });
  }

}
