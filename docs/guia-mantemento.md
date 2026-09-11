**2. Contido para `docs/guia-mantemento.md`**

```markdown
# Guía de Mantemento Técnica

## 1. Modificación de Textos e Imaxes
* **Textos bilingües**: Edita o obxecto `translations` dentro de `js/main.js`. Modifica as claves correspondentes en `'gl'` e `'es'`. Non alteres os atributos `data-key` do marcado HTML.
* **Imaxes**: Engade os novos ficheiros en `assets/images/` preferiblemente en formato WebP. Define sempre os atributos `width`, `height` e `alt` no HTML.

## 2. Engadir ou Actualizar Contidos
* **Catálogo de servizos (`servizos.html`)**: Para engadir unha nova tarxeta, mantén a estrutura `<article class="card">` e define os atributos `data-category` e `data-price`.
* **Preguntas frecuentes (`faq.html`)**: Engade un novo bloque `<details class="faqItem">` coa súa clave `data-key` e a súa correspondente tradución en `js/main.js`.

## 3. Revisión de Ligazóns e Formularios
* **Formulario**: O patrón de validación do teléfono está definido en `contacto.html` como `pattern="[6789]\d{8}"` e xestionado por eventos `input` e `blur` en `js/main.js`.
* **Enlaces internos**: As páxinas situadas no cartafol `servizos/` deben empregar `../` para acceder aos ficheiros da raíz (`../contacto.html`, `../css/styles.css`).

## 4. Publicación dunha Nova Versión
O despregamento é automático tras enviar os cambios á rama principal de GitHub:
```bash
git add .
git commit -m "fix/feat: descrición dos cambios"
git push origin main


Autoría e Versión
Autor: Carlos Nieves

Data: Setembro 2026

Versión: 1.0.0