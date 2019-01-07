module.exports = {
  siteMetadata: {
    title: `AaronDeruvo.com`,
    siteUrl: `https://aaronderuvo.com`,
    description: `Who I am`,
    menuLinks:[
      {
         name:'home',
         link:'/'
      },
      {
         name:'meta',
         link:'/meta'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    }
  ]
}
