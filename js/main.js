import { profile, stats, about, experience, projectFilters, projects, skills, education, certifications } from './data.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (id) => `<svg class="ic"><use href="#i-${id}"/></svg>`;

const socials = [
  ['github', profile.github, 'GitHub'],
  ['linkedin', profile.linkedin, 'LinkedIn'],
  ['mail', `mailto:${profile.email}`, 'Email'],
];
const socialLinks = () => socials.map(([ic, href, label]) =>
  `<a href="${href}" ${href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} aria-label="${label}" title="${label}">${icon(ic)}</a>`).join('');

const catIcon = { ai: 'globe', backend: 'brief', iot: 'pin' };
const catLabel = Object.fromEntries(projectFilters);

// ── Render ──────────────────────────────────────────
function render() {
  const [first, ...rest] = profile.name.split(' ');
  $('#hero-name').innerHTML = `${esc(first)} <span class="grad">${esc(rest.join(' '))}</span>`;
  $('#hero-summary').textContent = profile.summary;
  $('#li-btn').href = profile.linkedin;
  $('#hero-socials').innerHTML = socialLinks();
  $('#footer-socials').innerHTML = socialLinks();
  $('#year').textContent = new Date().getFullYear();
  $$('[data-anim]').forEach((el, i) => el.style.setProperty('--i', i));

  // Photo with initials fallback
  const img = $('#avatar-img');
  $('#avatar-initials').textContent = profile.initials;
  img.onload = () => { img.hidden = false; $('#avatar-initials').hidden = true; };
  img.src = profile.photo;

  $('#stats').innerHTML = stats.map((s, i) => `
    <div class="stat card" data-reveal style="--d:${i * 80}ms">
      <div class="stat-n"><span data-count="${s.value}">0</span>${s.suffix}</div>
      <div class="stat-l">${esc(s.label)}</div>
    </div>`).join('');

  $('#about-heading').textContent = about.heading;
  $('#about-text').innerHTML = about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('');
  $('#about-highlights').innerHTML = about.highlights.map((h) => `<li><span class="tick">${icon('check')}</span>${esc(h)}</li>`).join('');
  $('#about-info').innerHTML = `
    <div>${icon('pin')} ${esc(profile.location)}</div>
    <div>${icon('globe')} ${esc(profile.languages)}</div>
    <div>${icon('mail')} <a href="mailto:${profile.email}">${esc(profile.email)}</a></div>`;

  $('#timeline').insertAdjacentHTML('beforeend', experience.map((e) => `
    <div class="tl-item${e.current ? ' current' : ''}" data-reveal>
      <span class="tl-dot"></span>
      <article class="tl-card card">
        <div class="tl-top">
          <div>
            <h3>${esc(e.role)}${e.current ? '<span class="now-pill">Current</span>' : ''}</h3>
            <div class="tl-company">${esc(e.company)}</div>
            <div class="tl-loc">${esc(e.location)}</div>
          </div>
          <span class="tl-period">${esc(e.period)}</span>
        </div>
        <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
        <div class="tags">${e.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </article>
    </div>`).join(''));

  $('#filters').innerHTML = projectFilters.map(([k, label], i) =>
    `<button type="button" role="tab" data-filter="${k}" class="${i === 0 ? 'on' : ''}" aria-selected="${i === 0}">${esc(label)}</button>`).join('');
  $('#projects-grid').innerHTML = projects.map((p, i) => `
    <article class="project card" role="button" tabindex="0" data-cat="${p.category}" data-idx="${i}" data-reveal style="--d:${(i % 3) * 90}ms">
      <span class="p-icon">${icon(catIcon[p.category] || 'brief')}</span>
      <span class="p-cat">${esc(catLabel[p.category] || p.category)}</span>
      <h3>${esc(p.title)}</h3>
      <span class="p-org">${esc(p.org)} · ${esc(p.duration)}</span>
      <p>${esc(p.summary)}</p>
      <span class="tags">${p.tech.slice(0, 4).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</span>
      <span class="p-more">View details ${icon('arrow')}</span>
    </article>`).join('');

  $('#skills-grid').innerHTML = skills.map((g, gi) => `
    <div class="skill-card card" data-reveal style="--d:${(gi % 3) * 90}ms">
      <h3>${esc(g.title)}</h3>
      <div class="chips">${g.items.map(([name, cls], k) =>
        `<span class="chip" style="--k:${k}">${cls ? `<i class="${cls}" aria-hidden="true"></i>` : ''}${esc(name)}</span>`).join('')}</div>
    </div>`).join('');

  $('#edu-list').innerHTML = education.map((e, i) => `
    <div class="edu card" data-reveal style="--d:${i * 90}ms">
      <span class="edu-ic">${icon('cap')}</span>
      <div>
        <h3>${esc(e.degree)}</h3>
        <div class="edu-school">${esc(e.school)}</div>
        <div class="edu-meta"><span>${esc(e.period)}</span><span class="status ${e.status === 'Completed' ? 'done' : 'wip'}">${esc(e.status)}</span></div>
      </div>
    </div>`).join('');
  $('#cert-list').innerHTML = certifications.map((c) => `
    <div class="cert card" data-reveal>
      <span class="edu-ic">${icon('award')}</span>
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.issuer)} · ${esc(c.date)}</p>
    </div>`).join('');

  $('#contact-items').innerHTML = `
    <li><span class="ci-ic">${icon('mail')}</span><div><div class="ci-label">Email</div><div class="ci-val"><a href="mailto:${profile.email}">${esc(profile.email)}</a></div></div>
      <button class="icon-btn copy-btn" id="copy-email" aria-label="Copy email address">${icon('copy')}</button></li>
    <li><span class="ci-ic">${icon('linkedin')}</span><div><div class="ci-label">LinkedIn</div><div class="ci-val"><a href="${profile.linkedin}" target="_blank" rel="noopener">in/samuel-joyson-rego</a></div></div></li>
    <li><span class="ci-ic">${icon('github')}</span><div><div class="ci-label">GitHub</div><div class="ci-val"><a href="${profile.github}" target="_blank" rel="noopener">@${esc(profile.github.split('/').pop())}</a></div></div></li>
    <li><span class="ci-ic">${icon('pin')}</span><div><div class="ci-label">Location</div><div class="ci-val">${esc(profile.location)}</div></div></li>`;
}

