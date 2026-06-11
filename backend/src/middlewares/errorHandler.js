export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  res.status(500).json({
    success: false,
    error: 'Erro interno do servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};
