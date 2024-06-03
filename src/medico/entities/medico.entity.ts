import { Entrada } from 'src/entrada/entities/entrada.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'medico' })
export class Medico {
  @PrimaryGeneratedColumn()
  idMedico: number;
  @Column({ nullable: false })
  nombre: string;
  @Column({ nullable: false })
  apellido: string;
  @Column({ nullable: false, unique: true })
  matricula: string;
  @Column({ nullable: false, type: 'date' })
  fechaIngreso: Date;
  @ManyToOne(() => Especialidad)
  @JoinColumn({ name: 'idEspecialidad' })
  especialidad: Especialidad;
  @OneToMany(() => Entrada, (Entrada) => Entrada.idMedico)
  @JoinColumn({ name: 'idEntrada' })
  entrada: Entrada[];
}
