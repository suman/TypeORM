import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'TypeORM';
import {User} from './user.entity';

@Entity('Profile')

export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    age: number

    @Column({nullable:false})
    gender: string

    @OneToOne(() => User, (user) => user.profile)
    user: User
}
