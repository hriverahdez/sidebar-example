import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userMenu = [{ title: 'Profile', id: 'PROFILE' }, { title: 'Log out', id: 'LOGOUT' }];

  user = {
    name: 'John Doe'
  }

  constructor(
    private sidebarService: NbSidebarService,
  ) { }

  ngOnInit() {
  }

  // This works just like in the ngx-admin example
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');    
    return false;
  }

}
