import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { CommonModule } from '@angular/common';
import { LoaderService } from 'src/app/providers/loader.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    NavbarComponent,
    ProgressSpinnerModule,
    BlockUIModule,
    NgxSpinnerModule
  ]
})
export class MainComponent {
  constructor(public loaderService: LoaderService) {

  }
}
