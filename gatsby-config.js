module.exports = {
  siteMetadata: {
    description: "Professional page of Dr. Will Abramson",
    locale: "en",
    title: "Dr. Will Abramson",
    formspreeEndpoint: "",
    showThemeLogo: true
  },
  plugins: [

    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "warm-red",
      },
    },
  ],
}
