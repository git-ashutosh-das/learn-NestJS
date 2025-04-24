import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";

// @Global - Can be used anywhere without importing - must mention in app.module
// Sharedmodule - suppose if wwe import a module here - itbecomes shared and since it is importe dhere we can skip declaring it in app module imports
// Dynamic modules-  
@Module({
    imports :[],
    controllers : [UserController],
    providers : [],
    exports : []
})
export class UserModule{}
