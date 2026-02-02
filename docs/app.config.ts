// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'azlan.works',
    description: 'Documentation for my projects.',
    image: 'https://azlan.works/_next/static/media/azlan.works-logo.fa6cfc2d.svg',
    socials: {
      github: 'azlan-works',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'Docs',
      owner: 'azlan-works',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
