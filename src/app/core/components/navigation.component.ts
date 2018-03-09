import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, false);
  }
}
