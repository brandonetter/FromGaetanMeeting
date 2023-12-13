'use server';

export async function get(v: any) {
  if (!v) return;
  const ReactDOMServer = (await import('react-dom/server')).default;
  const component = (await import(`../components/${v}.tsx`)).default;
  const componentHTML = ReactDOMServer.renderToStaticMarkup(await component());
  return componentHTML;
}
