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
  PLANTILLA: REGISTRO CARCELARIO (Guardia de Everlund)

  Uso: Presos detenidos por la Guardia de la ciudad, no por la Orden.
  Ejemplos: Capitán Tan, Gruñido Lunar, Korrin, Sor Vadria, Azul, Glup-Glup, Kael'Vorn.

  Instrucciones:
  1. Copiar este archivo y renombrarlo (ej: capitan-tan.md)
  2. Actualizar el frontmatter (title, expediente, resumen)
  3. Rellenar todos los campos marcados con [PLACEHOLDER]
  4. Añadir imagen cuando esté disponible
  5. Eliminar este comentario
-->

<div class="doc-classified doc-carcelario">
  <div class="doc-header">
    <div class="classification-bar">
      <span class="seal-rune">◈</span>
      <span class="classification-text">REGISTRO CARCELARIO • GUARDIA DE EVERLUND</span>
      <span class="seal-rune">◈</span>
    </div>
    <div class="doc-code">EXPEDIENTE E-PR-XXX</div>
  </div>

  <div class="doc-meta">
    <div class="meta-row">
      <span class="meta-label">Registrado por:</span> Guardia de Everlund
    </div>
    <div class="meta-row">
      <span class="meta-label">Fecha de ingreso:</span> [DD] de [Mes], 1484 CdD
    </div>
    <div class="meta-row">
      <span class="meta-label">Magistrado:</span> {% pj "hirian" %}Hirian Stagg{% endpj %}
    </div>
  </div>

  <div class="exp-header">
    <div class="exp-meta">
      <p><span class="exp-label">Nombre:</span> [Nombre completo o alias conocido]</p>
      <p><span class="exp-label">Número de expediente:</span> E-PR-XXX</p>
      <p><span class="exp-label">Raza:</span> [Raza]</p>
      <p><span class="exp-label">Sexo:</span> [Masculino/Femenino]</p>
      <p><span class="exp-label">Edad:</span> [Edad aproximada]</p>
      <p><span class="exp-label">Procedencia:</span> [Lugar de origen o último domicilio conocido]</p>
      <p><span class="exp-label">Cargo:</span> [Delito o crimen por el que fue detenido]</p>
      <p><span class="exp-label">Sentencia:</span> [Condena impuesta o "Pendiente de juicio"]</p>
      <p><span class="exp-label">Estado actual:</span> [Detenido / Vinculado / Transferido a la Orden]</p>
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

### Circunstancias del arresto

[Descripción de cómo y por qué fue detenido. Incluir fecha aproximada, lugar, testigos si los hubo, y cualquier detalle relevante. 1-2 párrafos.]

### Aptitudes conocidas

- **[Aptitud 1]:** [Descripción breve de habilidades o conocimientos útiles]
- **[Aptitud 2]:** [Descripción breve]

### Notas de comportamiento

- [Observación 1 sobre el comportamiento del preso durante su estancia]
- [Observación 2]
- [Incidentes notables si los hubo]

### Observaciones

<div class="recommendation-box">
  <p>[Comentarios adicionales del oficial de guardia o notas relevantes para futuros custodios.]</p>
</div>

<div class="doc-footer">
  <div class="signature-simple">
    <span class="signature-name">{% pj "kareth" %}Kareth Durgaut{% endpj %}</span>
    <span class="signature-title">Capitán de la Guardia de Everlund</span>
  </div>
  <div class="doc-archive-note">
    Archivado en los registros de la Guardia de Everlund
  </div>
</div>
