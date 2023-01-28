import Head from "next/head"
import { ReactElement } from "react"

type Props = {
    title: string,
    children: ReactElement[] | ReactElement
}

export default function Layout({children, title}: Props) {
    return (
        <>
            <Head>
                <title>{title.toString()}</title>
            </Head>
            {children}
        </>
    )
}