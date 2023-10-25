export const preprocessHtml = (html: string) => {
  return html.toString().replace(/^\uFEFF/, '');
};
