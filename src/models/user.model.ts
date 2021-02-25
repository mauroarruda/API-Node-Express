import { CreateDateColumn } from 'typeorm';
import { Column } from 'typeorm';
import { PrimaryColumn } from 'typeorm';
import { Entity } from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('usersMy')
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User };