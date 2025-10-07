'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Calendar, Heart, Star, Menu, X } from 'lucide-react'

export default function VimarBeleza() {
  const [selectedService, setSelectedService] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { name: "Coloração e Madeixas",
      description: "Transforme seu visual com nossas técnicas avançadas de coloração e madeixas. Utilizamos produtos de alta qualidade para garantir cores vibrantes e duradouras.",
      images: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop"
      ]},
    { name: "Desfrizagem",
      description: "Elimine o frizz e tenha cabelos lisos e sedosos por mais tempo. Nossos tratamentos de desfrizagem respeitam a estrutura natural dos fios.",
      images: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop"
      ]},
    { name: "Manicure e Pedicure",
      description: "Cuide das suas unhas com nossos serviços completos de manicure e pedicure. Técnicas profissionais para unhas sempre impecáveis.",
      images: [
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=300&fit=crop"
      ]},
    { name: "Hidratação e Botox Capilar",
      description: "Revitalize seus cabelos com nossos tratamentos de hidratação profunda e botox capilar. Fios mais saudáveis, brilhantes e resistentes.",
      images: [
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
      ]},
    { name: "Sobrançelha e Buço",
      description: "Design perfeito para suas sobrançelhas e remoção profissional de pelos. Realce sua beleza natural com nossos cuidados especializados.",
      images: [
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop"
      ]},
  ]

  const heroImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
  ]

  const galleryImagesTop = [
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop"
  ]
  const galleryImagesBottom = [
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop"
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-accent" />
              <h1 className="text-xl font-bold text-foreground">Vimar Beleza e Bem-Estar</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                ['inicio','Início'],
                ['servicos','Serviços'],
                ['galeria','Galeria'],
                ['sobre','Sobre Nós'],
                ['contato','Contato'],
              ].map(([id,label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="font-body text-foreground hover:text-accent transition-colors font-medium"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:text-accent"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                {[
                  ['inicio','Início'],
                  ['servicos','Serviços'],
                  ['galeria','Galeria'],
                  ['sobre','Sobre Nós'],
                  ['contato','Contato'],
                ].map(([id,label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className="text-left px-4 py-2 text-foreground hover:text-accent transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                A sua Beleza
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-700">
                  começa Aqui
                </span>
              </h1>
              <p className="text-xl text-muted mb-8 leading-relaxed">
                No Vimar Beleza e Bem-Estar, transformamos sua beleza natural em arte. 
                Experimente nossos serviços profissionais em um ambiente acolhedor e relaxante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button type="button" className="bg-gradient-to-r from-accent to-accent-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Agendar Consulta</span>
                </button>
                <button 
                  type="button"
                  onClick={() => scrollToSection('servicos')}
                  className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Ver Serviços
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
                  {heroImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0">
                      <img src={image} alt={`Salão Vimar ${index + 1}`} className="w-80 h-96 object-cover rounded-xl" />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent fill-current" />
                  <Star className="h-5 w-5 text-accent fill-current" />
                  <Star className="h-5 w-5 text-accent fill-current" />
                  <Star className="h-5 w-5 text-accent fill-current" />
                  <Star className="h-5 w-5 text-accent fill-current" />
                </div>
                <p className="text-sm text-muted mt-1">Clientes Satisfeitas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de beleza com técnicas modernas e produtos de alta qualidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedService(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    selectedService === index
                      ? 'bg-gradient-to-r from-accent to-accent-700 text-white shadow-2xl transform scale-105'
                      : 'bg-[#F7F6F3] hover:bg-[#EFECE7] text-foreground'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className={`text-sm ${selectedService === index ? 'text-accent-100/90' : 'text-muted'}`}>
                    Clique para ver detalhes
                  </p>
                </button>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-background rounded-2xl p-8 shadow-xl border border-border">
                <div className="mb-6">
                  <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
                    {services[selectedService].images.map((image, index) => (
                      <div key={index} className="flex-shrink-0">
                        <img src={image} alt={`${services[selectedService].name} ${index + 1}`} className="w-64 h-48 object-cover rounded-xl shadow-lg" />
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{services[selectedService].name}</h3>
                <p className="text-muted leading-relaxed mb-6">{services[selectedService].description}</p>
                <button type="button" className="bg-gradient-to-r from-accent to-accent-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Agendar Este Serviço</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Galeria</h2>
            <p className="text-xl text-muted">Veja alguns dos nossos trabalhos e o ambiente do nosso salão</p>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden">
              <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4">
                {galleryImagesTop.map((image, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img src={image} alt={`Galeria ${index + 1}`} className="w-72 h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4 ml-36">
                {galleryImagesBottom.map((image, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img src={image} alt={`Galeria ${index + 9}`} className="w-72 h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=600&fit=crop" alt="Proprietária do Vimar Beleza e Bem-Estar" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <p className="text-2xl font-bold text-accent">15+</p>
                <p className="text-sm text-muted">Anos de Experiência</p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Sobre Nós</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">Bem-vindas ao Vimar Beleza e Bem-Estar! …</p>
              <p className="text-lg text-muted leading-relaxed mb-6">O nosso salão nasceu do sonho …</p>
              <p className="text-lg text-muted leading-relaxed mb-8">A nossa missão é realçar a beleza …</p>
              <div className="flex items-center space-x-4">
                <Heart className="h-8 w-8 text-accent" />
                <span className="text-lg font-semibold text-foreground">Com amor, Vimar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contato" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Contacte-nos</h2>
            <p className="text-xl text-muted">Estamos aqui para cuidar da sua beleza</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-full"><Clock className="h-6 w-6 text-white" /></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Horário de Funcionamento</h4>
                      <p className="text-muted">Segunda a Sábado: 10:00 - 19:00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-full"><Phone className="h-6 w-6 text-white" /></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telefone</h4>
                      <p className="text-muted">+351 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-full"><MapPin className="h-6 w-6 text-white" /></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Localização</h4>
                      <p className="text-muted">Vimar Beleza e Bem-Estar</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a href="#" aria-label="Facebook" className="bg-accent p-3 rounded-full text-white hover:opacity-90 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                    </a>
                    <a href="#" aria-label="Instagram" className="bg-accent-600 p-3 rounded-full text-white hover:opacity-90 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                    </a>
                  </div>
                </div>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-accent to-accent-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Agendar Agora</span>
              </button>
            </div>

            {/* Google Maps */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
              <div className="h-96 bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mapa do Google</h3>
                  <p className="text-muted">Integração com Google Maps</p>
                  <p className="text-sm text-muted mt-2">Substitua este espaço pelo embed do Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-bold">Vimar Beleza e Bem-Estar</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                O seu destino para beleza e bem-estar. Transformamos sonhos em realidade com carinho e profissionalismo.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação Rápida</h4>
              <div className="space-y-2">
                {[
                  ['servicos','Nossos Serviços'],
                  ['galeria','Galeria'],
                  ['sobre','Sobre Nós'],
                  ['contato','Contacto'],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className="block text-white/70 hover:text-accent transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-white/70">
                <p>Segunda a Sábado: 10:00 - 19:00</p>
                <p>+351 XXX XXX XXX</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">Facebook</a>
                  <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70">© 2025 Vimar Beleza e Bem-Estar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}
