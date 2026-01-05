'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const version = '4.4.0';
    const cachedVersion = localStorage.getItem('siteVersion');
    if (cachedVersion !== version) {
      localStorage.setItem('siteVersion', version);
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => caches.delete(name));
        });
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Skip to main content */}
      <a href="#main-hero" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        انتقل للمحتوى الرئيسي
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-[#233f48]" role="navigation" aria-label="القائمة الرئيسية">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M8 28h12v2H8zM23 14h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-3v-6zm0 4h3v-2h-3v2zM22 8H6v18h16V8zm-2 16H8V10h12v14z"/>
                  <path d="M14 4c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zM10 6c0-.55-.45-1-1-1s-1 .45-1 1h2zM20 6c0-.55-.45-1-1-1s-1 .45-1 1h2z" opacity=".6"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold leading-none tracking-tight">قهوجيي وصبابين الرياض</h1>
                <span className="text-gray-400 text-xs font-arabic">ضيافة احترافية</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="mr-10 flex items-baseline gap-8">
                <a className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" href="#">الرئيسية</a>
                <a className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" href="#about">من نحن</a>
                <a className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" href="#services">خدماتنا</a>
                <a className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" href="#gallery">المعرض</a>
                <a className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" href="#contact">اتصل بنا</a>
              </div>
            </div>
            <div className="hidden md:block">
              <a className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2" href="tel:0503521344">
                <span dir="ltr">050 352 1344</span>
                <span className="material-symbols-outlined text-sm">call</span>
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="text-gray-300 hover:text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                aria-expanded={mobileMenuOpen}
              >
                <span className="material-symbols-outlined" aria-hidden="true">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-2">
                <a className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium" href="#">الرئيسية</a>
                <a className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium" href="#about">من نحن</a>
                <a className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium" href="#services">خدماتنا</a>
                <a className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium" href="#gallery">المعرض</a>
                <a className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium" href="#contact">اتصل بنا</a>
                <a className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold mt-2 flex items-center justify-center gap-2" href="tel:0503521344">
                  <span dir="ltr">050 352 1344</span>
                  <span className="material-symbols-outlined text-sm">call</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main-hero" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden" aria-label="القسم الرئيسي">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark z-10"></div>
          <Image
            src="/images/1.webp"
            alt="قهوجي وصباب الرياض - ضيافة عربية أصيلة"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4 animate-float">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary-100">قهوجيين وصبابين بالرياض</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight text-shadow">
            قهوجي وصباب الرياض<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">ضيافة لا تُنسى</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            أفضل قهوجي بالرياض لخدمة مناسباتكم. نوفر قهوجيين وصبابين محترفين، صبابات قهوة للحفلات النسائية، ومباشرين قهوة بخبرة عريقة في فن الضيافة العربية الأصيلة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <a className="bg-primary hover:bg-primary-dark text-white h-14 px-8 rounded-lg text-base font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]" href="tel:0503521344">
              احجز الآن 0503521344
              <span className="material-symbols-outlined">call</span>
            </a>
            <a className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 h-14 px-8 rounded-lg text-base font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]" href="#services">
              استكشف خدماتنا
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span className="text-xs uppercase tracking-widest">تصفح</span>
          <span className="material-symbols-outlined" aria-hidden="true">keyboard_arrow_down</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative bg-background-dark" id="about">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">من نحن</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">أرقام قهوجيين وصبابين الرياض</h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-loose text-base sm:text-lg px-4 sm:px-0">
              نحن متخصصون في تقديم خدمات الضيافة العربية الأصيلة في الرياض. نوفر قهوجي وصباب محترف، قهوجيات الرياض للمناسبات النسائية، صبابين قهوة بالرياض، ومباشرين قهوة لجميع المناسبات. فريقنا مدرب على أعلى مستوى لضمان تجربة ضيافة راقية تليق بمناسباتكم الخاصة.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-surface-dark relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">خدماتنا</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">قهوجي وصبابين قهوة بالرياض</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 transition-all duration-300">
              <div className="h-full bg-background-dark rounded-xl p-6 flex flex-col gap-4 border border-white/5 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
                <div className="w-14 h-14 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">man_2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">قهوجيين وصبابين<br /><span className="text-xs sm:text-sm font-normal text-gray-400">خدمة رجالية احترافية</span></h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">قهوجي في الرياض بخبرة واسعة. فريق مدرب من القهوجيين والصبابين يتميزون بحسن المظهر والأمانة لتقديم القهوة العربية والشاي بأرقى أساليب الضيافة.</p>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 transition-all duration-300">
              <div className="h-full bg-background-dark rounded-xl p-6 flex flex-col gap-4 border border-white/5 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
                <div className="w-14 h-14 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">woman_2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">قهوجيات وصبابات الرياض<br /><span className="text-xs sm:text-sm font-normal text-gray-400">ضيافة نسائية راقية</span></h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">صبابات قهوة مدربات للمناسبات النسائية وحفلات الزفاف. قهوجيات الرياض يوفرن خدمة تتسم بالخصوصية والأناقة وسرعة البديهة في خدمة الضيفات.</p>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 transition-all duration-300">
              <div className="h-full bg-background-dark rounded-xl p-6 flex flex-col gap-4 border border-white/5 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
                <div className="w-14 h-14 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">local_cafe</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">صبابين قهوة الرياض<br /><span className="text-xs sm:text-sm font-normal text-gray-400">سرعة وإتقان</span></h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">صبابين قهوة بالرياض يضمنون وصول القهوة الساخنة لكل ضيف في الوقت المناسب. نحافظ على تقاليد الصب الأصيلة مع لباقة في التعامل.</p>
              </div>
            </div>
            {/* Service Card 4 */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 transition-all duration-300">
              <div className="h-full bg-background-dark rounded-xl p-6 flex flex-col gap-4 border border-white/5 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
                <div className="w-14 h-14 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">room_service</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">مباشرين ومضيف قهوة<br /><span className="text-xs sm:text-sm font-normal text-gray-400">إشراف متكامل</span></h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">مباشرين قهوة الرياض للإشراف على سير الضيافة في المناسبات الكبيرة. أفضل مضيف قهوة الرياض لضمان تنظيم كل التفاصيل.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-surface-dark/50 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">لماذا نحن؟</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">أفضل قهوجي بالرياض – لماذا تختارنا؟</h2>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  نحن لا نقدم القهوة فحسب، بل نصنع تجربة ضيافة متكاملة. قهوجي وصبابين الرياض يتميزون بالاهتمام بأدق التفاصيل، من نظافة الأدوات ولمعان الدلال، إلى رائحة الهيل والزعفران التي تملأ المكان.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-gray-300">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span>طاقم مدرب ومحترف على أعلى مستوى في فنون الإتيكيت والضيافة.</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span>التزام تام بالمواعيد والزي الرسمي الموحد والأنيق.</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span>أدوات ضيافة فاخرة (ذهبية وفضية) تليق بمقام ضيوفكم.</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span>أسعار تنافسية وباقات تناسب جميع الميزانيات.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl"></div>
              <Image
                alt="قهوجي وصباب يقدم القهوة العربية"
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
                src="/images/2.webp"
                width={600}
                height={500}
                loading="lazy"
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 bg-surface-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-xs shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-yellow-500">star</span>
                  <span className="text-white font-bold">جودة عالية</span>
                </div>
                <p className="text-xs text-gray-400">نستخدم أجود أنواع البن والهيل والزعفران لضمان مذاق لا يُقاوم.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#0d181c]" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">المعرض</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">لمسات من الفخامة</h2>
            </div>
            <button className="text-white hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
              شاهد كل الصور <span className="material-symbols-outlined transform rotate-180">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
              <Image className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="قهوجي يصب القهوة العربية" src="/images/3.webp" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
              <div className="absolute bottom-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">ضيافة ملكية</p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">أدوات تقديم فاخرة</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
              <Image className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="تمور فاخرة للضيافة" src="/images/4.webp" fill loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" quality={75} />
            </div>
            <div className="relative group overflow-hidden rounded-xl cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
              <Image className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="مجلس ضيافة فاخر" src="/images/5.webp" fill loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" quality={75} />
            </div>
            <div className="col-span-2 relative group overflow-hidden rounded-xl cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
              <Image className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="تنسيق حفل زفاف" src="/images/6.webp" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
              <div className="absolute bottom-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">تنسيق المناسبات الكبرى</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface-dark relative" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">آراء العملاء</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">ماذا يقول عملاؤنا؟</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background-dark p-8 rounded-2xl border border-white/5 relative">
              <div className="text-primary text-6xl absolute top-4 right-4 opacity-20">&ldquo;</div>
              <p className="text-gray-300 mb-6 relative z-10">خدمة ممتازة من قهوجيين وصبابين محترفين. الصبابين كانوا في قمة الذوق والاحترام، والقهوة كانت مضبوطة جداً. أنصح بهم بشدة.</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">ع</div>
                <div>
                  <h5 className="text-white font-bold">عبدالله القحطاني</h5>
                  <span className="text-xs text-gray-500">عميل في الرياض</span>
                </div>
              </div>
            </div>
            <div className="bg-background-dark p-8 rounded-2xl border border-white/5 relative">
              <div className="text-primary text-6xl absolute top-4 right-4 opacity-20">&ldquo;</div>
              <p className="text-gray-300 mb-6 relative z-10">تعاملنا مع قهوجيات الرياض في زواج أختي، وكان التنسيق رائع والصبابات قمة في النظافة والترتيب والأناقة.</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">م</div>
                <div>
                  <h5 className="text-white font-bold">مها العتيبي</h5>
                  <span className="text-xs text-gray-500">عميلة مناسبات</span>
                </div>
              </div>
            </div>
            <div className="bg-background-dark p-8 rounded-2xl border border-white/5 relative">
              <div className="text-primary text-6xl absolute top-4 right-4 opacity-20">&ldquo;</div>
              <p className="text-gray-300 mb-6 relative z-10">سرعة في الاستجابة واحترافية عالية من المباشرين. وصلوا قبل الموعد وجهزوا كل شيء بأنفسهم. أفضل قهوجي بالرياض.</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">س</div>
                <div>
                  <h5 className="text-white font-bold">سلطان الدوسري</h5>
                  <span className="text-xs text-gray-500">عميل شركة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-dark border-t border-white/5" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">الأسئلة الشائعة</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">استفسارات متكررة</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-dark rounded-lg p-6 border border-white/5">
              <h4 className="text-white font-bold mb-2">هل تغطون جميع أحياء الرياض؟</h4>
              <p className="text-gray-400">نعم، قهوجيين وصبابين بالرياض يغطون كافة أحياء الرياض شمالاً وجنوباً، شرقاً وغرباً. نصل إليكم أينما كنتم.</p>
            </div>
            <div className="bg-surface-dark rounded-lg p-6 border border-white/5">
              <h4 className="text-white font-bold mb-2">كيف يمكنني الحجز؟</h4>
              <p className="text-gray-400">للحصول على رقم قهوجي بالرياض، يمكنكم الاتصال المباشر أو الواتساب على الرقم 0503521344 وسيتم تأكيد حجزكم فوراً.</p>
            </div>
            <div className="bg-surface-dark rounded-lg p-6 border border-white/5">
              <h4 className="text-white font-bold mb-2">هل توفرون الزي الرسمي للمضيفين؟</h4>
              <p className="text-gray-400">بالتأكيد، يلتزم جميع طاقمنا (قهوجيين وصبابين وقهوجيات وصبابات) بارتداء زي رسمي موحد وأنيق يليق بمناسبتكم.</p>
            </div>
            <div className="bg-surface-dark rounded-lg p-6 border border-white/5">
              <h4 className="text-white font-bold mb-2">ما هي الخدمات التي تقدمونها؟</h4>
              <p className="text-gray-400">نقدم خدمات قهوجي وصباب، قهوجيين الرياض، صبابين قهوة، قهوجيات وصبابات الرياض، مباشرين قهوة، ومضيف قهوة بالرياض لجميع المناسبات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-24 bg-surface-dark overflow-hidden" id="location">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">الموقع</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">تغطية جميع أحياء الرياض</h2>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  من شوارع العليا الحيوية إلى أحياء الملقا الهادئة، فريق قهوجيين وصبابين الرياض جاهز لخدمتكم. نضمن الوصول المبكر والإعداد المثالي قبل بدء المناسبة.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-background-dark/50 p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">نصل إليكم أينما كنتم</h4>
                    <p className="text-gray-400 text-sm">تغطية شاملة لكل مناطق الرياض</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-background-dark/50 p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">خدمة 24 ساعة</h4>
                    <p className="text-gray-400 text-sm">جاهزون لاستقبال طلباتكم في أي وقت</p>
                  </div>
                </div>
              </div>
              <a className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2" href="tel:0503521344">
                احجز موعدك الآن
                <span className="material-symbols-outlined">calendar_today</span>
              </a>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image alt="خريطة تغطية خدمات قهوجي الرياض" className="w-full h-full object-cover" src="/images/1_.webp" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-8 w-8">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-8 w-8 bg-primary border-4 border-white"></span>
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-surface-dark/90 backdrop-blur border border-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">نطاق التغطية</span>
                    <span className="text-primary text-sm">100% الرياض</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1418] border-t border-[#233f48] pt-16 pb-8" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M8 28h12v2H8zM23 14h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-3v-6zm0 4h3v-2h-3v2zM22 8H6v18h16V8zm-2 16H8V10h12v14z"/>
                  <path d="M14 4c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zM10 6c0-.55-.45-1-1-1s-1 .45-1 1h2zM20 6c0-.55-.45-1-1-1s-1 .45-1 1h2z" opacity=".6"/>
                </svg>
                <span className="font-bold text-xl">قهوجيي وصبابين الرياض</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                خدمات قهوجي وصباب احترافية في الرياض. نوفر قهوجيين وصبابين، قهوجيات وصبابات، ومباشرين قهوة لجميع المناسبات.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">روابط سريعة</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a className="hover:text-primary transition-colors" href="#">الرئيسية</a></li>
                <li><a className="hover:text-primary transition-colors" href="#services">خدماتنا</a></li>
                <li><a className="hover:text-primary transition-colors" href="#gallery">المعرض</a></li>
                <li><a className="hover:text-primary transition-colors" href="#location">الموقع</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">خدماتنا</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a className="hover:text-primary transition-colors" href="#services">قهوجيين وصبابين</a></li>
                <li><a className="hover:text-primary transition-colors" href="#services">قهوجيات وصبابات</a></li>
                <li><a className="hover:text-primary transition-colors" href="#services">مباشرين قهوة</a></li>
                <li><a className="hover:text-primary transition-colors" href="#services">مضيف قهوة</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">أرقام قهوجيين الرياض</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">call</span>
                  <a className="hover:text-white transition-colors" dir="ltr" href="tel:0503521344">050 352 1344</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  <span>info@qahwaji-arriyadh.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#233f48] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2024 قهوجيي وصبابين الرياض. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a className="hover:text-gray-300" href="#">سياسة الخصوصية</a>
              <a className="hover:text-gray-300" href="#">شروط الخدمة</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          href="https://wa.me/966503521344"
          target="_blank"
          rel="noopener noreferrer"
          title="تواصل عبر واتساب"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
        </a>
        <button
          className="w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          onClick={scrollToTop}
          aria-label="العودة للأعلى"
        >
          <span className="material-symbols-outlined text-2xl" aria-hidden="true">arrow_upward</span>
        </button>
      </div>
    </div>
  );
}
