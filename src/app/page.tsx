import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  Target,
  BarChart3,
  Shield,
  Building2,
  Star,
  ChevronRight,
  UserX,
  GitBranch,
  HelpCircle,
  EyeOff,
} from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "営業人材が採用できない・育たない",
    desc: "優秀な営業人材の確保に苦労し、教育コストも膨大に",
  },
  {
    icon: GitBranch,
    title: "営業プロセスが属人化している",
    desc: "トップ営業に依存し、チーム全体の底上げができない",
  },
  {
    icon: HelpCircle,
    title: "何をどう変えればいいかわからない",
    desc: "課題はわかるが、改善の打ち手・優先順位が不明確",
  },
  {
    icon: EyeOff,
    title: "営業活動の可視化ができていない",
    desc: "KPIの管理が曖昧で、改善サイクルが回らない",
  },
];

const services = [
  {
    tag: "BPOサービス",
    title: "営業代行・営業支援",
    subtitle: "プロが貴社の営業を設計・実行",
    desc: "単なる外注ではなく、営業プロセスの設計から実行まで一貫して支援。貴社の状況に合わせたカスタム営業チームを構築します。",
    features: [
      "営業プロセス設計・構築",
      "インサイドセールス運用",
      "フィールドセールス支援",
      "営業組織の立ち上げ支援",
    ],
    href: "/services/bpo",
    color: "from-sky-500 to-blue-600",
    bg: "from-sky-50 to-blue-50",
  },
  {
    tag: "SaaSプロダクト",
    title: "SalesBlade",
    subtitle: "AI営業設計ツール",
    desc: "AIが営業戦略を分析・提案。最適なターゲット選定からアプローチ方法まで、データドリブンな営業設計を実現します。",
    features: [
      "AIによる営業戦略分析",
      "ターゲット企業の自動抽出",
      "アプローチシナリオ生成",
      "営業KPIダッシュボード",
    ],
    href: "/services/salesblade",
    color: "from-indigo-500 to-violet-600",
    bg: "from-indigo-50 to-violet-50",
  },
];

const results = [
  { num: "300+", label: "支援社数", sub: "累計クライアント数" },
  { num: "2.8x", label: "平均受注率向上", sub: "支援開始3ヶ月以内" },
  { num: "60%", label: "営業コスト削減", sub: "業務効率化による" },
  { num: "95%", label: "継続率", sub: "サービス継続率" },
];

const whyValtic = [
  {
    icon: Target,
    title: "戦略から実行まで一貫対応",
    desc: "コンサルで終わらず、実際の営業活動まで責任を持って実行。「提案だけ」「作業だけ」ではなく、成果にコミットします。",
  },
  {
    icon: BarChart3,
    title: "BPO × SaaSの独自モデル",
    desc: "人的支援とAIツールを組み合わせた唯一のアプローチ。短期的な成果と長期的な組織強化を同時に実現します。",
  },
  {
    icon: Users,
    title: "営業現場を知る専門チーム",
    desc: "コンサル会社出身ではなく、営業の現場経験者が中心。実務に即した提案と実行で、机上の空論にはなりません。",
  },
  {
    icon: Shield,
    title: "透明性の高い伴走支援",
    desc: "進捗・成果・課題をリアルタイムに共有。ブラックボックスにせず、ともに考えながら改善を続けます。",
  },
];

const industries = [
  { icon: Building2, label: "IT・SaaS企業" },
  { icon: TrendingUp, label: "成長期スタートアップ" },
  { icon: Users, label: "中堅・中小企業" },
  { icon: Zap, label: "新規事業立ち上げ" },
];

