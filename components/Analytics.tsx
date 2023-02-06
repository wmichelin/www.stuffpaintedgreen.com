import Script from "next/script"

export const Analytics = () => (
    <>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-LR79RFF6EM"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-LR79RFF6EM');
            `}
        </Script>
    </>
);