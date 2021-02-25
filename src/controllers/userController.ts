import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/user.model';

class UserController {
    
    //CREATE
    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        const usersRepository = getRepository(User);
        const userAlreadyExists = await usersRepository.findOne({email});
        if(userAlreadyExists) return response.status(400).json({error: "User already exists!"});
        const user = usersRepository.create({name, email});
        await usersRepository.save(user);
        return response.json(user);
    }

    //READ
    async read(request: Request, response: Response) {
        const usersRepository = getRepository(User);
        const userList = await usersRepository.find();
        return response.json(userList);
    }

    //READ BY ID
    async readById(request: Request, response: Response) {
        const idUsers = request.params.id;
        const usersRepository = getRepository(User);
        const userList = await usersRepository.findOne(idUsers);
        return response.json(userList);
    }

    //UPDATE
    async update(request: Request, response: Response) {
        return response.json({message: 'Requisição UPDATE'});
    }

    //DELETE
    async delete(request: Request, response: Response) {
        const idUsers = request.params.id;
        const usersRepository = getRepository(User);
        const user = await usersRepository.findOne(idUsers);
        const userDelete = await usersRepository.remove(user);
        return response.json(userDelete);
    }
}


export { UserController };