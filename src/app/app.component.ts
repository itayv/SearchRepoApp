import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SearchRepoApp';

  constructor(private oidcSecurityService: OidcSecurityService, private router: Router) {}

  login(): void
  {
    this.oidcSecurityService.authorize();
  }

  navigateToPage(pageUrl): void
  {
    this.router.navigateByUrl(pageUrl);
  }
}
