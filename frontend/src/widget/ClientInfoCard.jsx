import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import "../assets/styles/card.css"
import { Copy, InfoIcon, Mail, MailIcon, PenBox, ToolCase } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function ClientInfoCard({client}){

    return <div className="flex rounded-2xl flex-col gap-2 card-bg">
        <div className="flex p-3 rounded-t-2xl bg-blue-800 opacity-80 font-bold justify-between items-center">
            <div >{client.name}</div><div className="flex gap-2 items-center"><div>{client.email}</div> <Copy size={15}/></div>
        </div>
        <div className="flex flex-col gap-2 p-3">
            <div className="flex gap-3 mb-4 text-blue-300 items-center">
                <div className="font-bold">{client.subject.toUpperCase()}</div>
            </div>
            <div className="flex gap-3 text-blue-300 opacity-80 items-center">
                <div className="">{client.message}</div>
            </div>
        </div>

        <div className="p-3">
            <Button className={`w-full`}>Reply</Button>
        </div>
    </div>
}