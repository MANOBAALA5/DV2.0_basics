/* ================================================================
   DATA VAULT 2.0 MASTERY — SHARED INTERACTIVITY
   ================================================================ */

'use strict';

/* ----------------------------------------------------------------
   SEARCH INDEX — all 14 modules × their topics
   ---------------------------------------------------------------- */
const SEARCH_INDEX = [
  { module: 'M01', tag: 'intro',       title: 'What is Data Vault 2.0?',                desc: 'The philosophy, origin, and core promise of DV2',          url: 'module01.html' },
  { module: 'M01', tag: 'intro',       title: 'History & Evolution',                     desc: 'From Dan Linstedt\'s work to the modern standard',          url: 'module01.html' },
  { module: 'M01', tag: 'intro',       title: 'DV vs Kimball vs Inmon',                  desc: 'Side-by-side methodology comparison',                       url: 'module01.html' },
  { module: 'M01', tag: 'intro',       title: 'The Three Pillars',                       desc: 'Hubs, Links, Satellites — explained simply',                url: 'module01.html' },
  { module: 'M01', tag: 'intro',       title: 'When to Use Data Vault',                  desc: 'Use-case fit matrix and industry examples',                  url: 'module01.html' },
  { module: 'M01', tag: 'intro',       title: 'DV2 Business Benefits',                   desc: 'Auditability, agility, scalability explained for business',  url: 'module01.html' },
  { module: 'M01', tag: 'intro',       title: 'Core Vocabulary',                         desc: 'BK, HashDiff, LoadDate, RecordSource and more',              url: 'module01.html' },
  { module: 'M01', tag: 'intro',       title: 'Interview Q&A: DV Fundamentals',          desc: 'Top interview questions on Data Vault philosophy',           url: 'module01.html' },

  { module: 'M02', tag: 'modeling',    title: 'Data Vault Modeling Principles',          desc: 'The 9 rules that govern every DV design decision',           url: 'module02.html' },
  { module: 'M02', tag: 'modeling',    title: 'Business Keys (BK)',                      desc: 'What makes a valid BK and common pitfalls',                  url: 'module02.html' },
  { module: 'M02', tag: 'modeling',    title: 'HashKey Generation',                      desc: 'SHA-256, MD5, and collision avoidance strategies',           url: 'module02.html' },
  { module: 'M02', tag: 'modeling',    title: 'HashDiff for Change Detection',           desc: 'Calculating payload hashes for satellite CDC',               url: 'module02.html' },
  { module: 'M02', tag: 'modeling',    title: 'Load Date & Record Source',               desc: 'Metadata columns that enable full auditability',             url: 'module02.html' },
  { module: 'M02', tag: 'modeling',    title: 'Identifying Source Systems',              desc: 'System of record analysis and mapping',                      url: 'module02.html' },
  { module: 'M02', tag: 'modeling',    title: 'The Insert-Only Pattern',                 desc: 'Why DV never updates, never deletes',                        url: 'module02.html' },

  { module: 'M03', tag: 'hubs',        title: 'Hub Anatomy',                             desc: 'Required columns, naming conventions, grain',                url: 'module03.html' },
  { module: 'M03', tag: 'hubs',        title: 'Choosing Business Keys for Hubs',         desc: 'Natural keys, composite keys, surrogate vs natural',         url: 'module03.html' },
  { module: 'M03', tag: 'hubs',        title: 'Hub SQL Patterns',                        desc: 'Full hub load scripts with HashKey generation',              url: 'module03.html' },
  { module: 'M03', tag: 'hubs',        title: 'Multi-Source Hub Loading',                desc: 'Loading from multiple source systems safely',                url: 'module03.html' },
  { module: 'M03', tag: 'hubs',        title: 'Hub Anti-Patterns',                       desc: 'Common mistakes: smart keys, technical keys, updates',       url: 'module03.html' },

  { module: 'M04', tag: 'links',       title: 'Link Anatomy',                            desc: 'Required columns, FK references, grain of a link',           url: 'module04.html' },
  { module: 'M04', tag: 'links',       title: 'Many-to-Many vs Hierarchical Links',      desc: 'Relationship cardinality in Link design',                    url: 'module04.html' },
  { module: 'M04', tag: 'links',       title: 'Hierarchical Links',                      desc: 'Parent-child relationships within a single entity',          url: 'module04.html' },
  { module: 'M04', tag: 'links',       title: 'Non-Historized Links',                    desc: 'Transaction links for events that never change',             url: 'module04.html' },
  { module: 'M04', tag: 'links',       title: 'Same-As Links',                           desc: 'Master data matching and duplicate resolution patterns',     url: 'module04.html' },
  { module: 'M04', tag: 'links',       title: 'Link SQL Patterns',                       desc: 'Full link load scripts with collision handling',             url: 'module04.html' },

  { module: 'M05', tag: 'satellites',  title: 'Satellite Anatomy',                       desc: 'Required columns, payload columns, splitting strategy',       url: 'module05.html' },
  { module: 'M05', tag: 'satellites',  title: 'Satellite Splitting Strategies',          desc: 'By source, by rate-of-change, by classification',            url: 'module05.html' },
  { module: 'M05', tag: 'satellites',  title: 'CDC and HashDiff Loading',                desc: 'Change detection SQL patterns step by step',                 url: 'module05.html' },
  { module: 'M05', tag: 'satellites',  title: 'Multi-Active Satellites',                 desc: 'Repeating groups: phone numbers, addresses, emails',         url: 'module05.html' },
  { module: 'M05', tag: 'satellites',  title: 'Effectivity Satellites',                  desc: 'Tracking relationship open/close dates on Links',            url: 'module05.html' },
  { module: 'M05', tag: 'satellites',  title: 'Status Tracking Satellites',              desc: 'Soft deletes and record status patterns',                    url: 'module05.html' },

  { module: 'M06', tag: 'raw-vault',   title: 'Raw Vault Architecture',                  desc: 'The insert-only, lossless source layer',                     url: 'module06.html' },
  { module: 'M06', tag: 'raw-vault',   title: 'Staging Layer Design',                    desc: 'Pre-vault transformations, hash columns, error handling',    url: 'module06.html' },
  { module: 'M06', tag: 'raw-vault',   title: 'Parallel Loading Strategies',             desc: 'Multi-threaded vault loading without contention',            url: 'module06.html' },
  { module: 'M06', tag: 'raw-vault',   title: 'Error Mart Pattern',                      desc: 'Capturing and quarantining bad records',                     url: 'module06.html' },
  { module: 'M06', tag: 'raw-vault',   title: 'Full vs Delta Loading',                   desc: 'When to use each and performance implications',              url: 'module06.html' },

  { module: 'M07', tag: 'biz-vault',   title: 'Business Vault Purpose',                  desc: 'Derived data, soft rules, and presentation layer prep',      url: 'module07.html' },
  { module: 'M07', tag: 'biz-vault',   title: 'Point-in-Time (PIT) Tables',              desc: 'Pre-joining satellite timelines for query performance',      url: 'module07.html' },
  { module: 'M07', tag: 'biz-vault',   title: 'Bridge Tables',                           desc: 'Flattening Hub-Link-Hub chains into wide lookup tables',     url: 'module07.html' },
  { module: 'M07', tag: 'biz-vault',   title: 'Computed Satellites',                     desc: 'Pre-calculated KPIs stored as satellite history',            url: 'module07.html' },
  { module: 'M07', tag: 'biz-vault',   title: 'Reference Tables',                        desc: 'Code tables, lookups, and reference data management',        url: 'module07.html' },

  { module: 'M08', tag: 'performance', title: 'Query Performance Fundamentals',          desc: 'Indexing strategy: hash keys, load dates, composite indexes', url: 'module08.html' },
  { module: 'M08', tag: 'performance', title: 'PIT Table Deep Dive',                     desc: 'Building and refreshing PIT tables for fast lookups',        url: 'module08.html' },
  { module: 'M08', tag: 'performance', title: 'Partitioning Strategies',                 desc: 'Load date, hash range, and source partitioning',             url: 'module08.html' },
  { module: 'M08', tag: 'performance', title: 'Materialized Views in DV',               desc: 'When and how to use MVs in a vault architecture',            url: 'module08.html' },
  { module: 'M08', tag: 'performance', title: 'Parallel Load Architecture',              desc: 'Pipeline orchestration for maximum throughput',              url: 'module08.html' },

  { module: 'M09', tag: 'advanced',    title: 'Anchor Modeling Comparison',              desc: 'How Anchor Modeling relates to and differs from DV2',        url: 'module09.html' },
  { module: 'M09', tag: 'advanced',    title: 'Data Vault on Graph Databases',           desc: 'Neo4j, Amazon Neptune and the vault pattern',                url: 'module09.html' },
  { module: 'M09', tag: 'advanced',    title: 'Temporal Data Vault',                     desc: 'Bi-temporal modeling within the DV framework',               url: 'module09.html' },
  { module: 'M09', tag: 'advanced',    title: 'Soft Business Rules',                     desc: 'Keeping rules in the Business Vault, not Raw Vault',         url: 'module09.html' },
  { module: 'M09', tag: 'advanced',    title: 'Data Vault and Master Data',              desc: 'Same-As Links for MDM and golden record patterns',           url: 'module09.html' },

  { module: 'M10', tag: 'automation',  title: 'Metadata-Driven Development',             desc: 'Configuration tables that generate DV structures',           url: 'module10.html' },
  { module: 'M10', tag: 'automation',  title: 'dbt with Data Vault',                     desc: 'Modeling DV in dbt: macros, packages, and patterns',         url: 'module10.html' },
  { module: 'M10', tag: 'automation',  title: 'WhereScape RED Overview',                 desc: 'Automation tooling for DV metadata management',              url: 'module10.html' },
  { module: 'M10', tag: 'automation',  title: 'Auto-generating DDL & ETL',               desc: 'Jinja templates and code-gen pipelines for DV',              url: 'module10.html' },
  { module: 'M10', tag: 'automation',  title: 'Data Contracts for DV',                   desc: 'Schema contracts, drift detection, SLA tracking',            url: 'module10.html' },

  { module: 'M11', tag: 'cloud',       title: 'Snowflake Data Vault',                    desc: 'Snowflake-specific patterns: clustering, dynamic tables',     url: 'module11.html' },
  { module: 'M11', tag: 'cloud',       title: 'BigQuery Data Vault',                     desc: 'Partitioning, clustering, and nested columns in DV',         url: 'module11.html' },
  { module: 'M11', tag: 'cloud',       title: 'Databricks Data Vault',                   desc: 'Delta Lake, Unity Catalog and the vault approach',           url: 'module11.html' },
  { module: 'M11', tag: 'cloud',       title: 'Cloud Cost Optimization',                 desc: 'Storage vs compute tradeoffs in cloud DV architectures',     url: 'module11.html' },
  { module: 'M11', tag: 'cloud',       title: 'Streaming Vault Patterns',                desc: 'Kafka, Kinesis, and near-real-time Raw Vault loading',        url: 'module11.html' },

  { module: 'M12', tag: 'dimensional', title: 'Information Mart Architecture',           desc: 'The layer between Business Vault and end consumers',         url: 'module12.html' },
  { module: 'M12', tag: 'dimensional', title: 'DV to Star Schema',                       desc: 'Converting vault structures into facts and dimensions',      url: 'module12.html' },
  { module: 'M12', tag: 'dimensional', title: 'DV to Wide Tables',                       desc: 'Denormalized reporting tables from vault history',           url: 'module12.html' },
  { module: 'M12', tag: 'dimensional', title: 'Slowly Changing Dimensions from DV',      desc: 'SCD Type 1/2/3/6 generation from satellite history',         url: 'module12.html' },
  { module: 'M12', tag: 'dimensional', title: 'Data Product Design',                     desc: 'Consumer-facing data products from vault infrastructure',    url: 'module12.html' },

  { module: 'M13', tag: 'cases',       title: 'Banking & Finance Case Study',            desc: 'Regulatory reporting and transaction audit trail',           url: 'module13.html' },
  { module: 'M13', tag: 'cases',       title: 'Retail & E-Commerce Case Study',          desc: 'Customer 360 and omnichannel analytics with DV',             url: 'module13.html' },
  { module: 'M13', tag: 'cases',       title: 'Healthcare Case Study',                   desc: 'Patient data integration with HIPAA compliance via DV',      url: 'module13.html' },
  { module: 'M13', tag: 'cases',       title: 'Migration: Legacy DW to Data Vault',      desc: 'Step-by-step migration playbook and pitfalls',               url: 'module13.html' },
  { module: 'M13', tag: 'cases',       title: 'Data Governance with DV',                 desc: 'Lineage, stewardship, and catalog integration',              url: 'module13.html' },

  { module: 'M14', tag: 'interview',   title: 'Junior/Mid Interview Questions',          desc: '30 DV questions for entry-level and mid-level roles',        url: 'module14.html' },
  { module: 'M14', tag: 'interview',   title: 'Senior/Architect Questions',              desc: 'Design problems, trade-offs, and whiteboard scenarios',      url: 'module14.html' },
  { module: 'M14', tag: 'interview',   title: 'Live Coding Challenges',                  desc: 'SQL challenges: HashKey, PIT, SCD2 generation',              url: 'module14.html' },
  { module: 'M14', tag: 'interview',   title: 'System Design: DV at Scale',              desc: 'Architect a vault for 10TB/day from scratch',                url: 'module14.html' },
  { module: 'M14', tag: 'interview',   title: 'DV Certification Prep (CDVDM)',           desc: 'Key topics and practice questions for CDVDM exam',           url: 'module14.html' },
];

