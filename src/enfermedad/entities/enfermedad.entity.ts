import { Consulta } from 'src/consulta/entities/consulta.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'enfermedad' })
export class Enfermedad {
  @PrimaryGeneratedColumn()
  idEnfermedad: number;

  @Column({ nullable: false, unique: true })
  nombre: string;

  @OneToMany(() => Consulta, (consulta) => consulta.diagnostico)
  @JoinColumn({ name: 'diagnostico_idEnfermedad' })
  Consulta: Consulta[];
}
