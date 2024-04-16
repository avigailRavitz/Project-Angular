import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logOut();
  }

  // פונקציה זו מופעלת כאשר מתבצעת התנתקות
  logOut() {
    // מחיקת הנתונים מהsession storage
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('password');
    alert('Logged out successfully!');

    // הנתונים מחוקים, ניתן להפנות את המשתמש לעמוד התחברות

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 4000);
  }
}
