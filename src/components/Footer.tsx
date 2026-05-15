import Link from "next/link";
import { MapPin, Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  services: [
    { label: "BPOサービス", href: "/services/bpo" },
    { label: "SalesBlade", href: "/services/salesblade" },
  ],
  company: [
    { label: "会社情報", href: "/company" },
    { label: "お問い合わせ", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl text-white">VALTIC</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-sm">
              営業支援・営業設計・AI営業ツールを通じて、
              企業の営業力を根本から変革します。
              BPOサービスとSaaSの両輪で、貴社の成長を支援します。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>東京都（詳細は要問い合わせ）</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:info@valtic.co.jp"
                  className="hover:text-sky-400 transition-colors"
                >
                  info@valtic.co.jp
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              サービス
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://valtic.co.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  公式サイト
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              企業情報
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2024 株式会社VALTIC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
