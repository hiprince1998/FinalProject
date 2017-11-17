import { Component } from '@angular/core';

import { AboutPage } from '../create/about';
import { ContactPage } from '../more/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab1Root = HomePage;

  constructor() {

  }
}
