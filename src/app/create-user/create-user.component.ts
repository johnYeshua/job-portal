import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{
  //Create user property of type User class -> new user object
  url: 'http://localhost:4200/users';
  user: User = new User();
  constructor(private userService: UserService, private router:Router){ }

  ngOnInit(): void{

  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(
      data => {
        console.log(data);
        this.goToUserList();
      });
  }
  goToUserList(){
    //this.router.navigate([`${this.url}`]);
    this.router.navigate(['/users']);
  }
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}
