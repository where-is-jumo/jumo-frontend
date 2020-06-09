import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import Layout from "../components/layout";

export default () => (
    <Layout>
        <Head>
            <title>Jumo</title>
        </Head>
        <ul>
            <li>
                <Link href="/repos" as="/repos">
                    <a>repos</a>
                </Link>
            </li>
            <li>
                <Link href="/button" as="/button">
                    <a>button</a>
                </Link>
            </li>
        </ul>
    </Layout>
)
