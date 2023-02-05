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
                            className="outline-none border-2 rounded-2xl px-8 py-2"
                        />

                        <input type="text" 
                            id="email"
                            name="email"
                            type="email"
                            required
                            maxLength={128}
                            placeholder="Your E-mail"
                            className="outline-none border-2 rounded-2xl px-8 py-2"
                        />

                        <textarea 
                            id="message" 
                            name="message"
                            required
                            maxLength={1048576}
                            placeholder="Additional information"
                            className="outline-none rounded-2xl px-8 py-6 min-h-[16em] scrollbar scrollbar-thumb-black scrollbar-track-gray-200">
                        </textarea>
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