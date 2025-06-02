import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const title = 'Auriger Webb';

const config: Config = {
    title,
    tagline: "The masculine, nominative form of the Latin adjective meaning 'bearing gold'",
    favicon: 'img/favicon.svg',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    url: 'https://auriger.io',
    baseUrl: '/',
    trailingSlash: false,

    // GitHub pages deployment config.
    organizationName: 'auriger-webb',
    projectName: 'auriger-webb.github.io',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Perhaps I'll practice writing in Deutsch at some point.
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                // Revisit the use-case of 'docs' plugin in the future
                docs: false,
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',

                    // Prioritize blog content over docs content
                    routeBasePath: '/'
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/heart_icon.svg', // TODO: revisit social card notion https://ogp.me/
        navbar: {
            title,
            logo: {
                alt: 'The red heart of the leather pride flag',
                src: 'img/heart_icon.svg',
            },
            items: [
                {to: '/', label: 'Journal', position: 'left'},
                {to: '/about', label: 'About', position: 'left'},
            ],
        },
        footer: {
            links: [
                {
                    title: 'Content',
                    items: [
                        {
                            label: 'Journal',
                            to: '/'
                        }
                    ]
                },
                {
                    title: 'Info',
                    items: [
                        {
                            label: 'About',
                            to: '/about'
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/auriger-webb',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Auriger Webb. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
