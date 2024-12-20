import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioBuilder';
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted : boolean = false;
  showHeading : boolean = true;
  qualification = [{school : '', degree: '', year: ''}];

  addQualification()
  {
    this.qualification.push({school:'', degree:'',year:''});
  }

  submit()
  {
    this.submitted = true;
    this.showHeading = false;
  }

  edit()
  {
    this.submitted = false;
  }
}
