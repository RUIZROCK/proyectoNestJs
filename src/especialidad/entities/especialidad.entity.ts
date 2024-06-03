import { Medico } from 'src/medico/entities/medico.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'especialidad' })
export class Especialidad {
  @PrimaryGeneratedColumn()
  idEspecialidad: number;

  @Column({ nullable: false, unique: true })
  nombre: string;

  @OneToMany(() => Medico, (medico) => medico.especialidad)
  @JoinColumn({ name: 'medicos' })
  medico: Medico[];
}
