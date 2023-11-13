/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-d4510ea23efe4dfda8bbe952a1118ca5.r2.dev',
                port: '',
                pathname: '/**'
            }
        ]
    },
}

export default nextConfig