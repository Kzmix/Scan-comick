// ===== BOOKMARK TOGGLE (SERIES PAGE) =====
(function () {
  const STORAGE_KEY = 'bookmark:v1';

  function readStore() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function writeStore(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }

  function setSavedState(btn, saved) {
    const label = btn.querySelector('[data-bookmark-label]');
    if (!label) return;

    if (saved) {
      label.textContent = 'Tersimpan';
      btn.dataset.active = 'true';
    } else {
      label.textContent = 'Simpan';
      delete btn.dataset.active;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-bookmark="toggle"]');
    if (!btn) return;

    const slug = btn.dataset.seriesSlug;
    if (!slug) return;

    let store = readStore();

    // === INIT STATE ===
    setSavedState(btn, Boolean(store[slug]));

    // === CLICK TOGGLE ===
    btn.addEventListener('click', () => {
      store = readStore();

      if (store[slug]) {
        // UNBOOKMARK
        delete store[slug];
        writeStore(store);
        setSavedState(btn, false);
      } else {
        // BOOKMARK
        store[slug] = {
          series_slug: slug,
          last_chapter: 1,
          updated_at: Date.now(),
        };
        writeStore(store);
        setSavedState(btn, true);
      }
    });
  });
})();