import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { GetManagerComponent } from './get-manager/get-manager.component';
import { FunctionalitiesComponent } from './functionalities/functionalities.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UpdateComponent,
    GetManagerComponent,
    FunctionalitiesComponent,
    InsertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
