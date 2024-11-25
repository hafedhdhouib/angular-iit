import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembreComponent } from './membre/membre.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MembreComponent,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
