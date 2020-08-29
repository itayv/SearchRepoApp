import { Injectable, Testability } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService{

  constructor(private http: HttpClient, private oidcSecurityService: OidcSecurityService) {
  }

  private headers = new HttpHeaders({ Authorization: `Bearer ${this.oidcSecurityService.getToken()}` });

  search(name: string): Promise<Array<string>> {
    return this.http.get<Array<string>>(`${environment.apiUrl}/api/repository/search?name=${name}`, {headers: this.headers}).toPromise<Array<string>>();
  }

  save(repositoryName: string): Promise<boolean> {
    return this.http.get<boolean>(`${environment.apiUrl}/api/repository/saveFavorite?repositoryName=${repositoryName}`, {headers: this.headers}).toPromise<boolean>();
  }

  getFavorites(): Promise<Array<string>> {
    return this.http.get<Array<string>>(`${environment.apiUrl}/api/repository`, {headers: this.headers}).toPromise<Array<string>>();
  }


}
