/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['queue.arprince.me'],
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'queue.arprince.me',
                pathname: '/img/**', // Adjust this to match your image paths
            },
        ],
    },
};

export default nextConfig;
