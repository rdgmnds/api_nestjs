import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: "Rodrigo Mendes Vasconcelos",
            age: 24,
            occupation: "Programador"
        },
        {
            id: 2,
            name: "Lucas Silva",
            age: 18,
            occupation: "Suporte"
        },
        {
            id: 3,
            name: "Joao Oliveira",
            age: 43,
            occupation: "Técnico"
        }
    ]

    findAll(occupation?: 'Programador' | 'Técnico' | 'Suporte') {
        if (occupation) {
            const occupations = this.users.filter(user => user.occupation === occupation);
            if (occupations.length === 0) throw new NotFoundException("Nenhum usuário encontrado");
            return occupations;
        }

        return this.users;
        
    }

    findOne(id: number) {
        const user = this.users.filter(user => user.id === id)

        console.log(user)

        if (!user[0]) throw new NotFoundException("Usuário não encontrado");
        
        return user;
    }

    create(createUserDto: CreateUserDto) {
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...createUserDto
        }

        this.users.push(newUser);

        return this.users;
    }

    updated(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return {...user, ...updateUserDto};
            }

            return user;
        })

        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== +id)

        return removedUser;
    }

}
