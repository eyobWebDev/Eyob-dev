import { useAuthStore } from "@/store/useAuthStore"
import ClientInfoCard from "@/widget/ClientInfoCard"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function AdminPage(){
    const {clientData} = useAuthStore()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return <>
    <div className="pl-10 pt-10" onClick={handleClick}><ArrowLeft /></div>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 p-10">
        {clientData.map(client => {
            return <ClientInfoCard client={client} />
        })}
    </div>
    </>
}