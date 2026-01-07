import { Card } from "@/components/ui/card"

const dishes = [
  {
    name: "Sushi Premium",
    description: "Seleção exclusiva do chef com peixes frescos e arroz perfeitamente temperado",
    image: "/premium-sushi-platter-elegant-presentation-dark-ba.jpg",
    price: "R$ 89,90",
  },
  {
    name: "Sashimi Selection",
    description: "Cortes nobres de atum, salmão e peixe branco, servidos com molhos especiais",
    image: "/sashimi-platter-fresh-fish-elegant-japanese-style.jpg",
    price: "R$ 98,90",
  },
  {
    name: "Tempurá Misto",
    description: "Camarões e vegetais empanados levemente, crocantes e delicados",
    image: "/tempura-shrimp-vegetables-crispy-japanese-food.jpg",
    price: "R$ 76,90",
  },
  {
    name: "Lámen Tradicional",
    description: "Caldo rico e aromático com macarrão artesanal, chashu e ovo marinado",
    image: "/ramen-bowl-traditional-japanese-noodles-chashu-egg.jpg",
    price: "R$ 68,90",
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">{"Pratos Principais"}</span>
            <div className="w-16 h-px bg-accent mx-auto mt-4" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {"Sabores que encantam"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Cada prato é uma obra de arte, preparado com dedicação e ingredientes selecionados"}
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {dishes.map((dish, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-500 bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-card-foreground">{dish.name}</h3>
                  <span className="text-xl font-bold text-accent whitespace-nowrap ml-4">{dish.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
