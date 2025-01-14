import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ImageManagerComponent } from './pages/image-manager/image-manager.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'image', component: ImageManagerComponent },
  { path: 'service', component: ServicesComponent},
  { path: 'login', component:LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona para Home caso a rota seja desconhecida
];
