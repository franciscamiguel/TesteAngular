import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
