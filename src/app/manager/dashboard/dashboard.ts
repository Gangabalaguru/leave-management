import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // ✅ FIX

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],  // ✅ IMPORTANT
  templateUrl: './dashboard.html'
})
export class DashboardComponent {
  totalPending = 0;
}