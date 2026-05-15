import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const results = [
  { num: "300+", label: "支援実績", sub: "累計クライアント数" },
  { num: "2.8x", label: "受注率向上", sub: "3ヶ月以内" },
  { num: "60%", label: "コスト削減", sub: "業務効率化による" },
  { num: "95%", label: "継続率", sub: "サービス継続率" },
];

const problems = [
  "営業人材が採用できない・育たない",
  "プロセスが属人化し、再現できない",
  "何から手をつければいいかわからない",
  "営業活動がブラックボックス化している",
];

const pillars = [
  {
    num: "01",
    title: "戦略から実行まで一貫対応",
    desc: "コンサルで終わらず、実際の営業活動まで責任をもって実行します。",
  },
  {
    num: "02",
    title: "BPO × SaaSの独自モデル",
    desc: "人的支援とAIツールを組み合わせた唯一のアプローチ。",
  },
  {
    num: "03",
    title: "営業現場を知る専門チーム",
    desc: "現場経験者が中心。実務に即した提案で机上の空論にしません。",
  },
  {
    num: "04",
    title: "透明性の高い伴走支援",
    desc: "進捗・成果・課題をリアルタイムに共有し、ともに改善します。",
  },
];

const voices = [
  {
    name: "営業部長",
    company: "SaaS企業・従業員50名",
    text: "3ヶ月で商談数が2倍になり、受注率も大幅に改善しました。チーム立ち上げから運用まで、スピーディに対応いただきました。",
  },
  {
    name: "代表取締役CEO",
    company: "スタートアップ・シリーズA",
    text: "SalesBladeでターゲット選定の精度が格段に上がり、受注サイクルが40%短縮されました。",
  },
  {
    name: "取締役",
    company: "製造業・従業員200名",
    text: "営業の型が作れ、今では自社チームだけで回せるようになっています。数字だけでなく、組織が変わりました。",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* gradient: dense on left (text), fades right to let photo show */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/96 via-slate-950/80 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-28 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 text-sky-300 text-xs font-semibold tracking-widest uppercase mb-8">
              BPO × AI — 営業を再設計する
            </div>

            <h1
              className="font-extrabold text-white mb-7"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 1.07, letterSpacing: "-0.025em" }}
            >
              営業の仕組みを、<br />
              <span className="text-gradient">根本から変える。</span>
            </h1>

            <p className="text-lg text-slate-300 mb-10 max-w-lg" style={{ lineHeight: 1.85 }}>
              営業代行BPOと、AI営業設計ツール「SalesBlade」。<br />
              人とテクノロジーの力で、営業課題を根本から解決します。
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-sky-900/40"
              >
                無料相談を予約する
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/salesblade"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white/90 font-semibold text-base hover:bg-white/8 transition-colors"
              >
                SalesBladeを見る
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* bottom stats */}
          <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-3 gap-0 max-w-lg">
            {results.slice(0, 3).map((r, i) => (
              <div key={r.label} className={i !== 0 ? "border-l border-white/10 pl-6" : ""}>
                <div
                  className="font-extrabold text-white mb-0.5"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                >
                  {r.num}
                </div>
                <div className="text-xs text-slate-400">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ ISSUES ━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-sky-600 mb-4">Issues</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              多くの企業が抱えている課題
            </h2>
          </div>

          <div className="border-t border-slate-200">
            {problems.map((p, i) => (
              <div key={p} className="flex items-center gap-8 py-6 border-b border-slate-100">
                <span className="text-[10px] font-bold text-slate-300 tracking-widest w-6 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-slate-900 text-base sm:text-lg">{p}</h3>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-900 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white font-bold">VALTICは、これらを一気通貫で解決します</p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors"
            >
              相談する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ SERVICES ━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <p className="eyebrow text-sky-600 mb-4">Services</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
            2つのサービスで<br />営業力を底上げする
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* BPO — photo card */}
            <div className="relative rounded-2xl overflow-hidden group" style={{ minHeight: 480 }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="営業支援チーム"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-900/15" />
              <div className="relative p-10 h-full flex flex-col justify-between" style={{ minHeight: 480 }}>
                <span className="inline-block self-start px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 text-xs font-bold tracking-widest uppercase">
                  BPOサービス
                </span>
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-4" style={{ lineHeight: 1.2 }}>
                    営業代行・<br />営業支援
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
                    営業プロセスの設計から実行まで一貫支援。専任チームが貴社の成果にコミットします。
                  </p>
                  <ul className="space-y-2 mb-8">
                    {["営業プロセス設計・構築", "インサイドセールス運用", "フィールドセールス支援", "営業組織の立ち上げ支援"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-200">
                        <span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services/bpo"
                    className="inline-flex items-center gap-2 text-sky-400 font-semibold text-sm hover:text-sky-300 transition-colors group/link"
                  >
                    詳しく見る
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SalesBlade — photo card */}
            <div className="relative rounded-2xl overflow-hidden group" style={{ minHeight: 480 }}>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                alt="SalesBlade AIダッシュボード"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/96 via-indigo-950/65 to-slate-900/15" />
              <div className="relative p-10 h-full flex flex-col justify-between" style={{ minHeight: 480 }}>
                <span className="inline-block self-start px-2.5 py-1 rounded-md bg-indigo-400/20 text-indigo-200 text-xs font-bold tracking-widest uppercase">
                  SaaSプロダクト
                </span>
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-2" style={{ lineHeight: 1.2 }}>
                    SalesBlade
                  </h3>
                  <p className="text-indigo-300 text-sm font-semibold mb-4">AI営業設計ツール</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
                    AIが営業戦略を分析・提案。ターゲット選定からアプローチシナリオまで、データドリブンな営業を実現します。
                  </p>
                  <ul className="space-y-2 mb-8">
                    {["AIによる営業戦略分析", "ターゲット企業の自動抽出", "アプローチシナリオ生成", "営業KPIダッシュボード"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-200">
                        <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services/salesblade"
                    className="inline-flex items-center gap-2 text-indigo-300 font-semibold text-sm hover:text-indigo-200 transition-colors group/link"
                  >
                    詳しく見る
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ RESULTS ━━━━━━━━━━━━━━━━ */}
      <section className="py-28" style={{ background: "#0A1628" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow text-sky-400 mb-14">Results</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {results.map((r, i) => (
              <div key={r.label} className={`px-6 lg:px-10 first:pl-0 ${i === results.length - 1 ? "pr-0" : ""}`}>
                <div
                  className="font-extrabold text-white mb-3"
                  style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1, letterSpacing: "-0.04em" }}
                >
                  {r.num}
                </div>
                <div className="text-sky-400 text-sm font-semibold mb-1">{r.label}</div>
                <div className="text-slate-500 text-xs">{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ WHY VALTIC ━━━━━━━━━━━━━━━━ */}
      {/* 4-pillar horizontal layout — structurally unlike Issues */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
          <p className="eyebrow text-sky-600 mb-4">Why VALTIC</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
            他社と何が違うのか
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={p.num}
                className={`py-8 lg:py-0 ${i !== 0 ? "border-t sm:border-t-0 sm:border-l lg:border-l border-slate-200 sm:pl-8 lg:pl-10" : ""}`}
              >
                <div
                  className="font-extrabold text-slate-100 mb-6 leading-none tabular-nums"
                  style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", letterSpacing: "-0.04em" }}
                >
                  {p.num}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base leading-snug">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ VOICES ━━━━━━━━━━━━━━━━ */}
      <section className="py-28" style={{ background: "#0F172A" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="eyebrow text-sky-400 mb-4">Client Voices</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ lineHeight: 1.2 }}>
              お客様の声
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voices.map((v) => (
              <div key={v.name} className="rounded-xl bg-white/5 border border-white/8 p-8 flex flex-col">
                <div
                  className="text-sky-500/30 font-serif leading-none mb-4 select-none"
                  style={{ fontSize: "4rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">{v.text}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-sm">{v.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{v.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ CTA ━━━━━━━━━━━━━━━━ */}
      <section className="py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
            <div>
              <p className="eyebrow text-sky-400 mb-6">Contact</p>
              <h2
                className="font-extrabold text-white mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                営業課題を、<br />ご相談ください。
              </h2>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                貴社の営業課題をヒアリングし、最適な支援プランをご提案します。
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
              <Link
                href="/services/salesblade"
                className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/70 font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                SalesBladeを見る
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
