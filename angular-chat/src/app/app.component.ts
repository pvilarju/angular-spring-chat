import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  username = 'username';
  message = '';
  messages = [];

  ngOnInit(): void {
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        const pusher = new Pusher('997173c0d2e883a3ec67', {
          cluster: 'sa1'
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', data =>  {
          this.messages.push(data);
        });
  }

  submit() : void {

  }
}
