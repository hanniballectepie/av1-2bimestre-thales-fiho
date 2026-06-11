import prisma from '../config/prisma.js';

class SnackModel {
  static async findAll() {
    try {
      return await prisma.snack.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });
    } catch (error) {
      throw new Error(`Erro ao buscar lanches: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      return await prisma.snack.findUnique({
        where: { id: parseInt(id) }
      });
    } catch (error) {
      throw new Error(`Erro ao buscar lanche: ${error.message}`);
    }
  }

  static async findByCategory(categoria) {
    try {
      return await prisma.snack.findMany({
        where: { 
          categoria: categoria
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
    } catch (error) {
      throw new Error(`Erro ao filtrar por categoria: ${error.message}`);
    }
  }

  static async searchByName(nome) {
    try {
      return await prisma.snack.findMany({
        where: {
          nome: {
            contains: nome,
            mode: 'insensitive'
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
    } catch (error) {
      throw new Error(`Erro ao pesquisar lanche: ${error.message}`);
    }
  }

  static async create(data) {
    try {
      return await prisma.snack.create({
        data: {
          nome: data.nome,
          categoria: data.categoria,
          descricao: data.descricao,
          ingredientes: data.ingredientes,
          preco: parseFloat(data.preco),
          imagem: data.imagem || null,
          calorias: parseInt(data.calorias),
          disponivel: data.disponivel !== undefined ? data.disponivel : true
        }
      });
    } catch (error) {
      throw new Error(`Erro ao criar lanche: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      return await prisma.snack.update({
        where: { id: parseInt(id) },
        data: {
          nome: data.nome,
          categoria: data.categoria,
          descricao: data.descricao,
          ingredientes: data.ingredientes,
          preco: parseFloat(data.preco),
          imagem: data.imagem || null,
          calorias: parseInt(data.calorias),
          disponivel: data.disponivel !== undefined ? data.disponivel : true
        }
      });
    } catch (error) {
      throw new Error(`Erro ao atualizar lanche: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      return await prisma.snack.delete({
        where: { id: parseInt(id) }
      });
    } catch (error) {
      throw new Error(`Erro ao deletar lanche: ${error.message}`);
    }
  }
}

export default SnackModel;
