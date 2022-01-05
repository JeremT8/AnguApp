import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  message = {
    text: ''
  };

  constructor() { }

  setMessage(message: string): void {
    this.message = { text: message };
  }

  hasMessage(): boolean {
    return this.message.text.trim().length > 0;
  }

  getMessage(): any {
    setTimeout(() => this.message.text = '', 3000);
    return this.message;
  }
}
