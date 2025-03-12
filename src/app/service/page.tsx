'use client';

import { motion } from 'framer-motion';

export default function Service() {
  // サービス情報（順序入れ替え）
  const services = [
    {
      img: '/images/bridge.jpg',
      title: '橋梁点検事業',
      desc: '弊社は、5m以下の小規模橋梁を対象とした点検事業を展開しています。\n省力化技術を活用し、\n低コストで高品質な橋梁点検を実現します。',
      id: 'bridge-inspection'
    },
    {
      img: '/images/AIAgent.png',
      title: 'AI橋梁点検サポートシステム「点検AI Agent」の提供',
      desc: '専門的な知識や経験を持たない人でも、\n簡単かつ効率的に橋梁の健全性を評価できるシステムを提供します。\n人材不足や維持管理コストの増加に直面する\n自治体や管理者の負担を大幅に軽減します。',
      id: 'ai-agent'
    },
  ];

  return (
    <main className="font-serif">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: 'url(/images/SERVICE.jpg)',
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
            SERVICE
          </motion.h1>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">人口減や財政ひっ迫により地域インフラ維持は困難になっています。</p>
            <p className="mb-4">我々はAIを用いて、誰もがインフラ管理に参加できる仕組みを構築し、</p>
            <p>持続可能な社会基盤の維持に貢献します。</p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="relative">
             AIで支える、誰もが主役の地域インフラ
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-300"></span>
            </span>
          </motion.h2>
          
          <motion.h3
            className="text-xl mb-12 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            事業内容
          </motion.h3>
          
          <div className="flex flex-col max-w-3xl mx-auto gap-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-full h-64 overflow-hidden rounded-lg shadow-md mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-black max-w-2xl whitespace-pre-line">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 max-w-3xl mx-auto text-black leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
            インフラの老朽化、技術者不足、自治体の財政難など、日本の地域社会はさまざまな課題を抱えています。 
            </p>
            <p className="mb-4">
            この課題を解決するには、誰もが簡単に低コストで高品質なインフラ管理を実現できる仕組みが必要です。 
            </p>
            <p>
            IRISAは、AI技術でその仕組みを実現し、安全で持続可能な地域づくりを支援します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agent Detail Section */}
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
              点検AI Agentのしくみ
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-md mb-8 bg-gray-100 p-4">
                <img 
                  src="/images/product.png" 
                  alt="点検AI Agentのシステム図" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-sm text-black text-center mt-2">点検AI Agentのシステム概念図</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-center">システムの特徴</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-black"><span className="font-medium">簡単操作</span>：専門知識がなくても、スマートフォンでの撮影と簡単な入力だけで橋梁点検が可能です。</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-black"><span className="font-medium">AIによる自動診断</span>：AIが損傷を自動検出し、健全性を評価します。一貫した評価を実現します。</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-black"><span className="font-medium">クラウド管理</span>：点検データはクラウド上で一元管理され、履歴管理も容易です。</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-black"><span className="font-medium">低コスト</span>：専門業者に依頼するよりも大幅なコスト削減が可能です。自治体の限られた予算内でより多くのインフラ点検を実施できます。</p>
                    </div>
                  </li>
                </ul>
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