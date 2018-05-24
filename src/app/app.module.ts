import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule,
  MatDialogModule,
  MatInputModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArtiklService } from './services/artikl.service';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { DobavljacComponent } from './components/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './components/stavka-porudzbine/stavka-porudzbine.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';
import { VoziloComponent } from './components/primer-components/vozilo/vozilo.component';
import { AutomobilComponent } from './components/primer-components/automobil/automobil.component';
import { ArtiklDialogComponent } from './components/dialogs/artikl-dialog/artikl-dialog.component';
import { FormsModule } from '@angular/forms';
import { DobavljacDialogComponent } from './components/dialogs/dobavljac-dialog/dobavljac-dialog.component';
import { DobavljacService } from './services/dobavljac.service';
import { PorudzbinaDialogComponent } from './components/dialogs/porudzbina-dialog/porudzbina-dialog.component';
import { PorudzbinaService } from './services/porudzbina.service';
import { StavkaPorudzbineDialogComponent } from './components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';
import { StavkaPorudzbineService } from './services/stavkaPorudzbine.service';

const Routes = [
  { path: 'artikl', component: ArtiklComponent },
  { path: 'dobavljac', component: DobavljacComponent },
  { path: 'porudzbina', component: PorudzbinaComponent },
  { path: 'stavkaPorudzbine', component: StavkaPorudzbineComponent },
  { path: 'home', component: HomeComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorudzbineComponent,
    AboutComponent,
    AuthorComponent,
    HomeComponent,
    ArtiklDialogComponent,
    DobavljacDialogComponent,
    PorudzbinaDialogComponent,
    StavkaPorudzbineDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    MatGridListModule, MatExpansionModule, MatSortModule,
    MatTableModule,
    MatToolbarModule, MatSelectModule, MatOptionModule,
    MatSnackBarModule, MatDialogModule, MatInputModule,
    MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, // Vežbe 10 moduli
    FormsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule
  ],
  entryComponents: [ArtiklDialogComponent, DobavljacDialogComponent, PorudzbinaDialogComponent, StavkaPorudzbineDialogComponent ],
  providers: [ArtiklService, DobavljacService, PorudzbinaService, StavkaPorudzbineService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
