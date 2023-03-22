import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName = '';
  isServerCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  createServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  }

  removeServer() {
    this.servers.pop();
  }
}
