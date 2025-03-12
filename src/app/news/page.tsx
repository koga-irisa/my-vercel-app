'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function News() {
  // すべてのニュースデータ（3件の実記事と「COMING SOON」表示）
  const allNewsItems = [
    {
      id: 1,
      date: '2025年3月',
      title: '熊本大学認定ベンチャーに登録',
      excerpt: '弊社は熊本大学認定ベンチャーとして正式に登録されました。産学連携をさらに強化し、地域イノベーションを推進します。',
      image: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: true
    },
    {
      id: 2,
      date: '2025年3月',
      title: 'ホームページ開設',
      excerpt: '弊社ホームページを開設いたしました。サービス内容や企業情報、最新ニュースなどを随時発信してまいります。',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: true
    },
    {
      id: 3,
      date: '2024年9月',
      title: 'East Venturesより1000万円の資金調達を実施',
      excerpt: '地域活性化事業の拡大を目指し、East Venturesをリード投資家として1000万円の資金調達を実施しました。新規事業への積極的な投資を行います。',
      image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: true
    },
    {
      id: 4,
      date: '',
      title: 'COMING SOON',
      excerpt: '',
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasDetail: false
    }
  ];

  return (
    <main className="font-serif">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          className="z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            NEWS
          </motion.h1>
        </motion.div>
      </section>

      {/* News Listing Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-12 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="relative">
              ニュース一覧
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 実際のニュース記事（3件） */}
            {allNewsItems.slice(0, 3).map((news, idx) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
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
                  <p className="text-black text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                  {news.hasDetail && (
                    <Link 
                      href={`/news/${news.id}`}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      詳細を見る →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* COMING SOON表示（1枠） */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-sm bg-white flex flex-col items-center justify-center"
              style={{ minHeight: "300px" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Coming Soon" 
                className="w-full h-48 object-cover opacity-50"
              />
              <div className="p-6 flex items-center justify-center flex-grow">
                <h3 className="font-bold text-xl text-black">COMING SOON</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* フッターセクション */}
      <footer className="py-6 bg-white text-black text-center border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-sm">© 2025 株式会社IRISA. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}