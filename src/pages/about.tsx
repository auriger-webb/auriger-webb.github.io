import type {ReactNode} from "react";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from '@theme/Heading';
import Layout from "@theme/Layout";

function Header(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary')}>
            <div className="container">
                <Heading as="h1" className='hero__title'>
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

function Content(): ReactNode {
    return (<div/>);
}

export default function About(): ReactNode {
    return (
        <Layout
            title={`Hi, I'm Auriger Webb`}
            description="The thoughts; ideas; and projects; of a gay and kinky computer nerd">
            <Header/>
            <main>
                <Content/>
            </main>
        </Layout>
    )
}