export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'AI Study Assistant API is running',
    timestamp: new Date().toISOString(),
  })
}