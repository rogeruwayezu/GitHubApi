import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ReposDatePipe } from './repos-date.pipe';
import { ToggleReposDirective } from './toggle-repos.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchFormComponent,
    ReposDatePipe,
    ToggleReposDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
