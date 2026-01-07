import { Card } from "@/components/ui/card"

const categories = [
  {
    title: "Entradas",
    items: ["Edamame", "Gyoza", "Sunomono", "Harumaki"],
  },
  {
    title: "Sushi & Sashimi",
    items: ["Nigiri Variado", "Sashimi Mix", "Combinado Chef", "Rolls Especiais"],
  },
  {
    title: "Pratos Quentes",
    items: ["Lámen", "Yakisoba", "Teriyaki", "Tempurá"],
  },
  {
    title: "Sobremesas",
    items: ["Mochi", "Dorayaki", "Matcha Cheesecake", "Sorvete Artesanal"],
  },
]

export function MenuHighlights() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">{"Nosso Cardápio"}</span>
            <div className="w-16 h-px bg-accent mx-auto mt-4" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {"Explore nossos sabores"}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 border-border hover:border-accent/50 transition-colors duration-300 bg-card"
            >
              <h3 className="font-serif text-2xl font-bold text-card-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-muted-foreground mb-6">{"Veja o cardápio completo com preços e descrições detalhadas"}</p>
          <button className="text-accent font-semibold hover:text-accent/80 transition-colors inline-flex items-center group">
            {"Baixar Cardápio Completo"}
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
