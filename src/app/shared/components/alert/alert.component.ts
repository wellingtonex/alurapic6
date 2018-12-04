import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert, AlertType } from './alert';

@Component({
  selector: 'ap-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() timeOut = 3000;
  alerts: Alert[] = [];

  constructor(
    private alertService: AlertService
  ) {

    this.alertService.getAlert()
      .subscribe(alert => {
        if (!alert) {
          this.alerts = [];
          return;
        } else {
          this.alerts.push(alert);
          setTimeout(() => this.removeAlert(alert), this.timeOut);
        }
      });
  }

  removeAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter(alert => alert != alertToRemove);
  }

  getAlertClass(alert: Alert) {
    if (!alert) {
      return '';
    } else {
      switch (alert.alertType) {
        case AlertType.DANGER:
          return 'alert alert-danger';
        case AlertType.INFO:
          return 'alert alert-info';
        case AlertType.SUCCESS:
          return 'alert alert-success';
        case AlertType.WARNING:
          return 'alert alert-warning';

      }
    }
  }

  ngOnInit() {
  }

}
