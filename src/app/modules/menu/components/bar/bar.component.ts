import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public iceCreams: string[] = ['Fantasy Scoop', 'Honey Date', 'Cone N smile'];

  constructor() { }

  ngOnInit(): void {
  }

}
