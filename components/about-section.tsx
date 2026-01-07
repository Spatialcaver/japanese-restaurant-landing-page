export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
              <img
                src="/japanese-chef-preparing-sushi-traditional-kitchen.jpg"
                alt="Chef preparando sushi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-sm -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">{"Nossa História"}</span>
              <div className="w-16 h-px bg-accent mt-4" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 leading-tight text-balance">
              {"Tradição e excelência em cada detalhe"}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                {
                  "Fundado há mais de 15 anos, o Sakura House nasceu da paixão de nosso chef executivo pela autêntica culinária japonesa. Treinado em Tóquio, ele trouxe para o Brasil as técnicas tradicionais e o respeito pelos ingredientes."
                }
              </p>
              <p>
                {
                  "Cada prato é preparado com ingredientes cuidadosamente selecionados, seguindo os princípios do washoku - a harmonia dos sabores, cores e texturas que caracteriza a gastronomia japonesa."
                }
              </p>
              <p>
                {
                  "Nosso compromisso é proporcionar não apenas uma refeição, mas uma experiência sensorial completa que transporta você para o Japão."
                }
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="font-serif text-4xl font-bold text-accent mb-2">{"15+"}</div>
                <div className="text-sm text-muted-foreground">{"Anos de experiência"}</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-accent mb-2">{"50+"}</div>
                <div className="text-sm text-muted-foreground">{"Pratos no cardápio"}</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-accent mb-2">{"100%"}</div>
                <div className="text-sm text-muted-foreground">{"Ingredientes frescos"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
