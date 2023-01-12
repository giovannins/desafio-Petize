import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent {
  constructor(private router: Router) { }

  userInput: string = 'asd'

  submitForm() {
    this.router.navigate(['/perfil'], { queryParams: {user:this.userInput}});
  }
}
