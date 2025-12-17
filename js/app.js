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
        bearings_title: "Bearings Database",
        bearings_subtitle: "Search through thousands of bearings by number or dimensions",
        filter_bearing_number: "Bearing Number",
        filter_inner_diameter: "Inner Diameter (mm)",
        filter_outer_diameter: "Outer Diameter (mm)",
        filter_type: "Type",
        filter_all_types: "All Types",
        placeholder_bearing_number: "e.g., 6205",
        placeholder_inner: "e.g., 25",
        placeholder_outer: "e.g., 52",
        btn_search: "Search",
        btn_reset: "Reset",
        results_placeholder: "Enter search criteria above to find bearings",
        results_found: "Found {count} bearing(s)",
        results_showing: "Showing {start}-{end} of {total}",
        table_bearing_number: "Bearing Number",
        table_inner: "Inner ⌀",
        table_outer: "Outer ⌀",
        table_thick: "Thickness",
        table_type: "Type",
        no_results: "No bearings found matching your criteria",
        loading: "Loading bearings data...",
        download_title: "Get X-Coil Today",
        download_btn: "Download Android APK from Google Drive",
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
        feat_share_desc: "شارك ال بيانات مع الزملاء أو الورش فوراً وبأمان.",
        feat_community_title: "المجتمع",
        feat_community_desc: "انضم لشبكة من الفنيين لطرح الأسئلة ومشاركة النصائح.",
        feat_bearings_title: "قاعدة بيانات رولمان البلي",
        feat_bearings_desc: "ابحث بالأبعاد أو الرقم للعثور على رولمان البلي المناسب.",
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
        bearings_title: "قاعدة بيانات رولمان البلي",
        bearings_subtitle: "ابحث في آلاف من رولمان البلي حسب الرقم أو الأبعاد",
        filter_bearing_number: "رقم البلية",
        filter_inner_diameter: "القطر الداخلي (مم)",
        filter_outer_diameter: "القطر الخارجي (مم)",
        filter_type: "النوع",
        filter_all_types: "جميع الأنواع",
        placeholder_bearing_number: "مثال: 6205",
        placeholder_inner: "مثال: 25",
        placeholder_outer: "مثال: 52",
        btn_search: "بحث",
        btn_reset: "إعادة تعيين",
        results_placeholder: "أدخل معايير البحث أعلاه للعثور على رولمان بلي",
        results_found: "تم العثور على {count} بلية",
        results_showing: "عرض {start}-{end} من {total}",
        table_bearing_number: "رقم البلية",
        table_inner: "القطر الداخلي",
        table_outer: "القطر الخارجي",
        table_thick: "السماكة",
        table_type: "النوع",
        no_results: "لم يتم العثور على بلية مطابقة لمعاييرك",
        loading: "جارٍ تحميل بيانات رولمان البلي...",
        download_title: "احصل على إكس-كويل اليوم",
        download_btn: "تحميل ملف APK للأندرويد من Google Drive",
        footer_copyright: "© إكس-كويل. كل الحقوق محفوظة."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const html = document.documentElement;

    // Check saved language or default to EN
    const savedLang = localStorage.getItem('xcoil_lang') || 'ar';
    setLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = html.getAttribute('lang');
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
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


    // Bearings Database Logic
    let bearingsData = [];
    let filteredBearings = [];
    const ITEMS_PER_PAGE = 20;
    let currentPage = 1;
    let dataLoaded = false;

    // Load bearings data
    async function loadBearingsData() {
        const resultsContainer = document.getElementById('bearings-results');

        // Show loading state
        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <div class="results-placeholder">
                    <p style="font-size: 1.2rem; color: var(--primary);">⏳ Loading bearings database...</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Please wait while we load 12,000+ bearings</p>
                </div>
            `;
        }

        try {
            console.log('Attempting to load bearings.json...');
            const response = await fetch('bearings.json');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            bearingsData = await response.json();
            dataLoaded = true;

            console.log(`✅ Successfully loaded ${bearingsData.length} bearings`);
            console.log('Sample bearing:', bearingsData[0]);

            // Update UI to show ready state
            if (resultsContainer) {
                const lang = document.documentElement.getAttribute('lang') || 'en';
                const t = translations[lang];
                resultsContainer.innerHTML = `
                    <div class="results-placeholder" data-i18n="results_placeholder">
                        ${t.results_placeholder}
                    </div>
                `;
            }
        } catch (error) {
            console.error('❌ Error loading bearings data:', error);
            dataLoaded = false;

            // Show error message with solution
            if (resultsContainer) {
                resultsContainer.innerHTML = `
                    <div class="no-results" style="text-align: left; padding: 2rem;">
                        <h3 style="color: var(--primary); margin-bottom: 1rem;">⚠️ Unable to Load Bearings Database</h3>
                        <p style="margin-bottom: 0.5rem;"><strong>Error:</strong> ${error.message}</p>
                        <p style="margin-bottom: 1rem;">This is likely because you're opening the HTML file directly.</p>
                        <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                            <p style="margin-bottom: 0.5rem;"><strong>To fix this, run a local server:</strong></p>
                            <ol style="margin-left: 1.5rem; line-height: 1.8;">
                                <li>Open PowerShell in this folder</li>
                                <li>Run: <code style="background: #333; color: #fff; padding: 0.2rem 0.5rem; border-radius: 3px;">python -m http.server 8000</code></li>
                                <li>Open: <code style="background: #333; color: #fff; padding: 0.2rem 0.5rem; border-radius: 3px;">http://localhost:8000</code></li>
                            </ol>
                            <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">Or use VS Code "Live Server" extension</p>
                        </div>
                    </div>
                `;
            }
            bearingsData = [];
        }
    }

    // Initialize bearings search
    const bearingNumberInput = document.getElementById('bearing-number');
    const innerDiameterInput = document.getElementById('inner-diameter');
    const outerDiameterInput = document.getElementById('outer-diameter');
    const bearingTypeSelect = document.getElementById('bearing-type');
    const searchBtn = document.getElementById('search-bearings-btn');
    const resetBtn = document.getElementById('reset-search-btn');
    const resultsContainer = document.getElementById('bearings-results');
    const resultsSummary = document.getElementById('results-summary');
    const paginationContainer = document.getElementById('pagination');

    // Search bearings function
    function searchBearings() {
        // Check if data is loaded
        if (!dataLoaded || !bearingsData || bearingsData.length === 0) {
            const lang = html.getAttribute('lang');
            const t = translations[lang];
            resultsContainer.innerHTML = `
                <div class="no-results">
                    ${dataLoaded ? 'No bearings data available.' : (t.loading || '⏳ Loading bearings data... Please wait and try again in a moment.')}
                </div>
            `;
            console.warn('Bearings data not loaded yet. Loaded:', dataLoaded, 'Array length:', bearingsData.length);
            return;
        }

        const bearingNumber = bearingNumberInput ? bearingNumberInput.value.trim().toLowerCase() : '';
        const innerDiameter = innerDiameterInput ? innerDiameterInput.value.trim() : '';
        const outerDiameter = outerDiameterInput ? outerDiameterInput.value.trim() : '';
        const bearingType = bearingTypeSelect ? bearingTypeSelect.value : '';

        console.log('=== SEARCH DEBUG ===');
        console.log('Total bearings in database:', bearingsData.length);
        console.log('Search params:', { bearingNumber, innerDiameter, outerDiameter, bearingType });

        // If no search criteria, show message
        if (!bearingNumber && !innerDiameter && !outerDiameter && !bearingType) {
            const lang = html.getAttribute('lang');
            const t = translations[lang];
            resultsContainer.innerHTML = `
                <div class="results-placeholder" data-i18n="results_placeholder">
                    ${t.results_placeholder}
                </div>
            `;
            resultsSummary.innerHTML = '';
            paginationContainer.innerHTML = '';
            console.log('No search criteria provided');
            return;
        }

        // Filter bearings based on filled criteria (AND logic - only check filled fields)
        filteredBearings = bearingsData.filter(bearing => {
            let matches = true;

            // Only check bearing number if field is filled
            if (bearingNumber) {
                const bearingNumberMatch = bearing.bearingNumber.toLowerCase().includes(bearingNumber);
                console.log(`Checking bearing ${bearing.bearingNumber}: contains "${bearingNumber}"? ${bearingNumberMatch}`);
                matches = matches && bearingNumberMatch;
            }

            // Only check inner diameter if field is filled (compare as strings since JSON has strings)
            if (innerDiameter) {
                const innerMatch = bearing.innerDiameter === innerDiameter;
                if (!innerMatch) {
                    console.log(`Inner diameter mismatch: "${bearing.innerDiameter}" !== "${innerDiameter}"`);
                }
                matches = matches && innerMatch;
            }

            // Only check outer diameter if field is filled (compare as strings since JSON has strings)
            if (outerDiameter) {
                const outerMatch = bearing.outerDiameter === outerDiameter;
                if (!outerMatch) {
                    console.log(`Outer diameter mismatch: "${bearing.outerDiameter}" !== "${outerDiameter}"`);
                }
                matches = matches && outerMatch;
            }

            // Only check type if selected
            if (bearingType) {
                const typeMatch = bearing.type === bearingType;
                matches = matches && typeMatch;
            }

            return matches;
        });

        console.log(`Found ${filteredBearings.length} matching bearings`);
        console.log('Sample results:', filteredBearings.slice(0, 3));

        currentPage = 1;
        displayResults();
    }

    // Display results
    function displayResults() {
        const lang = html.getAttribute('lang');
        const t = translations[lang];

        // Show summary
        if (filteredBearings.length > 0) {
            const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
            const end = Math.min(currentPage * ITEMS_PER_PAGE, filteredBearings.length);

            resultsSummary.innerHTML = `
                <div class="summary-text">
                    ${t.results_found.replace('{count}', filteredBearings.length)} • 
                    ${t.results_showing.replace('{start}', start).replace('{end}', end).replace('{total}', filteredBearings.length)}
                </div>
            `;
        } else {
            resultsSummary.innerHTML = '';
        }

        // Build results table
        if (filteredBearings.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    ${t.no_results}
                </div>
            `;
            paginationContainer.innerHTML = '';
            return;
        }

        // Get current page items
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageItems = filteredBearings.slice(start, end);

        // Build table
        let tableHTML = `
            <table class="bearings-table">
                <thead>
                    <tr>
                        <th data-i18n="table_bearing_number">${t.table_bearing_number}</th>
                        <th data-i18n="table_inner">${t.table_inner}</th>
                        <th data-i18n="table_outer">${t.table_outer}</th>
                        <th data-i18n="table_thick">${t.table_thick}</th>
                        <th data-i18n="table_type">${t.table_type}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        pageItems.forEach((bearing, index) => {
            tableHTML += `
                <tr class="bearing-row" style="animation-delay: ${index * 0.05}s">
                    <td class="bearing-number"><strong>${bearing.bearingNumber}</strong></td>
                    <td>${bearing.innerDiameter} mm</td>
                    <td>${bearing.outerDiameter} mm</td>
                    <td>${bearing.thick} mm</td>
                    <td><span class="bearing-type-badge">${bearing.type}</span></td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        resultsContainer.innerHTML = tableHTML;

        // Build pagination
        buildPagination();
    }

    // Build pagination
    function buildPagination() {
        const totalPages = Math.ceil(filteredBearings.length / ITEMS_PER_PAGE);

        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHTML = '<div class="pagination-buttons">';

        // Previous button
        if (currentPage > 1) {
            paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">‹</button>`;
        }

        // Page numbers (show max 7 pages)
        let startPage = Math.max(1, currentPage - 3);
        let endPage = Math.min(totalPages, currentPage + 3);

        if (startPage > 1) {
            paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
            if (startPage > 2) {
                paginationHTML += `<span class="page-dots">...</span>`;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            const active = i === currentPage ? 'active' : '';
            paginationHTML += `<button class="page-btn ${active}" onclick="changePage(${i})">${i}</button>`;
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationHTML += `<span class="page-dots">...</span>`;
            }
            paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
        }

        // Next button
        if (currentPage < totalPages) {
            paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">›</button>`;
        }

        paginationHTML += '</div>';
        paginationContainer.innerHTML = paginationHTML;
    }

    // Change page function (global scope for onclick)
    window.changePage = function (page) {
        currentPage = page;
        displayResults();
        // Scroll to results
        document.getElementById('bearings-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Reset search
    function resetSearch() {
        bearingNumberInput.value = '';
        innerDiameterInput.value = '';
        outerDiameterInput.value = '';
        bearingTypeSelect.value = '';
        filteredBearings = [];
        currentPage = 1;

        const lang = html.getAttribute('lang');
        const t = translations[lang];

        resultsContainer.innerHTML = `
            <div class="results-placeholder" data-i18n="results_placeholder">
                ${t.results_placeholder}
            </div>
        `;
        resultsSummary.innerHTML = '';
        paginationContainer.innerHTML = '';
    }

    // Event listeners
    if (searchBtn) {
        searchBtn.addEventListener('click', searchBearings);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', resetSearch);
    }

    // Search on Enter key
    [bearingNumberInput, innerDiameterInput, outerDiameterInput].forEach(input => {
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') searchBearings();
            });
        }
    });

    // Load bearings data when page loads
    loadBearingsData();

    // Simple QR Code Placeholder Generator
    const qrContainer = document.getElementById('qr-code-container');
    if (qrContainer) {
        const canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 100, 100);

        ctx.fillStyle = '#000000';
        for (let i = 0; i < 100; i++) {
            const x = Math.floor(Math.random() * 10) * 10;
            const y = Math.floor(Math.random() * 10) * 10;
            ctx.fillRect(x, y, 10, 10);
        }

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

    // Scroll Animation with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.feature-card, .step-item, .step-arrow, .testimonial-card, .section-header, .demo-box, .download-box');

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Image lazy loading animation
    const images = document.querySelectorAll('.hero-visual img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });

    // Custom Smooth Scroll with Easing
    function smoothScrollTo(targetPosition, duration = 1200) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function easeInOutCubic(t) {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Enhanced Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                // Button press animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);

                // Calculate target position
                const headerOffset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

                // Smooth scroll
                smoothScrollTo(targetPosition, 1200);

                // Pulse animation on target
                setTimeout(() => {
                    target.style.animation = 'pulse 0.6s ease';
                    setTimeout(() => {
                        target.style.animation = '';
                    }, 600);
                }, 800);
            }
        });
    });

    // Scroll indicator
    let scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '↓';
    document.body.appendChild(scrollIndicator);

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        scrollIndicator.classList.add('visible');

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            scrollIndicator.classList.remove('visible');
        }, 1000);
    });
});
