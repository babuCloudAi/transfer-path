import Layout from '@/components/layout/index.js';
import '@/scss/app.main.scss';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';

export const metadata = {
    title: 'OTM',
    description: 'OTM'
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <Layout>{children}</Layout>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
