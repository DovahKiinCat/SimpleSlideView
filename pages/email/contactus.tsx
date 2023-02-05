import Layout from "layout/layout"

export default function Contact() {
    return (
        <>
        <Layout title={"Contact"}>

        </Layout>

        <section className="flex flex-col justify-center h-screen w-full">

            <section className="mx-auto">
                <section className="relative bg-white w-[350px] h-[450px] rounded-2xl shadow-xl sm:w-[700px] sm:h-[550px]"> 
                    <form action="" className="flex flex-col gap-4 mt-16 p-4 lg:mt-20 min-w-full lg:min-w-[500px]">
                        <input 
                            id="companyName"
                            name="companyName"
                            required
                            maxLength={128}
                            type="text"
                            placeholder="Company name"
                            className="bg-black text-white outline-none border-2 rounded-2xl"
                        />
                    </form>
                </section>
            </section>

            <section className="relative flex justify-center p-4">
                <button className="font-bold rounded-2xl bg-white shadow-xl p-2">
                    kk so um butao
                </button>
            </section>

        </section>
        </>
    )
}