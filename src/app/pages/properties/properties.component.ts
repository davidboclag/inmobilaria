import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { PaginationProperty } from 'src/app/models/PaginationProperty';
import { InmobiliariaService } from 'src/app/providers/inmobiliaria.service';
import { TagModule } from 'primeng/tag';
import { Property } from 'src/app/models/Property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    DataViewModule,
    TagModule,
    GalleriaModule,
    ButtonModule
  ]
})
export class PropertiesComponent {

  properties: Property[] = [];
  layout: 'list' | 'grid' = 'list';
  data!: PaginationProperty;

  constructor(
    private inmobiliariaService: InmobiliariaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(page: number = 1) {
    this.inmobiliariaService.getProperties(page).subscribe(data => {
      this.data = data;
      this.properties.length == 0 ? this.properties = data.data : this.properties = this.properties.concat(data.data);
    })
  }

  getDatailProperty(property: Property) {
    this.router.navigate(['/detail-property', property.provinciaUrl, property.ciudadUrl, property.id]);
  }

  getSeverity(m2: number) {
    if (m2 < 100) {
      return 'danger';
    } else if (m2 < 200) {
      return 'warning';
    } else {
      return 'success'
    }
  };
}
