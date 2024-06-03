import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tipoPractica' })
export class TipoPractica {
  @PrimaryGeneratedColumn()
  idTipoPractica: number;

  @Column({ unique: true })
  nombre: string;
}
