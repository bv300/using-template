import { useEffect } from 'react';

export interface SeoOptions {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogType?: string;
    ogImage?: string;
    schemas?: Record<string, any>[];
}

export const useSeo = ({ title, description, canonicalUrl, ogType = 'website', ogImage, schemas = [] }: SeoOptions) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        let descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
            descMeta.setAttribute('content', description || '');
        } else {
            descMeta = document.createElement('meta');
            descMeta.setAttribute('name', 'description');
            descMeta.setAttribute('content', description || '');
            document.head.appendChild(descMeta);
        }

        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', canonicalUrl || '');
        } else if (canonicalUrl) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            canonicalLink.setAttribute('href', canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const updateOgTag = (property: string, value?: string) => {
            if (!value) return;
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', value);
        };

        updateOgTag('og:title', title);
        updateOgTag('og:description', description);
        updateOgTag('og:url', canonicalUrl);
        updateOgTag('og:type', ogType);
        if (ogImage) {
            updateOgTag('og:image', ogImage);
        }

        const updateTwitterTag = (name: string, value?: string) => {
            if (!value) return;
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', value);
        };

        updateTwitterTag('twitter:card', 'summary_large_image');
        updateTwitterTag('twitter:title', title);
        updateTwitterTag('twitter:description', description);
        if (ogImage) {
            updateTwitterTag('twitter:image', ogImage);
        }

        const existingScripts = document.querySelectorAll('script[data-seo-schema]');
        existingScripts.forEach(script => script.remove());

        const addedScripts: HTMLScriptElement[] = [];
        schemas.forEach((schema, index) => {
            if (schema) {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.setAttribute('data-seo-schema', `schema-${index}`);
                script.text = JSON.stringify(schema);
                document.head.appendChild(script);
                addedScripts.push(script);
            }
        });

        return () => {
            addedScripts.forEach(script => script.remove());
        };
    }, [title, description, canonicalUrl, ogType, ogImage, schemas]);
};

export default useSeo;
