import {DataSource} from 'TypeORM';
import {User} from '../entities/user.entity';
import {Profile} from '../entities/profile.entity';

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "typeorm",
    logging: true,
    synchronize: true,
    entities: [User, Profile]
})

export default AppDataSource;
