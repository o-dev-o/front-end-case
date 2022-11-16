import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'odevo-front-end-test';
  users = [];
  instructions: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => (this.users = data));
  }
}
