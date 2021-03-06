import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ArtiklService } from '../../../services/artikl.service';


@Component({
  selector: 'app-artikl-dialog',
  templateUrl: './artikl-dialog.component.html',
  styleUrls: ['./artikl-dialog.component.css']
})
export class ArtiklDialogComponent implements OnInit {
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ArtiklDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public artiklService: ArtiklService) { }

  ngOnInit() {
  }

  public add(): void {
    this.data.id = -1;
    this.artiklService.addArtikl(this.data);
    this.snackBar.open('Uspešno ste dodali artikl: ' + this.data.naziv, 'U redu', {duration: 2500});
  }

  public update(): void {
    this.artiklService.updateArtikl(this.data);
    this.snackBar.open('Uspešno ste modifikovali artikl: ' + this.data.id, 'U redu', {duration: 2500});
  }

  public delete(): void {
    this.artiklService.deleteArtikl(this.data.id);
    this.snackBar.open('Uspešno ste orbisali artikl: ' + this.data.id, 'U redu', {duration: 2500});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!', 'U redu', {duration: 1000});
  }

}
