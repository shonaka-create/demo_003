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
    desc: "貴社の事業情報・過去の営業データを学習し、最適な営業戦略をAIが提案。ターゲット選定から営業メッセージまで、具体的な打ち手を自動生成します。",
    tags: ["戦略提案", "パーソナライズ"],
  },
  {
    icon: Search,
    title: "ターゲット企業自動抽出",
    desc: "業種・規模・成長性・採用状況など多角的なシグナルから、受注確率の高いターゲット企業を自動でリストアップ。営業リストの精度を劇的に向上させます。",
    tags: ["リスト作成", "シグナル検知"],
  },
  {
    icon: MessageSquare,
    title: "アプローチシナリオ生成",
    desc: "ターゲット企業の特性に合わせたアプローチシナリオをAIが自動生成。メール文面・コールスクリプト・提案資料の構成案まで、コンテンツ作成を効率化。",
    tags: ["コンテンツ生成", "個別最適化"],
  },
  {
    icon: BarChart3,
    title: "営業KPIダッシュボード",
    desc: "架電数・アポ率・商談進捗・受注率をリアルタイムで可視化。チームの状況を一目で把握し、即座に改善アクションを打てる意思決定環境を提供します。",
    tags: ["可視化", "リアルタイム"],
  },
  {
    icon: TrendingUp,
    title: "勝ちパターン分析",
    desc: "過去の受注・失注データを分析し、成功パターンを抽出。どのアプローチが効果的かを継続的に学習し、チーム全体の営業力向上につなげます。",
    tags: ["パターン学習", "継続改善"],
  },
  {
    icon: Target,
    title: "CRM連携・自動化",
    desc: "主要CRM（Salesforce、HubSpotなど）との連携により、SalesBladeのインサイトをそのまま営業活動に反映。手動入力ゼロで情報を一元管理。",
    tags: ["CRM連携", "自動化"],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "事業情報を登録",
    desc: "貴社のサービス・ターゲット・強みをインプット。AIが理解するほどに提案精度が上がります。",
  },
  {
    step: "02",
    title: "AIがターゲットを選定",
    desc: "数千万社のデータから受注可能性の高い企業を抽出。今最も狙うべき企業が一目でわかります。",
  },
  {
    step: "03",
    title: "シナリオを生成・実行",
    desc: "ターゲット別のアプローチシナリオを自動生成。すぐに使えるメール・トークスクリプトで即実行。",
  },
  {
    step: "04",
    title: "結果を学習・改善",
    desc: "アプローチ結果をフィードバック。AIが継続学習し、精度を上げながら営業力を強化し続けます。",
  },
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
    desc: "小規模チーム・個人事業主向け",
    features: [
      "AI戦略提案（月10回）",
      "ターゲット企業抽出（月200社）",
      "シナリオ生成（月50件）",
      "KPIダッシュボード（基本）",
      "メールサポート",
    ],
    highlight: false,
  },
  {
    name: "グロース",
    price: "月額 10万円",
    seats: "〜10ユーザー",
    desc: "成長中の営業チーム向け",
    features: [
      "AI戦略提案（無制限）",
      "ターゲット企業抽出（月1000社）",
      "シナリオ生成（月500件）",
      "KPIダッシュボード（フル）",
      "CRM連携（Salesforce/HubSpot）",
      "週次レポート自動生成",
      "チャット・電話サポート",
    ],
    highlight: true,
  },
  {
    name: "エンタープライズ",
    price: "要相談",
    seats: "10ユーザー〜",
    desc: "大規模・カスタム要件向け",
    features: [
      "全機能無制限",
      "独自データ学習",
      "専用AIモデル構築",
      "オンプレミス対応",
      "SLA・セキュリティ対応",
      "専任カスタマーサクセス",
    ],
    highlight: false,
  },
];

