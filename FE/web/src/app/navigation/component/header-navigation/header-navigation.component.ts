import { Component, OnInit } from '@angular/core';
import {
  faGraduationCap,
  faBox,
  faFileInvoiceDollar,
  faTowerCell,
  faRightFromBracket,
  faCartShopping,
  faUserGear,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
})
export class HeaderNavigationComponent implements OnInit {
  faGraduationCap: IconDefinition = faGraduationCap;
  faBox: IconDefinition = faBox;
  faFileInvoiceDollar: IconDefinition = faFileInvoiceDollar;
  faTowerCell: IconDefinition = faTowerCell;
  faRightFromBracket: IconDefinition = faRightFromBracket;
  faCartShopping: IconDefinition = faCartShopping;
  faUserGear: IconDefinition = faUserGear

  constructor() {}

  ngOnInit(): void {}
}
