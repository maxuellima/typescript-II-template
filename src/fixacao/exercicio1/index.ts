/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/


enum COR_FAVORITA {
  VERDE='Verde',
  AZUL= 'Azul',
  AMARELA="Amarela",
  ANIL='Anil',
  VERMELHA = 'Vermelha',
  VIOLETA = "Violeta",
  LARANJA = "Laranja",
  BRANCA = "ffffff"
}

export type TPessoa = {
  nome: string,
  idade: number,
  corFavorita: COR_FAVORITA
}



const pessoa1: TPessoa = {
  nome: "Alyne",
  idade: 25,
  corFavorita: COR_FAVORITA.AZUL
}
const pessoa2: TPessoa = {
  nome: "Bebel",
  idade: 27,
  corFavorita: COR_FAVORITA.VERDE
}
const pessoa3: TPessoa = {
  nome: "João",
  idade: 10,
  corFavorita: COR_FAVORITA.AMARELA
}
const pessoas: TPessoa[] = [
  pessoa1,
  pessoa2,
  pessoa3
]

console.table(pessoas)