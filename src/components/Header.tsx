"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "サービス",
    href: "#",
    children: [
      { label: "BPOサービス", href: "/services/bpo", desc: "営業代行・営業支援" },
      {
        label: "SalesBlade",
        href: "/services/salesblade",
        desc: "AI営業設計ツール",
      },
    ],
  },
  { label: "会社情報", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span
              className={`font-bold text-xl tracking-tight transition-colors ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              VALTIC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium nav-link transition-colors ${
                      isScrolled
                        ? "text-slate-700 hover:text-sky-600"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col px-4 py-3 hover:bg-sky-50 transition-colors"
                        >
                          <span className="text-sm font-semibold text-slate-900">
                            {child.label}
                          </span>
                          <span className="text-xs text-slate-500 mt-0.5">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium nav-link transition-colors ${
                    isScrolled
                      ? "text-slate-700 hover:text-sky-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            >
              無料相談
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 rounded-b-2xl shadow-xl">
            <div className="py-4 space-y-1">
              <Link
                href="/services/bpo"
                className="flex flex-col px-4 py-3 hover:bg-sky-50 rounded-lg mx-2"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-sm font-semibold text-slate-900">
                  BPOサービス
                </span>
                <span className="text-xs text-slate-500">営業代行・営業支援</span>
              </Link>
              <Link
                href="/services/salesblade"
                className="flex flex-col px-4 py-3 hover:bg-sky-50 rounded-lg mx-2"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-sm font-semibold text-slate-900">
                  SalesBlade
                </span>
                <span className="text-xs text-slate-500">AI営業設計ツール</span>
              </Link>
              <Link
                href="/company"
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg mx-2"
                onClick={() => setMobileOpen(false)}
              >
                会社情報
              </Link>
              <div className="px-2 pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  無料相談はこちら
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
