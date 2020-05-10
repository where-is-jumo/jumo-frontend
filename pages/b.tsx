import React, {Component} from 'react'
import Head from "next/head";
import {GetStaticProps} from "next";

interface bProps {
    testData: {a: string}
}
class b extends Component<bProps> {
    public render() {
        return (
            <>
                <Head>
                    <title>Jumo b</title>
                </Head>
                <div>{this.props.testData.a}</div>
            </>
        );
    }
}

export const getStaticProps: GetStaticProps = async _ => {
    const testData = {a:'1'}
    return {
        props: {
            testData
        }
    }
}

export default b