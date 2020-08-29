import { BrowserModule } from '@angular/platform-browser';
import { NgModule , APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';
import { AuthGuard } from './shared/guards/auth.guard';
import { RepositoryService } from './shared/services/repository.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';

// tslint:disable-next-line:typedef
export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
      oidcConfigService.withConfig({
          stsServer: environment.stsServerUrl,
          redirectUrl: 'http://localhost:4200',
          postLogoutRedirectUri: window.location.origin,
          postLoginRoute: '/search',
          clientId: 'SearchRepoApp',
          scope: 'openid profile SearchRepoApi',
          responseType: 'code',
          logLevel: LogLevel.Debug,
      });
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [
    AuthGuard,
    RepositoryService,
    OidcConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: configureAuth,
        deps: [OidcConfigService],
        multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
