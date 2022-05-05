import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public iceCreams: string[] = ['Fantasy Scoop', 'Honey Date', 'Cone N smile'];

  constructor() { }

  ngOnInit(): void {
  }

}
