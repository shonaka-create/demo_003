"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  Mail,
  Clock,
  Shield,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const inquiryTypes = [
  "BPOサービスについて",
  "SalesBladeについて",
  "両サービスの比較・相談",
  "料金・見積もり依頼",
  "デモ・トライアル申込み",
  "その他",
];

const companySizes = [
  "1〜10名",
  "11〜50名",
  "51〜100名",
  "101〜300名",
  "301名以上",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    size: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            お問い合わせを受け付けました
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            ご連絡いただきありがとうございます。
            <br />
            担当者より1〜2営業日以内にご連絡いたします。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            トップページに戻る
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-sky-400 text-sm mb-4">
            <Link href="/" className="hover:text-sky-300 transition-colors">ホーム</Link>
            <ChevronRight className="w-4 h-4" />
            <span>お問い合わせ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            営業課題のご相談、サービスへのご質問など、
            お気軽にご連絡ください。
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h2 className="font-bold text-slate-900 text-lg mb-4">ご相談の流れ</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "フォーム送信", desc: "必要事項をご入力ください" },
                    { step: "2", title: "担当者からご連絡", desc: "1〜2営業日以内にご連絡" },
                    { step: "3", title: "オンライン相談（30分）", desc: "現状・課題をヒアリング" },
                    { step: "4", title: "提案・お見積り", desc: "最適なプランをご提案" },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{s.step}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                        <p className="text-xs text-slate-500">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-50">
                    <Clock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">返信まで</p>
                    <p className="text-xs text-slate-500">1〜2営業日以内</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-50">
                    <Mail className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">メール</p>
                    <p className="text-xs text-sky-600">info@valtic.co.jp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-50">
                    <Shield className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">個人情報</p>
                    <p className="text-xs text-slate-500">厳重に管理・第三者提供なし</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8"
              >
                <h2 className="font-bold text-slate-900 text-xl mb-6">お問い合わせフォーム</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="株式会社◯◯"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03-0000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      従業員数
                    </label>
                    <select
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all bg-white"
                    >
                      <option value="">選択してください</option>
                      {companySizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="type"
                      required
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all bg-white"
                    >
                      <option value="">選択してください</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="現在の営業課題や相談したい内容をご記入ください。"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <div className="mt-5 p-4 rounded-xl bg-slate-50 text-xs text-slate-500">
                  ご入力いただいた個人情報は、お問い合わせへの回答・資料送付等の目的のみに使用し、
                  第三者への提供は行いません。
                  <Link href="#" className="text-sky-600 hover:underline ml-1">
                    プライバシーポリシー
                  </Link>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg hover:shadow-sky-200"
                >
                  送信する
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    相談無料
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    強引な営業なし
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    専任担当が対応
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
