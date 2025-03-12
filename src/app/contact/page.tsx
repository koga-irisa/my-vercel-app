'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

// フォームデータの型を定義
interface FormData {
  inquiryType: string;
  companyName: string;
  name: string;
  email: string;
  title: string;
  message: string;
  agreement: boolean;
  [key: string]: string | boolean; // インデックスシグネチャを追加
}

export default function Contact() {
  // フォームの状態管理
  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    companyName: '',
    name: '',
    email: '',
    title: '',
    message: '',
    agreement: false
  });

  // 送信状態の管理
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // フォーム入力の変更を処理
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Googleフォームへの送信処理
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // バリデーション
    if (!formData.inquiryType || !formData.companyName || !formData.name || !formData.email || !formData.title || !formData.message || !formData.agreement) {
      alert('必須項目をすべて入力し、確認チェックボックスにチェックを入れてください。');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Googleフォーム送信用のフォームを作成
      const form = document.createElement('form');
      form.method = 'POST';
      
      // ここに実際のGoogleフォームのIDを設定
      const formId = "1FAIpQLSc5cJG1rLI6gTynN2whQtQUULS0PiKH7Vs8cm0pj_5KxEX5dA";
      
      // formResponseエンドポイントを使用（実際のフォーム送信用）
      form.action = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
      
      // 非表示でフォームを送信
      form.target = 'hidden-iframe';
      form.style.display = 'none';
      
      // 非表示のiframeを作成（CORSエラー回避のため）
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // URLから取得した実際のエントリーIDを設定
      const fieldMappings = [
        { field: 'inquiryType', entryId: 'entry.2060556015' },  // お問い合わせ事項
        { field: 'companyName', entryId: 'entry.2133520897' },  // 会社名
        { field: 'name', entryId: 'entry.1982456450' },         // 氏名
        { field: 'email', entryId: 'entry.1973389701' },        // メールアドレス
        { field: 'title', entryId: 'entry.1195912825' },        // タイトル
        { field: 'message', entryId: 'entry.1526232466' }       // メッセージ本文
      ];
      
      // フォームフィールドを追加
      fieldMappings.forEach(mapping => {
        const value = formData[mapping.field];
        if (typeof value === 'string' && value) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = mapping.entryId;
          input.value = value;
          form.appendChild(input);
        }
      });
      
      // フォームをドキュメントに追加
      document.body.appendChild(form);
      
      // フォーム送信
      form.submit();
      
      // 成功メッセージ表示までの遅延（フォーム送信を確実にするため）
      setTimeout(() => {
        // フォームとiframeをドキュメントから削除
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        
        // 送信成功表示
        setIsSubmitted(true);
        
        // フォームリセット
        setFormData({
          inquiryType: '',
          companyName: '',
          name: '',
          email: '',
          title: '',
          message: '',
          agreement: false
        });
        
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('送信エラー:', error);
      setErrorMessage('申し訳ありませんが、送信中にエラーが発生しました。後ほど再度お試しいただくか、お電話でのお問い合わせをお願いいたします。');
      setIsSubmitting(false);
    }
  };

  // 新しいフォームを作成（送信後のリセット用）
  const handleNewForm = () => {
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <main className="font-serif">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
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
            CONTACT
          </motion.h1>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-center text-black mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              当社の事業、理念、その他ご不明点などがございましたら、<br />
              お気軽に下記フォームよりお問い合わせ下さい。<br />
              平日及び土曜日でしたら、1営業日中に返信いたします。
            </motion.p>

            {isSubmitted ? (
              <motion.div
                className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg 
                  className="w-16 h-16 text-green-500 mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-4">お問い合わせありがとうございます</h3>
                <p className="mb-6">
                  お問い合わせ内容を受け付けました。<br />
                  内容を確認次第、担当者よりご連絡させていただきます。
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNewForm}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
                >
                  新しいお問い合わせをする
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                className="space-y-8 bg-white rounded-lg shadow-sm p-8 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
              >
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <label className="w-full md:w-48 font-medium text-black flex items-center">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 inline-block">必須</span>
                    お問い合わせ事項
                  </label>
                  <select 
                    className="flex-1 border border-gray-300 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">ー以下から選択してくださいー</option>
                    <option value="事業内容について">事業内容について</option>
                    <option value="採用について">採用について</option>
                    <option value="取材・講演依頼">取材・講演依頼</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <label className="w-full md:w-48 font-medium text-black flex items-center">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 inline-block">必須</span>
                    会社名
                  </label>
                  <input 
                    type="text" 
                    className="flex-1 border border-gray-300 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <label className="w-full md:w-48 font-medium text-black flex items-center">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 inline-block">必須</span>
                    氏名
                  </label>
                  <input 
                    type="text" 
                    className="flex-1 border border-gray-300 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <label className="w-full md:w-48 font-medium text-black flex items-center">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 inline-block">必須</span>
                    メールアドレス
                  </label>
                  <input 
                    type="email" 
                    className="flex-1 border border-gray-300 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <label className="w-full md:w-48 font-medium text-black flex items-center">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 inline-block">必須</span>
                    タイトル
                  </label>
                  <input 
                    type="text" 
                    className="flex-1 border border-gray-300 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <label className="w-full md:w-48 font-medium text-black flex items-center pt-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 inline-block">必須</span>
                    メッセージ本文
                  </label>
                  <textarea 
                    className="flex-1 border border-gray-300 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-40"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <label className="inline-flex items-center text-sm text-black">
                    <input 
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    /> 
                    スパムメール防止のため、こちらのボックスにチェックを入れてから送信してください。
                  </label>
                </div>

                <div className="text-center pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-12 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        送信中...
                      </span>
                    ) : '上記の内容で送信する'}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50"></div>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">会社所在地</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="w-full">
                <h3 className="font-bold text-lg mb-4">株式会社IRISA</h3>
                <p className="text-black mb-3 font-mono">〒860-0802</p>
                <p className="text-black mb-3">熊本県熊本市中央区中央街<span className="font-mono">4-22</span>アルバ 銀座通りビル<span className="font-mono">605</span></p>
                <p className="text-black mb-3"><span className="inline-block w-12">TEL:</span><span className="font-mono">080-2332-0382</span></p>
                <p className="text-black mb-6"><span className="inline-block w-24">営業時間:</span><span className="font-mono">平日 9:00〜18:00</span></p>
                <p className="text-sm text-black">※お電話でのお問い合わせも受け付けております。</p>
              </div>
            </div>
          </motion.div>
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