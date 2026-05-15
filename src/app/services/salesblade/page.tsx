import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Brain,
  BarChart3,
  Target,
  Search,
  MessageSquare,
  TrendingUp,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SalesBlade（AI営業設計ツール） | VALTIC",
  description:
    "SalesBladeはAIが営業戦略を分析・提案するSaaSツール。ターゲット選定・アプローチシナリオ生成・KPI管理を一元化。データドリブンな営業を実現します。",
};

const features = [
  {
    icon: Brain,
    title: "AI営業戦略アドバイザー",
    desc: "事業情報・営業データを学習し、最適な戦略をAIが提案。具体的な打ち手を自動生成します。",
    tags: ["戦略提案", "パーソナライズ"],
  },
  {
    icon: Search,
    title: "ターゲット企業自動抽出",
    desc: "多角的なシグナルから受注確率の高い企業を自動リストアップ。営業リストの精度を向上。",
    tags: ["リスト作成", "シグナル検知"],
  },
  {
    icon: MessageSquare,
    title: "アプローチシナリオ生成",
    desc: "ターゲット別のメール文面・トークスクリプトをAIが自動生成。即実行できます。",
    tags: ["コンテンツ生成", "個別最適化"],
  },
  {
    icon: BarChart3,
    title: "営業KPIダッシュボード",
    desc: "架電数・アポ率・受注率をリアルタイムで可視化。即座に改善アクションを打てます。",
    tags: ["可視化", "リアルタイム"],
  },
  {
    icon: TrendingUp,
    title: "勝ちパターン分析",
    desc: "受注・失注データを分析し、成功パターンを継続学習。チーム全体の営業力を向上。",
    tags: ["パターン学習", "継続改善"],
  },
  {
    icon: Target,
    title: "CRM連携・自動化",
    desc: "Salesforce・HubSpot等の主要CRMと連携。手動入力ゼロで情報を一元管理。",
    tags: ["CRM連携", "自動化"],
  },
];

const howItWorks = [
  { step: "01", title: "事業情報を登録", desc: "貴社のサービス・ターゲット・強みをインプット。AIが理解するほどに提案精度が上がります。" },
  { step: "02", title: "AIがターゲットを選定", desc: "数千万社のデータから受注可能性の高い企業を抽出。今最も狙うべき企業が一目でわかります。" },
  { step: "03", title: "シナリオを生成・実行", desc: "ターゲット別のアプローチシナリオを自動生成。すぐに使えるメール・スクリプトで即実行。" },
  { step: "04", title: "結果を学習・改善", desc: "アプローチ結果をフィードバック。AIが継続学習し、精度を上げながら営業力を強化します。" },
];

const comparisonItems = [
  { label: "ターゲットリスト作成時間", before: "週2〜3日", after: "30分" },
  { label: "アプローチ文面作成", before: "1件30分", after: "自動生成（数秒）" },
  { label: "KPI管理・レポート", before: "毎週手作業", after: "自動・リアルタイム" },
  { label: "勝ちパターンの把握", before: "属人化・不透明", after: "AIが自動分析" },
  { label: "新人の立ち上がり", before: "3〜6ヶ月", after: "最短1ヶ月" },
];

const plans = [
  {
    name: "スターター",
    price: "月額 3万円",
    seats: "〜3ユーザー",
    desc: "小規模チーム向け",
    features: ["AI戦略提案（月10回）", "ターゲット企業抽出（月200社）", "シナリオ生成（月50件）", "KPIダッシュボード（基本）", "メールサポート"],
    highlight: false,
  },
  {
    name: "グロース",
    price: "月額 10万円",
    seats: "〜10ユーザー",
    desc: "成長中の営業チーム向け",
    features: ["AI戦略提案（無制限）", "ターゲット企業抽出（月1000社）", "シナリオ生成（月500件）", "KPIダッシュボード（フル）", "CRM連携（Salesforce/HubSpot）", "週次レポート自動生成", "チャット・電話サポート"],
    highlight: true,
  },
  {
    name: "エンタープライズ",
    price: "要相談",
    seats: "10ユーザー〜",
    desc: "大規模・カスタム要件向け",
    features: ["全機能無制限", "独自データ学習", "専用AIモデル構築", "オンプレミス対応", "SLA・セキュリティ対応", "専任カスタマーサクセス"],
    highlight: false,
  },
];

