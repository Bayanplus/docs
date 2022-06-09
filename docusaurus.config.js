// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bayanplus Documentation",
  tagline: "Bayanplus Offical Documentation",
  url: "https://docs.bayaplus.co",
  baseUrl: "/",
  onBrokenLinks: "warn", // throw
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Bayanplus", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  scripts: [
    {
      src: "https://cdn.bayanplus.co/bp.js",
      defer: true,
      pid: "XXXX",
    },
    {
      src: "https://cdn.splitbee.io/sb.js",
      async: true,
     "data-token":"2E67ZOG8Z71V"
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          //   editUrl: "https://github.com/0ss/docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: "Bayanplus",
        logo: {
          alt: "logo",
          src: "https://cdn.bayanplus.co/dark-logo.png",
          srcDark: "https://cdn.bayanplus.co/light-logo.png",
          href: "https://bayanplus.co",
        },
        items: [
          {
            type: "doc",
            docId: "welcome",
            position: "left",
            label: "Getting started",
          },
          {
            href: "https://github.com/bayanplus/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              // {
              //   label: "Tutorial",
              //   to: "/docs/getting-started/intro",
              // },
            ],
          },
          {
            title: "Product",
            items: [
              {
                label: "Features",
                href: "https://bayanplus.co/features",
              },
              {
                label: "Pricing",
                href: "https://bayanplus.co/pricing",
              },
              {
                label: "Privacy & Security",
                href: "https://bayanplus.co/privacy-security",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/bayanplus/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/trybayanplus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bayanplus, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
