import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "BPOサービス（営業代行・営業支援） | VALTIC",
  description:
    "VALTICのBPOサービスは、営業プロセスの設計から実行まで一貫支援。インサイドセールス・フィールドセールス・営業組織構築を専門チームが担当します。",
};

const services = [
  {
    num: "01",
    title: "インサイドセールス",
    desc: "電話・メール・SNSを活用した非対面での新規開拓。ターゲット選定から架電・アポ獲得まで一括対応。",
    features: ["リスト作成・クレンジング", "架電・メール対応", "アポイント獲得", "CRM管理・レポーティング"],
  },
  {
    num: "02",
    title: "フィールドセールス",
    desc: "商談同席・提案サポートからクロージングまで対面営業を支援。自社チームと連携した効率的な体制を構築。",
    features: ["商談同席・提案支援", "クロージングサポート", "営業トーク設計", "契約・アフターフォロー"],
  },
  {
    num: "03",
    title: "営業プロセス設計",
    desc: "現状の営業活動を診断し、最適なプロセスを再設計。属人化を解消しチーム力を底上げ。",
    features: ["現状診断・課題整理", "営業プロセスマップ作成", "KPI設計・管理体制構築", "SFAツール選定・設定"],
  },
  {
    num: "04",
    title: "営業組織構築支援",
    desc: "営業チームの立ち上げ・強化を組織面からサポート。採用戦略から育成体制まで一貫支援。",
    features: ["採用基準・JD作成", "オンボーディング設計", "教育・研修プログラム", "マネジメント体制構築"],
  },
];

const flow = [
  { step: "01", title: "ヒアリング・現状診断", desc: "現在の営業活動・課題・目標をヒアリング。現状を正確に把握した上で最適な支援内容を設計します。", duration: "1〜2週間" },
  { step: "02", title: "支援プランのご提案", desc: "ヒアリング内容をもとに、支援範囲・KPI・スケジュール・費用をご提案。ご納得いただいてから契約。", duration: "1週間" },
  { step: "03", title: "チーム編成・立ち上げ", desc: "貴社専任の営業チームを編成。ツール設定・スクリプト作成など必要な準備を徹底的に行います。", duration: "2〜4週間" },
  { step: "04", title: "営業活動スタート・PDCA", desc: "実際の営業活動を開始。週次・月次レポートで進捗を共有し、継続的な改善サイクルを回します。", duration: "継続的に" },
];

const cases = [
  {
    tag: "SaaS企業",
    title: "インサイドセールス立ち上げで受注率2.5倍を達成",
    before: "営業は全てフィールドセールスに頼っており、新規開拓が進まない状況",
    after: "インサイドセールス専門チームの立ち上げにより、月間アポ数が3倍に増加。コストも50%削減",
    period: "3ヶ月",
    resultNum: "+150%",
    resultLabel: "月間受注数",
  },
  {
    tag: "製造業",
    title: "営業プロセス設計で新規開拓を仕組み化",
    before: "個人の経験・勘に頼った営業で、担当者が変わると成果が落ちる",
    after: "営業プロセスを可視化・標準化。新入社員でも3ヶ月で即戦力化できる体制を構築",
    period: "6ヶ月",
    resultNum: "+80%",
    resultLabel: "営業生産性",
  },
];

const pricing = [
  {
    name: "スタートプラン",
    price: "月額 30万円〜",
    desc: "小規模チームでの営業活動支援に",
    features: ["専任担当者1名", "インサイドセールス（週3日）", "月次レポーティング", "CRM設定・管理"],
    highlight: false,
  },
  {
    name: "スタンダードプラン",
    price: "月額 60万円〜",
    desc: "本格的な営業体制構築に",
    features: ["専任チーム（2〜3名体制）", "インサイドセールス（フルタイム）", "営業プロセス設計込み", "週次ミーティング・レポート", "SFAツール設定支援"],
    highlight: true,
  },
  {
    name: "カスタムプラン",
    price: "要相談",
    desc: "複雑な要件・大規模支援に",
    features: ["大規模チーム編成", "複数サービス組み合わせ", "営業組織構築から一貫支援", "経営層へのレポーティング", "SalesBlade連携オプション"],
    highlight: false,
  },
];

