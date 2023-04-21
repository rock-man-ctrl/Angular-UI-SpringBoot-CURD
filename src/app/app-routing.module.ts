import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UpdateServerComponent } from './update-server/update-server.component';

const routes: Routes = [
  { path: 'servers', component: UserListComponent },
  { path: 'addserver', component: UserFormComponent },
  {path: 'update-server/:id', component: UpdateServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
