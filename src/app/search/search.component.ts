import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private repositoryService: RepositoryService) { }

  repositoryName: string;
  favoriteRepository: string;
  selectRepoOptions: Array<string>;
  showNotFoundMsg: boolean = false;
  showSuccessMsg: boolean = false;

  ngOnInit(): void {
  }

  searchRepository(): void {
    this.showNotFoundMsg = false;
    this.showSuccessMsg = false;
    console.log(this.repositoryName);
    this.repositoryService.search(this.repositoryName)
    .then(res =>
      {
        this.favoriteRepository = '';
        this.selectRepoOptions = res;
        this.showNotFoundMsg = !(res?.length > 0);
      });
  }

  saveRepository(): void {
    console.log(this.favoriteRepository);
    this.repositoryService.save(this.favoriteRepository)
    .then(res =>
      {
        this.favoriteRepository = '';
        this.showSuccessMsg = res;
        console.log('saveFavorite: ', res);
      });
  }

}
