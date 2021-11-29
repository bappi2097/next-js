import { NextPage } from "next";
import { Fragment } from "react";
import Link from "next/link"

interface NewsProps {

}

const News: NextPage<NewsProps> = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><Link href="/news/nextjs-page">NextJS is a great framework</Link></li>
                <li><Link href="/news/something-else">Something Else</Link></li>
            </ul>
        </Fragment>
    );
}

export default News;