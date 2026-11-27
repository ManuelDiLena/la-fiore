import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-zinc-950 text-white">
      <Shield className="size-12 text-violet-400" />
      <h1 className="text-3xl font-bold">La Fiore</h1>
      <Button className="bg-violet-700 text-white hover:bg-violet-600">
        Todo funcionando
      </Button>
    </main>
  )
}