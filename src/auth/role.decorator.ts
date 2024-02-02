import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => {
  return SetMetadata('role', role);
};

// O Docorator tem duas funções 
//     -> Alterar o comportamento de uma variavel, função, metodo ou classe
//     -> Trabalhar com metadata