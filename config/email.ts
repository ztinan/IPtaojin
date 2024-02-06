export const emailConfig = {
  from: 'hi@cali.so',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://1patent.cn`
      : 'http://localhost:3000',
}
