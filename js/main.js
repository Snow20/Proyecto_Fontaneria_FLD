document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. idioma switcher y diccionario

    const translations = {
        'gl': {
            // Navegación
            'nav_inicio': 'Inicio',
            'nav_servizos': 'Servizos',
            'nav_urxencias_sub': 'Urxencias 24h',
            'nav_reformas_sub': 'Reformas e Instalacións',
            'nav_empresa': 'Empresa',
            'nav_contacto': 'Contacto',
            'nav_faq': 'FAQ',
            'btn_urxencias': 'Urxencias 24h',
            'btn_orzamento': 'Orzamento',

            // Banner Hero
            'banner_title': 'Fontanaría Fernando López Díaz',
            'banner_subtitle': 'O valor dos nosos servizos e calidade. Texto texto máis texto.',

            // Tarjetas de servicios principales
            'card_urxencias': 'Urxencias 24h',
            'card_reparacions': 'Reparacións',
            'card_reformas': 'Reformas',
            'card_calefaccion': 'Calefaccións',

            // Sección Cobertura
            'coverage_title': 'Cobertura local',
            'coverage_subtitle': 'Zonas / Horarios',
            'coverage_location': 'Sofán, Carballo, Bergantiños',
            'coverage_schedule': 'Horarios: L-V 08:00 - 20:00',
            'coverage_urgent': 'Atención urxente 24/7',

            // Filtros e Ordenación (servizos.html)
            'filter_label': 'Filtrados combinados:',
            'filter_all': 'Todas',
            'filter_urxencias': 'Urxencias',
            'filter_reparacions': 'Reparacións',
            'filter_reformas': 'Reformas',
            'filter_calefaccion': 'Calefacción',
            'filter_instalacions': 'Instalacións',
            'filter_mantemento': 'Mantemento',
            'sort_default': 'ORZAMENTO',
            'sort_asc': 'Prezo: Menor a Maior',
            'sort_desc': 'Prezo: Maior a Menor',

            // Tarxetas de Catálogo (servizos.html)
            'servizo_1_btn': 'Servizo 1 - 50€<br>Urxencias 24h',
            'servizo_2_btn': 'Servizo 2 - 120€<br>Reparacións de fugas',
            'servizo_3_btn': 'Servizo 3 - 350€<br>Instalacións Sanitaria',
            'servizo_4_btn': 'Servizo 4 - 80€<br>Calefacción',
            'servizo_5_btn': 'Servizo 5 - 200€<br>Reforma Integrais',
            'servizo_6_btn': 'Servizo 6 - 400€<br>Mantemento',

            // Estado de baleiro
            'empty_tag': 'ESTADO DE BALEIRO #no_results',
            'empty_text': 'Non se atoparon servizos',

            // Urxencias (servizos/urxencias.html)
            'urg_banner_title': 'Urxencias <span>24 horas</span>',
            'urg_banner_sub': 'Atención inmediata os 365 días do ano.',
            'urg_badge_1': 'Resposta Rápida',
            'urg_badge_2': 'Profesionais Cualificados',
            'urg_badge_3': 'Atención Inmediata',
            'urg_call_btn': 'Chamar agora: 600 000 000',
            'urg_availability': 'Estamos dispoñibles 24/7',
            'urg_services_title': 'Os nosos servizos de urxencia',
            'urg_card1_title': 'Fugas e roturas',
            'urg_card2_title': 'Avaría de caldeira',
            'urg_card3_title': 'Calefacción',
            'btn_more_info': 'Máis info',
            'urg_steps_title': 'Guía visual: 3 pasos sinxelos',
            'urg_step1_title': 'Contacta connosco:',
            'urg_step1_text': 'Chámanos ou escríbenos',
            'urg_step2_title': 'Avaliamos o problema:',
            'urg_step2_text': 'Un técnico avaliará a avaría e propoñerá a mellor solución.',
            'urg_step3_title': 'Solucionamos rapidamente:',
            'urg_step3_text': 'Acudimos ao teu domicilio e resolvemos o problema.',
            'urg_feat_1': 'Garantía de calidade',
            'urg_feat_2': 'Cobertura local',
            'urg_feat_3': '365 días do ano',
            'urg_feat_4': 'Prezos transparentes',

            // Empresa (empresa.html)
            'empresa_hero_title': 'Sobre Nós -<br>Fontanaría Fernando López',
            'empresa_hero_subtitle': 'Experiencia e proximidade en Bergantiños',
            'empresa_hero_desc1': 'Máis de 15 anos prestando servizos técnicos de fontanaría, calefacción e reformas en Sofán, Carballo e toda a comarca.',
            'empresa_hero_desc2': 'Trato directo sen intermediarios, presupostos transparentes e solucións rápidas.',
            'empresa_card1_title': 'Carné Oficial',
            'empresa_card1_desc': 'Instalador autorizado de auga e calefacción.',
            'empresa_card2_title': 'Rexistro Industrial',
            'empresa_card2_desc': 'Empresa habilitada segundo a normativa vixente.',
            'empresa_card3_title': 'Atención Local',
            'empresa_card3_desc': 'Sofán, Carballo e municipios limítrofes.',
            'empresa_cta_title': 'Necesitas un orzamento ou asistencia técnica?',
            'empresa_cta_desc': 'Contacta connosco e responderemos nun prazo máximo de 24 horas.',

            // Reformas (servizos/reformas.html)
            'ref_card1_title': 'Particulares Baños e cociñas',
            'ref_card2_title': 'Comunidade Baixantes e redes',
            'ref_table_title': 'TÁBOA TÉCNICA DE MATERIAIS HOMOLOGADOS',
            'ref_th_material': 'Material',
            'ref_th_spec': 'Especificación',
            'ref_th_norm': 'Normativa',
            'ref_row1_mat': 'Tubería Cobre / PEX',
            'ref_row2_mat': 'Panel illante',
            'ref_row2_spec': 'Resistencia Térmica R3',



            // Opciones de formulario (contacto.html)
            'select_default': 'Seleccionar opción',
            'opt_manan': 'Mañá (08:00 - 14:00)',
            'opt_tarde': 'Tarde (14:00 - 20:00)',
            'opt_urxente': 'Indiferente / Urxente',
            'opt_urxencias_24h': 'Urxencias 24h',
            'opt_reparacions': 'Reparacións',
            'opt_instalacions': 'Instalacións',
            'opt_calefaccion': 'Calefacción',
            'opt_reformas': 'Reformas',
            'opt_mantemento': 'Mantemento',
            'privacy_accept': 'Lin e acepto a política de privacidade e os termos de servizo.',

            // Formulario de Contacto
            'contact_title': 'Contactanos',
            'label_nome': 'NOME E APELIDO',
            'label_telefono': 'TELÉFONO',
            'label_email': 'CORREO ELECTRÓNICO',
            'label_servizo': 'TIPO SERVIZO',
            'label_horario': 'HORARIO',
            'label_orzamento': 'ORZAMENTO',
            'label_mensaxe': 'MENSAXE',
            'placeholder_nome': 'O teu nome completo',
            'placeholder_telefono': '+34 000 000 000',
            'placeholder_email': 'exemplo@correo.com',
            'placeholder_mensaxe': 'En que podemos axudarche?',
            'contact_btn': 'ENVIAR MENSAXE',

            // Pie de página e Legal
            'footer_copyright': '© 2026 FLD. Todos os dereitos reservados.',
            'legal_aviso': 'Aviso Legal',
            'legal_privacidade': 'Privacidade',
            'legal_cookies': 'Cookies'
        },
        'es': {
            // Navegación
            'nav_inicio': 'Inicio',
            'nav_servizos': 'Servicios',
            'nav_urxencias_sub': 'Urgencias 24h',
            'nav_reformas_sub': 'Reformas e Instalaciones',
            'nav_empresa': 'Empresa',
            'nav_contacto': 'Contacto',
            'nav_faq': 'FAQ',
            'btn_urxencias': 'Urgencias 24h',
            'btn_orzamento': 'Presupuesto',

            // Banner Hero
            'banner_title': 'Fontanería Fernando López Díaz',
            'banner_subtitle': 'El valor de nuestros servicios y calidad. Texto texto más texto.',

            // Tarjetas de servicios principales
            'card_urxencias': 'Urgencias 24h',
            'card_reparacions': 'Reparaciones',
            'card_reformas': 'Reformas',
            'card_calefaccion': 'Calefacción',

            // Sección Cobertura
            'coverage_title': 'Cobertura local',
            'coverage_subtitle': 'Zonas / Horarios',
            'coverage_location': 'Sofán, Carballo, Bergantiños',
            'coverage_schedule': 'Horarios: L-V 08:00 - 20:00',
            'coverage_urgent': 'Atención urgente 24/7',

            // Filtros y Ordenación (servizos.html)
            'filter_label': 'Filtros combinados:',
            'filter_all': 'Todas',
            'filter_urxencias': 'Urgencias',
            'filter_reparacions': 'Reparaciones',
            'filter_reformas': 'Reformas',
            'filter_calefaccion': 'Calefacción',
            'filter_instalacions': 'Instalaciones',
            'filter_mantemento': 'Mantenimiento',
            'sort_default': 'PRESUPUESTO',
            'sort_asc': 'Precio: Menor a Mayor',
            'sort_desc': 'Precio: Mayor a Menor',

            // Tarjetas de Catálogo (servizos.html)
            'servizo_1_btn': 'Servicio 1 - 50€<br>Urgencias 24h',
            'servizo_2_btn': 'Servicio 2 - 120€<br>Reparaciones de fugas',
            'servizo_3_btn': 'Servicio 3 - 350€<br>Instalaciones Sanitarias',
            'servizo_4_btn': 'Servicio 4 - 80€<br>Calefacción',
            'servizo_5_btn': 'Servicio 5 - 200€<br>Reformas Integrales',
            'servizo_6_btn': 'Servicio 6 - 400€<br>Mantenimiento',

            // Estado vacío
            'empty_tag': 'ESTADO VACÍO #no_results',
            'empty_text': 'No se encontraron servicios',

            // Urgencias (servizos/urxencias.html)
            'urg_banner_title': 'Urgencias <span>24 horas</span>',
            'urg_banner_sub': 'Atención inmediata los 365 días del año.',
            'urg_badge_1': 'Respuesta Rápida',
            'urg_badge_2': 'Profesionales Cualificados',
            'urg_badge_3': 'Atención Inmediata',
            'urg_call_btn': 'Llamar ahora: 600 000 000',
            'urg_availability': 'Estamos disponibles 24/7',
            'urg_services_title': 'Nuestros servicios de urgencia',
            'urg_card1_title': 'Fugas y roturas',
            'urg_card2_title': 'Avería de caldera',
            'urg_card3_title': 'Calefacción',
            'btn_more_info': 'Más info',
            'urg_steps_title': 'Guía visual: 3 pasos sencillos',
            'urg_step1_title': 'Contacta con nosotros:',
            'urg_step1_text': 'Llámanos o escríbenos',
            'urg_step2_title': 'Evaluamos el problema:',
            'urg_step2_text': 'Un técnico evaluará la avería y propondrá la mejor solución.',
            'urg_step3_title': 'Solucionamos rápidamente:',
            'urg_step3_text': 'Acudimos a tu domicilio y resolvemos el problema.',
            'urg_feat_1': 'Garantía de calidad',
            'urg_feat_2': 'Cobertura local',
            'urg_feat_3': '365 días del año',
            'urg_feat_4': 'Precios transparentes',

            'ref_card1_title': 'Particulares Baños y cocinas',
            'ref_card2_title': 'Comunidad Bajantes y redes',
            'ref_table_title': 'TABLA TÉCNICA DE MATERIALES HOMOLOGADOS',
            'ref_th_material': 'Material',
            'ref_th_spec': 'Especificación',
            'ref_th_norm': 'Normativa',
            'ref_row1_mat': 'Tubería Cobre / PEX',
            'ref_row2_mat': 'Panel aislante',
            'ref_row2_spec': 'Resistencia Térmica R3',

            // Empresa (empresa.html)
            'empresa_hero_title': 'Sobre Nosotros -<br>Fontanería Fernando López',
            'empresa_hero_subtitle': 'Experiencia y cercanía en Bergantiños',
            'empresa_hero_desc1': 'Más de 15 años prestando servicios técnicos de fontanería, calefacción y reformas en Sofán, Carballo y toda la comarca.',
            'empresa_hero_desc2': 'Trato directo sin intermediarios, presupuestos transparentes y soluciones rápidas.',
            'empresa_card1_title': 'Carnet Oficial',
            'empresa_card1_desc': 'Instalador autorizado de agua y calefacción.',
            'empresa_card2_title': 'Registro Industrial',
            'empresa_card2_desc': 'Empresa habilitada según la normativa vigente.',
            'empresa_card3_title': 'Atención Local',
            'empresa_card3_desc': 'Sofán, Carballo y municipios limítrofes.',
            'empresa_cta_title': '¿Necesitas un presupuesto o asistencia técnica?',
            'empresa_cta_desc': 'Contacta con nosotros y responderemos en un plazo máximo de 24 horas.',

            // Opciones de formulario (contacto.html)
            'select_default': 'Seleccionar opción',
            'opt_manan': 'Mañana (08:00 - 14:00)',
            'opt_tarde': 'Tarde (14:00 - 20:00)',
            'opt_urxente': 'Indiferente / Urgente',
            'opt_urxencias_24h': 'Urgencias 24h',
            'opt_reparacions': 'Reparaciones',
            'opt_instalacions': 'Instalaciones',
            'opt_calefaccion': 'Calefacción',
            'opt_reformas': 'Reformas',
            'opt_mantemento': 'Mantenimiento',
            'privacy_accept': 'Leí y acepto la política de privacidad y los términos de servicio.',

            // Formulario de Contacto
            'contact_title': 'Contáctanos',
            'label_nome': 'NOMBRE Y APELLIDOS',
            'label_telefono': 'TELÉFONO',
            'label_email': 'CORREO ELECTRÓNICO',
            'label_servizo': 'TIPO SERVICIO',
            'label_horario': 'HORARIO',
            'label_orzamento': 'PRESUPUESTO',
            'label_mensaxe': 'MENSAJE',
            'placeholder_nome': 'Tu nombre completo',
            'placeholder_telefono': '+34 000 000 000',
            'placeholder_email': 'ejemplo@correo.com',
            'placeholder_mensaxe': '¿En qué podemos ayudarte?',
            'contact_btn': 'ENVIAR MENSAJE',

            // Pie de página e Legal
            'footer_copyright': '© 2026 FLD. Todos los derechos reservados.',
            'legal_aviso': 'Aviso Legal',
            'legal_privacidade': 'Privacidad',
            'legal_cookies': 'Cookies'
        }
    };

    const changeLanguage = (lang) => {
        if (!translations[lang]) return;
        localStorage.setItem('preferredLang', lang);

        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        const langButtons = document.querySelectorAll('.lang-switch-pill .btnIdioma');
        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang') || (btn.textContent.trim().toLowerCase() === 'gal' ? 'gl' : 'es');
            if (btnLang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    const initLanguageSwitcher = () => {
        const langButtons = document.querySelectorAll('.lang-switch-pill .btnIdioma');
        if (!langButtons.length) return;

        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang') || (button.textContent.trim().toLowerCase() === 'gal' ? 'gl' : 'es');
                changeLanguage(lang);
            });
        });

        const savedLang = localStorage.getItem('preferredLang') || 'gl';
        changeLanguage(savedLang);
    };


    // 2. Modulo de filtros(servizos.html)

    const initServicesCatalog = () => {
        const filterButtons = document.querySelectorAll('.filterBtn');
        const sortSelect = document.getElementById('sortPrice') || document.querySelector('.sortSelect');
        const cardsContainer = document.querySelector('.sectionGrilla .grilla');
        const emptyState = document.querySelector('.emptyState');

        if (!cardsContainer || !filterButtons.length) return;

        const cards = Array.from(cardsContainer.querySelectorAll('.card'));
        let currentCategory = 'all';
        let currentSort = 'default';

        const updateCatalog = () => {
            let visibleCount = 0;

            // Filtrado por categoría
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const isMatch = (currentCategory === 'all' || cardCategory === currentCategory);

                if (isMatch) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Ordenación de elementos visibles
            const visibleCards = cards.filter(card => !card.classList.contains('hidden'));

            if (currentSort !== 'default') {
                visibleCards.sort((a, b) => {
                    const priceA = parseFloat(a.getAttribute('data-price')) || 0;
                    const priceB = parseFloat(b.getAttribute('data-price')) || 0;
                    return currentSort === 'asc' ? priceA - priceB : priceB - priceA;
                });

                visibleCards.forEach(card => cardsContainer.appendChild(card));
            }

            // Gestión del estado vacío
            if (emptyState) {
                if (visibleCount === 0) {
                    emptyState.classList.remove('hidden');
                } else {
                    emptyState.classList.add('hidden');
                }
            }
        };

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active-filter'));
                button.classList.add('active-filter');
                currentCategory = button.getAttribute('data-category') || 'all';
                updateCatalog();
            });
        });

        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                updateCatalog();
            });
        }

        // Recuperación de parámetros URL
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('cat');

        if (categoryParam) {
            const targetBtn = document.querySelector(`.filterBtn[data-category="${categoryParam}"]`);
            if (targetBtn) {
                targetBtn.click();
            }
        }
    };


    // 3. Auto-seleccion en formulario (contacto.html)

    const initContactAutoFill = () => {
        const selectServizo = document.getElementById('tipoServizo');
        if (!selectServizo) return;

        const urlParams = new URLSearchParams(window.location.search);
        const servicioParam = urlParams.get('servicio') || urlParams.get('cat');

        if (servicioParam) {
            const matchingOption = Array.from(selectServizo.options).find(
                option => option.value.toLowerCase() === servicioParam.toLowerCase()
            );

            if (matchingOption) {
                selectServizo.value = matchingOption.value;
            }
        }
    };


    // 4. Preguntas frecuentes (faq.html)

    const initFAQAccordion = () => {
        const faqItems = document.querySelectorAll('.faqItem');
        if (!faqItems.length) return;

        faqItems.forEach(item => {
            item.addEventListener('toggle', () => {
                if (item.open) {
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.open) {
                            otherItem.open = false;
                        }
                    });
                }
            });
        });
    };


    // 5. Validacion del form de contacto

    const initContactFormValidation = () => {
        const contactForm = document.querySelector('.contactoForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            const checkboxPrivacidade = document.getElementById('privacidade');

            if (checkboxPrivacidade && !checkboxPrivacidade.checked) {
                e.preventDefault();
                alert('Debes aceptar a política de privacidade para enviar a mensaxe.');
                checkboxPrivacidade.focus();
            }
        });
    };


    // 6. Busqueda y ordenacion de tablas (reformas.html)

    const initInteractiveTable = () => {
        const searchInput = document.getElementById('tableSearch');
        const table = document.getElementById('techTable');
        if (!table) return;

        const tbody = table.querySelector('tbody');
        const headers = table.querySelectorAll('th.sortable');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const rows = tbody.querySelectorAll('tr');

                rows.forEach(row => {
                    const rowText = row.textContent.toLowerCase();
                    row.style.display = rowText.includes(query) ? '' : 'none';
                });
            });
        }

        headers.forEach(header => {
            header.addEventListener('click', () => {
                const colIndex = parseInt(header.getAttribute('data-column'), 10);
                const isAscending = !header.classList.contains('asc');

                headers.forEach(h => h.classList.remove('asc', 'desc'));
                header.classList.add(isAscending ? 'asc' : 'desc');

                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort((rowA, rowB) => {
                    const cellA = rowA.children[colIndex].textContent.trim().toLowerCase();
                    const cellB = rowB.children[colIndex].textContent.trim().toLowerCase();

                    return isAscending
                        ? cellA.localeCompare(cellB, 'gl', { numeric: true })
                        : cellB.localeCompare(cellA, 'gl', { numeric: true });
                });

                rows.forEach(row => tbody.appendChild(row));
            });
        });
    };


    // 7. Menu hamburguesa

    const initMobileMenu = () => {
        const menuToggle = document.getElementById('menuToggle');
        const mainNav = document.getElementById('mainNav');

        if (!menuToggle || !mainNav) return;

        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-active');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('nav-active');
            }
        });
    };


    // Toggle button (servizos)

    const initMobileDropdown = () => {
        const parentLinks = document.querySelectorAll('.nav .hasDropdown > a');

        parentLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const isMobile = window.matchMedia('(max-width: 768px)').matches;

                if (isMobile) {
                    const parentLi = link.parentElement;

                    // Si el menú está cerrado, cancela la redirección y despliega las opciones
                    if (!parentLi.classList.contains('dropdown-open')) {
                        e.preventDefault();
                        e.stopPropagation();
                        parentLi.classList.add('dropdown-open');
                    }
                    // Si el menú ya está visible, permite la navegación normal a servizos.html
                }
            });
        });
    };

    // Invocar dentro del bloque de inicializaciones globales
    initMobileDropdown();


    // 8. Mapa interactivo(index.html)

    const initMap = () => {
        const mapContainer = document.getElementById('mapaCobertura');
        if (!mapContainer || typeof L === 'undefined') return;

        const map = L.map('mapaCobertura').setView([43.2128, -8.6911], 12);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            maxZoom: 18
        }).addTo(map);

        L.marker([43.2128, -8.6911]).addTo(map)
            .bindPopup('<b>Fontanaría FLD</b><br>Sofán, Carballo')
            .openPopup();
    };

    // Inicializacion global de modulos
    initLanguageSwitcher();
    initServicesCatalog();
    initContactAutoFill();
    initFAQAccordion();
    initContactFormValidation();
    initInteractiveTable();
    initMobileMenu();
    initMap();
});