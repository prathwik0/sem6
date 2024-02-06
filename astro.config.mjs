import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Sem 6',
            customCss: [
                './src/tailwind.css',
                './src/styles/katex.css',
                './src/styles/index.css',
            ],
            social: {
                github: 'https://github.com/prathwik0/sem6',
                linkedin: 'https://www.linkedin.com/in/prathwik/',
            },
            tableOfContents: {
                minHeadingLevel: 1,
                maxHeadingLevel: 4,
            },
            sidebar: [
                {
                    label: 'Home',
                    link: '/',
                },
                {
                    label: 'Semester 6',
                    link: '/sem6',
                },
                {
                    label: 'Internet of Things',
                    autogenerate: {
                        directory: 'iot',
                    },
                },
                {
                    label: 'Natural Language Processing',
                    autogenerate: {
                        directory: 'nlp',
                    },
                },
                {
                    label: 'Management & Entrepreneur',
                    autogenerate: {
                        directory: 'me',
                    },
                },
                {
                    label: 'Big Data Analytics',
                    autogenerate: {
                        directory: 'big-data',
                    },
                },
                {
                    label: 'Wheeled Mobile Robots',
                    autogenerate: {
                        directory: 'mobile-robot',
                    },
                },
            ],
        }),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});