export default function SalesBladePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #1a1040 55%, #0F2040 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-indigo-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-sky-400 text-sm mb-6">
            <Link href="/" className="hover:text-sky-300 transition-colors">ホーム</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/50">SalesBlade</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-7">
                <Sparkles className="w-3.5 h-3.5" />
                AI営業設計ツール
              </div>

              <h1
                className="font-extrabold text-white mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                AIが営業を<br />
                <span style={{
                  background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  設計する時代へ
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-8" style={{ lineHeight: 1.85 }}>
                SalesBladeは、AIが営業戦略を分析・提案するSaaSツール。
                ターゲット選定から商談シナリオまで、データドリブンな営業を実現します。
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition-opacity shadow-xl"
                  style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)" }}
                >
                  無料トライアルを始める
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white/90 font-semibold text-base hover:bg-white/8 transition-colors"
                >
                  デモを見る
                  <Zap className="w-4 h-4" />
                </Link>
              </div>
              <p className="mt-4 text-slate-500 text-sm">14日間無料トライアル・クレジットカード不要</p>
            </div>

            {/* Mock UI */}
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <div className="flex-1 h-5 rounded-md bg-white/8 ml-3" />
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-500/20 border border-indigo-400/20">
                    <Brain className="w-4 h-4 text-indigo-300 shrink-0" />
                    <div>
                      <div className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wide mb-0.5">AIからの提案</div>
                      <div className="text-sm text-white">今週のトップターゲット 15社を特定しました</div>
                    </div>
                  </div>
                  {[
                    { name: "株式会社◯◯テック", score: 94, industry: "SaaS・IT" },
                    { name: "△△コンサルティング", score: 89, industry: "コンサル" },
                    { name: "◻◻ホールディングス", score: 85, industry: "製造業" },
                  ].map((company) => (
                    <div key={company.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-extrabold">{company.score}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-white font-medium truncate">{company.name}</div>
                        <div className="text-xs text-slate-500">{company.industry}</div>
                      </div>
                      <div className="text-xs text-emerald-400 font-bold shrink-0">スコア {company.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow text-indigo-600 mb-4">Before / After</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              SalesBlade導入で何が変わるか
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            {/* table header */}
            <div className="grid grid-cols-[2fr_1fr_1fr]">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-100" />
              <div className="px-6 py-4 bg-red-50 border-b border-red-100/80 text-center">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">導入前</span>
              </div>
              <div className="px-6 py-4 bg-indigo-50 border-b border-indigo-100/80 text-center">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">SalesBlade導入後</span>
              </div>
            </div>
            {/* table rows */}
            {comparisonItems.map((item, i) => (
              <div
                key={item.label}
                className={`grid grid-cols-[2fr_1fr_1fr] ${i < comparisonItems.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                {/* label — neutral */}
                <div className="px-6 py-4 text-sm font-medium text-slate-600 bg-white">{item.label}</div>
                {/* before — muted red */}
                <div className="px-6 py-4 text-center text-sm text-red-400 bg-red-50/30">{item.before}</div>
                {/* after — emphasized indigo */}
                <div className="px-6 py-4 text-center text-sm font-bold text-indigo-700 bg-indigo-50/30">{item.after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow text-indigo-600 mb-4">Features</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              主な機能
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl">
              営業活動のすべてをAIがサポート。人が考える時間を価値ある業務に使えるようになります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-7 border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {feature.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow text-indigo-600 mb-4">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              使い方はシンプル
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl">
              複雑な設定なし。登録後すぐにAIが動き出します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="relative bg-slate-50 rounded-2xl p-7">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-9 -right-3 z-10">
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                )}
                <div
                  className="font-extrabold mb-5 leading-none"
                  style={{
                    fontSize: "3rem",
                    letterSpacing: "-0.04em",
                    background: "linear-gradient(135deg, #C4B5FD 0%, #93C5FD 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow text-indigo-600 mb-4">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ lineHeight: 1.2 }}>
              料金プラン
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl">14日間無料でお試しいただけます。クレジットカード不要。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden ${
                  plan.highlight
                    ? "bg-slate-900 ring-2 ring-indigo-500/40 shadow-xl shadow-indigo-900/20"
                    : "bg-white border border-slate-100 shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="text-center py-2" style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Recommended</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`font-bold text-xl mb-0.5 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-1 ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}>{plan.seats}</p>
                  <p className={`text-sm mb-5 ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>
                  <p
                    className={`text-2xl font-extrabold mb-6 ${plan.highlight ? "text-white" : "text-slate-900"}`}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {plan.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-indigo-400" : "text-indigo-500"}`} />
                        <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "text-white hover:opacity-90"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                    style={plan.highlight ? { background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" } : {}}
                  >
                    {plan.name === "エンタープライズ" ? "お問い合わせ" : "無料で始める"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
            <div>
              <p className="eyebrow text-indigo-400 mb-6">Get Started</p>
              <h2
                className="font-extrabold text-white mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                14日間、<br />無料でお試しください。
              </h2>
              <p className="text-slate-400 text-base max-w-md leading-relaxed">
                クレジットカード不要。AIが営業設計をどう変えるか、体験してください。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white font-bold mb-1.5">14日間 無料トライアル</p>
              <p className="text-slate-400 text-sm mb-6">クレジットカード不要・即日利用可能</p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}
              >
                無料トライアルを始める
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/70 font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                デモを依頼する
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
