import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MTG Game Night',
  description: 'A fan-made catalogue of Magic: The Gathering game-night formats and boxed-set ideas.',
  cleanUrls: true,
  srcExclude: ['**/README.md'],
  lastUpdated: true,
  themeConfig: {
    logo: undefined,
    nav: [
      { text: 'Formats', link: '/formats/' },
      { text: 'Boxed Sets', link: '/boxed-sets/' },
      { text: 'Sources', link: '/formats/bang-like/sources/bang-magic-reddit' }
    ],
    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Formats', link: '/formats/' },
          { text: 'Boxed Sets', link: '/boxed-sets/' }
        ]
      },
      {
        text: 'Formats',
        items: [
          { text: 'Archenemy', link: '/formats/archenemy/' },
          {
            text: 'Assassin',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/formats/assassin/' },
              { text: 'Hitmen', link: '/formats/assassin/variants/hitmen' }
            ]
          },
          {
            text: 'BANG-Like',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/formats/bang-like/' },
              { text: 'BANG! Magic', link: '/formats/bang-like/sources/bang-magic-reddit' },
              { text: 'Kingdom / BANG EDH', link: '/formats/bang-like/sources/kingdom-bang-edh-mtgsalvation' },
              { text: 'Kingdoms EDH', link: '/formats/bang-like/sources/kingdoms-edh-reddit' },
              { text: 'MTG Treachery', link: '/formats/bang-like/sources/mtg-treachery' }
            ]
          },
          {
            text: 'Big Deck',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/formats/big-deck/' },
              { text: "Pile o' Magic", link: '/formats/big-deck/pile-o-magic/' }
            ]
          },
          { text: 'Cube', link: '/formats/cube/' },
          {
            text: 'Horde',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/formats/horde/' },
              { text: 'HordeMagic.com Variant', link: '/formats/horde/sources/hordemagic-com' },
              { text: 'Original Horde Magic', link: '/formats/horde/sources/original-horde-magic-quiet-speculation' },
              { text: 'Open Source Project', link: '/formats/horde/sources/horde-magic-open-source-quiet-speculation' },
              { text: 'The Raid', link: '/formats/horde/sources/horde-raid-quiet-speculation' },
              { text: 'Wiki Summary', link: '/formats/horde/sources/horde-magic-wiki' }
            ]
          }
        ]
      },
      {
        text: 'Boxed Sets',
        items: [
          { text: 'Overview', link: '/boxed-sets/' },
          { text: 'Feudalism', link: '/boxed-sets/feudalism' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: []
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
