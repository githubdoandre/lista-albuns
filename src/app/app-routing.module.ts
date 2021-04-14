import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from './albuns/albuns.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'albuns' },
  { path: 'albuns', component: AlbunsComponent, canActivate: [AuthGuard] },
  { path: 'detail/:photos', component: DetailComponent, canActivate: [AuthGuard]  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
