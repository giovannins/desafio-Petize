import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  user: string|null;
  repoData: any;

  constructor(private route: ActivatedRoute) {
    this.user = this.route.snapshot.queryParamMap.get('user')


  }
}
