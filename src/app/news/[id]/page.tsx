'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

// ニュースデータの型定義
type NewsItem = {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  hasDetail: boolean;
};

export default function NewsDetail() {
  const params = useParams();
  const newsId = params.id as string;
  
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 全てのニュースデータ（タイトルと内容を修正）
  const allNewsItems: NewsItem[] = [
    {
      id: 1,
      date: '2025年3月',
      title: '熊本大学認定ベンチャーに登録',
      excerpt: '弊社は熊本大学認定ベンチャーとして正式に登録されました。産学連携をさらに強化し、地域イノベーションを推進します。',
      content: `2025年3月1日、株式会社IRISAは熊本大学認定ベンチャーとして正式に登録されました。

地域の課題解決とイノベーション創出を目指す当社の取り組みが評価され、熊本大学との産学連携を強化する形での認定となりました。

福塚大和代表は「大学の持つ最先端の研究成果と、私たちのビジネスモデルを融合させることで、より実践的かつ革新的なソリューションを地域に提供できると考えています。熊本発のテクノロジーで全国の地域課題解決に貢献していきたい」とコメントしています。

今後は研究インターンシップの受け入れや、大学発ベンチャーとしての知見共有なども積極的に行い、地域における産学連携のロールモデルを目指して参ります。`,
      image: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: true
    },
    {
      id: 2,
      date: '2025年3月',
      title: 'ホームページ開設',
      excerpt: '弊社ホームページを開設いたしました。サービス内容や企業情報、最新ニュースなどを随時発信してまいります。',
      content: `2025年1月20日、株式会社IRISAの公式ホームページを開設いたしました。

当サイトでは、弊社の理念やビジョン、提供するサービス内容、会社情報などを詳しくご紹介しています。また、最新のニュースやイベント情報なども随時更新してまいります。

今後もユーザビリティの向上と情報の充実を図りながら、皆様にとって有益なウェブサイトを目指してまいります。弊社のサービスや取り組みに興味をお持ちいただけましたら、お気軽にCONTACTページからお問い合わせください。`,
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: true
    },
    {
      id: 3,
      date: '2024年9月',
      title: 'East Venturesより1000万円の資金調達を実施',
      excerpt: '地域活性化事業の拡大を目指し、East Venturesより1000万円の資金調達を実施しました。',
      content: `株式会社IRISAは2024年9月、東南アジア最大級のベンチャーキャピタルEast Venturesより1000万円の資金調達を実施いたしました。

人口減少や財政状況の逼迫により、日本の地域インフラ維持は困難な状況にあります。

当社はAI技術と非専門家のマネジメントを駆使し、持続可能な社会基盤の維持に貢献していく所存です。

今回の資金調達を機に、さらなる技術開発と事業拡大に精進してまいります。`,
      image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: true
    },
    {
      id: 4,
      date: '2024年12月10日',
      title: '年末特別イベント開催のお知らせ',
      excerpt: 'COMING SOON',
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: false
    },
    {
      id: 5,
      date: '2024年11月5日',
      title: '地方創生アワード最優秀賞受賞',
      excerpt: 'COMING SOON',
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: false
    },
    {
      id: 6,
      date: '2024年10月15日',
      title: '新規パートナー自治体の発表',
      excerpt: 'COMING SOON',
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: false
    }
  ];

  useEffect(() => {
    if (newsId) {
      // 対象のニュース記事を検索
      const targetNews = allNewsItems.find(news => news.id === parseInt(newsId));
      setNewsItem(targetNews || null);
      
      // 関連ニュースを取得（詳細ページがある最新3件から対象を除いたもの）
      if (targetNews) {
        const related = allNewsItems
          .filter(news => news.id !== targetNews.id && news.hasDetail)
          .slice(0, 2);
        setRelatedNews(related);
      }
      
      setLoading(false);
    }
  }, [newsId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-black">読み込み中...</p>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">記事が見つかりません</h1>
        <Link href="/news" className="text-blue-600 hover:text-blue-800">
          ニュース一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <main className="font-serif">
      {/* Hero Section with News Title */}
      <section
        className="h-96 bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: `url(${newsItem.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.p
            className="text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {newsItem.date}
          </motion.p>
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {newsItem.title}
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="text-sm text-black">
            <Link href="/" className="hover:text-blue-600">HOME</Link> &gt; <Link href="/news" className="hover:text-blue-600">NEWS</Link> &gt; <span className="text-black">{newsItem.title}</span>
          </div>
        </div>
      </div>

      {/* News Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="prose prose-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* ニュース本文を段落ごとに分けて表示 */}
              {newsItem.content?.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 text-black leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-gray-50 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50"></div>
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              関連ニュース
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedNews.map((news, idx) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-left">
                    <p className="text-black text-sm mb-2">{news.date}</p>
                    <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                    <p className="text-black text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                    <Link 
                      href={`/news/${news.id}`}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      詳細を見る →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                href="/news"
                className="inline-block border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors duration-300 font-medium"
              >
                ニュース一覧へ戻る
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}