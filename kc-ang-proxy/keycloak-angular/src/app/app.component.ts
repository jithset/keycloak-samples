import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  publicdata: any = null;
  protecteddata: any = null;
  constructor(private service: ApiService, private readonly keycloak: KeycloakService) {}
  async ngOnInit(): Promise<void> {

    this.isLoggedIn = await this.keycloak.isLoggedIn();
    this.service.getPublicData().subscribe(data => {
      this.publicdata = data;
      console.log(data);
    })

    this.service.getProtectedData().subscribe(data => {
      this.protecteddata = data;
      console.log(data);
    })
  }
  title = 'keycloak-angular';


  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  logout()
  {
    this.keycloak.logout();
  }
}