const voices = [
  {
    name: "IT企業 営業部長",
    company: "従業員50名 SaaS企業",
    text: "営業チームの立ち上げから運用まで、想像以上にスピーディに対応いただきました。3ヶ月で商談数が2倍になり、受注率も大幅に改善しています。",
    stars: 5,
  },
  {
    name: "スタートアップ CEO",
    company: "シリーズA 7億調達済み",
    text: "SalesBladeを使ってターゲット選定の精度が格段に上がりました。AIの提案をもとに営業アプローチを見直した結果、受注サイクルが40%短縮されました。",
    stars: 5,
  },
  {
    name: "製造業 取締役",
    company: "従業員200名 製造業",
    text: "BtoBの新規開拓に課題を持っていましたが、VALTICさんに入ってもらって営業の型が作れました。今では自社チームだけで回せるようになっています。",
    stars: 5,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              BPO × AI で営業を再定義する
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              営業の仕組みを
              <br />
              <span className="text-gradient">設計から実行まで</span>
              <br />
              まるごと変える。
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              VALTICは、営業代行・営業支援BPOと
              <br className="hidden sm:block" />
              AI営業設計ツール「SalesBlade」を提供。
              <br />
              人とテクノロジーの力で、貴社の営業課題を根本から解決します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-lg hover:opacity-90 transition-all shadow-xl hover:-translate-y-0.5"
              >
                無料相談を予約する
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services/salesblade"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all"
              >
                SalesBladeを見る
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {results.slice(0, 3).map((r) => (
                <div key={r.label} className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gradient">{r.num}</span>
                  <span className="text-sm text-slate-400">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              こんなお悩みはありませんか？
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              多くの企業が抱える
              <br />
              <span className="text-gradient">営業の根本課題</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex gap-5 p-6 rounded-xl bg-white border border-slate-200 card-hover"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-7 rounded-xl bg-slate-900 text-white">
            <p className="font-bold text-lg mb-1">
              VALTICは、これらの課題に一気通貫で対応します
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              BPOサービスとAIツールを組み合わせ、営業の設計から実行・改善まで責任を持って支援。
              個別の対症療法ではなく、営業の仕組みごと変えます。
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              2つのサービスで
              <br />
              <span className="text-gradient">営業を総合的に強化</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              人的リソースを補う「BPOサービス」と、AIで営業を最適化する「SalesBlade」。
              両方を活用することで、最大の効果を発揮します。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl bg-gradient-to-br ${service.bg} border border-white shadow-sm card-hover overflow-hidden`}
              >
                <div className="p-8">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-semibold mb-4`}
                  >
                    {service.tag}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sky-600 font-medium text-sm mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md`}
                  >
                    詳しく見る
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              数字で見る、VALTICの実績
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              多くのクライアントに、具体的な成果をお届けしています
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r) => (
              <div
                key={r.label}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {r.num}
                </div>
                <div className="text-white font-semibold mb-1">{r.label}</div>
                <div className="text-slate-400 text-xs">{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VALTIC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Why VALTIC
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              他社と何が違うのか
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              「提案で終わり」「ツールだけ」ではない。
              VALTICは現場に入り込み、結果にコミットします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyValtic.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm card-hover"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shrink-0 self-start">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              こんな企業に選ばれています
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              <span className="text-gradient">どのような企業</span>が相談すべきか
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.label}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm card-hover text-center"
                >
                  <div className="p-3 rounded-xl bg-sky-50">
                    <Icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{ind.label}</span>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-sky-100 p-8 shadow-sm">
            <h3 className="font-bold text-slate-900 text-lg mb-4">
              特にこのような状況の企業にご相談いただいています
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "営業チームを新規で立ち上げたい",
                "既存の営業を効率化・仕組み化したい",
                "営業代行を使ったが成果が出なかった",
                "AIを活用した営業強化に興味がある",
                "海外展開・新規市場への参入を検討している",
                "営業のKPI設計からやり直したい",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Client Voices
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              お客様の声
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voices.map((v) => (
              <div
                key={v.name}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: v.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  &ldquo;{v.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{v.name}</p>
                  <p className="text-xs text-slate-400">{v.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            まずは無料相談から始めましょう
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            貴社の営業課題をヒアリングし、最適な支援プランをご提案します。
            まずは30分のオンラインでのご相談をお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-sky-600 font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
            >
              無料相談を予約する
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/salesblade"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-bold text-lg hover:bg-white/10 transition-colors"
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
