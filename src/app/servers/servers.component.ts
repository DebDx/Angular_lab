import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=true;
  serverCreationStatus='no Server created!';
  serverName='Teztzserver';
  username='';
  servers=['Testserver','TestServer 2' 
]
  serverCreated=false;
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer= false;
    },2000);
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created!'+this.serverName;
  }
  onCreateSee(){
    this.username='';
  } 


  ngOnInit(): void {
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;

  }
  

}
