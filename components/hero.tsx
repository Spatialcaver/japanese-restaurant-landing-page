import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-japanese-restaurant-interior-dark-wood-war.jpg"
          alt="Interior do restaurante"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-primary-foreground">
            <h1 className="font-serif text-2xl lg:text-3xl font-bold tracking-tight">{"Sakura House"}</h1>
            <p className="text-xs lg:text-sm text-primary-foreground/80 mt-1">{"Autêntica Culinária Japonesa"}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="w-4 h-4 mr-2" />
              {"Contato"}
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {"Reservar"}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h2 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
          {"Uma jornada pelos sabores do Japão"}
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
          {
            "Experimente a autêntica culinária japonesa com ingredientes frescos e técnicas tradicionais, em um ambiente elegante e acolhedor"
          }
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 h-12 min-w-[200px]"
          >
            {"Ver Cardápio"}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 h-12 min-w-[200px]"
          >
            {"Fazer Pedido Online"}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
