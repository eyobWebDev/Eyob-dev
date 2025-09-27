import ClientFormInput from "@/widget/ClientFormInput";
import { LocationEdit, MailIcon, Phone } from "lucide-react";

export default function ContactSection(){

    return <>
    <div id="contact" className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:p-20 p-5">
        <div className="p-8 flex gap-4 rounded flex-col bg-base-300 border border-gray-400 shadow">
            <div className="text-4xl mb-4 font-bold">Contact Information</div>

            <div className="flex gap-5 flex-col">
                <div className="flex gap-1 flex-col">
                    <div className="flex gap-2 items-center"><MailIcon className="text-blue-500" /><div className="font-bold text-xl">Email</div> </div>
                    <div className="flex opacity-60 gap-2 items-center"><div></div><div className="ml-4">eyobdevmedia@gmail.com</div> </div>
                </div>

                 <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center"><Phone className="text-blue-500" /><div className="font-bold text-xl">Phone</div> </div>
                    <div className="flex opacity-70 gap-2 items-center"><div></div><div className="ml-4">+251972761814</div> </div>
                </div>

                 <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center"><LocationEdit className="text-blue-500" /><div className="font-bold text-xl">Location</div> </div>
                    <div className="flex opacity-70 gap-2 items-center"><div></div><div className="ml-4">Ethiopia, Jimma</div> </div>
                </div>
            </div>

            <div className="text-base-content h-0.25 m-7 bg-gray-400"></div>

            <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">Availability</div>
                <div className="opacity-75">I'm currently available for freelance work and full-time positions.</div>
            </div>

        </div>

        <ClientFormInput />
    </div>
    </>
}