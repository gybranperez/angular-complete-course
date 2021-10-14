import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit {
  name: String = "offline";
  status: String = "Running";
  constructor() {
    this.status = (Math.random() < 0.5) ? "online" : "offline";
   }

  ngOnInit(): void {
  }
  getColorStatus(){
    return (this.status === "online") ? "green" : "red";
  }
}
