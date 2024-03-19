import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { User } from '../../../entities/User.model';
import Swal from 'sweetalert2';
import { Console } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
registerForm!:FormGroup
userList!:User[]
currentUser?:User
constructor(private  router:Router,private formBuilder:FormBuilder,private route:ActivatedRoute,private userService:UserService) {}

ngOnInit():void{
  this.userService.getUserFromServer().subscribe({
    next: (res) => {
        this.userList = res;
        
    },
    error: (err) => {
        console.log(err);
    },
    complete: () => {
        console.log('Finish');
    }
    
    
});
  const name=this.route.snapshot.queryParamMap.get("username");
  this.registerForm=this.formBuilder.group({
    id:[-1],
    name:[name||'',[Validators.required,Validators.minLength(3)]],
    address:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })

}
register(){
  let newUser=this.registerForm.value;
   this.currentUser=this.userList?.find(user => user.name === this.registerForm.value.username && user.password === this.registerForm.value.password)
   if(this.currentUser)
   Swal.fire({                       
    icon: 'success',
    title: '!משתמש קיים',
    text: 'משתמש קיים במערכת.'
  });

  else{
    // const newUser = { ...this.registerForm.value, id: this.count };
     this.currentUser==newUser;
    this.userService.addUser(newUser).subscribe({
      next: (res) => {
        this.userList=res;
        this.router.navigate(['/recipes']);
        sessionStorage.setItem('name', newUser.name);
        sessionStorage.setItem('password', newUser.password);
    },
    error: (err) => {
        console.log(err); // Handle error if required
    },
    complete: () => {
        console.log('Finish'); // Handle completion if required
    }
});
  }
}
}

