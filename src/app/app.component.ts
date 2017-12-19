import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  menu: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'nb-home',
      link: '/dashboard',
      home: true,
    },    
    {
      title: 'Parent',    
      icon: 'nb-compose',        
      children: [
        {
          title: 'Child 1',
          link: '/dashboard'
        },
        {
          title: 'Child 2',
          link: '/dashboard',
        },        
      ],
    },    
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService, 
  ) {}

  ngOnInit() {    
    this.menuService.onItemSelect()
                    .subscribe((event: {tag: string, item: any}) => {

                      // Logging clicked item
                      console.log(event.item);

                      // Possibly do some item checking and/or viewport width checking 
                      // to see if the sidebar needs to be toggled, or just toggle every time regardless
                      
                      // NOT WORKING
                      this.sidebarService.toggle(true, 'menu-sidebar');

                    });
  }

}
