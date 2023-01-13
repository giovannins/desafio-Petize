import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  isLoading: boolean = true;
  user: string | null;
  repoData: any;
  userData: any;

  constructor(private route: ActivatedRoute) {
    this.user = this.route.snapshot.queryParamMap.get('user')

    // Fetch nas informações do User
    fetch(`https://api.github.com/users/${this.user}`)
      .then(response => response.json())
      .then(data => {
        this.userData = data;
      })
      .catch(error => {
        console.log(error);
      });

    // Fetch nas Repo do user
    fetch(`https://api.github.com/users/${this.user}/repos`)
      .then(response => response.json())
      .then(data => {
        this.repoData = data.reverse();

        this.isLoading = false;
      })
      .catch(error => {
        console.log(error);
      });
  }

  atualizarTempo(dateInput: string) {
    const dateString = dateInput.substring(0, 10);
    const date = new Date(dateString);
    const today = new Date();
    const diff = today.getTime() - date.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    return Math.floor(diffInDays);
  }
}
