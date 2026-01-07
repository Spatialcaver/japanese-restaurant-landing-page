import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, ShoppingBag, Calendar } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/japanese-bamboo-garden-zen-peaceful-minimal.jpg" alt="Jardim japonês" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70">{"Visite-nos"}</span>
            <div className="w-16 h-px bg-accent mx-auto mt-4" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-6 text-balance">{"Reserve sua experiência"}</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {"Estamos prontos para recebê-lo. Entre em contato para reservas, pedidos ou informações"}
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <Card className="p-8 lg:p-10 bg-card hover:shadow-2xl transition-shadow duration-300 border-0">
            <Calendar className="w-12 h-12 text-accent mb-6" />
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-card-foreground mb-4">{"Fazer Reserva"}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {"Garanta sua mesa e desfrute de uma experiência gastronômica inesquecível"}
            </p>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {"Reservar Mesa"}
            </Button>
          </Card>

          <Card className="p-8 lg:p-10 bg-card hover:shadow-2xl transition-shadow duration-300 border-0">
            <ShoppingBag className="w-12 h-12 text-accent mb-6" />
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-card-foreground mb-4">{"Pedir Online"}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {"Peça delivery ou retire no local. Sabor autêntico no conforto da sua casa"}
            </p>
            <Button size="lg" variant="outline" className="w-full border-2 bg-transparent">
              {"Fazer Pedido"}
            </Button>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="text-center md:text-left">
            <MapPin className="w-6 h-6 text-accent mb-3 mx-auto md:mx-0" />
            <h4 className="font-semibold mb-2">{"Endereço"}</h4>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {"Rua das Flores, 123"}
              <br />
              {"Jardins, São Paulo - SP"}
            </p>
          </div>

          <div className="text-center md:text-left">
            <Phone className="w-6 h-6 text-accent mb-3 mx-auto md:mx-0" />
            <h4 className="font-semibold mb-2">{"Telefone"}</h4>
            <p className="text-sm text-primary-foreground/70">
              {"(11) 3456-7890"}
              <br />
              {"(11) 98765-4321"}
            </p>
          </div>

          <div className="text-center md:text-left">
            <Mail className="w-6 h-6 text-accent mb-3 mx-auto md:mx-0" />
            <h4 className="font-semibold mb-2">{"E-mail"}</h4>
            <p className="text-sm text-primary-foreground/70">
              {"contato@sakurahouse.com.br"}
              <br />
              {"reservas@sakurahouse.com.br"}
            </p>
          </div>

          <div className="text-center md:text-left">
            <Clock className="w-6 h-6 text-accent mb-3 mx-auto md:mx-0" />
            <h4 className="font-semibold mb-2">{"Horário"}</h4>
            <p className="text-sm text-primary-foreground/70">
              {"Ter - Dom: 12h - 23h"}
              <br />
              {"Segunda: Fechado"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
