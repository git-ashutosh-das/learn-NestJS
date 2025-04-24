import { Injectable, Scope } from "@nestjs/common";

@Injectable() //default scope      

//@Injectable(Scope.DEFAULT) //default scope      

//@Injectable('/user', Scope.Request)  // * injection scope - default scope - only one singeleton instace at any point, Request scope- new instance for every request -destroyed on response - creates both injectable instace and controller instacne
//@Injectable('/user', Scope.Transient) // every controller gets their own instance of Injectable wallet service
export class WalletService{
    getBallance() {
        return { "balance" : 1000 };
    }
}