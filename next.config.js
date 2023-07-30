/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "platform-lookaside.fbsbx.com", //facebook
            "firebasestorage.googleapis.com", //firebase-storage
            "scontent-atl3-2.xx.fbcdn.net", //facebook
            "pbs.twimg.com", //twitter
            "i-invdn-com.investing.com"
        ],
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: '**',
            //     port: '',
            //     pathname: '**',
            // },
            {
                protocol: 'https',
                hostname: 'i-invdn-com.investing.com',
                port: '',
                pathname: '/news/external-images-thumbnails/**',
            },
        ],
      },
}

module.exports = nextConfig
