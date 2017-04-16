import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
        em {float:right; color: #E05C65; padding-left: 10px;}
        .error input{background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {background-color: #999;}
        .error ::-webkit-input-placeholder {background-color: #999;}
        .error ::-moz-placeholder {background-color: #999;}
        .error :-moz-placeholder {background-color: #999;}
        .error :-ms-input-placeholder {background-color: #999;}

    `

    ]
})
export class ProfileComponent implements OnInit {
     profileForm:FormGroup
    private firstName:FormControl
    private lastName:FormControl

    constructor(private authService:AuthService,
                private router:Router){}

    ngOnInit() {
        this.firstName = new FormControl(
            this.authService.currentUser.firstName,
            [Validators.required, Validators.pattern('[a-zA-Z.*')] )
        this.lastName = new FormControl(
            this.authService.currentUser.lastName,
            Validators.required)
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })

    }

    saveProfile(formValues){

         if(this.profileForm.valid) {
             this.authService.updateCurrentUser(formValues.firstName,
                 formValues.lastName)
                this.router.navigate([['events']])
         }



    }

    cancel(){
        return this.router.navigate(['events'])
    }

    validateFirstName(){
        this.firstName.valid || this.firstName.untouched
    }

    validateLastName(){
        return this.lastName.valid || this.lastName.untouched
    }

}

