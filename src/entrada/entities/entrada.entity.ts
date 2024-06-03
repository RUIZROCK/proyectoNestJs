import { Medico } from 'src/medico/entities/medico.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'entrada' })
export class Entrada {
  @PrimaryGeneratedColumn()
  idEntrada: number;

  @Column()
  idHistoriaClinica: number;

  @ManyToOne(() => Medico, (medico) => medico.entrada, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'idMedico' })
  idMedico: Medico;

  @ManyToOne(() => Paciente, (paciente) => paciente.entrada, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'idPaciente' })
  idPaciente: Paciente;

  @Column({ type: Date })
  fecha: Date;
}
