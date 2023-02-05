import Layout from '../layout/layout'
import Body from '../components/body'
import Header from "../components/header"

export default function Home() {
    return (
        <>
        <Layout title={"Homepage"}>
            <Header/>
            <Body/>
        </Layout>
        </>
    )
}