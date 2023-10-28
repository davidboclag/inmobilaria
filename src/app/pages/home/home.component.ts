import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, LOCALE_ID } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { PaginationProperty } from 'src/app/models/PaginationProperty';
import { InmobiliariaService } from 'src/app/providers/inmobiliaria.service';
import { TagModule } from 'primeng/tag';
import localeEs from '@angular/common/locales/es';
import { Property } from 'src/app/models/Property';
registerLocaleData(localeEs);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    DataViewModule,
    TagModule,
    GalleriaModule,
    ButtonModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
  ],
})
export class HomeComponent {

  properties: Property[] = [];
  layout: 'list' | 'grid' = 'list';
  data!: PaginationProperty;

  constructor(private inmobiliariaService: InmobiliariaService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(page: number = 1) {
    this.inmobiliariaService.getProperties(page).subscribe(data => {
      this.data = data;
      this.properties.length == 0 ? this.properties = data.data : this.properties = this.properties.concat(data.data);
    })
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
