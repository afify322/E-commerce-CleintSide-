import { AfterViewInit,Component, Input, OnInit ,ViewChild,OnDestroy} from '@angular/core';
import { AdminService } from '../../admin.service';
import {MatPaginator,PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '../../Model/User';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements AfterViewInit,OnDestroy {
  @Input()length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  displayedColumns: string[] = ['name', 'email', 'Apartment','street','city','zip','country', 'phone','delete'];
  users:User[]=[];
  deleteId:string='';
  dataSource = new MatTableDataSource<User>(this.users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(private httpClient:AdminService,private modal:NgxSmartModalService) { }
  ngOnDestroy(): void {
//this.httpClient.searchSubject.unsubscribe();
  }
  ngOnInit(): void {
    this.httpClient.searchSubject.subscribe({
      next:(name)=>{
        
        this.httpClient.getUsers(1,10,name||'').subscribe(d=>{
         
           this.users=d.users;
         })
      }
    })
    this.httpClient.searchSubject.next('');
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  confirmDelete(id:string){
    this.deleteId=id;
    this.modal.open('confirm');
  }
  DeleteUser(){
    if(this.deleteId){

      this.httpClient.deleteUser(this.deleteId).subscribe({next:(data:any)=>{
        this.deleteId='';
        this.modal.close('confirm')
        let index=this.dataSource.filteredData.findIndex(x=>x._id==data.user._id);
        this.dataSource.filteredData.splice(index,1);
        this.dataSource._updateChangeSubscription();
        console.log(data);
        
      },error:(err)=>{
        console.log(err);
        
      }});
     
    }
  }


  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
  
}


