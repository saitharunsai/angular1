import { Component, OnInit, Inject } from '@angular/core';
import { posts } from '../shared/login/login';
import { LoginSeviceService } from '../shared/login/login-sevice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import { LoginComponent } from '../shared/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // popoverTitle = 'Popover title';
  // popoverMessage = 'Popover description';
  // confirmClicked = false;
  // cancelClicked = false;
  // isLoggedIn = false;
  // parentMessage = "About Company"
  // newMessage = "FAQ"

  search = '';

  constructor(private service: LoginSeviceService, public dialog: MatDialog) {}
  posts: any = {};
  ngOnInit(): void {
    this.service.getDetails().subscribe((result) => {
      console.log(result);
      this.posts = result;
    });
  }
  deleteDetails(item: any) {
    // if(confirm("Are you sure to delete ")) {
    //   console.log("Implement delete functionality here");
    // }
    this.posts.splice(item - 1, 1);
    this.service.deleteDetails(item).subscribe((result) => {
      console.warn('result', result);
    });
  }
  // myString = '';
  // myArray = this.myString.split(',');

  openDialog() {
    this.dialog.open(LoginComponent, {});
  }
}
