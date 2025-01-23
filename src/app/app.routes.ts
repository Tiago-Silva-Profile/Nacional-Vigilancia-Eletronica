import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ImageManagerComponent } from './pages/image-manager/image-manager.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '/', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'image', component: ImageManagerComponent },
  { path: 'service', component: ServicesComponent},
  { path: 'login', component:LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona para Home caso a rota seja desconhecida
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Habilite o hash routing
  exports: [RouterModule],
})

export class AppRoutingModule {}
