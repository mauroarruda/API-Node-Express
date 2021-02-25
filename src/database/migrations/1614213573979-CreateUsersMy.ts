import { QueryRunner, Table } from 'typeorm';
import { MigrationInterface } from 'typeorm';


export class CreateUsersMy1614213573979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(
            new Table(
                {
                    name: 'usersMy',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                        },
                        {
                            name: 'name',
                            type: 'varchar',
                            //isNullable: true //se puder ser nulo
                        },
                        {
                            name: 'email',
                            type: 'varchar',
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()',
                        },
                    ]
                }
            )
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('users');
        
    }

}
