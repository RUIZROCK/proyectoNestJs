import { Entrada } from 'src/entrada/entities/entrada.entity';
import { ObraSocial } from 'src/obra-social/entities/obra-social.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'paciente' })
export class Paciente {
  @PrimaryGeneratedColumn()
  idPaciente: number;
  @Column({ nullable: false })
  nombre: string;
  @Column({ nullable: false })
  apellido: string;
  @Column({ nullable: false, unique: true })
  dni: number;
  @Column({ nullable: false, type: 'date' })
  fechaNac: Date;
  @DeleteDateColumn({ nullable: true })
  fechaBaja: Date;

  @ManyToOne(() => ObraSocial, (obraSocial) => obraSocial.pacientes)
  @JoinColumn({ name: 'idObraSocial' })
  obraSocial: ObraSocial;

  @OneToMany(() => Entrada, (entrada) => entrada.idPaciente)
  @JoinColumn({ name: 'idEntrada' })
  entrada: Entrada[];
}
