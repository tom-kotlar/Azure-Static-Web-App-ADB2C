import { Component, OnInit } from '@angular/core';

export interface UserInfo {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInfo: UserInfo | undefined;
  constructor() { }

  async ngOnInit() {
    this.userInfo = await this.getUserInfo();
    console.log(this.userInfo, "USER INFO")

    await this.getGraph()
  }


  async getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      console.log(clientPrincipal, "<<<")
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

  async getGraph() {
    try {
      const response = await fetch('https://graph.microsoft.com/v1.0/me');
      const payload = await response.json();
     
      console.log(payload, "<<<----")
      return payload;
    } catch (error) {
      console.error('No GRAPH could be found');
      return undefined;
    }
  }

}