export default function BPOPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/96 via-slate-950/80 to-slate-900/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sky-400 text-sm mb-6">
            <Link href="/" className="hover:text-sky-300 transition-colors">ホーム</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/50">BPOサービス</span>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-6">
            BPOサービス
          </div>

          <h1
            className="font-extrabold text-white mb-6 max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            営業代行・営業支援で<br />
            <span className="text-gradient">貴社の営業力を最大化</span>
          </h1>

          <p className="text-lg text-slate-300 mb-10 max-w-xl" style={{ lineHeight: 1.85 }}>
            単なる外注ではなく、営業プロセスの設計から実行まで一貫して支援。
            専任チームが貴社のビジネスに深く入り込み、成果にコミットします。
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-sky-900/40"
          >
            無料相談を予約する
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-10">
            {[
              { num: "300+", label: "支援実績" },
              { num: "95%", label: "継続率" },
              { num: "2.8x", label: "平均受注率向上" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white" style={{ letterSpacing: "-0.03em" }}>{s.num}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow text-sky-600 mb-4">Service Menu</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              サービスメニュー
            </h2>
          </div>

          {/* editorial index list */}
          <div className="border-t border-slate-200">
            {services.map((s) => (
              <div
                key={s.num}
                className="grid grid-cols-1 md:grid-cols-[72px_1fr_1fr] gap-x-10 gap-y-4 py-9 border-b border-slate-100 items-start group"
              >
                <div
                  className="font-extrabold text-slate-100 leading-none group-hover:text-sky-100 transition-colors"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.04em" }}
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-0.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOW ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow text-sky-600 mb-4">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              支援の進め方
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flow.map((step, i) => (
              <div key={step.step} className="relative bg-white rounded-2xl p-7 border border-slate-100">
                {i < flow.length - 1 && (
                  <div className="hidden lg:block absolute top-9 -right-3 z-10">
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                )}
                <div
                  className="font-extrabold text-sky-100 mb-5 leading-none"
                  style={{ fontSize: "3rem", letterSpacing: "-0.04em" }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{step.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-sky-600 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow text-sky-600 mb-4">Case Studies</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              支援事例
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cases.map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">

                {/* ① HEADER — dark bg, title + result number (最重要要素) */}
                <div className="bg-slate-950 px-8 py-7">
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <span className="inline-block px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 text-[10px] font-bold tracking-widest uppercase mb-4">
                        {c.tag}
                      </span>
                      <h3 className="font-bold text-white text-base leading-snug">{c.title}</h3>
                    </div>
                    {/* 成果数字 = 最も目立つ要素 */}
                    <div className="shrink-0 text-right">
                      <div
                        className="font-extrabold leading-none"
                        style={{
                          fontSize: "2.5rem",
                          letterSpacing: "-0.04em",
                          background: "linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {c.resultNum}
                      </div>
                      <div className="text-slate-500 text-xs mt-1">{c.resultLabel}</div>
                    </div>
                  </div>
                </div>

                {/* ② BODY — 2ゾーン: 課題（ミュート）| 解決・成果（強調） */}
                <div className="grid grid-cols-2 divide-x divide-slate-100">
                  {/* 課題 — 背景グレー・テキスト淡い → 重要度低 */}
                  <div className="px-6 py-5 bg-slate-50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">課題</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{c.before}</p>
                  </div>
                  {/* 解決・成果 — 白背景・テキスト濃い・bold → 重要度高 */}
                  <div className="px-6 py-5 bg-white">
                    <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-2">解決・成果</p>
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed">{c.after}</p>
                  </div>
                </div>

                {/* ③ FOOTER — 補足情報（最小化） */}
                <div className="px-8 py-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  支援期間 {c.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow text-sky-600 mb-4">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              料金プラン
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl">
              貴社の規模や目標に合わせて最適なプランをご選択ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden ${
                  plan.highlight
                    ? "bg-slate-900 ring-2 ring-sky-500/40 shadow-xl shadow-slate-900/20"
                    : "bg-white border border-slate-100 shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-center py-2">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Most Popular</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-5 ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.desc}
                  </p>
                  <p
                    className={`text-2xl font-extrabold mb-6 ${plan.highlight ? "text-white" : "text-slate-900"}`}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {plan.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-sky-400" : "text-sky-500"}`} />
                        <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:opacity-90"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    相談する
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-8">
            ※ 表示価格は税別・目安です。詳細はヒアリング後にご提案します。
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-center">
            <div>
              <p className="eyebrow text-sky-400 mb-6">Contact</p>
              <h2
                className="font-extrabold text-white mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                営業課題を、<br />ご相談ください。
              </h2>
              <p className="text-slate-400 text-base max-w-md leading-relaxed">
                まずはヒアリングから。貴社の状況を深く理解した上で、最適なプランをご提案します。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white font-bold mb-1.5">30分のオンライン相談</p>
              <p className="text-slate-400 text-sm mb-6">課題を共有するだけで大丈夫です</p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                無料相談を予約する
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
