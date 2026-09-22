import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { FolderPage } from '../../../folder/folder.page';
import { FormComponent } from '../../../components/form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FolderPage, FormComponent]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
