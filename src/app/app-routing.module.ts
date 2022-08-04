import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent/agent.component';
import { ContactComponent } from './contact/contact.component';
import { HomesComponent } from './homes/homes.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: 'homes',
    component: HomesComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'agent',
    component:AgentComponent
  },
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
