// サイトごとに変わる設定はここだけにまとめる
export const site = {
  name: 'えらびラボ 通信費',
  seal: '選',
  tagline: '光回線・ホームルーター・格安SIMを、2年でいくら払うかで比べるサイト',
  description:
    '光回線・ホームルーター・格安SIMの料金を、公式情報をもとに2年総額で比べる比較メディアです。計算ツールで、あなたの使い方に合わせた総額を確かめられます。',
  url: 'https://erabi-tsushin.mini74sion.workers.dev',
  sister: { name: 'えらびラボ カード', url: 'https://erabi-card.mini74sion.workers.dev' },
  simulator: 'net-total' as const,
  hero: {
    title: 'その回線、2年でいくら払いますか',
    lead: '月額だけでは比べられません。事務手数料、工事費、割引、特典までを1枚の明細にして、2年間の総額で比べます。',
  },
};
