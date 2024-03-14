import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../../entities/User.model';
import { FormGroup ,FormControl, Validators, FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
import { constants } from 'crypto';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  userList?:User[]
  constructor(private router:Router, private fb:FormBuilder,private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUserFromServer().subscribe({
      next: (res) => {
        this.userList = res,
        console.log(this.userList)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('finish');
      }
    })
    this.loginForm= this.fb.group({
      "userName" :new FormControl('', [Validators.required]),
      "password" :new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    const user = this.userList?.find(user => user.name === this.loginForm.value.userName);
    console.log("user",user)
    if (user) {
      if (user.password === this.loginForm.value.password) {
        // שמירת פרטי המשתמש ב-SessionStorage
        sessionStorage.setItem('name', this.loginForm.value.userName);
        sessionStorage.setItem('password', this.loginForm.value.password);
        // this.router.navigate(["/recipe"])
        //שליחה לקומפוננטה אחרת
        // הצגת הודעת הצלחה ב-Swal
        Swal.fire({                       
          icon: 'success',
          title: 'התחברות מוצלחת!',
          text: 'המשתמש נמצא במערכת והסיסמה נכונה.'
          
        });
        this.router.navigate(["/recipes"])
      } else {
        // הודעת כישלון אם הסיסמה אינה נכונה
        Swal.fire({
          icon: 'error',
          title: 'סיסמה שגויה!',
          text: 'הסיסמה שהוזנה אינה נכונה.'
        });
      }
    } else {
      // הודעת כישלון אם המשתמש אינו קיים במערכת
      Swal.fire({
        icon: 'error',
        title: 'משתמש לא קיים!',
        text: 'המשתמש אינו קיים במערכת.'
      });

      const navigationExtras: NavigationExtras = {
        queryParams: { username: this.loginForm.value.userName }};
      this.router.navigate(["user/register"],navigationExtras)
    }

  }

  }

