import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  Target,
  BarChart3,
  Shield,
  Building2,
} from "lucide-react";

const problems = [
  {
    title: "営業人材が採用できない・育たない",
    desc: "優秀な営業人材の確保に苦労し、入社後の育成コストも膨大。チームが機能するまでに時間がかかりすぎる。",
  },
  {
    title: "プロセスが属人化し、再現できない",
    desc: "トップ営業の成功体験がチームに伝わらない。担当者が変わるたびに成果がリセットされる。",
  },
  {
    title: "何から手をつければいいかわからない",
    desc: "課題の所在はわかっているが、優先順位と具体的な打ち手が見えない。コンサルに頼んでも提案止まり。",
  },
  {
    title: "営業活動がブラックボックス化している",
    desc: "KPIの管理が曖昧で、どこに問題があるか特定できない。PDCAが回らず、改善が進まない。",
  },
];

const results = [
  { num: "300+", label: "支援実績", sub: "累計クライアント数" },
  { num: "2.8x", label: "受注率向上", sub: "支援開始3ヶ月以内" },
  { num: "60%", label: "営業コスト削減", sub: "業務効率化による" },
  { num: "95%", label: "継続率", sub: "サービス継続率" },
];

const whyValtic = [
  {
    icon: Target,
    title: "戦略から実行まで一貫対応",
    desc: "コンサルで終わらず、実際の営業活動まで責任を持って実行します。「提案だけ」「ツール導入だけ」ではなく、成果にコミットします。",
  },
  {
    icon: BarChart3,
    title: "BPO × SaaSの独自モデル",
    desc: "人的支援とAIツールを組み合わせた唯一のアプローチ。短期的な成果と長期的な組織強化を同時に実現します。",
  },
  {
    icon: Users,
    title: "営業現場を知る専門チーム",
    desc: "コンサル会社出身ではなく、営業の現場経験者が中心。実務に即した提案で、机上の空論にはなりません。",
  },
  {
    icon: Shield,
    title: "透明性の高い伴走支援",
    desc: "進捗・成果・課題をリアルタイムに共有。ブラックボックスにせず、ともに考えながら改善を続けます。",
  },
];

const voices = [
  {
    name: "営業部長",
    company: "SaaS企業・従業員50名",
    text: "3ヶ月で商談数が2倍になり、受注率も大幅に改善しました。チームの立ち上げから運用まで、想像以上にスピーディに対応いただきました。",
  },
  {
    name: "代表取締役CEO",
    company: "スタートアップ・シリーズA",
    text: "SalesBladeでターゲット選定の精度が格段に上がりました。AIの提案をもとに営業アプローチを見直した結果、受注サイクルが40%短縮されました。",
  },
  {
    name: "取締役",
    company: "製造業・従業員200名",
    text: "VALTICに入ってもらって営業の型が作れました。今では自社チームだけで回せるようになっています。数字だけでなく、組織が変わりました。",
  },
];

