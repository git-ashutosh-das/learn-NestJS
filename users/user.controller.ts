import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { UserDataDTO } from "dto";
import { Request, Response } from "express";

let USERS: UserDataDTO[] = [];

@Controller('/users')
export class UserController{
    
    @Post('/addUser')
    addUser(@Body() userDTO: UserDataDTO, req: Request, res: Response){
        
        if( !userDTO || typeof userDTO.name !=="string" || typeof userDTO.address !=="string" || typeof userDTO.id !=="number"){
            throw new NotFoundException("Invalid Data format")
            //return res.status(404).json({ message: "Not Found"}) ; // handling manually - in this case use
        }
        let userIndex = USERS.findIndex( value => value.id==userDTO.id );
        if( userIndex != -1 ){
            return "Duplicate entry, Send new ID"
        }

        USERS.push(userDTO);
        return {
            message: 'User Added',
            data: userDTO
        }
    }

    @Get('/')
    getAllUsers(){
        return USERS;
    }

    @Get('/:id')
    getUser(@Param('id') id: Number){
        let user = USERS.find( value => value.id==id );
        if(!user){
            throw new NotFoundException("User not found")
        }
        return {
            data: user
        }
    }

    @Put('/:id')
    updateUser(@Param('id') id: Number, @Body() userDTO: UserDataDTO ){
        if( !userDTO || typeof userDTO.name !=="string" || typeof userDTO.address !=="string" || typeof userDTO.id !=="number"){
            throw new NotFoundException("Invalid Data format")
            //return res.status(404).json({ message: "Not Found"}) ; // handling manually - in this case use
        }
        let userIndex = USERS.findIndex( value => value.id==id );
        if(userIndex == -1){
            throw new NotFoundException("User not found")
        }
        USERS[userIndex] = userDTO;
        return {
            message: "User Updated",
            data:  USERS[userIndex]
        }
    }

    @Delete()
    deleteUser(@Query('id') id: Number ){
        let userIndex = USERS.findIndex( value => value.id==id );
        if( userIndex == -1 ){
            return "User Not Found"
        }
        // USERS= USERS.filter(value => value.id == id); // Bad practice to reintiate declared array
        USERS.splice( userIndex, 1)
        return {
            success: "User successfully deleted",
            data: USERS
        }
    }
}