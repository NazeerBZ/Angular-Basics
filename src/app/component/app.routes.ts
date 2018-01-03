import { Routes } from '@angular/router';

import { HomeComponent} from './home/home.component'
import { ContentComponent} from './content/content.component'

export const appRoutes: Routes = [
 { path: 'home/:id', component: HomeComponent },
 { path: 'content/:id', component: ContentComponent },
//  { path: 'product', component: ProductComponent },
 { path: '', redirectTo: 'home', pathMatch: 'full' },
//  { path: '**', component: ErrorComponent }
];