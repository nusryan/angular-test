import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.scss']
})
export class DirectivePageComponent implements OnInit {
  textValue: string = 'Default';
  textHistories: string[] = [];
  isNUS: boolean = false;

  ngOnInit(): void {}

  onChangeValue(event: Event) {
    const target = event.target as HTMLInputElement
    this.textValue = target.value;
    this.isNUS = target.value.includes('NUS')
  }
}
