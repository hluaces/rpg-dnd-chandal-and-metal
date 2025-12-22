---
layout: layouts/page.njk
title: '[NOMBRE DEL PRESO] (E-PR-XXX)'
tags: ["presos"]
expediente: E-PR-XXX
resumen: Breve descripción del preso para el listado (1-2 líneas).
eleventyExcludeFromCollections: true
permalink: false
---

<!--
  PLANTILLA: EXPEDIENTE MILITAR (Orden del Martillo Carmesí)

  Uso: Presos traídos o gestionados directamente por la Orden.
  Ejemplos: Xenna Fuego de Ónice, La Duquesa (esta última tiene estilo propio).

  Instrucciones:
  1. Copiar este archivo y renombrarlo (ej: xenna-fuego-de-onice.md)
  2. Actualizar el frontmatter (title, expediente, resumen)
  3. Rellenar todos los campos marcados con [PLACEHOLDER]
  4. Elegir nivel de amenaza: BAJO, MODERADO, ALTO o CRÍTICO
  5. Añadir imagen cuando esté disponible
  6. Eliminar este comentario
-->

<div class="doc-classified">
  <div class="doc-header">
    <div class="classification-bar">
      <span class="seal-rune">◈</span>
      <span class="classification-text">EXPEDIENTE MILITAR • ORDEN DEL MARTILLO CARMESÍ</span>
      <span class="seal-rune">◈</span>
    </div>
    <div class="doc-code">EXPEDIENTE E-PR-XXX</div>
    <!-- Niveles: threat-badge--bajo, threat-badge--moderado, threat-badge--alto, threat-badge--critico -->
    <div class="threat-badge threat-badge--alto">
      <span class="threat-icon">⚠</span>
      AMENAZA ALTA
      <span class="threat-icon">⚠</span>
    </div>
  </div>

  <div class="doc-meta">
    <div class="meta-row">
      <span class="meta-label">Registrado por:</span> [Primer Inquisidor Brel / Capellán Helra Vaun] • Orden del Martillo Carmesí
    </div>
    <div class="meta-row">
      <span class="meta-label">Fecha de registro:</span> [DD] de [Mes], 1484 CdD
    </div>
    <div class="meta-row">
      <span class="meta-label">Nivel de acceso:</span> ⬢⬢⬢ (Oficiales)
    </div>
  </div>

  <div class="exp-header">
    <div class="exp-meta">
      <p><span class="exp-label">Nombre:</span> [Nombre completo o alias conocido]</p>
      <p><span class="exp-label">Número de expediente:</span> E-PR-XXX</p>
      <p><span class="exp-label">Raza:</span> [Raza]</p>
      <p><span class="exp-label">Sexo:</span> [Masculino/Femenino/Desconocido]</p>
      <p><span class="exp-label">Edad:</span> [Edad aproximada o exacta]</p>
      <p><span class="exp-label">Origen:</span> [Lugar de procedencia]</p>
      <p><span class="exp-label">Motivo de detención:</span> [Crimen o razón de encarcelamiento]</p>
      <p><span class="exp-label">Estado actual:</span> [Detenido / Vinculado / En contención especial]</p>
      <p><span class="exp-label">Utilidad prevista:</span> [Uso potencial para la Orden]</p>
    </div>
    <!-- Descomentar cuando haya imagen disponible -->
    <!--
    <div class="img-frame img-frame--right" style="max-width:200px;">
      <a href="/img/[nombre-imagen].png" target="_blank" rel="noopener">
        <img src="/img/[nombre-imagen].png" alt="Retrato de [nombre del preso]" />
      </a>
    </div>
    -->
  </div>
</div>

### Resumen

[Descripción general del preso: quién es, por qué está aquí, qué lo hace relevante para la Orden. 2-3 párrafos.]

### Aptitudes

- **[Aptitud 1]:** [Descripción breve de la habilidad o capacidad]
- **[Aptitud 2]:** [Descripción breve]
- **[Aptitud 3]:** [Descripción breve]

### Riesgos y control

- **[Riesgo 1]:** [Descripción del riesgo y cómo se mitiga]
- **[Riesgo 2]:** [Descripción]
- **Condiciones de contención:** [Descripción de la celda, restricciones, medidas especiales si las hay]

### Recomendación

<div class="recommendation-box">
  <p>[Recomendación del oficial sobre el uso o tratamiento del preso. Puede incluir condiciones para su liberación, uso en misiones, o precauciones a tomar.]</p>
</div>

<div class="doc-footer">
  <div class="signature-block">
    <div class="signature-line">
      <span class="signature-label">Firmado y sellado por:</span>
      <span class="signature-name">[Nombre del oficial]</span>
    </div>
    <div class="signature-location">Everlund, [DD] de [Mes], 1484 CdD</div>
    <div class="wax-seal" title="Sello de cera de la Orden del Martillo Carmesí">
      <span class="seal-symbol">⬢</span>
    </div>
  </div>
  <div class="doc-motto">
    <span class="motto-ornament">❖</span>
    "La guerra exige sacrificios; la victoria, herramientas"
    <span class="motto-ornament">❖</span>
  </div>
</div>