/* ----------------------------------------------------------------
   THEME
   ---------------------------------------------------------------- */
function initTheme() {
  const saved = localStorage.getItem('dv-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  updateThemeIcon(btn, saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dv-theme', next);
    updateThemeIcon(btn, next);
  });
}

function updateThemeIcon(btn, theme) {
  btn.innerHTML = theme === 'dark'
    ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
    : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

/* ----------------------------------------------------------------
   READING PROGRESS
   ---------------------------------------------------------------- */
function initReadingProgress() {
  const bar = document.querySelector('.reading-progress-bar');
  if (!bar) return;

  function update() {
    const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docH <= 0) return;
    bar.style.width = Math.min(100, (window.scrollY / docH) * 100) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ----------------------------------------------------------------
   MODULE PROGRESS TRACKING
   ---------------------------------------------------------------- */
function initModuleProgress(moduleNum, totalTopics) {
  if (!moduleNum) return;
  const key = `dv-mod${moduleNum}-done`;
  let done = new Set(JSON.parse(localStorage.getItem(key) || '[]'));

  const pctEl  = document.querySelector('.mod-progress-pct');
  const fillEl = document.querySelector('.mod-progress-fill');

  function updateBar() {
    const pct = totalTopics > 0 ? Math.round((done.size / totalTopics) * 100) : 0;
    if (pctEl)  pctEl.textContent = pct + '%';
    if (fillEl) fillEl.style.width = pct + '%';
  }

  /* Mark concept read when user scrolls past it */
  const concepts = document.querySelectorAll('.concept[data-topic]');
  if (!concepts.length) { updateBar(); return; }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        done.add(e.target.dataset.topic);
        localStorage.setItem(key, JSON.stringify([...done]));
        updateBar();
      }
    });
  }, { rootMargin: '0px 0px -40% 0px', threshold: 0.1 });

  concepts.forEach(c => observer.observe(c));
  updateBar();
}

