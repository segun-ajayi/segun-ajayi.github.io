import {Component, OnInit} from '@angular/core';
import {FetchServiceService} from './Services/fetch-service.service';
import {DataCollection} from './Interface/data-collection';
import {Introduction} from './Interface/introduction';
import {About} from './Interface/about';
import {EducationCollection} from './Interface/education-collection';
import {ExperienceCollection} from './Interface/experience-collection';
import {SkillCollection} from './Interface/skill-collection';
import {PortfolioCollection} from './Interface/portfolio-collection';
import {SocialCollection} from './Interface/social-collection';
import {environment} from '../environments/environment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IreturnData} from './Interface/ireturn-data';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactForm: FormGroup;
  title = 'portfolio';
  introduction: Introduction;
  about: About;
  education: EducationCollection;
  experience: ExperienceCollection;
  skill: SkillCollection;
  portfolio: PortfolioCollection;
  social: SocialCollection;
  server: string = environment.serverStorage;
  serve: string = environment.server;
  loading: boolean;
  mess: boolean;
  emess: boolean;
  err: object;
  n: string;
  e: string;
  m: string;
  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    nav: true
  };
  constructor(private fetch: FetchServiceService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.fetch.getData().subscribe((da: DataCollection) => {
      this.introduction = da.data.introduction;
      this.about = da.data.about;
      this.education = da.data.education;
      this.experience = da.data.experience;
      this.skill = da.data.skill;
      this.portfolio = da.data.portfolio;
      this.social = da.data.social;
    });
    this.createForm();
  }
  createForm() {
    this.contactForm = this.fb.group({
      // name: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.email]],
      // message: ['', [Validators.required]],
      name: [''],
      email: [''],
      message: [''],
    });
  }
  send(values) {
    this.loading = true;
    this.mess = false;
    this.emess = false;
    this.n = '';
    this.e = '';
    this.m = '';
    this.fetch.sendEmail(values)
      .subscribe((data: IreturnData) => {
          if (data.status === 200) {
              this.mess = true;
              this.contactForm.reset();
              setInterval(this.clearMess, 5000);
          } else {
            if (data.success === 'validation') {
              const err = data.error;
              this.n = err.name[0];
              this.e = err.email[0];
              this.m = err.message[0];
            }
            setInterval(this.clearMess, 5000);
          }
          this.loading = false;
        },
        err => {
          this.loading = false;
          this.emess = true;
          setInterval(this.clearMess, 5000, 0);
        });
  }
  clearMess() {
    this.mess = false;
    this.emess = false;
  }
  mobile() {
    return;
  }
}
