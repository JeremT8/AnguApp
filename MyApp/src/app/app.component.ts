import { AuthentificationService } from 'src/app/services/authentification.service';
import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  constructor(public security: AuthentificationService, public notification: NotificationService) {
    
  }
}
