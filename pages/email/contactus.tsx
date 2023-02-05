import Layout from "layout/layout"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {

    const [state, handleSubmit] = useForm("xlekgykk")

    if (state.succeeded) {
        return (
            <p className="flex flex-col justify-center text-center h-screen w-full text-white font-bold text-4xl">Obrigado por entrar em contato!</p>
        )
    }

    return (
        <>
        <Layout title={"Contact"}>

        </Layout>

        <section className="flex-1 flex flex-col justify-center h-screen w-full">

            <section className="mx-auto">
                <section className="relative bg-white w-[350px] h-[450px] rounded-2xl shadow-xl sm:w-[700px] sm:h-[550px]"> 
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-16 p-4 lg:mt-20 min-w-full lg:min-w-[500px]">
                        <input 
                            id="companyName"
                            name="companyName"
                            required
                            maxLength={128}
                            type="text"
                            placeholder="Company name"
                            className="outline-none border-2 rounded-2xl px-8 py-2
                            
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500

                            "
                        />

                        <input 
                            id="email"
                            name="email"
                            type="email"
                            required
                            maxLength={128}
                            placeholder="Your E-mail"
                            className="outline-none border-2 rounded-2xl px-8 py-2
                            
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            peer
                            
                            "
                        />

                        <p className="mx-auto invisible peer-invalid:visible text-pink-600 text-sm">
                            Please provide a valid email address.
                        </p>

                        <textarea 
                            id="message" 
                            name="message"
                            required
                            maxLength={1048576}
                            placeholder="Additional information"
                            className="border-2 outline-none rounded-2xl px-8 py-6 min-h-[16em] scrollbar hover:scrollbar-thumb-gray-900 scrollbar-thumb-black scrollbar-track-gray-200
                            
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            
                            ">
                        </textarea>

                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                        <ValidationError 
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                    <section className="text-center p-6 lg:p-6">
                        <button type="submit" disabled={state.submitting} className="relative bg-black text-white font-bold rounded-2 shadow-xl rounded-2xl w-20 h-12">
                            Enviar
                        </button>
                    </section>

                    </form>
                </section>
            </section>


        </section>
        </>
    )
}