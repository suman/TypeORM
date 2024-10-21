import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'TypeORM';
import {Profile} from './profile.entity';

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
	
    @OneToOne(() => Profile, (metadata) => metadata.id, {cascade:true})
    @JoinColumn()
    profile: Profile

}
