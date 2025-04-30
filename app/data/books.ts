export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  year: number;
}

export const books: Book[] = [
  {
    id: "1",
    title: "O Eco das Páginas Perdidas",
    author: "Ana Costa",
    year: 1987,
    coverImage:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535928242/a-tinta-da-melancolia.jpg", // Substitua com o caminho real da imagem
    description:
      "Em um mundo onde os livros desaparecem misteriosamente, um jovem bibliotecário encontra uma coleção de volumes esquecidos. Cada página contém ecos de vidas passadas, e ao lê-las, ele começa a se perder entre os fragmentos de histórias que não consegue entender.",
  },
  {
    id: "2",
    title: "A Nebulosa das Palavras Silenciadas",
    author: "Ricardo Almeida",
    year: 1955,
    coverImage:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535928242/a-tinta-da-melancolia.jpg", // Substitua com o caminho real da imagem
    description:
      "Em uma era onde a linguagem foi proibida, uma mulher encontra um antigo livro de poesias. À medida que lê, ela começa a descobrir segredos esquecidos e pistas sobre como a língua foi perdida.",
  },
  {
    id: "3",
    title: "Fragmentos de Tinta e Sombras",
    author: "Lúcia Martins",
    year: 1992,
    coverImage:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535928242/a-tinta-da-melancolia.jpg", // Substitua com o caminho real da imagem
    description:
      "Um escritor solitário encontra um diário antigo que descreve uma realidade paralela onde as palavras ganham vida. À medida que ele transcreve as páginas do diário, ele percebe que o mundo ao seu redor começa a mudar.",
  },
  {
    id: "4",
    title: "A Última Página do Amanhã",
    author: "Carlos Pereira",
    year: 2019,
    coverImage:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535928242/a-tinta-da-melancolia.jpg", // Substitua com o caminho real da imagem
    description:
      "Em um futuro distópico onde a leitura é considerada um ato subversivo, um grupo de rebeldes dedica suas vidas a preservar livros antigos. Quando um livro misterioso aparece, eles percebem que o futuro está sendo reescrito.",
  },
  {
    id: "5",
    title: "O Jardim das Palavras Esquecidas",
    author: "Fernanda Silva",
    year: 1980,
    coverImage:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535928242/a-tinta-da-melancolia.jpg", // Substitua com o caminho real da imagem
    description:
      "Em uma vila remota, uma árvore ancestral é capaz de armazenar memórias em suas folhas. Cada folha perdida representa uma palavra esquecida, e cada palavra perdida é uma história que se apaga do mundo.",
  },
];