export default function SalesBlyadePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A1628 0%, #1a1040 50%, #0F2040 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-sky-400 text-sm mb-4">
            <Link href="/" className="hover:text-sky-300 transition-colors">
              ホーム
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>SalesBlade</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI営業設計ツール
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                AIが営業を
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  設計する時代へ
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                SalesBladeは、AIが営業戦略を分析・提案するSaaSツール。
                ターゲット選定から商談シナリオまで、データドリブンな営業を実現します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-all shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                  }}
                >
                  無料トライアルを始める
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  デモを見る
                  <Zap className="w-5 h-5" />
                </Link>
              </div>
              <p className="mt-4 text-slate-400 text-sm">
                14日間無料トライアル・クレジットカード不要
              </p>
            </div>

            {/* Mock UI */}
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 h-6 rounded-md bg-white/10 ml-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-500/20 border border-indigo-400/30">
                    <Brain className="w-5 h-5 text-indigo-300" />
                    <div className="flex-1">
                      <div className="text-xs text-indigo-300 font-medium">AIからの提案</div>
                      <div className="text-sm text-white">今週のトップターゲット 15社を特定しました</div>
                    </div>
                  </div>
                  {[
                    { name: "株式会社◯◯テック", score: 94, industry: "SaaS・IT" },
                    { name: "△△コンサルティング", score: 89, industry: "コンサル" },
                    { name: "◻◻ホールディングス", score: 85, industry: "製造業" },
                  ].map((company) => (
                    <div
                      key={company.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {company.score}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-white font-medium">{company.name}</div>
                        <div className="text-xs text-slate-400">{company.industry}</div>
                      </div>
                      <div className="text-xs text-green-400 font-semibold">スコア {company.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Before / After
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              SalesBlade導入で何が変わるか
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-slate-600 font-semibold text-sm border-b border-slate-100">
                    項目
                  </th>
                  <th className="py-4 px-6 text-center text-red-600 font-semibold text-sm border-b border-slate-100 bg-red-50 rounded-tl-xl">
                    導入前
                  </th>
                  <th className="py-4 px-6 text-center text-green-600 font-semibold text-sm border-b border-slate-100 bg-green-50 rounded-tr-xl">
                    SalesBlade導入後
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="py-4 px-6 text-sm font-medium text-slate-700">{item.label}</td>
                    <td className="py-4 px-6 text-center text-sm text-red-600 bg-red-50/30">
                      {item.before}
                    </td>
                    <td className="py-4 px-6 text-center text-sm text-green-700 font-semibold bg-green-50/30">
                      {item.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              主な機能
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              営業活動のすべてをAIがサポート。人が考える時間を価値ある業務に使えるようになります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm card-hover"
                >
                  <div
                    className="p-3 rounded-xl inline-block mb-4"
                    style={{
                      background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-indigo-50 text-indigo-600 text-xs font-medium"
                      >
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

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              使い方はシンプル
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              複雑な設定なし。登録後すぐにAIが動き出します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg"
                  style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}>
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              料金プラン
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              14日間無料でお試しいただけます。クレジットカード不要。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden card-hover ${
                  plan.highlight
                    ? "shadow-xl shadow-indigo-200"
                    : "border border-slate-100 bg-white shadow-sm"
                }`}
                style={
                  plan.highlight
                    ? { background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }
                    : {}
                }
              >
                {plan.highlight && (
                  <div className="bg-white/20 text-center py-2">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-1 ${plan.highlight ? "text-white/70" : "text-slate-400"}`}>
                    {plan.seats}
                  </p>
                  <p className={`text-sm mb-4 ${plan.highlight ? "text-white/70" : "text-slate-500"}`}>
                    {plan.desc}
                  </p>
                  <p className={`text-2xl font-bold mb-6 ${plan.highlight ? "text-white" : ""}`}
                    style={!plan.highlight ? { background: "linear-gradient(135deg, #7C3AED, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : {}}>
                    {plan.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.highlight ? "text-white/80" : "text-indigo-500"
                          }`}
                        />
                        <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-slate-600"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "bg-white text-indigo-600 hover:bg-slate-50"
                        : "text-white hover:opacity-90"
                    }`}
                    style={!plan.highlight ? { background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" } : {}}
                  >
                    {plan.name === "エンタープライズ" ? "お問い合わせ" : "無料で始める"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5, #2563EB)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            14日間、無料でお試しください
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            クレジットカード不要。すぐに始められます。
            AIが営業設計をどう変えるか、体験してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-600 font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
            >
              無料トライアルを始める
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-bold text-lg hover:bg-white/10 transition-colors"
            >
              デモを依頼する
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              14日間無料
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              カード不要
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              即日利用可能
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
