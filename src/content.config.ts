import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // 記事の種類（選び方・比較・速報など）
    type: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    // 料金・条件を公式情報で最後に確認した日
    checked: z.coerce.date(),
    // 広告リンクを含む記事は true（冒頭にPR表記を出す）
    pr: z.boolean().default(false),
    // 記事の末尾に出す計算ツール
    simulator: z.enum(['net-total', 'card-reward']).optional(),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
