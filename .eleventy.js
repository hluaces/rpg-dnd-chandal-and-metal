module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/reglas": "reglas" });
  eleventyConfig.addPassthroughCopy({ "src/historias": "historias" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10); // yyyy-mm-dd
  });

  // Filtro para generar breadcrumbs automáticos basados en la URL
  eleventyConfig.addFilter("autoBreadcrumbs", function(page) {
    const url = page.url || "";
    if (url === "/" || url === "") return [];

    const segments = url.split("/").filter(s => s);
    const breadcrumbs = [{ label: "Inicio", url: "/" }];

    // Mapeo de slugs a nombres legibles
    const labelMap = {
      "coleccionables": "Coleccionables",
      "sesiones": "Sesiones",
      "personajes": "Personajes",
      "historias": "Historias",
      "mapas": "Mapas",
      "reglas": "Reglas",
      "presos": "Informes de presos"
    };

    let currentPath = "";
    for (let i = 0; i < segments.length; i++) {
      currentPath += `/${segments[i]}`;
      const isLast = i === segments.length - 1;
      breadcrumbs.push({
        label: labelMap[segments[i]] || segments[i].replace(/-/g, " "),
        url: isLast ? null : `${currentPath}/`  // Última miga sin URL
      });
    }

    return breadcrumbs;
  });

  // Shortcode para personajes con tooltip
  eleventyConfig.addPairedShortcode("pj", function(contenido, key) {
    const personajes = require("./src/_data/personajes.json");
    const pj = personajes[key];

    if (!pj) {
      console.warn(`[pj] Personaje no encontrado: "${key}"`);
      return `<strong class="pj-missing" title="Personaje no catalogado">${contenido || key}</strong>`;
    }

    const { nombre, raza, rol, faccion, descripcion, estatus, vinculo } = pj;
    const textoMostrado = contenido.trim() || nombre;
    const meta = `${raza} — ${rol}${faccion ? ` (${faccion})` : ''}`;

    let tooltipContent = `<span class="pj-tooltip-meta">${meta}</span>`;
    tooltipContent += `<span class="pj-tooltip-desc">${descripcion}</span>`;

    if (vinculo) {
      tooltipContent += `<span class="pj-tooltip-vinculo">⚔ ${vinculo}</span>`;
    }

    return `<span class="pj-wrapper pj-${estatus}" data-pj="${key}">
    <strong class="pj-nombre">${textoMostrado}</strong>
    <span class="pj-tooltip" role="tooltip">
      ${tooltipContent}
    </span>
  </span>`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
