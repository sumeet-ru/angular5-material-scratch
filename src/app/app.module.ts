import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatSelectModule, MatInputModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatAutocompleteModule, MatTabsModule, MatCardModule, MatTooltipModule, MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

import { AppServiceService } from './shared/services/app.service';

import { AppRoutingModule } from './app.routing';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
