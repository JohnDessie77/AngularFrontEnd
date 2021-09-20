import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {InsertComponent} from './insert/insert.component';
import {UpdateComponent} from './update/update.component';
import {GetManagerComponent} from './get-manager/get-manager.component';
import { FunctionalitiesComponent } from './functionalities/functionalities.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'insert', component: InsertComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'getManager', component: GetManagerComponent},
  {path: 'functionalities', component: FunctionalitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
