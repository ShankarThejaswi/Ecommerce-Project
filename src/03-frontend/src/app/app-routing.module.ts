// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { Routes } from '@angular/router';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(Routes)]
// };

import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';
import { Routes } from '@angular/router';

// Import your route components
import { ProductListComponent} from './components/product-list/product-list.component'
// Define your routes
const routes: Routes = [
  { path: 'l', component: ProductListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
