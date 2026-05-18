/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <div className="bg-masonic-blue text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-masonic-gold/5 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-masonic-gold/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <span className="text-masonic-gold text-xs uppercase tracking-[0.2em] font-bold mb-4 block">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              {description}
            </p>
          )}
          <div className="h-1 w-20 bg-masonic-gold mt-8"></div>
        </div>
      </div>
    </div>
  );
}
