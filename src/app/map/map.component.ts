
import { Component, OnInit } from '@angular/core';
import 'mapbox-gl';

declare var mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamFuZHJvZ3BoIiwiYSI6ImNscGQxazVmbjAzdXgyam9odnVlY2xpazIifQ.iW6hy_P0aqunbyCHdCxeaA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.543, -35.6751], // Coordenadas del centro de Chile
      zoom: 5,
    });
  }
}
