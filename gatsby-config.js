module.exports = {
    siteMetadata: {
        title: "Scandiweb",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
        },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "http://167.172.45.156/graphql",
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
