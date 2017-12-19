import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { 
  NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, 
  NbMenuModule, NbMenuService, NbCardModule, NbTabsetModule, NbRouteTabsetModule, 
  NbUserModule, NbActionsModule, NbSearchModule, NbCheckboxModule 
} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule, 
  NbMenuModule,
  NbSidebarModule,
  NbUserModule,
  NbActionsModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]),
    ...NB_MODULES,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  providers: [ 
    NbSidebarService,
    NbMenuModule.forRoot().providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
