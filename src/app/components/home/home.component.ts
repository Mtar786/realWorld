import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Welcome to RealWorld App</mat-card-title>
          <mat-card-subtitle>A beautiful example app built with Angular 8</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>This is a sample application that demonstrates various Angular features including:</p>
          <ul>
            <li>Routing</li>
            <li>Forms</li>
            <li>Material Design</li>
            <li>Component Communication</li>
          </ul>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" routerLink="/login">Get Started</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
    }
    mat-card {
      max-width: 600px;
      width: 100%;
    }
    mat-card-content {
      margin: 20px 0;
    }
    ul {
      margin-left: 20px;
    }
  `]
})
export class HomeComponent {}