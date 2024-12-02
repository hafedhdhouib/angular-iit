import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembreComponent } from './membre/membre.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { TemplateComponent } from './template/template.component';
import { ToolComponent } from './tool/tool.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MembreComponent,
  },
  {
    path: 'member/create',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: 'member/edit/:id',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticleComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventComponent,
  },
  {
    path: 'templates',
    pathMatch: 'full',
    component: TemplateComponent,
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
