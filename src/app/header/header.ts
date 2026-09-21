import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  @Input() title:string='Default Title';
  @Output() titleClicked=new EventEmitter<void>();

  onTitleClick(){
    this.titleClicked.emit();
  }
}
