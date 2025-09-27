import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { LucideLoader2 } from "lucide-react";
import { useState } from "react";
import { errorToaster } from "./toaster";


export default function ClientFormInput(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const {isSavingClientData, saveClientData} = useAuthStore()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if(!email || !subject) return errorToaster("can't send a message with out email and subject.", "", "x")
        await saveClientData({name, email, subject, message})
        
    }

    return<div className="p-8 flex gap-4 rounded flex-col bg-base-300 border border-gray-400 shadow">
            <div className="text-4xl mb-4 font-bold">Send me a message</div>

            <form onSubmit={handleFormSubmit} className="flex gap-5 flex-col">
                <div className="flex w-full justify-around gap-5">
                    <div className="flex w-full flex-col gap-2">
                        <label>Name</label>
                        <input 
                        className="input rounded outline-0 focus:border-blue-500 focus:outline-0" 
                        type="text" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        /> 
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <label>Email</label>
                        <input 
                        className="input outline-0 focus:border-blue-500 focus:outline-0" 
                        type="Email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        /> 
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex flex-col gap-2">
                        <label>Subject</label>
                        <input 
                        className="input w-full outline-0 focus:border-blue-500 focus:outline-0" 
                        type="text" 
                        placeholder="Tell me a little about what you want?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                         /> 
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex flex-col gap-2">
                        <label>Message</label>
                        <textarea 
                        className="textarea w-full h-30 outline-0 focus:border-blue-500 focus:outline-0" 
                        type="text" 
                        placeholder="Write details about your need?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea> 
                    </div>
                </div>

                <div className="w-full">
                    <Button type='submit' className={`w-full p-1`}>{isSavingClientData ? <LucideLoader2 /> : "Send Message"}</Button>
                </div>
            </form>
        </div>
}