/* ----------------------------------------------------------------
   COPY BUTTONS
   ---------------------------------------------------------------- */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const block = btn.closest('.code-block');
      if (!block) return;
      const code = block.querySelector('pre')?.innerText ?? '';

      try {
        await navigator.clipboard.writeText(code);
      } catch {
        /* IE/old browser fallback */
        const ta = document.createElement('textarea');
        ta.value = code; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }

      const original = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied';
      setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = original; }, 2000);
    });
  });
}

/* ----------------------------------------------------------------
   ACCORDION
   ---------------------------------------------------------------- */
function initAccordion() {
  document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.acc-item');
      const isOpen = item.classList.contains('open');
      /* Close siblings in same accordion */
      item.closest('.accordion')?.querySelectorAll('.acc-item.open').forEach(i => {
        if (i !== item) i.classList.remove('open');
      });
      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ----------------------------------------------------------------
   SEARCH
   ---------------------------------------------------------------- */
function initSearch() {
  const input    = document.querySelector('.nav-search input');
  const dropdown = document.getElementById('search-dropdown');
  if (!input || !dropdown) return;

  let timeout;
  input.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => renderSearch(input.value.trim()), 120);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { dropdown.classList.remove('visible'); input.blur(); }
  });

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target) && e.target !== input) {
      dropdown.classList.remove('visible');
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim().length > 1) renderSearch(input.value.trim());
  });
}

