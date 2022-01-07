import { AuthGuardGuard } from './gard/auth-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SecureComponent } from './pages/secure/secure.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { RandomUserListComponent } from './pages/random-user-list/random-user-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'secure', component: SecureComponent, canActivate:[AuthGuardGuard]},
  {path: 'todolist', component: TodoListComponent},
  {path: 'todoform', component: TodoFormComponent},
  {path: 'todoform/:id', component: TodoFormComponent, canActivate:[AuthGuardGuard]},
  {path: 'user-list', component: RandomUserListComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
