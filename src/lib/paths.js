const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** @param {string} path */
export function sitePath(path = '') {
  return `${base}/${path.replace(/^\//, '')}`;
}
