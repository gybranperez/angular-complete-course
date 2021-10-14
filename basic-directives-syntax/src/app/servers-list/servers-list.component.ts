import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.sass']
})
export class ServersListComponent implements OnInit {
  servers=[
    {
      "name":"kube-1",
      "status":""
    },{
      "name":"kube-apps",
      "status":""
    },{
      "name":"cap-4",
      "status":""
    }
  ];
  server={
    "name":"",
    "status":""
  }
  serverCreationStatus = {
    messages: ["No server was created"],
    status: false
  };
  serverCreated = false;
  allowNewServer = false;
  constructor() {
    /*
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
    */
   }

  ngOnInit(): void {
  }
  onCreateServer(){
      this.serverCreationStatus.status = (Math.random() < 0.5) ? true : false;
      let message = "Server " + this.server.name;
      if(this.serverCreationStatus.status){
        message += " was ";
        this.servers.push(this.server);
      }else{
        message += " couldn't be ";
      }
      message += " created.";
      this.serverCreationStatus.messages = [message];
      this.serverCreated = true;
      this.server.name="";
      this.server.status="";
      this.allowNewServer = false;
      
      setTimeout(()=>{
        this.serverCreated = false;
      }, 3000);
  }
  onUpdateServerName(event:any){
    this.allowNewServer = (this.server.name!="" && this.server.status!="") ? true : false;
    /*const value = (<HTMLInputElement>event.target).value;*/
  }
  getColorAlert(){
    return (this.serverCreationStatus.status === true) ? "alert-success" : "alert-danger";
  }
}
