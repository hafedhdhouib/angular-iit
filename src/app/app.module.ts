import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { MembreComponent } from './membre/membre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { provideHttpClient } from '@angular/common/http';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmeDialogueComponent } from './confirme-dialogue/confirme-dialogue.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ArticleComponent } from './article/article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { ToolComponent } from './tool/tool.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { firebaseConfig } from './environnement/environnement';
import { LoginComponent } from './login/login.component';
import { FirebaseModule } from 'src/Firebase.module';
import { ModalComponent } from './modal/modal.component';
import { MatSortModule } from '@angular/material/sort';
import { ModalPubComponent } from './modal-pub/modal-pub.component';
import { PubDetailsComponent } from './pub-details/pub-details.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    MembreComponent,
    MemberFormComponent,
    ConfirmeDialogueComponent,
    TemplateComponent,
    ArticleComponent,
    DashboardComponent,
    EventComponent,
    ToolComponent,
    LoginComponent,
    ModalComponent,
    ModalPubComponent,
    PubDetailsComponent,
  ],
  imports: [
    MatGridListModule,
    MatSortModule,
    MatNativeDateModule,
    MatPaginatorModule,
    FirebaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
