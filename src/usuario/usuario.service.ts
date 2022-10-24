import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    this.usuarioRepository.save(createUsuarioDto);
    return `usuario salvo no banco de dados`;
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(id_usuario: number): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOneBy({ id_usuario });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    this.usuarioRepository.insert(updateUsuarioDto);
    return `This action updates a #${id} usuario`;
  }

  remove(id_usuario: number) {
    return this.usuarioRepository.delete(id_usuario);
  }
}
