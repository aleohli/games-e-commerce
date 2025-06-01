import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreComponent } from 'app/core/components/core/core.component';

@Component({
  selector: 'gec-root',
  imports: [RouterOutlet, CoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
