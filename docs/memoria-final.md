# Memoria Final do Proxecto: Fontanaría FLD

## 1. Portada e Datos do Proxecto
* **Título do Proxecto**: Desenvolvemento e Publicación da Plataforma Web Fontanaría FLD
* **Entidade / Cliente**: Fernando López Díaz (Fontanaría FLD)
* **Autor**: Carlos Nieves
* **Data de Dicionamento**: Setembro 2026
* **Versión**: 1.0.0 (Produción)
* **Aloxamento**: Cloudflare Pages
* **Repositorio**: GitHub (`Snow20/Proyecto_Fontaneria_FLD`)

---

## 2. Tema, Problema, Público e Obxectivos
* **Tema**: Plataforma web corporativa e catálogo interactivo de servizos de fontanaría, calefacción e reformas na comarca de Bergantiños.
* **Problema**: Ausencia de presencia dixital centralizada para a captación de clientes locais e falta dunha canle rápida de contacto para urxencias 24 horas sen intermediarios.
* **Público Obxectivo**: Residentes particulares, comunidades de propietarios e empresas de Sofán, Carballo, A Laracha, Malpica e concellos limítrofes.
* **Obxectivos Principais**:
  * Desplegar unha web estática de alto rendemento con tempos de carga sub-segundo.
  * Garantir accesibilidade total (WCAG 2.1 AA) e conformidade estrita cos estándares W3C.
  * Implementar internacionalización (Galego / Castelán) con preferencia persistente.
  * Ofrecer un formulario de contacto accesible con autovalidación en tempo real.

---

## 3. Alcance, Páxinas e Funcionalidades Desenvolvidas
O sitio web consta de **9 vistas independentes** maquetadas e funcionais:

| Páxina | Funcionalidade Principal |
| :--- | :--- |
| `index.html` | Cabecera dinámica, servizos destacados, mapa de cobertura e chamadas á acción urxente. |
| `servizos.html` | Catálogo completo con filtrado combinado por categoría e ordenación por rango de prezo. |
| `servizos/urxencias.html` | Lóxica e guía paso a paso para atención inmediata 24/7. |
| `servizos/reformas.html` | Información técnica de reformas e táboa de materiais homologados con ordenación dinámica. |
| `empresa.html` | Acreditacións oficiais, carné de instalador e información corporativa. |
| `contacto.html` | Formulario con autovalidación en tempo real (`input`/`blur`), regex de 9 díxitos e modal LOPDGDD. |
| `faq.html` | Acordeón accesible de preguntas frecuentes mediante elementos `<details>` e `<summary>`. |
| `legal.html` | Textos legais e política de privacidade completa. |
| `404.html` | Páxina de erro personalizada xestionada automaticamente polo servidor. |

---

## 4. Resumo das Fases do Proxecto
1. **Fase de Análise e Arquitectura**: Definición do sitemap, estratexia de contidos locais e estrutura de ficheiros sen dependencias pesadas.
2. **Fase de Deseño UX/UI**: Creación de compoñentes responsive, paleta de cores de alta visibilidade (`#0A2540`, `#0077FF`, `#D9381E`) e maquetación mediante CSS Grid e Flexbox.
3. **Fase de Desenvolvemento**: Implementación de marcado semántico HTML5, folla de estilos global (`css/styles.css`), lóxica JS modular (`js/main.js`) e integración de mapas con Leaflet.js.
4. **Fase de Optimización e Despregamento**: Limpeza W3C, auditoría Lighthouse (90+), configuración de `sitemap.xml`, `robots.txt` e automatización de *builds* en Cloudflare Pages via Git.

---

