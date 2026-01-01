const slugifyOld = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')                   // Normalize to NFD Unicode form
    .replace(/[\u0300-\u036f]/g, '')   // Remove diacritics
    .replace(/[^a-z0-9 -]/g, '')       // Remove invalid chars
    .replace(/\s+/g, '-')              // Replace spaces with -
    .replace(/-+/g, '-')               // Collapse duplicate -
    .replace(/^-+|-+$/g, '');          // Trim - from start and end
}

// Example usage:
//console.log(slugify('Texto con acentos: ñ, á, é, í, ó, ú')); // Output: texto-con-acentos-n-a-e-i-o-u