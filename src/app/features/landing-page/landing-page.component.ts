import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { AuthService } from '../../core/auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [CardModule , ButtonModule, HighchartsChartModule , CommonModule ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  authService = inject(AuthService)
  router = inject(Router) 
  Highcharts: typeof Highcharts = Highcharts;
   
  chartOptions: Highcharts.Options = {
  
    series: [{
      data: [50, 40, 60, 45, 70, 42, 60],
      type: 'line',
     
    }]
    
  };

  logout(){
    this.authService.signout()
    this.router.navigate(['/sign-in'])
  }
}
