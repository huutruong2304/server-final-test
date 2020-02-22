import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig:TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'db4free.net',
    // host: 'localhost',
    port: 3306,
    // username: 'root',
    username: 'truongnran',
    // password:'',
    password:'idontknow',
    // database:'test4',
    database:'truong12345',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}