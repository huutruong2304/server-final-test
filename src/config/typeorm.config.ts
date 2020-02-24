import { TypeOrmModuleOptions } from '@nestjs/typeorm'


export const typeOrmConfig:TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    // host: 'localhost',
    port: 5432,
    // username: 'root',
    username: 'postgres',
    // password:'',
    password:'682110',
    // database:'test4',
    database:'final-test',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}

// export const typeOrmConfig:TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: 'ec2-184-72-235-159.compute-1.amazonaws.com',
//     // host: 'localhost',
//     port: 5432,
//     // username: 'root',
//     username: 'chhtdjrhgjlovo',
//     // password:'',
//     password:'e2b9121c8945efd760b7dbce89c044da9e7dd4dac1909091c203dd591ec874d9',
//     // database:'test4',
//     database:'ddrl7uv4gj0fpj',
//     entities: [__dirname + '/../**/*.entity.{js,ts}'],
//     synchronize: true
// }

// export const typeOrmConfig:TypeOrmModuleOptions = {
//     type: 'mysql',
//     host: 'db4free.net',
//     // host: 'localhost',
//     port: 3306,
//     // username: 'root',
//     username: 'truongnran',
//     // password:'',
//     password:'idontknow',
//     // database:'test4',
//     database:'truong12345',
//     entities: [__dirname + '/../**/*.entity.{js,ts}'],
//     synchronize: true
// }