/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeCss: false, 
  enableBabelRuntime: true, 
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                 hostname: "**"
            }
        ]
    }
}

module.exports = nextConfig
