import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-anketa',
  standalone: true,
  imports: [],
  templateUrl: './anketa.component.html',
  styleUrl: './anketa.component.css'
})
export class AnketaComponent {

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['pocetna']);
  }
}