// ── Typing role rotator ─────────────────────────────
function rotator() {
  const el = $('#rotator');
  const words = profile.roles;
  if (reduced) { el.textContent = words[0]; return; }
  let w = 0, c = 0, del = false;
  const tick = () => {
    const word = words[w];
    c += del ? -1 : 1;
    el.textContent = word.slice(0, c);
    let d = del ? 35 : 75;
    if (!del && c === word.length) { del = true; d = 1800; }
    else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 350; }
    setTimeout(tick, d);
  };
  setTimeout(tick, 900);
}

// ── Scroll reveal, counters, timeline progress ──────
function reveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      en.target.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  $$('[data-reveal]').forEach((el) => io.observe(el));
}

function countUp(el) {
  const to = +el.dataset.count;
  if (reduced) { el.textContent = to; return; }
  const start = performance.now(), dur = 1400;
  const step = (now) => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function scrollEffects() {
  const nav = $('#nav'), bar = $('#progress'), top = $('#to-top');
  const tl = $('#timeline'), fill = $('#tl-fill');
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('scrolled', y > 20);
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    top.classList.toggle('show', y > innerHeight * 0.8);
    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.65 - r.top) / r.height));
    fill.style.transform = `scaleY(${p})`;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
  top.addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));

  // Active nav link
  const links = new Map($$('.nav-links a').map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.classList.remove('active'));
      links.get(en.target.id)?.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => io.observe(s));
}

// ── Nav menu + theme ────────────────────────────────
function navMenu() {
  const btn = $('#menu-btn'), menu = $('#nav-links');
  const set = (open) => {
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = icon(open ? 'close' : 'menu');
  };
  btn.addEventListener('click', (e) => { e.stopPropagation(); set(!menu.classList.contains('open')); });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  document.addEventListener('click', (e) => { if (!e.target.closest('#nav-links')) set(false); });
}

