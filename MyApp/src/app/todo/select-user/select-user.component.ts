import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {


  @Input() label: string = 'Responsable';
  @Input() firstOptionLabel: string = ''
  @Input() user: string = ''
  @Output() userChange = new EventEmitter();
  

  constructor(public security: AuthentificationService) { }

  ngOnInit(): void {
  }

  onUserSelect(): void {
    this.userChange.emit(this.user);
  }

}