## 5. Tecnoloxías e Ferramentas Utilizadas
* **Linguaxes**: HTML5 Semántico, CSS3 (Custom Properties), JavaScript Vanilla (ES6).
* **Librarías Externas**: Leaflet.js v1.9.4 (mapas interactivos).
* **Herramentas de Desenvolvemento e Contorno**: Visual Studio Code, Git, GitHub.
* **Plataforma de Aloxamento**: Cloudflare Pages (HTTPS / Edge CDN).
* **Validadores e Auditoría**: W3C Nu HTML Checker, W3C CSS Validator, Google Lighthouse, Chrome DevTools.

---

## 6. Principais Decisións Tomadas
* **Arquitectura Estática sen Frameworks**: Selección de Vanilla JS e HTML/CSS puros para eliminar o peso de empaquetadores, garantindo un rendemento do 100% en dispositivos móbiles.
* **Internacionalización por LocalStorage**: Implementación dun dicionario JSON en `js/main.js` que aplica cambios de texto mediante atributos `data-key`, mantendo o idioma escollido ao navegar entre páxinas.
* **Posicionamento Absoluto no Menú Móbil**: Asignación de `position: absolute` ao menú despregable (`.headerNavGroup`) para illalo do fluxo Flexbox e evitar saltos visuais do botón hamburguesa (`.menuToggle`).

---

## 7. Probas Realizadas e Correccións Aplicadas
* **Validación W3C HTML/CSS**:
  * Eliminación de elementos `<span>` fillos directos de `<ul>` no rodapé.
  * Inclusión de encabezado `<h1>` principal en `servizos/reformas.html`.
  * Ranura de excepción documentada para 2 avisos no CDN externo `leaflet.css`.
* **Formulario e UX**:
  * Simplificación do patrón de teléfono a 9 díxitos (`pattern="[6789]\d{8}"`) e `placeholder="600000000"`.
  * Substitución do sistema de validación unicamente ao enviar por autovalidación en tempo real mediante eventos `input` e `blur`.
* **Auditoría Lighthouse (Móbil e Escritorio)**:
  * Puntuacións superiores a 90 en *Performance*, *Accessibility*, *Best Practices* e *SEO*.
  * Precarga de imaxes LCP, atributos `width`/`height` explícitos e directivas `rel="noopener"`.

---

## 8. Dificultades Atopadas e Solucións
* **Problema**: Desprazamento vertical do botón hamburguesa ao abrir o menú en móbil (*Layout Shift*).  
  **Solución**: Sacouse `.headerNavGroup` do fluxo principal do header aplicando `position: absolute` e un valor de `z-index` inferior ao botón.
* **Problema**: Bloqueo de validación no formulario de contacto polo uso de prefixo internacional `+34`.  
  **Solución**: Recompúxose o regex e o placeholder para esixir exclusivamente 9 díxitos e pouse a escoita de eventos dinámicos que limpan o erro no momento no que o usuario corrixe o dato.

---

## 9. Resultado Final e Valoración Persoal
O proxecto acadou un estado de madurez técnico excelente. Cumpre rigorosamente cos requisitos de accesibilidade, validación de código, velocidade de carga e deseño adaptativo. A plataforma está 100% operativa en produción, proporcionando unha ferramenta funcional e profesional para a actividade comercial de Fontanaría FLD.

---

## 10. Ligazóns do Proxecto
* **Sitio Web Publicado (HTTPS)**: https://proyecto-fontaneria-fld.pages.dev
* **Repositorio de GitHub**: https://github.com/Snow20/Proyecto_Fontaneria_FLD
* **Informe de Accesibilidade e Rendemento**: [informe-accesibilidade-rendemento.md](https://github.com/Snow20/Proyecto_Fontaneria_FLD/blob/main/docs/informe-accesibilidade-rendemento.md)
* **Guía de Mantemento Técnica**: [guia-mantemento.md](https://github.com/Snow20/Proyecto_Fontaneria_FLD/blob/main/docs/guia-mantemento.md)
* **Plan de Probas**: [plan-de-probas.md](https://github.com/Snow20/Proyecto_Fontaneria_FLD/blob/main/docs/plan-de-probas.md)