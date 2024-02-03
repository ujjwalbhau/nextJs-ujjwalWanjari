/** @type {import('next').NextConfig} */
const nextConfig = {};

 export default nextConfig;



export function webpack(config, { isServer }) {
    if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
            fs: false
        };
    }

    return config;
}