function themeToggle() {
  const meta = document.querySelector('meta[name="theme-color"]');
  const apply = (t) => {
    document.documentElement.dataset.theme = t;
    meta.setAttribute('content', t === 'dark' ? '#0b1120' : '#ffffff');
  };
  apply(document.documentElement.dataset.theme || 'light');
  $('#theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('sjr-theme', next); } catch { /* storage blocked */ }
  });
}

// ── Projects: filter, tilt, modal ───────────────────
function projectsUI() {
  const grid = $('#projects-grid');
  $('#filters').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-filter]');
    if (!b) return;
    $$('#filters button').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', String(x === b)); });
    const f = b.dataset.filter;
    $$('.project', grid).forEach((card) => {
      const show = f === 'all' || card.dataset.cat === f;
      card.classList.toggle('hide', !show);
      card.classList.remove('pop');
      if (show && !reduced) { void card.offsetWidth; card.classList.add('pop'); }
    });
  });

  if (finePointer && !reduced) {
    grid.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.project');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    });
    grid.addEventListener('pointerout', (e) => {
      const card = e.target.closest('.project');
      if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
    });
  }

  const modal = $('#modal'), body = $('#modal-body');
  let lastFocus = null;
  const open = (p) => {
    lastFocus = document.activeElement;
    body.innerHTML = `
      <span class="p-cat">${esc(catLabel[p.category] || p.category)}</span>
      <h3 id="modal-title">${esc(p.title)}</h3>
      <div class="p-org">${esc(p.org)} · ${esc(p.duration)}</div>
      <p class="lead">${esc(p.summary)}</p>
      <ul>${p.details.map((d) => `<li><span class="tick">${icon('check')}</span><span>${esc(d)}</span></li>`).join('')}</ul>
      <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.modal-close', modal).focus();
  };
  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus?.();
  };
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project');
    if (card) open(projects[+card.dataset.idx]);
  });
  grid.addEventListener('keydown', (e) => {
    const card = e.target.closest('.project');
    if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(projects[+card.dataset.idx]); }
  });
  modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) close(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) close(); });
}

// ── Contact: copy email + mailto form ───────────────
function toast(msg) {
  const t = $('#toast');
  t.innerHTML = `${icon('check')} ${esc(msg)}`;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 2200);
}

function contactUI() {
  $('#copy-email').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(profile.email); toast('Email address copied'); }
    catch { location.href = `mailto:${profile.email}`; }
  });

  const form = $('#contact-form');
  const fields = {
    name: [$('#cf-name'), (v) => v.trim().length >= 2 || 'Please enter your name'],
    email: [$('#cf-email'), (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email'],
    message: [$('#cf-msg'), (v) => v.trim().length >= 10 || 'Message should be at least 10 characters'],
  };
  const check = ([el, rule]) => {
    const res = rule(el.value);
    const field = el.closest('.field');
    field.classList.toggle('bad', res !== true);
    field.querySelector('.err').textContent = res === true ? '' : res;
    return res === true;
  };
  Object.values(fields).forEach((f) => f[0].addEventListener('input', () => { if (f[0].closest('.field').classList.contains('bad')) check(f); }));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = Object.values(fields).map(check).every(Boolean);
    if (!ok) return;
    const name = fields.name[0].value.trim(), from = fields.email[0].value.trim(), msg = fields.message[0].value.trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const bodyText = encodeURIComponent(`${msg}\n\n— ${name} (${from})`);
    location.href = `mailto:${profile.email}?subject=${subject}&body=${bodyText}`;
    toast('Opening your email app…');
    form.reset();
  });
}

// ── Button ripple ───────────────────────────────────
function ripples() {
  if (reduced) return;
  document.addEventListener('pointerdown', (e) => {
    const btn = e.target.closest('.ripple');
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const s = Math.max(r.width, r.height);
    const ink = document.createElement('span');
    ink.className = 'ripple-ink';
    ink.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
    btn.appendChild(ink);
    setTimeout(() => ink.remove(), 650);
  });
}

// ── Start ───────────────────────────────────────────
render();
themeToggle();
navMenu();
scrollEffects();
reveals();
projectsUI();
contactUI();
ripples();
rotator();
requestAnimationFrame(() => document.body.classList.add('loaded'));
