import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'search'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
