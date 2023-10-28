import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { PaginationProperty } from 'src/app/models/PaginationProperty';
import { InmobiliariaService } from 'src/app/providers/inmobiliaria.service';
import { TagModule } from 'primeng/tag';
import { Property } from 'src/app/models/Property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    DataViewModule,
    TagModule
  ]
})
export class HomeComponent {

  layout: 'list' | 'grid' = 'list';
  properties!: PaginationProperty;


  constructor(private inmobiliariaService: InmobiliariaService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.inmobiliariaService.getProperties().subscribe(data => {
      this.properties = data;
      // this.properties.data = this.properties.data.concat(data.data);
      // console.log(this.properties.data);
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
