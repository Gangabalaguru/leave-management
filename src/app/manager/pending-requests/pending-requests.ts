import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-requests.html'
})
export class PendingRequestsComponent {

  requests: any[] = [];
  currentStatus: string = 'PENDING';

  constructor(private api: ApiService) {}

  // ✅ Load based on status
  loadData(status: string) {
    this.currentStatus = status;

    if (status === 'PENDING') {
      this.api.getPending().subscribe(data => this.requests = data);
    }

    else if (status === 'APPROVED') {
      this.api.getApproved().subscribe(data => this.requests = data);
    }

    else if (status === 'REJECTED') {
      this.api.getRejected().subscribe(data => this.requests = data);
    }
  }

  // ✅ initial load
  ngOnInit(): void {
    this.loadData('PENDING');
  }

  approve(id: number) {
    this.api.approve(id).subscribe(() => this.loadData('PENDING'));
  }

  reject(id: number) {
    this.api.reject(id).subscribe(() => this.loadData('PENDING'));
  }
}
