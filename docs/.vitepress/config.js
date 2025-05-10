export default {
  title: "OIKOS",
  description: "Documentation for the Oikos Protocol",
  appearance: false, // Disable dark mode toggle
  theme: 'dark',
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
  ],
  outDir: '../dist',
  themeConfig: {
    darkModeSwitchLabel: 'Appearance',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    langMenuLabel: 'Change language',
    outline: { 
      level: 'deep',
      label: 'On this page'
    },
    lastUpdatedText: 'Last Updated',
    logo: "/assets/oikos_logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Oikos?", link: "/introduction/welcome-to-oikos" },
          { text: "For founders", link: "/introduction/for-founders" },
          { text: "For holders", link: "/introduction/for-holders" }
        ]
      },
      {
        text: "Tokenomics",
        items: [
          { text: "Intrinsic Minimum Value", link: "/concepts/imv" },
          { text: "Dynamic Liquidity & Supply", link: "/concepts/dynamic-liquidity" },
          { text: "Solvency Invariant", link: "/concepts/solvency_invariant" }
        ]
      },
      {
        text: "oToken Utility",
        items: [
          { text: "Loans & Leverage", link: "/otokens/loans-leverage" },
          { text: "Staking", link: "/otokens/staking" },
        ]
      },
      {
        text: "Launchpad",
        items: [
          { text: "Overview", link: "/launchpad/overview" },
          { text: "Presale" , link: "/launchpad/presale" },
        ]
      },
      // {
      //   text: "Developers",
      //   items: [
      //     { text: "Installation", link: "/developers/installation" },
      //     { text: "Configuration", link: "/developers/configuration" },
      //     { text: "API Reference", link: "/developers/api" }
      //   ]
      // }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/oikos-cash" },
      { icon: "twitter", link: "https://twitter.com/oikos-cash" },
      { icon: "discord", link: "https://discord.gg/xTahMDXbRC" }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Oikos Protocol"
    }
  }
}