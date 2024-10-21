import express, {Request, Response} from 'express';
import AppDataSource from './datasource/dataSource';
import {Profile} from './entities/profile.entity';
import {User} from './entities/user.entity';

const PORT = 3000;
const app = express();

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err:any) => {
    console.error("Error during Data Source initialization", err)
})

app.get('/createUser', async (req: Request, res:Response) => {

    const profile1 = new Profile();
    profile1.age = 37;
    profile1.gender = 'male';

    const profile2 = new Profile();
    profile2.age = 4;
    profile2.gender = 'male';

    const userRepo = AppDataSource.getRepository(User);
    const user2 = new User();
    user2.firstName = 'suryansh';
    user2.lastName = 'bogati';
    user2.isActive = true;
    user2.profile = profile2;

    res.json(await userRepo.save(user2));
});


app.get('/findWithName', async (req: Request, res:Response) => {
    const userRepo = AppDataSource.getRepository(User);
    const resultData = await userRepo.find(
        {
            select: {
                firstName: true, 
                lastName: true
            }
        }
    )
    res.json(resultData);
});


app.get('/', (req: Request, res:Response) => {
    res.send("<h2>Hello I am express</h2>")
});

app.get('/updateUserName', async (req: Request, res:Response) => {
    const userRepo = AppDataSource.getRepository(User);
    res.json(await userRepo.update(1, {firstName: 'kamal'}));
});

app.get('/findUserWithRelation', async (req: Request, res:Response) => {
    const userRepo = AppDataSource.getRepository(User);
    const resultData = await userRepo.find({
        relations: ['profile']
    })
    res.json(resultData);
});

app.get('/findProfileWithRelation', async (req: Request, res:Response) => {
    const profileRepo = AppDataSource.getRepository(Profile);
    const resultData = await profileRepo.find({
        'relations' : ['user']
    })
    res.json(resultData);
});

app.listen(PORT, () => {
    console.log("Server has started")
})