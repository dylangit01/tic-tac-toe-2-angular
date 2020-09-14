import { Component, Input, OnInit } from '@angular/core';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

  @Input() iconName: string;

  // below are the icon files that refers to the iconName when it comes from app.component
  faPen = faPen;
  faTimes =faTimes;
  faCircle = faCircle  

  constructor() { }

  ngOnInit(): void {
  }

}
