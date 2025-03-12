'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Company() {
  // チームメンバーのデータ
  const teamMembers = [
    {
      name: '福塚 大和',
      position: '代表取締役',
      image: '/images/fukutuka.png',
      bio: '熊本大学情報電気工学科卒。\n大学在学時より、エンジニアとして開発業務に従事\n2024年9月にIRISA株式会社を創業。'
    },
    {
      name: '古賀 泰樹',
      position: '事業開発',
      image: '/images/koga.jpg',
      bio: '熊本大学情報電気工学科卒。\n塾講師として4年間受験指導を担当。\n地方の子供の減少を目の当たりにし、\n地域課題に関心を持つ。'
    },
    {
      name: '赤木 竜成',
      position: 'エンジニア',
      image: '/images/akagi.png',
      bio: '大阪大学大学院在籍\n高専時代から開発を行い、\n佐世保高専を主席で卒業。\nIRISAではAIモデルの開発を行う。'
    },
    {
      name: '渡部 慎也',
      position: '技術顧問',
      image: '/images/watanabe.jpg',
      bio: '京都大学で博士号を取後、\n熊本大学の助教として\n橋梁の維持管理技術の研究を行う。'
    }
  ];

  // 沿革データ
  const history = [
    { year: '2024年8月', event: '株式会社IRISA設立' },
    { year: '2024年9月', event: 'EastVenturesより約1000万円の資金調達を実施' },
    { year: '2025年3月', event: '熊本大学の認定ベンチャーに登録' },
  ];

  return (
    <main className="font-serif font-feature-settings: 'palt'">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: 'url(/images/COMPANY.jpg)',
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
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 tabular-nums"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            COMPANY
          </motion.h1>
        </motion.div>
      </section>

      {/* CEO Greeting Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <motion.div 
                className="relative w-full h-96"
                initial={{ opacity: 0.8, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/images/fukutuka.png"
                  alt="代表者の写真" 
                  className="transition-transform duration-500 hover:scale-105 object-contain"
                  fill
                />
              </motion.div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                <span className="relative">
                  代表挨拶
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
                </span>
              </h2>
              <p className="text-black mb-4 leading-relaxed tabular-nums">
                株式会社IRISAは、橋梁をはじめとする社会インフラの老朽化と、それに伴う維持管理の課題解決を使命として設立されました。
              </p>
              <p className="text-black mb-4 leading-relaxed tabular-nums">
              現在、日本国内では建設後50年以上の老朽化橋梁が急増する一方、人材不足や自治体の財政難によって従来の点検手法を維持するのが難しくなっています。
              </p>
              <p className="text-black mb-4 leading-relaxed tabular-nums">
              弊社は、こうした課題に取り組むべく、スマートフォンを活用したスキャン技術とAI解析を融合した橋梁点検支援技術「点検AI Agent」を開発しております。今後はARグラスやドローンなど、先端技術の活用も視野に入れております。専門知識がなくても簡単で精度の高い点検を可能にし、低コストで高品質な点検を実現します。
              </p>
              <p className="text-black mb-4 leading-relaxed tabular-nums">
              私たちはテクノロジーで地域のインフラ課題を解決し、持続可能で安全な地域の実現に貢献してまいります。今後とも、皆様の温かいご支援とご指導を賜りますよう、心よりお願い申し上げます。
              </p>
              <p className="text-black mb-4 leading-relaxed tabular-nums">
              株式会社IRISA 代表取締役 福塚大和
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Profile Section - Moved here */}
      <section className="py-10 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">代表プロフィール</h3>
            <div className="text-left">
              <p className="text-black mb-4 leading-relaxed tabular-nums">
                <span className="font-bold">福塚 大和</span>（代表取締役）<br />
                2002年鹿児島生まれ。熊本大学情報電気工学科卒。
              </p>
              <p className="text-black mb-4 leading-relaxed tabular-nums">
              大学在学中、NFTビジネスに参画すると同時に、プログラマとしてソフトウェア開発にも取り組む。
              </p>
              <p className="text-black leading-relaxed tabular-nums">
                2024年9月にIRISA株式会社を創業。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-10 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="relative">
              MISSION VISION VALUES
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-300"></span>
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {/* Mission */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">ミッション</h3>
              <p className="text-xl font-medium mb-4">「地域インフラの未来を、AIと人の力で支える」</p>
              <p className="text-black leading-relaxed max-w-3xl mx-auto tabular-nums">
              人口減少や財政状況のひっ迫により、日本の地域インフラ維持は困難になっています。私たちIRISAは、AI技術と非専門家のマネジメントを駆使し、持続可能な社会基盤の維持に貢献します。
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">ビジョン</h3>
              <p className="text-xl font-medium mb-4">「インフラ管理の常識を変え、地域が自律的に安心・安全を維持できる社会」</p>
              <p className="text-black leading-relaxed max-w-3xl mx-auto tabular-nums">
              誰もが高精度なインフラ点検に関与できる未来を創造し、地域社会が自らの手で安全なインフラを守る時代を実現します。
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">バリュー</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-2">01. 「常識にとらわれない発想」</h4>
                  <p className="text-black text-sm tabular-nums">
                  既存の枠組みを超えて自由な発想で課題に向き合い、新しい価値を創造します。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-2">02. 「即実践」</h4>
                  <p className="text-black text-sm tabular-nums">
                  スタートアップならではのスピード感で、老朽化するインフラに対する課題解決を迅速に実現します。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-2">03. 「貢献を第一に」</h4>
                  <p className="text-black text-sm tabular-nums">
                  地域社会の課題を深く理解し、地域の未来に貢献する解決策を提供します。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-2">04. 「共創と連携」</h4>
                  <p className="text-black text-sm tabular-nums">
                  熊本大学とIRISAと自治体が共創し、新たな可能性を引き出す。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              メンバー
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-56 overflow-hidden relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    className="transition-transform duration-500 hover:scale-105 object-contain"
                    fill
                  />
                </div>
                <div className="p-6 h-64 flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-4">{member.position}</p>
                  <p className="text-black text-sm whitespace-pre-line leading-relaxed text-center tabular-nums">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
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
              沿革
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-300"></span>
            </span>
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {history.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex mb-8 relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-1/3 text-right pr-8 font-bold tabular-nums">{item.year}</div>
                <div className="w-8 flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  {idx < history.length - 1 && <div className="w-0.5 bg-gray-300 h-full mt-1"></div>}
                </div>
                <div className="w-2/3 text-left pl-4 tabular-nums">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
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
              会社概要
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
            </span>
          </motion.h2>
          
          <motion.div
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b">
                  <th className="py-4 px-6 bg-gray-50 font-medium w-1/3">会社名</th>
                  <td className="py-4 px-6">株式会社IRISA</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-6 bg-gray-50 font-medium">設立</th>
                  <td className="py-4 px-6 tabular-nums">2024年8月</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-6 bg-gray-50 font-medium">資本金</th>
                  <td className="py-4 px-6 tabular-nums">510万円</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-6 bg-gray-50 font-medium">代表者</th>
                  <td className="py-4 px-6">代表取締役 福塚大和</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-6 bg-gray-50 font-medium">所在地</th>
                  <td className="py-4 px-6">福岡県福岡市中央区天神２丁目２番１２号Ｔ＆Ｊビルディング７Ｆ</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-6 bg-gray-50 font-medium">事業内容</th>
                  <td className="py-4 px-6">
                    ・点検支援技術「点検AI Agent」の開発<br/>
                    ・小規模橋梁点検業務<br/>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-6 bg-gray-50 font-medium">主要株主</th>
                  <td className="py-4 px-6">
                    ・East Ventures<br/>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-6 bg-gray-50 font-medium">従業員数</th>
                  <td className="py-4 px-6 tabular-nums">3名＋技術顧問1名（2025年3月現在）</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* フッターセクション */}
      <footer className="py-6 bg-gray-50 text-black text-center border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-sm tabular-nums">© 2025 株式会社IRISA. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}