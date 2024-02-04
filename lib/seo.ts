export const seo = {
  title: '嘲讽南北 | 专利代理师、律师资格、中级知识产权师、IPMS资格',
  description:
    '我是嘲讽南北，一名专利代理师。专注于知识产权领域的法律服务，致力于为客户保护和实现其创新成果的价值。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const;
