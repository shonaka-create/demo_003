import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Users,
  Settings,
  BarChart3,
  Target,
  Clock,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BPOサービス（営業代行・営業支援） | VALTIC",
  description:
    "VALTICのBPOサービスは、営業プロセスの設計から実行まで一貫支援。インサイドセールス・フィールドセールス・営業組織構築を専門チームが担当します。",
};

const services = [
  {
    icon: Phone,
    title: "インサイドセールス",
    desc: "電話・メール・SNSを活用した非対面での新規開拓。ターゲット選定から架電・メール送信・アポ獲得まで一括対応。",
    features: ["リスト作成・クレンジング", "架電・メール対応", "アポイント獲得", "CRM管理・レポーティング"],
  },
  {
    icon: Users,
    title: "フィールドセールス",
    desc: "商談同席・提案サポートから、クロージングまで対面営業を支援。自社営業チームと連携した効率的な体制を構築。",
    features: ["商談同席・提案支援", "クロージングサポート", "営業トーク設計", "契約・アフターフォロー"],
  },
  {
    icon: Settings,
    title: "営業プロセス設計",
    desc: "現状の営業活動を診断し、最適なプロセスを再設計。営業の「型」を作ることで、属人化を解消しチーム力を底上げ。",
    features: ["現状診断・課題整理", "営業プロセスマップ作成", "KPI設計・管理体制構築", "SFAツール選定・設定"],
  },
  {
    icon: Target,
    title: "営業組織構築支援",
    desc: "営業チームの立ち上げ・強化を組織面からサポート。採用戦略から育成体制まで、長期的な組織強化を実現。",
    features: ["採用基準・JD作成", "オンボーディング設計", "教育・研修プログラム", "マネジメント体制構築"],
  },
];

const flow = [
  {
    step: "01",
    title: "ヒアリング・現状診断",
    desc: "現在の営業活動・課題・目標を詳しくヒアリング。現状を正確に把握した上で最適な支援内容を設計します。",
    duration: "1〜2週間",
  },
  {
    step: "02",
    title: "支援プランのご提案",
    desc: "ヒアリング内容をもとに、具体的な支援範囲・KPI・スケジュール・費用をご提案。ご納得いただいてから契約。",
    duration: "1週間",
  },
  {
    step: "03",
    title: "チーム編成・立ち上げ",
    desc: "貴社専任の営業チームを編成。ツール設定・トークスクリプト作成など、必要な準備を徹底的に行います。",
    duration: "2〜4週間",
  },
  {
    step: "04",
    title: "営業活動スタート・PDCA",
    desc: "実際の営業活動を開始。週次・月次レポートで進捗を共有し、継続的な改善サイクルを回していきます。",
    duration: "継続的に",
  },
];

const cases = [
  {
    tag: "SaaS企業",
    title: "インサイドセールス立ち上げで受注率2.5倍を達成",
    before: "営業は全てフィールドセールスに頼っており、新規開拓が進まない状況",
    after: "インサイドセールス専門チームの立ち上げにより、月間アポ数が3倍に増加。コストも50%削減",
    period: "3ヶ月",
    result: "月間受注数 +150%",
  },
  {
    tag: "製造業",
    title: "営業プロセス設計で新規開拓を仕組み化",
    before: "個人の経験・勘に頼った営業で、担当者が変わると成果が落ちる",
    after: "営業プロセスを可視化・標準化。新入社員でも3ヶ月で即戦力化できる体制を構築",
    period: "6ヶ月",
    result: "営業生産性 +80%",
  },
];

const pricing = [
  {
    name: "スタートプラン",
    price: "月額 30万円〜",
    desc: "小規模チームでの営業活動支援に",
    features: [
      "専任担当者1名",
      "インサイドセールス（週3日）",
      "月次レポーティング",
      "CRM設定・管理",
    ],
    highlight: false,
  },
  {
    name: "スタンダードプラン",
    price: "月額 60万円〜",
    desc: "本格的な営業体制構築に",
    features: [
      "専任チーム（2〜3名体制）",
      "インサイドセールス（フルタイム）",
      "営業プロセス設計込み",
      "週次ミーティング・レポート",
      "SFAツール設定支援",
    ],
    highlight: true,
  },
  {
    name: "カスタムプラン",
    price: "要相談",
    desc: "複雑な要件・大規模支援に",
    features: [
      "大規模チーム編成",
      "複数サービス組み合わせ",
      "営業組織構築から一貫支援",
      "経営層へのレポーティング",
      "SalesBlade連携オプション",
    ],
    highlight: false,
  },
];

export default function BPOPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-sky-400 text-sm mb-4">
            <Link href="/" className="hover:text-sky-300 transition-colors">
              ホーム
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>BPOサービス</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm font-medium mb-6">
            BPOサービス
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            営業代行・営業支援で
            <br />
            <span className="text-gradient">貴社の営業力を最大化</span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            単なる外注ではなく、営業プロセスの設計から実行まで一貫して支援。
            専任チームが貴社のビジネスに深く入り込み、成果にコミットします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-lg hover:opacity-90 transition-all shadow-xl"
            >
              無料相談を予約する
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { num: "300+", label: "支援実績" },
              { num: "95%", label: "継続率" },
              { num: "2.8x", label: "平均受注率向上" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gradient">{s.num}</span>
                <span className="text-sm text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Service Menu
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              サービスメニュー
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              貴社の課題・フェーズに合わせて、最適なサービスをご提案します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm card-hover"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 inline-block mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              支援の進め方
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              まずはヒアリングから。貴社の状況を深く理解した上で、最適なプランをご提案します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flow.map((step, i) => (
              <div key={step.step} className="relative">
                {i < flow.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-sky-200 to-indigo-200 -ml-4 z-0" />
                )}
                <div className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm z-10">
                  <div className="text-3xl font-bold text-gradient mb-4">{step.step}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{step.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-sky-600 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              支援事例
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm card-hover">
                <div className="bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3">
                  <span className="text-white text-xs font-semibold">{c.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-5">{c.title}</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                      <p className="text-xs font-semibold text-red-600 mb-1">BEFORE</p>
                      <p className="text-sm text-slate-600">{c.before}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                      <p className="text-xs font-semibold text-green-600 mb-1">AFTER</p>
                      <p className="text-sm text-slate-600">{c.after}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      支援期間: {c.period}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold">
                      {c.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              料金プラン
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              貴社の規模や目標に合わせて最適なプランをご選択いただけます。
              詳細はお気軽にご相談ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden ${
                  plan.highlight
                    ? "bg-gradient-to-br from-sky-500 to-indigo-600 shadow-xl shadow-sky-200"
                    : "bg-white border border-slate-100 shadow-sm"
                } card-hover`}
              >
                {plan.highlight && (
                  <div className="bg-white/20 text-center py-2">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3
                    className={`font-bold text-xl mb-1 ${
                      plan.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? "text-white/70" : "text-slate-500"}`}>
                    {plan.desc}
                  </p>
                  <p className={`text-2xl font-bold mb-6 ${plan.highlight ? "text-white" : "text-gradient"}`}>
                    {plan.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.highlight ? "text-white/80" : "text-sky-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.highlight ? "text-white/90" : "text-slate-600"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "bg-white text-sky-600 hover:bg-slate-50"
                        : "bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:opacity-90"
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

      {/* CTA */}
      <section className="py-20 gradient-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            まずは無料相談から
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            貴社の課題をヒアリングし、最適な支援内容をご提案します。
            相談は完全無料です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-sky-600 font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
          >
            無料相談を予約する
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-6 flex items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              相談無料
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              強引な勧誘なし
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              専任担当が対応
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
