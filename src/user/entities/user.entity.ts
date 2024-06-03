import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;
  @Column({ nullable: false })
  username: string;
  @Column({ nullable: false })
  mail: string;
  @Column({ nullable: false })
  password: string;
  @Column({ nullable: false })
  rol: string;
}