function renderSearch(q) {
  const dropdown = document.getElementById('search-dropdown');
  if (!dropdown) return;
  if (q.length < 2) { dropdown.classList.remove('visible'); return; }

  /* modules/ are siblings when inside a module, subdirectory from index */
  const base = window.__dvIsModule ? '' : 'modules/';

  const lq = q.toLowerCase();
  const results = SEARCH_INDEX.filter(r =>
    r.title.toLowerCase().includes(lq) ||
    r.desc.toLowerCase().includes(lq) ||
    r.tag.toLowerCase().includes(lq) ||
    r.module.toLowerCase().includes(lq)
  ).slice(0, 8);

  if (!results.length) {
    dropdown.innerHTML = '<div class="search-result"><div class="sr-info"><div class="sr-title" style="color:var(--ink-3)">No results for "' + escHtml(q) + '"</div></div></div>';
  } else {
    dropdown.innerHTML = results.map(r => `
      <div class="search-result" onclick="location.href='${base}${r.url}'">
        <span class="sr-tag">${r.module}</span>
        <div>
          <div class="sr-title">${highlight(r.title, q)}</div>
          <div class="sr-desc">${r.desc}</div>
        </div>
      </div>`).join('');
  }
  dropdown.classList.add('visible');
}

function highlight(text, q) {
  const re = new RegExp('(' + escRegex(q) + ')', 'gi');
  return escHtml(text).replace(re, '<mark style="background:var(--gold-dim);color:var(--gold);border-radius:2px">$1</mark>');
}
function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/* ----------------------------------------------------------------
   SMOOTH SCROLL (with nav offset)
   ---------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ----------------------------------------------------------------
   NAV ACTIVE LINK
   ---------------------------------------------------------------- */
