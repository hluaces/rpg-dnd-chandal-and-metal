---
layout: layouts/page.njk
title: 'Coleccionables'
---

<style>
.filter-bar {
  background: linear-gradient(to bottom, rgba(232, 220, 200, 0.4), rgba(205, 193, 168, 0.3));
  padding: 1.5rem;
  border: 2px solid var(--gold-dim);
  margin-bottom: 2rem;
  border-radius: 4px;
}

.filter-group {
  margin-bottom: 1rem;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-label {
  display: block;
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.9rem;
  color: var(--accent-strong);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.filter-input,
.filter-select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-family: 'Crimson Text', serif;
  font-size: 1rem;
  background: var(--paper);
  border: 2px solid var(--border);
  border-radius: 3px;
  color: var(--text);
  transition: border-color 0.2s;
}

.filter-input:focus,
.filter-select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.filter-select {
  cursor: pointer;
}

.collectible-grid {
  display: grid;
  gap: 1.5rem;
}

.collectible-card {
  background: linear-gradient(to bottom, var(--paper), var(--paper-dark)),
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0, 0, 0, 0.02) 2px, rgba(0, 0, 0, 0.02) 4px);
  border: 2px solid var(--border);
  border-top: 3px solid var(--gold-dim);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;
  display: block;
  position: relative;
}

.collectible-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.collectible-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.collectible-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 3px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid;
}

.tag-tipo {
  background: var(--accent-glow);
  border-color: var(--accent);
  color: var(--accent-strong);
}

.tag-tema {
  background: rgba(184, 144, 77, 0.1);
  border-color: var(--gold-dim);
  color: var(--gold-dim);
}

.collectible-meta {
  font-family: 'Crimson Text', serif;
  font-style: italic;
  color: var(--muted);
  font-size: 0.9rem;
}

.collectible-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: 1.3rem;
  color: var(--text);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.collectible-excerpt {
  font-family: 'Crimson Text', serif;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

.no-results {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--muted);
  font-style: italic;
}

.collectible-ornament {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: var(--gold-dim);
  opacity: 0.2;
  pointer-events: none;
}

@media (max-width: 768px) {
  .filter-bar {
    padding: 1rem;
  }

  .collectible-card {
    padding: 1rem;
  }

  .collectible-title {
    font-size: 1.1rem;
  }
}
</style>

<div class="hero">
  <p>Aquí se recopilan los documentos, textos, rumores y objetos que habéis encontrado durante vuestro viaje. Algunos ofrecen pistas sobre vuestra misión; otros, simplemente contexto sobre el mundo que os rodea.</p>
  <p style="margin: 0;">La Marca Carmesí os ata, pero el conocimiento puede liberaros… o condenar.</p>
</div>

<div class="filter-bar">
  <div class="filter-group">
    <label class="filter-label" for="search-input">Buscar</label>
    <input
      type="text"
      id="search-input"
      class="filter-input"
      placeholder="Buscar por título o contenido..."
      aria-label="Buscar coleccionables"
    >
  </div>

  <div class="filter-group">
    <label class="filter-label" for="tipo-filter">Filtrar por tipo</label>
    <select id="tipo-filter" class="filter-select" aria-label="Filtrar por tipo de coleccionable">
      <option value="">Todos los tipos</option>
      <option value="Hechizo">Hechizo</option>
      <option value="Documento Oficial">Documento Oficial</option>
      <option value="Libro">Libro</option>
      <option value="Rumores">Rumores</option>
      <option value="Pintada">Pintada</option>
    </select>
  </div>

  <div class="filter-group">
    <label class="filter-label" for="tema-filter">Filtrar por tema</label>
    <select id="tema-filter" class="filter-select" aria-label="Filtrar por tema">
      <option value="">Todos los temas</option>
      <option value="Vínculo Carmesí">Vínculo Carmesí</option>
    </select>
  </div>
</div>

<div id="collectible-container" class="collectible-grid">
  <a href="/coleccionables/vinculo-carmesi_1_hechizo-original/" class="collectible-card" data-tipo="Hechizo" data-tema="Vínculo Carmesí" data-sesion="0">
    <div class="collectible-ornament">◈</div>
    <div class="collectible-header">
      <div class="collectible-tags">
        <span class="tag tag-tipo">Hechizo</span>
        <span class="tag tag-tema">Vínculo Carmesí</span>
      </div>
      <div class="collectible-meta">Sesión 0</div>
    </div>
    <h2 class="collectible-title">Hechizo Original del Vínculo</h2>
    <p class="collectible-excerpt">Las palabras exactas que Rakrit pronunció al formular el hechizo que os ata. Su simplicidad es engañosa: bajo la torpeza verbal late un poder divino genuino.</p>
  </a>

  <a href="/coleccionables/vinculo-carmesi_2_contrato-oficial/" class="collectible-card" data-tipo="Documento Oficial" data-tema="Vínculo Carmesí" data-sesion="0">
    <div class="collectible-ornament">◈</div>
    <div class="collectible-header">
      <div class="collectible-tags">
        <span class="tag tag-tipo">Documento Oficial</span>
        <span class="tag tag-tema">Vínculo Carmesí</span>
      </div>
      <div class="collectible-meta">Sesión 0</div>
    </div>
    <h2 class="collectible-title">Contrato del Vínculo Carmesí</h2>
    <p class="collectible-excerpt">El documento oficial que recibisteis al ser vinculados. Donde el hechizo de Rakrit usaba palabras sencillas, este texto las viste de autoridad legal y divina.</p>
  </a>
</div>

<div id="no-results" class="no-results" style="display: none;">
  <p>No se encontraron coleccionables que coincidan con los filtros seleccionados.</p>
  <p style="font-size: 0.9rem; margin-top: 0.5rem;">Prueba a ajustar los criterios de búsqueda.</p>
</div>

<script>
(function() {
  const searchInput = document.getElementById('search-input');
  const tipoFilter = document.getElementById('tipo-filter');
  const temaFilter = document.getElementById('tema-filter');
  const container = document.getElementById('collectible-container');
  const noResults = document.getElementById('no-results');
  const cards = container.querySelectorAll('.collectible-card');

  function filterCollectibles() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedTipo = tipoFilter.value;
    const selectedTema = temaFilter.value;

    let visibleCount = 0;

    cards.forEach(card => {
      const tipo = card.dataset.tipo || '';
      const tema = card.dataset.tema || '';
      const title = card.querySelector('.collectible-title').textContent.toLowerCase();
      const excerpt = card.querySelector('.collectible-excerpt').textContent.toLowerCase();

      const matchesSearch = !searchTerm || title.includes(searchTerm) || excerpt.includes(searchTerm);
      const matchesTipo = !selectedTipo || tipo === selectedTipo;
      const matchesTema = !selectedTema || tema === selectedTema;

      if (matchesSearch && matchesTipo && matchesTema) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (visibleCount === 0) {
      container.style.display = 'none';
      noResults.style.display = 'block';
    } else {
      container.style.display = 'grid';
      noResults.style.display = 'none';
    }
  }

  searchInput.addEventListener('input', filterCollectibles);
  tipoFilter.addEventListener('change', filterCollectibles);
  temaFilter.addEventListener('change', filterCollectibles);
})();
</script>
