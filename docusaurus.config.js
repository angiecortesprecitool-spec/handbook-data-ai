// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki Data & AI',
  tagline: 'Cómo trabajamos',
  favicon: 'img/favicon.svg',

  url: 'https://angiecortes02.github.io',
  baseUrl: '/handbook-data-ai/',
  organizationName: 'angiecortes02',
  projectName: 'handbook-data-ai',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',          // el handbook es la home
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['es', 'en'],
        docsRouteBasePath: '/',
        indexBlog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',          // GitLab handbook es claro
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Wiki Data & AI',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Handbook'},
          {href: 'https://github.com/angiecortes02/handbook-data-ai', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        copyright: `Wiki Data & AI · una prueba con Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