function initNavActive() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href')?.split('/').pop();
    if (href === current) a.classList.add('active');
  });
}

/* ----------------------------------------------------------------
   STAGGER ANIMATION (intersection observer)
   ---------------------------------------------------------------- */
function initRevealAnimations() {
  const els = document.querySelectorAll('.module-card, .feature-card, .benefit-card, .usecase-card');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }, i * 40);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    obs.observe(el);
  });
}

/* ----------------------------------------------------------------
   KEYBOARD SHORTCUT: / to focus search
   ---------------------------------------------------------------- */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      document.querySelector('.nav-search input')?.focus();
    }
  });
}

/* ----------------------------------------------------------------
   MASTER INIT
   ---------------------------------------------------------------- */
function initPage(moduleNum, totalTopics) {
  initTheme();
  initReadingProgress();
  initModuleProgress(moduleNum, totalTopics);
  initCopyButtons();
  initAccordion();
  initSearch();
  initSmoothScroll();
  initNavActive();
  initRevealAnimations();
  initKeyboardShortcuts();
}

/* Auto-boot on DOMContentLoaded if initPage was already called inline */
document.addEventListener('DOMContentLoaded', () => {
  /* If a module didn't call initPage, still boot basics */
  if (!window.__dvPageInited) initPage(null, 0);
});
