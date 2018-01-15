import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { LoopDemoComponent } from './loop-demo/loop-demo.component';

const appRoutes: Routes = [
  { path: '', component: ProjectsComponent, data: {animation: {page: 'rootPage'}} },
  { path: 'users', component: UsersComponent, data: {animation: {page: 'usersPage'}} },
  { path: 'loop-demo', component: LoopDemoComponent, data: {animation: {page: 'loopDemoPage'}} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
