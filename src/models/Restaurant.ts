export interface Restaurants {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [{
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  }];
}

export interface MenuItem {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
  // Adicione outros campos necessários aqui
}
