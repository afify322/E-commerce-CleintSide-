import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/modules/shopping/Models/Product';
import { User } from '../../Model/User';
import { UserService } from '../../Services/User.service';




@Component({
  selector: 'app-user-favorite-list',
  templateUrl: './user-favorite-list.component.html',
  styleUrls: ['./user-favorite-list.component.css']
})
export class UserFavoriteListComponent implements OnInit {
  displayedColumns: string[] = ['name','Action'];
  dataSource = new MatTableDataSource<Product>();
  clickedRows = new Set<User>();
  UserId :string|null;
  UserFound : boolean;



  constructor(private userService: UserService , private route:Router) { 
    this.UserId="6247b73b51cb65acfee9f99f";
    this.UserFound  = true;
  }

  ngOnInit(): void {

    this.UserId=localStorage.getItem('user');
    console.log(this.UserId);
    
    this.userService.getUserData(this.UserId!).subscribe({
      next: (res) => {
        // console.log(res.user.favourite);
        this.dataSource.data = res.user.favourite;
        this.UserFound = true;
      
      },
      error: (err) => {
        // console.log(err);
        // this.userService.errorStatus = err.status;
        // this.userService.errMessage = err.error[Object.keys(err.error)[1]];
        // this.route.navigate(['/user/Error']);

        if(err.status == 400){
          this.UserFound = false;
        }

      }
    });
  }


  getRecord(event:any){
    if(event.target.id){
      this.route.navigate(['/products/'+event.target.id]);
    }
    console.log(event.target.id);
  }

}
