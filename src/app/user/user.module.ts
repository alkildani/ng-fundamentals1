import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.routs";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";



@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes),
        ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
    ],
    providers: [

    ],

})

export class UserModule{

}