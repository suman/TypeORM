import {Entity, PrimaryGeneratedColumn, Column} from 'TypeORM';

@Entity('Profile')

export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    age: number

    @Column({nullable:false})
    gender: string
}
