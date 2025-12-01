/**
 * X-Coil Landing Page Logic
 */

const translations = {
    en: {
        header_cta: "Download for Android",
        hero_headline: "X-Coil — Save, Share, and Diagnose Motors",
        hero_subhead: "Store motor & bearing records, collaborate with technicians, and access practical tools — all from your phone.",
        hero_cta_primary: "Download for Android",
        hero_cta_secondary: "Learn More",
        features_title: "Key Features",
        features_subtitle: "Everything you need to manage your motor data.",
        feat_save_title: "Save Motor Data",
        feat_save_desc: "Keep organized records of all your motor maintenance and specs.",
        feat_share_title: "Share Securely",
        feat_share_desc: "Share data with colleagues or shops instantly and securely.",
        feat_community_title: "Community",
        feat_community_desc: "Join a network of technicians to ask questions and share tips.",
        feat_bearings_title: "Bearings Database",
        feat_bearings_desc: "Search by dimensions or number to find the right bearing.",
        feat_tools_title: "Tools & Calculators",
        feat_tools_desc: "Access handy calculators and converters for your daily work.",
        how_title: "How it Works",
        step_1_title: "Save",
        step_1_desc: "Record motor data easily on your phone.",
        step_2_title: "Share",
        step_2_desc: "Send reports to clients or colleagues.",
        step_3_title: "Collaborate",
        step_3_desc: "Solve problems together with the community.",
        community_title: "Trusted by Technicians",
        demo_title: "Try the Bearing Search",
        demo_desc: "See how easy it is to find bearing data.",
        download_title: "Get X-Coil Today",
        download_btn: "Download Android APK",
        footer_copyright: "© X-Coil. All rights reserved."
    },
    ar: {
        header_cta: "تحميل أندرويد",
        hero_headline: "إكس-كويل — حفظ ومشاركة وتشخيص المواتير",
        hero_subhead: "خزن سجلات المواتير والمحامل، شارك مع الفنيين، واستخدم أدوات مفيدة — مباشرة من هاتفك.",
        hero_cta_primary: "تحميل أندرويد",
        hero_cta_secondary: "المزيد",
        features_title: "الميزات الرئيسية",
        features_subtitle: "كل ما تحتاجه لإدارة بيانات المواتير.",
        feat_save_title: "حفظ بيانات الموتور",
        feat_save_desc: "احتفظ بسجلات منظمة لجميع صيانة ومواصفات الموتور.",
        feat_share_title: "مشاركة آمنة",
        feat_share_desc: "شارك البيانات مع الزملاء أو الورش فوراً وبأمان.",
        feat_community_title: "المجتمع",
        feat_community_desc: "انضم لشبكة من الفنيين لطرح الأسئلة ومشاركة النصائح.",
        feat_bearings_title: "قاعدة بيانات المحامل",
        feat_bearings_desc: "ابحث بالأبعاد أو الرقم للعثور على المحمل المناسب.",
        feat_tools_title: "أدوات وحاسبات",
        feat_tools_desc: "استخدم حاسبات ومحولات مفيدة لعملك اليومي.",
        how_title: "كيف يعمل",
        step_1_title: "حفظ",
        step_1_desc: "سجل بيانات الموتور بسهولة على هاتفك.",
        step_2_title: "مشاركة",
        step_2_desc: "أرسل التقارير للعملاء أو الزملاء.",
        step_3_title: "تعاون",
        step_3_desc: "حل المشاكل مع المجتمع.",
        community_title: "موثوق من قبل الفنيين",
        demo_title: "جرب بحث المحامل",
        demo_desc: "شاهد مدى سهولة العثور على بيانات المحامل.",
        download_title: "احصل على إكس-كويل اليوم",
        download_btn: "تحميل ملف APK للأندرويد",
        footer_copyright: "© إكس-كويل. كل الحقوق محفوظة."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const html = document.documentElement;

    // Check saved language or default to EN
    const savedLang = localStorage.getItem('xcoil_lang') || 'en';
    setLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = html.getAttribute('lang');
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('xcoil_lang', lang);

        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Toggle Button Text
        const langText = langToggle.querySelector('.lang-text');
        if (langText) {
            langText.textContent = lang === 'en' ? 'العربية' : 'English';
        }
    }

    // Tools Demo Logic
    const bearingInput = document.getElementById('bearing-input');
    const bearingSearchBtn = document.getElementById('bearing-search-btn');
    const bearingResult = document.getElementById('bearing-result');

    const dummyBearings = {
        '6205': 'Inner: 25mm, Outer: 52mm, Width: 15mm',
        '6309': 'Inner: 45mm, Outer: 100mm, Width: 25mm',
        '6000': 'Inner: 10mm, Outer: 26mm, Width: 8mm'
    };

    function searchBearing() {
        const query = bearingInput.value.trim();
        if (!query) {
            bearingResult.textContent = 'Please enter a number.';
            return;
        }

        const result = dummyBearings[query];
        if (result) {
            bearingResult.textContent = `✅ Found: ${result}`;
            bearingResult.style.color = 'green';
        } else {
            bearingResult.textContent = '❌ Not found in demo database.';
            bearingResult.style.color = 'red';
        }
    }

    if (bearingSearchBtn) {
        bearingSearchBtn.addEventListener('click', searchBearing);
        bearingInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchBearing();
        });
    }

    // Simple QR Code Placeholder Generator
    const qrContainer = document.getElementById('qr-code-container');
    if (qrContainer) {
        // Create a canvas to draw a "fake" QR code pattern
        const canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext('2d');

        // White background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 100, 100);

        // Random black squares
        ctx.fillStyle = '#000000';
        for (let i = 0; i < 100; i++) {
            const x = Math.floor(Math.random() * 10) * 10;
            const y = Math.floor(Math.random() * 10) * 10;
            ctx.fillRect(x, y, 10, 10);
        }

        // Corner markers
        ctx.fillRect(0, 0, 30, 30);
        ctx.fillRect(70, 0, 30, 30);
        ctx.fillRect(0, 70, 30, 30);

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(5, 5, 20, 20);
        ctx.fillRect(75, 5, 20, 20);
        ctx.fillRect(5, 75, 20, 20);

        ctx.fillStyle = '#000000';
        ctx.fillRect(10, 10, 10, 10);
        ctx.fillRect(80, 10, 10, 10);
        ctx.fillRect(10, 80, 10, 10);

        canvas.style.marginTop = '1rem';
        canvas.style.border = '4px solid white';
        canvas.style.borderRadius = '8px';

        qrContainer.appendChild(canvas);
    }
});
