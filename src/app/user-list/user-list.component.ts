import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
 

  constructor(private userService: UserService,private router: Router) {
  }

  ngOnInit() {
   this.getServers();
  }


  private getServers(){
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteServer(id: number){

    this.userService.deleteServer(id).subscribe( data => {
      console.log(data);
      this.getServers();
    })
  }


  updateServer(id: number){
    this.router.navigate(['update-server', id]);
  }






}
