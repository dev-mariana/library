import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Books1623709406801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'books',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    }, 
                    {
                        name: 'publisher',
                        type: 'varchar',
                    },
                    {
                        name: 'photo',
                        type: 'varchar',
                    },
                    {
                        name: 'authors',
                        type: 'varchar',
                    },
                    {
                        name: 'release_date',
                        type: 'varchar',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books');
    }

}
