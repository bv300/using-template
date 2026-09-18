import React from 'react';
import Navbar from '@/components/tem-six/Navbar/Navbar';
import Footer from '@/components/tem-six/Footer/Footer';
import ScrollToTop from '@/components/tem-six/ScrollToTop/ScrollToTop';
import PageLoader from '@/components/tem-six/PageLoader/PageLoader';
import FloatingBackButton from '@/components/FloatingBackButton';

import './index.css';
import './App.css';

export default function TemSixLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="tem-six-root">
            <PageLoader />
            <Navbar />
            <main>{children}</main>
            <FloatingBackButton />
            <ScrollToTop />
            <Footer />
        </div>
    );
}
