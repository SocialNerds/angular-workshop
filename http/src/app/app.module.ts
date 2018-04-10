import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';

import { RepoService } from './repo.service'

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
