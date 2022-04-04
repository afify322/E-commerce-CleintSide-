import { AfterViewInit,Component, Input, OnInit ,ViewChild} from '@angular/core';
import { AdminService } from '../../admin.service';
import {MatPaginator,PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '../../Model/User';


@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements AfterViewInit {
  @Input()length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  displayedColumns: string[] = ['name', 'email', 'Apartment','street','city','zip','country', 'phone','delete'];
  users:User[]=[];
  dataSource = new MatTableDataSource<User>(this.users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(private httpClient:AdminService) { }
  ngOnInit(): void {
   this.httpClient.getUsers(1,5).subscribe(d=>{
      this.users=d.users;
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  DeleteUser(id:string){
    console.log("Delete");
    console.log(id);
    this.httpClient.deleteUser(id).subscribe(r=>console.log(r));
    this.httpClient.getUsers(1,5).subscribe({
      next:d=>{
      this.users=d.users;
    },
    error:err=>{
      this.users=[]
    }}
    )
  }


  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
}


