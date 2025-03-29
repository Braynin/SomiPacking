import 'kleur/colors';
import { e as decodeKey } from './chunks/astro/server_C6uGBwMf.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CbKZ4Ndt.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Owlyx/SomiPacking/","cacheDir":"file:///D:/Owlyx/SomiPacking/node_modules/.astro/","outDir":"file:///D:/Owlyx/SomiPacking/dist/","srcDir":"file:///D:/Owlyx/SomiPacking/src/","publicDir":"file:///D:/Owlyx/SomiPacking/public/","buildClientDir":"file:///D:/Owlyx/SomiPacking/dist/client/","buildServerDir":"file:///D:/Owlyx/SomiPacking/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Owlyx/SomiPacking/src/pages/[servicio].astro",{"propagation":"none","containsHead":true}],["D:/Owlyx/SomiPacking/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["D:/Owlyx/SomiPacking/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/[servicio]@_@astro":"pages/_servicio_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/Owlyx/SomiPacking/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BPKE5n6Q.mjs","\u0000@astrojs-manifest":"manifest_B3c_fCW_.mjs","D:/Owlyx/SomiPacking/src/components/ButtonWhatsapp.astro?astro&type=script&index=0&lang.ts":"_astro/ButtonWhatsapp.astro_astro_type_script_index_0_lang.DKo_w765.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Owlyx/SomiPacking/src/components/ButtonWhatsapp.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.getElementById(\"whatsapp-actionCall\"),t=document.getElementById(\"whatsapp-button\"),n=document.getElementById(\"whatsapp-chat\"),s=document.getElementById(\"close-chat\");t&&n&&s&&e&&(t.addEventListener(\"click\",()=>{n.classList.toggle(\"hidden\"),e.classList.toggle(\"hidden\"),t.classList.toggle(\"hidden\")}),s.addEventListener(\"click\",()=>{n.classList.add(\"hidden\"),e.classList.remove(\"hidden\"),t.classList.remove(\"hidden\")}))});"]],"assets":["/_astro/_servicio_.DqeSfKQU.css","/Bandeja.png","/Black and Beige Minimalist Package Mockup Pinterest Pin.png","/Block-Agenda.png","/Bolsa asa cinta.png","/Bolsa asa troquel.png","/Bolsa asa twist.png","/Bolsa con asa cordón.png","/Bolsa para vino.png","/Bolsa portacubierto.png","/Bolsas kraft sin asa.png","/Bolsas.png","/Bolsas.webp","/Brown and Grey Coffee Product Features Instagram Post.png","/Brown and White Simple Packaging Box Mockup Pinterest Pin.png","/Brown Organic Delicate Label Tag Mockup Instagram Post.png","/Caja chocolate.png","/Caja Cupcakes.png","/Caja ecommerce -SI.png","/Caja hamburguesa.png","/Caja macarrón.png","/Caja pizza.png","/Caja pollo.png","/Caja tipo KFC.png","/Caja torta.png","/Cajas para papa.png","/Cajas.png","/Cajas.webp","/Calendario.png","/Carta Comensal.png","/celular.jpg","/Circle Christmas Holiday Stickers.png","/computer.png","/Contacto-video.mp4","/delivered.png","/Empaques personalizado.png","/Envoltura.png","/Envoltura.webp","/Envío a todo Perú.png","/facebook.png","/Hero-Inicio-Mobile.jpeg","/horario.jpg","/icono-Somi-Logo.webp","/icons8-facebook-384.png","/Imprenta-inicio.png","/imprenta-video.mp4","/Imprenta.-video.mp4","/imprenta.jpeg","/Impresión de alta calida.png","/Individuales.png","/instagram (1).png","/instagram (2).png","/instagram.png","/linkedin.png","/mail.jpg","/Merchandising Corporativo.png","/Merchandising Deportivo.png","/Merchandising Ecológico.png","/Merchandising para Eventos.png","/Merchandising Tecnológico.png","/Merchandising Textil.png","/Merchandising-Corporativo.png","/Merchandising-Deportivo.png","/Merchandising-Ecológico.png","/Merchandising-Eventos.png","/Merchandising-Inicio.png","/Merchandising-Tecnológico.png","/Merchandising-Textil.png","/Merchandising.jpeg","/Merchandising.png","/Merchandising.webp","/Nosotros.mp4","/packaging-img.jpg","/Packaging-inicio.png","/Packaging-video.mp4","/Packaging.jpeg","/Papel manteca.png","/Papelería.png","/Papelería.webp","/Porta vaso.png","/Posa vasos.png","/Precinto de seguridad.png","/production.png","/Sobre y cono papa.png","/social-media.png","/social.png","/Somi-Logo-Black.webp","/Somi-Logo-White.webp","/Somi-Logo.webp","/Somi-Packing-Hero.webp","/Stickers (2).png","/tabla-bolsas-kraft.webp","/Tarjeta de agradecimiento.png","/Tarjetas de Presentación.png","/tiktok.png","/contacto/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"GJ2uJ0Z8P2hWYsq2DE2BxDFRnUK3HJOug2G/b+HLtT0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
