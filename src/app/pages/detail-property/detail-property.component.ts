import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { Property } from 'src/app/models/Property';
import { InmobiliariaService } from 'src/app/providers/inmobiliaria.service';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { DetailProperty } from 'src/app/models/DetailProperty';

@Component({
  selector: 'app-detail-property',
  templateUrl: './detail-property.component.html',
  styleUrls: ['./detail-property.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ImageModule,
    ButtonModule,
    RouterModule
  ]
})
export class DetailPropertyComponent {

  property!: DetailProperty;

  constructor(
    private route: ActivatedRoute,
    private inmobiliariaService: InmobiliariaService
  ) {

  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.inmobiliariaService.getPropertyById(<Property>params);
      })
    ).subscribe(data => {
      this.property = data;
    });
  }
}