const usecases = [
  { icon: Building2, label: "IT・SaaS企業" },
  { icon: TrendingUp, label: "成長期スタートアップ" },
  { icon: Users, label: "中堅・中小企業" },
  { icon: Zap, label: "新規事業立ち上げ" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        {/* ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-28 relative w-full">
          <div className="max-w-3xl">
            {/* eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-sky-300 text-xs font-semibold tracking-widest uppercase mb-8">
              <Zap className="w-3.5 h-3.5" />
              BPO × AI — 営業を再設計する
            </div>

            {/* H1 — primary focal element */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-7" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              営業の仕組みを、<br />
              <span className="text-gradient">根本から変える。</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl" style={{ lineHeight: 1.85 }}>
              営業代行・営業支援BPOと、AI営業設計ツール「SalesBlade」。
              人とテクノロジーの力で、貴社の営業課題を解決します。
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

          {/* hero stats — bottom anchor */}
          <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-3 gap-0 max-w-lg">
            {results.slice(0, 3).map((r, i) => (
              <div key={r.label} className={`${i !== 0 ? "border-l border-white/10 pl-6" : ""}`}>
                <div className="text-4xl font-extrabold text-white mb-0.5" style={{ letterSpacing: "-0.03em" }}>
                  {r.num}
                </div>
                <div className="text-xs text-slate-400">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ PROBLEM ━━━━━━━━━━━━━━━━ */}
      {/* インデックス表スタイル — 番号バッジ + 3カラム */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow text-sky-600 mb-3">Issues</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
                多くの企業が抱えている課題
              </h2>
            </div>
          </div>

          {/* 3カラム インデックス表 */}
          <div className="border-t border-slate-200">
            {problems.map((p, i) => (
              <div
                key={p.title}
                className="grid grid-cols-[36px_1fr] lg:grid-cols-[36px_2fr_3fr] gap-x-6 gap-y-1 py-5 border-b border-slate-100 items-start"
              >
                {/* 番号バッジ */}
                <span className="w-7 h-7 rounded bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {/* タイトル */}
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base">{p.title}</h3>
                {/* 説明 — デスクトップのみ右カラム */}
                <p className="col-start-2 lg:col-start-3 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* solution bridge */}
          <div className="mt-8 bg-slate-900 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold mb-0.5">VALTICは、これらを一気通貫で解決します</p>
              <p className="text-slate-400 text-sm">BPOとAIで設計から実行まで。営業の仕組みごと変えます。</p>
            </div>
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
      {/* 明暗対比カード — BPO:濃紺 / SalesBlade:白 */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <p className="eyebrow text-sky-600 mb-4">Services</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
            2つのサービスで<br />営業力を底上げする
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* BPO — DARK card */}
            <div className="rounded-2xl bg-slate-900 p-10 flex flex-col justify-between min-h-[480px]">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-400 text-xs font-bold tracking-widest uppercase mb-6">
                  BPOサービス
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ lineHeight: 1.2 }}>
                  営業代行・<br />営業支援
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                  単なる外注ではなく、営業プロセスの設計から実行まで一貫支援。専任チームが貴社に入り込み、成果にコミットします。
                </p>
                <ul className="space-y-2 mb-8">
                  {["営業プロセス設計・構築", "インサイドセールス運用", "フィールドセールス支援", "営業組織の立ち上げ支援"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/services/bpo"
                className="inline-flex items-center gap-2 text-sky-400 font-semibold text-sm hover:text-sky-300 transition-colors group"
              >
                詳しく見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* SalesBlade — LIGHT card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-10 flex flex-col justify-between min-h-[480px]">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6">
                  SaaSプロダクト
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4" style={{ lineHeight: 1.2 }}>
                  SalesBlade
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-2 font-semibold text-indigo-600">AI営業設計ツール</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                  AIが営業戦略を分析・提案。ターゲット選定からアプローチシナリオまで、データドリブンな営業を実現します。
                </p>
                <ul className="space-y-2 mb-8">
                  {["AIによる営業戦略分析", "ターゲット企業の自動抽出", "アプローチシナリオ生成", "営業KPIダッシュボード"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/services/salesblade"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-indigo-500 transition-colors group"
              >
                詳しく見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ RESULTS ━━━━━━━━━━━━━━━━ */}
      {/* 超大スケール数字 — スクロール中の最大インパクトゾーン */}
      <section className="py-28 bg-navy" style={{ background: "#0A1628" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow text-sky-400 mb-14">Results</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {results.map((r, i) => (
              <div key={r.label} className={`px-6 lg:px-10 first:pl-0 ${i === results.length - 1 ? "pr-0" : ""}`}>
                {/* 数字を主焦点に */}
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
      {/* 2×2 アイコンカードグリッド — Issuesと完全に異なる構造 */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow text-sky-600 mb-3">Why VALTIC</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
                他社と何が違うのか
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xs sm:text-right">
              「提案だけ」「ツールだけ」ではなく、<br />成果にコミットします。
            </p>
          </div>

          {/* 2×2 カードグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyValtic.map((item, i) => {
              const Icon = item.icon;
              const iconColors = [
                "from-sky-500 to-blue-600",
                "from-indigo-500 to-violet-600",
                "from-teal-500 to-cyan-600",
                "from-slate-600 to-slate-800",
              ];
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-slate-100 flex gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${iconColors[i]} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 mb-1.5 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ USE CASES ━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="eyebrow text-sky-600 mb-4">Who We Help</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4" style={{ lineHeight: 1.2 }}>
                こんな企業に<br />選ばれています
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                業種・規模を問わず、「営業を仕組み化したい」企業を中心に支援しています。
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {usecases.map((u) => {
                  const Icon = u.icon;
                  return (
                    <div key={u.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <Icon className="w-5 h-5 text-slate-500" />
                      <span className="text-xs font-semibold text-slate-700">{u.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "営業チームを新規で立ち上げたい",
                  "既存の営業を効率化・仕組み化したい",
                  "営業代行を使ったが成果が出なかった",
                  "AIを活用した営業強化に興味がある",
                  "新規市場・海外展開を検討している",
                  "営業KPIの設計からやり直したい",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2.5 text-sm text-slate-600 py-2.5 border-b border-slate-100 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ VOICES ━━━━━━━━━━━━━━━━ */}
      {/* ダーク背景 — ページ後半の視覚的アクセント */}
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
                {/* 大きな引用符が視線のアンカーになる */}
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
      <section className="py-28 gradient-cta">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5" style={{ lineHeight: 1.15 }}>
            まずは、話してみてください。
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            貴社の営業課題をヒアリングし、最適な支援プランをご提案します。
            30分のオンライン相談からお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base hover:bg-slate-50 transition-colors shadow-xl shadow-black/20"
            >
              無料相談を予約する
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/salesblade"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
            >
              SalesBladeを見る
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
