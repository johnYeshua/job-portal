import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  id: number;
  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = new User();
    this.userService.getUserById(this.id).subscribe(
      data => {
        console.log("Inside user detail : " +data);
        this.user = data;
      }
    );
  }
}
