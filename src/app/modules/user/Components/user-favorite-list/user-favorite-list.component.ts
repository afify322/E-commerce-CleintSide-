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
  UserId :string ="623f29301990db9d03d93133";



  constructor(private userService: UserService , private route:Router) { }

  ngOnInit(): void {


    this.userService.getUserData(this.UserId).subscribe({
      next: (res) => {
        console.log(res.user.favourite);
        this.dataSource.data = res.user.favourite;
      
      },
      error: (err) => {
        console.log(err)
        alert(err)
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
