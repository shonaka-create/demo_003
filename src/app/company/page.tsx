import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Zap,
  Heart,
  MapPin,
  Building2,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "会社情報 | VALTIC",
  description:
    "株式会社VALTICの会社情報。営業支援・営業設計・AI営業ツールを通じて企業の営業課題を解決します。",
};

const values = [
  {
    icon: Target,
    title: "結果にコミット",
    desc: "「提案で終わり」は絶対にしない。目標数値を設定し、達成まで責任を持ってやり抜きます。",
  },
  {
    icon: Users,
    title: "現場ファースト",
    desc: "机上の理論より、現場の実態を優先。営業の現場を知るメンバーが、実務に即した支援を提供します。",
  },
  {
    icon: Zap,
    title: "スピードと柔軟性",
    desc: "大企業のような遅さはない。クライアントの変化に素早く対応し、最速で成果を追求します。",
  },
  {
    icon: Heart,
    title: "本質的な価値を届ける",
    desc: "見かけ上の成果ではなく、クライアントのビジネスに本質的な価値をもたらすことを追求します。",
  },
];

const companyInfo = [
  { label: "会社名", value: "株式会社VALTIC（バルティック）" },
  { label: "設立", value: "2021年" },
  { label: "代表取締役", value: "（詳細は公式サイトをご確認ください）" },
  { label: "所在地", value: "東京都（詳細は要問い合わせ）" },
  { label: "事業内容", value: "営業支援・営業設計・AI営業ツール開発・提供" },
  { label: "コーポレートサイト", value: "https://valtic.co.jp/" },
];

const milestones = [
  { year: "2021", title: "株式会社VALTIC設立", desc: "営業支援BPOとして事業スタート" },
  { year: "2022", title: "BPOサービス本格展開", desc: "支援実績50社を達成。営業プロセス設計に特化した独自メソッドを確立" },
  { year: "2023", title: "SalesBlade開発スタート", desc: "AIを活用した営業設計ツールの開発を開始。β版を一部クライアントに提供" },
  { year: "2024", title: "SalesBlade正式リリース", desc: "AI営業設計ツール「SalesBlade」を正式公開。BPO×SaaSの独自モデルが評価を受ける" },
];

export default function CompanyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-sky-400 text-sm mb-4">
            <Link href="/" className="hover:text-sky-300 transition-colors">ホーム</Link>
            <ChevronRight className="w-4 h-4" />
            <span>会社情報</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              会社情報
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              VALTICは、「営業で日本の企業を強くする」をミッションに掲げ、
              BPOサービスとAIツールを通じて企業の営業課題に正面から向き合います。
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">Mission</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                営業で日本の企業を強くする
              </h2>
              <p className="text-slate-600 leading-relaxed">
                日本には、良い製品・サービスを持ちながらも、営業力の不足で成長できていない企業が数多く存在します。
                私たちVALTICは、そのような企業の営業課題を解決し、ビジネスの成長を加速させることをミッションとしています。
              </p>
            </div>
            <div>
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Vision</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                すべての企業が最高の営業組織を持てる世界
              </h2>
              <p className="text-slate-600 leading-relaxed">
                人材・予算・ノウハウの制約に関わらず、どの企業でもトップクラスの営業力を持てる世界を目指します。
                BPOとAIを組み合わせた独自のアプローチで、営業の民主化を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">私たちが大切にすること</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm card-hover">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shrink-0 self-start">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">History</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">歩み</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-200 to-indigo-200" />
              <div className="space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold">{m.year}</span>
                      </div>
                    </div>
                    <div className="pt-3">
                      <h3 className="font-bold text-slate-900 mb-1">{m.title}</h3>
                      <p className="text-sm text-slate-500">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">Company</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">会社概要</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {companyInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 py-4 px-6 ${
                  i !== companyInfo.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <dt className="w-full sm:w-40 shrink-0 text-sm font-semibold text-slate-500">
                  {item.label}
                </dt>
                <dd className="text-sm text-slate-800">
                  {item.label === "コーポレートサイト" ? (
                    <a
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-6 p-6 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-4">
            <div className="p-2 rounded-lg bg-sky-100 shrink-0">
              <MapPin className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-1">所在地</p>
              <p className="text-sm text-slate-600">
                詳細な所在地・地図は公式サイト（valtic.co.jp）またはお問い合わせよりご確認ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            一緒に営業課題を解決しましょう
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            まずは30分の無料相談から。
            貴社の課題を聞かせてください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-sky-600 font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
          >
            無料相談を予約する
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
