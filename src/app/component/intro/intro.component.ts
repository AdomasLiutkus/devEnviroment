import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IntroForm } from 'src/app/model/intro-form';
import { setUser } from 'src/app/store/action/user.actions';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  introForm = this.fb.group({
    name: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<{ user: string }>,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  goToAssetList(valid: boolean): void {
    if(valid) {
      let form: IntroForm = this.introForm.value as IntroForm;
      this.store.dispatch(setUser({user: form.name}))
      this.router.navigate(['asset-list']);
    }
  }
}
