import SnackModel from '../models/SnackModel.js';

class SnackController {
  static async getAllSnacks(req, res) {
    try {
      const snacks = await SnackModel.findAll();
      return res.status(200).json({
        success: true,
        data: snacks,
        message: 'Lanches recuperados com sucesso'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async getSnackById(req, res) {
    try {
      const { id } = req.params;
      const snack = await SnackModel.findById(id);

      if (!snack) {
        return res.status(404).json({
          success: false,
          error: 'Lanche não encontrado'
        });
      }

      return res.status(200).json({
        success: true,
        data: snack,
        message: 'Lanche recuperado com sucesso'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async createSnack(req, res) {
    try {
      const { nome, categoria, descricao, ingredientes, preco, imagem, calorias, disponivel } = req.body;

      // Validações
      if (!nome || !categoria || !descricao || !ingredientes || !preco || !calorias) {
        return res.status(400).json({
          success: false,
          error: 'Campos obrigatórios faltando'
        });
      }

      const newSnack = await SnackModel.create({
        nome,
        categoria,
        descricao,
        ingredientes,
        preco,
        imagem,
        calorias,
        disponivel
      });

      return res.status(201).json({
        success: true,
        data: newSnack,
        message: 'Lanche criado com sucesso'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async updateSnack(req, res) {
    try {
      const { id } = req.params;
      const { nome, categoria, descricao, ingredientes, preco, imagem, calorias, disponivel } = req.body;

      // Validações
      if (!nome || !categoria || !descricao || !ingredientes || !preco || !calorias) {
        return res.status(400).json({
          success: false,
          error: 'Campos obrigatórios faltando'
        });
      }

      const snack = await SnackModel.findById(id);
      if (!snack) {
        return res.status(404).json({
          success: false,
          error: 'Lanche não encontrado'
        });
      }

      const updatedSnack = await SnackModel.update(id, {
        nome,
        categoria,
        descricao,
        ingredientes,
        preco,
        imagem,
        calorias,
        disponivel
      });

      return res.status(200).json({
        success: true,
        data: updatedSnack,
        message: 'Lanche atualizado com sucesso'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async deleteSnack(req, res) {
    try {
      const { id } = req.params;

      const snack = await SnackModel.findById(id);
      if (!snack) {
        return res.status(404).json({
          success: false,
          error: 'Lanche não encontrado'
        });
      }

      await SnackModel.delete(id);

      return res.status(200).json({
        success: true,
        message: 'Lanche deletado com sucesso'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async getSnacksByCategory(req, res) {
    try {
      const { categoria } = req.params;
      const snacks = await SnackModel.findByCategory(categoria);

      return res.status(200).json({
        success: true,
        data: snacks,
        message: 'Lanches da categoria recuperados com sucesso'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  static async searchSnacks(req, res) {
    try {
      const { nome } = req.params;
      const snacks = await SnackModel.searchByName(nome);

      return res.status(200).json({
        success: true,
        data: snacks,
        message: 'Pesquisa realizada com sucesso'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
}

export default SnackController;
