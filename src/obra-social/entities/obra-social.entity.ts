import { Paciente } from 'src/paciente/entities/paciente.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'obraSocial' })
export class ObraSocial {
  @PrimaryGeneratedColumn()
  idObraSocial: number;

  @Column({ nullable: false, unique: true })
  nombre: string;

  @OneToMany(() => Paciente, (paciente) => paciente.obraSocial)
  @JoinColumn({ name: 'pacientes' })
  pacientes: Paciente[];
}
