import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Core } from './core/components/core/core';

@Component({
  selector: 'gec-root',
  imports: [RouterOutlet, Core],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
