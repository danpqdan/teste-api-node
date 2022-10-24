import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  @IsNotEmpty()
  nome: string;

  @Column()
  @IsNotEmpty()
  sobrenome: string;

  @Column()
  @IsNotEmpty()
  email: string;

  @Column()
  telefone: string;

  @Column()
  @IsNotEmpty()
  cpf: string;
}
