import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpar dados existentes
  await prisma.snack.deleteMany();

  // Dados de exemplo
  const snacks = [
    {
      nome: 'X-Bacon Especial',
      categoria: 'X-Bacon',
      descricao: 'Hambúrguer bovino artesanal com cheddar e bacon crocante.',
      ingredientes: 'Pão brioche, hambúrguer artesanal, cheddar, bacon, molho especial',
      preco: 32.90,
      calorias: 850,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80'
    },
    {
      nome: 'X-Tudo Completo',
      categoria: 'X-Tudo',
      descricao: 'Hambúrguer com todos os acompanhamentos disponíveis.',
      ingredientes: 'Pão brioche, 2x hambúrguer, queijo, bacon, ovo, alface, tomate, cebola, molho especial',
      preco: 45.90,
      calorias: 1200,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80'
    },
    {
      nome: 'Cheeseburger Premium',
      categoria: 'Cheeseburger',
      descricao: 'Clássico cheeseburger com ingredientes selecionados.',
      ingredientes: 'Pão brioche, hambúrguer artesanal, queijo derretido, alface, tomate',
      preco: 28.90,
      calorias: 720,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80'
    },
    {
      nome: 'Smash Burger',
      categoria: 'Smash Burger',
      descricao: 'Hambúrguer prensado na chapa com ingredientes frescos.',
      ingredientes: 'Pão brioche, carne prensada, cheddar, picles, cebola caramelizada',
      preco: 35.90,
      calorias: 890,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1585238341710-4913ffd4020d?w=500&q=80'
    },
    {
      nome: 'Hambúrguer Artesanal',
      categoria: 'Hambúrguer Artesanal',
      descricao: 'Preparado com carne 100% angus e ingredientes premium.',
      ingredientes: 'Pão artesanal, carne angus, rúcula, tomate seco, queijo gorgonzola',
      preco: 42.90,
      calorias: 950,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80'
    },
    {
      nome: 'X-Salada',
      categoria: 'X-Salada',
      descricao: 'Opção mais leve com alface, tomate e legumes frescos.',
      ingredientes: 'Pão integral, hambúrguer, alface, tomate, cebola roxa, maionese light',
      preco: 26.90,
      calorias: 580,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1557804506-669714d2917d?w=500&q=80'
    },
    {
      nome: 'X-Egg Supremo',
      categoria: 'X-Egg',
      descricao: 'Hambúrguer com ovo frito e queijo derretido.',
      ingredientes: 'Pão brioche, hambúrguer, ovo frito, queijo cheddar, bacon, maionese',
      preco: 31.90,
      calorias: 820,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80'
    },
    {
      nome: 'Hambúrguer Vegetariano',
      categoria: 'Hambúrguer Vegetariano',
      descricao: 'Delicioso hambúrguer 100% vegetariano com ingredientes saudáveis.',
      ingredientes: 'Pão integral, hambúrguer de grão-de-bico, alface, tomate, abacate, maionese vegana',
      preco: 29.90,
      calorias: 620,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1585421514675-dba91781adb6?w=500&q=80'
    },
    {
      nome: 'Hambúrguer de Frango Grelhado',
      categoria: 'Hambúrguer de Frango',
      descricao: 'Peito de frango grelhado com alface e tomate fresco.',
      ingredientes: 'Pão brioche, peito de frango grelhado, alface, tomate, maionese de alho',
      preco: 27.90,
      calorias: 680,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1562547256-1-b5e1b0c6e4e?w=500&q=80'
    },
    {
      nome: 'Misto Quente Classico',
      categoria: 'Misto Quente',
      descricao: 'Clássico sanduíche com presunto e queijo na chapa.',
      ingredientes: 'Pão de forma, presunto, queijo, maionese, butter na chapa',
      preco: 18.90,
      calorias: 520,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1562547256-1-b5e1b0c6e4e?w=500&q=80'
    },
    {
      nome: 'Beirute Tradicional',
      categoria: 'Beirute',
      descricao: 'Sanduíche tradicional com múltiplas camadas de sabor.',
      ingredientes: 'Pão sírio, presunto, queijo, alface, tomate, maionese, molho especial',
      preco: 22.90,
      calorias: 650,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1585238341710-4913ffd4020d?w=500&q=80'
    },
    {
      nome: 'Wrap Frio Grelhado',
      categoria: 'Wrap Frio',
      descricao: 'Wrap com frango grelhado, legumes frescos e molho caseiro.',
      ingredientes: 'Tortilla integral, frango grelhado, alface, tomate, cenoura, iogurte grego, mel',
      preco: 24.90,
      calorias: 580,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80'
    },
    {
      nome: 'Hambúrguer Duplo Gourmet',
      categoria: 'Hambúrguer Duplo',
      descricao: 'Dois hambúrgueres de qualidade premium com queijo artesanal.',
      ingredientes: 'Pão brioche, 2x carne angus, queijo brie, alface, tomate seco, cebola caramelizada',
      preco: 56.90,
      calorias: 1400,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80'
    },
    {
      nome: 'Sanduíche de Peito de Peru',
      categoria: 'Sanduíche de Peito de Peru',
      descricao: 'Sanduíche saudável com peito de peru e ingredientes frescos.',
      ingredientes: 'Pão integral, peito de peru, alface, tomate, cebola roxa, mostarda',
      preco: 23.90,
      calorias: 480,
      disponivel: true,
      imagem: 'https://images.unsplash.com/photo-1585421514675-dba91781adb6?w=500&q=80'
    }
  ];

  for (const snack of snacks) {
    await prisma.snack.create({
      data: snack,
    });
  }

  console.log('✅ Database seeded com 14 lanches!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
