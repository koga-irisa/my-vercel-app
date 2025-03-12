'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  // ニュース記事のサンプルデータ
  const newsItems = [
    {
      id: 1,
      date: '2025年3月',
      title: '熊本大学認定ベンチャーに登録',
      excerpt: '弊社は熊本大学認定ベンチャーとして正式に登録されました。産学連携をさらに強化し、地域イノベーションを推進します。',
      image: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      date: '2025年3月',
      title: 'ホームページ開設',
      excerpt: '弊社ホームページを開設いたしました。サービス内容や企業情報、最新ニュースなどを随時発信してまいります。',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      date: '2024年9月',
      title: 'East Venturesより1000万円の資金調達を実施',
      excerpt: '地域活性化事業の拡大を目指し、East Venturesをリード投資家として1000万円の資金調達を実施しました。新規事業への積極的な投資を行います。',
      image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  // 事業内容のデータ
  const services = [
    {
      img: '/images/bridge.jpg',
      title: '橋梁点検事業',
      desc: '弊社は、5m以下の小規模橋梁を対象とした点検事業を展開しています。\n省力化技術を活用し、低コストで高品質な橋梁点検を実現します。',
    },
    {
      img: '/images/AIAgent.png',
      title: 'AI橋梁点検サポートシステム「点検AI Agent」の提供',
      desc: '専門的な知識や経験を持たない人でも、\n簡単かつ効率的に橋梁の健全性を評価できるシステムを提供します。\n人材不足や維持管理コストの増加に直面する自治体や管理者の負担を大幅に軽減します。',
    },
  ];

  return (
    <main className="font-serif">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: 'url(/images/HERO.jpg)',
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
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            インフラ点検をもっと身近に。<br />
            誰でも守れる地域の安心
          </motion.h1>
          <motion.p
            className="text-white text-2xl md:text-3xl tracking-wider font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            IRISA
          </motion.p>
        </motion.div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-blue-600 font-medium text-lg mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            熊本大学認定ベンチャー
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="relative">
              株式会社IRISAとは？
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
            </span>
          </motion.h2>
          <motion.p
            className="text-black mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ lineHeight: "1.8" }}
          >
            スマートフォンとAIを活用した「点検AI Agent」を開発し、<br />
            インフラ管理に革新をもたらす企業です。<br />
            専門知識を必要とせず、誰もが簡単にインフラ点検を行える仕組みを構築します。<br />
            人材不足やコスト負担で課題を抱える自治体・管理者をサポートし、<br />
            地域の持続可能な未来づくりに貢献します。
            
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/company" className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors duration-300 font-medium">
              もっと見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-12 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="relative">
              事業内容
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-300"></span>
            </span>
          </motion.h2>
          
          <div className="flex flex-col max-w-3xl mx-auto gap-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Link href={`/service#${idx === 0 ? 'bridge-inspection' : 'ai-agent'}`} className="cursor-pointer w-full">
                  <div className="w-full h-64 overflow-hidden rounded-lg shadow-md mb-6">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                </Link>
                <p className="text-black max-w-2xl whitespace-pre-line">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
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
              最新ニュース
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {newsItems.map((news, idx) => (
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link 
              href="/news"
              className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors duration-300 font-medium inline-block"
            >
              ニュース一覧
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 relative text-white text-center"
        style={{ 
          backgroundImage: 'url(/images/YAMAGATA.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            お問い合わせ<br />CONTACT
          </motion.h2>
          <motion.p
            className="mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            当社の事業、理念、その他ご不明点などがございましたら、<br />お気軽にお問い合わせください。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/contact"
              className="bg-white text-gray-900 px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium inline-block shadow-lg"
            >
              お問い合わせフォーム
            </Link>
          </motion.div>
          <div className="mt-16 pt-8 border-t border-white border-opacity-20 text-sm">
            <p className="mt-8 text-white">© 2025 株式会社IRISA. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </main>
  );
}