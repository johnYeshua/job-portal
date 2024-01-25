import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
  id:number;
  user: User = new User();
  constructor(private userService: UserService, private route:ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    //get id from the route
    this.id = this.route.snapshot.params['id'];
    // we subscribe to getUserId to return an observable 
    this.userService.getUserById(this.id).subscribe(data=>{
      console.log(data);
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.user);
    this.userService.updateUser(this.id, this.user).subscribe(data=>{
      this.goToUserList();
    })
  }
  //once user submit updated data by clicking the update User button
  //the page has to route and go back to the list of Users
  goToUserList(){
    this.router.navigate(['/users']);
  }
}
