# Informe de Accesibilidade e Rendemento (Fase S15)

**URL Produción**: https://proyecto-fontaneria-fld.pages.dev  
**Repositorio GitHub**: https://github.com/Snow20/Proyecto_Fontaneria_FLD  

---

## 1. Resultados das Comprobacións Automáticas

| Ferramenta / Proba | Métrica / Estado Inicial | Resultado Final | Estado |
| :--- | :--- | :--- | :--- |
| **Lighthouse: Rendemento (Desktop)** | 91 / 100 | **98 / 100** | Aprobado |
| **Lighthouse: Rendemento (Móbil)** | 51 / 100 | **95 / 100** | Aprobado |
| **Lighthouse: Accesibilidade** | 91 / 100 | **100 / 100** | Aprobado |
| **Lighthouse: Boas Prácticas** | 77 / 100 | **100 / 100** | Aprobado |
| **Lighthouse: SEO** | 83 / 100 | **100 / 100** | Aprobado |
| **W3C Nu HTML Checker (Tódalas páxinas)** | Erros de sintaxe e avisos | **0 Erros / 0 Advertencias** | Aprobado |
| **W3C CSS Validator (`css/styles.css`)** | 0 Erros | **0 Erros** | Aprobado |

---

## 2. Comprobacións Manuals Realizadas

* **Navegación por teclado e orde de foco**: Verificación manual con `Tab` e `Shift+Tab` en tódolos menús, formularios e enlaces. O anel de foco `:focus-visible` (3px) mantense visible e sen bloqueos.
* **Xestión de foco no modal LOPDGDD**: Comprobación do elemento `<dialog id="legalModal">` en `contacto.html`. O foco atrapase correctamente dentro da xanela ao abrirse e permite o peche directo mediante a tecla `Escape`.
* **Persistencia e cambio de idioma**: Proba manual de cambio de lingua (`GAL`/`ESP`) en `index.html` e navegación cara a `legal.html`. Verificouse que o script `js/main.js` le `localStorage` sen interromper a execución e aplica a tradución sen necesidade de cabecera duplicada.
* **Contraste de color e deseño táctil**: Revisión manual da lexibilidade dos textos sobre fondo escuro/claro e verificación de que tódolos elementos interactivos superan a área de contacto de 44px x 44px.
* **Comportamento responsive e adaptabilidade**: Proba en diferentes resolucións de pantalla (móbil, tablet e escritorio) sen detección de desbordamentos horizontais nin saltos visuais de maquetación (CLS: 0.00).

---

## 3. Correccións Realizadas

1. **Limpeza estrutural HTML5**:
   * Substitución de elementos `<section>` e `<article>` sen título por `<div>` en `servizos.html`, `index.html` e `servizos/urxencias.html`.
   * Eliminación de etiquetas `<span>` como fillas directas de `<ul>` no rodapé de tódalas páxinas.
   * Corrección da xerarquía de encabezados (`<h1>` único por vista e axuste de `<h3>` a `<h2>`).
2. **Optimización de recursos e SEO**:
   * Inclusión de etiquetas `<meta name="description">` únicas en tódalas vistas.
   * Eliminación de atributos `width="100%"` e `align="center"` obsoletos no `<iframe>` de Google Maps.
   * Atributos `rel="noopener"` engadidos nas ligazóns sociais externas.
3. **Corrección de rutas e tradución**:
   * Axuste de ligazóns no footer de `servizos/urxencias.html` e `servizos/reformas.html` a `../legal.html`.
   * Incorporación de claves do módulo FAQ e textos legais no diccionario de `js/main.js`.

---

## 4. Incidencias Pendentes

* **Libraría externa Leaflet CSS**: O validador do W3C indica 2 erros no ficheiro `unpkg.com/leaflet@1.9.4/dist/leaflet.css` debido a propiedades legadas de Internet Explorer (`behavior: url(#default#VML)`). O código fonte propio (`css/styles.css`) conta con 0 erros.