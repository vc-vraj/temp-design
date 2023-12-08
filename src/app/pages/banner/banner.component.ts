import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
