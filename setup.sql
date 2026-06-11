-- Script de Setup do Banco de Dados
-- Hamburgueria Thales

-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS hamburgueria_db;
USE hamburgueria_db;

-- Criar tabela de lanches
CREATE TABLE IF NOT EXISTS snacks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  descricao TEXT NOT NULL,
  ingredientes TEXT NOT NULL,
  preco FLOAT NOT NULL,
  imagem VARCHAR(500),
  calorias INT NOT NULL,
  disponivel BOOLEAN DEFAULT TRUE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_categoria (categoria),
  INDEX idx_disponivel (disponivel)
);

-- Inserir dados de exemplo
INSERT INTO snacks (nome, categoria, descricao, ingredientes, preco, imagem, calorias, disponivel) VALUES
('X-Bacon Especial', 'X-Bacon', 'Hambúrguer bovino artesanal com cheddar e bacon crocante.', 'Pão brioche, hambúrguer artesanal, cheddar, bacon, molho especial', 32.90, 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80', 850, true),
('X-Tudo Completo', 'X-Tudo', 'Hambúrguer com todos os acompanhamentos disponíveis.', 'Pão brioche, 2x hambúrguer, queijo, bacon, ovo, alface, tomate, cebola, molho especial', 45.90, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80', 1200, true),
('Cheeseburger Premium', 'Cheeseburger', 'Clássico cheeseburger com ingredientes selecionados.', 'Pão brioche, hambúrguer artesanal, queijo derretido, alface, tomate', 28.90, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80', 720, true),
('Smash Burger', 'Smash Burger', 'Hambúrguer prensado na chapa com ingredientes frescos.', 'Pão brioche, carne prensada, cheddar, picles, cebola caramelizada', 35.90, 'https://images.unsplash.com/photo-1585238341710-4913ffd4020d?w=500&q=80', 890, true),
('Hambúrguer Artesanal', 'Hambúrguer Artesanal', 'Preparado com carne 100% angus e ingredientes premium.', 'Pão artesanal, carne angus, rúcula, tomate seco, queijo gorgonzola', 42.90, 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80', 950, true),
('X-Salada', 'X-Salada', 'Opção mais leve com alface, tomate e legumes frescos.', 'Pão integral, hambúrguer, alface, tomate, cebola roxa, maionese light', 26.90, 'https://images.unsplash.com/photo-1557804506-669714d2917d?w=500&q=80', 580, true),
('X-Egg Supremo', 'X-Egg', 'Hambúrguer com ovo frito e queijo derretido.', 'Pão brioche, hambúrguer, ovo frito, queijo cheddar, bacon, maionese', 31.90, 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80', 820, true),
('Hambúrguer Vegetariano', 'Hambúrguer Vegetariano', 'Delicioso hambúrguer 100% vegetariano com ingredientes saudáveis.', 'Pão integral, hambúrguer de grão-de-bico, alface, tomate, abacate, maionese vegana', 29.90, 'https://images.unsplash.com/photo-1585421514675-dba91781adb6?w=500&q=80', 620, true),
('Hambúrguer de Frango Grelhado', 'Hambúrguer de Frango', 'Peito de frango grelhado com alface e tomate fresco.', 'Pão brioche, peito de frango grelhado, alface, tomate, maionese de alho', 27.90, 'https://images.unsplash.com/photo-1562547256-1-b5e1b0c6e4e?w=500&q=80', 680, true),
('Misto Quente Classico', 'Misto Quente', 'Clássico sanduíche com presunto e queijo na chapa.', 'Pão de forma, presunto, queijo, maionese, butter na chapa', 18.90, 'https://images.unsplash.com/photo-1562547256-1-b5e1b0c6e4e?w=500&q=80', 520, true),
('Beirute Tradicional', 'Beirute', 'Sanduíche tradicional com múltiplas camadas de sabor.', 'Pão sírio, presunto, queijo, alface, tomate, maionese, molho especial', 22.90, 'https://images.unsplash.com/photo-1585238341710-4913ffd4020d?w=500&q=80', 650, true),
('Wrap Frio Grelhado', 'Wrap Frio', 'Wrap com frango grelhado, legumes frescos e molho caseiro.', 'Tortilla integral, frango grelhado, alface, tomate, cenoura, iogurte grego, mel', 24.90, 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80', 580, true),
('Hambúrguer Duplo Gourmet', 'Hambúrguer Duplo', 'Dois hambúrgueres de qualidade premium com queijo artesanal.', 'Pão brioche, 2x carne angus, queijo brie, alface, tomate seco, cebola caramelizada', 56.90, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80', 1400, true),
('Sanduíche de Peito de Peru', 'Sanduíche de Peito de Peru', 'Sanduíche saudável com peito de peru e ingredientes frescos.', 'Pão integral, peito de peru, alface, tomate, cebola roxa, mostarda', 23.90, 'https://images.unsplash.com/photo-1585421514675-dba91781adb6?w=500&q=80', 480, true);

SELECT COUNT(*) as total_lanches FROM snacks;
