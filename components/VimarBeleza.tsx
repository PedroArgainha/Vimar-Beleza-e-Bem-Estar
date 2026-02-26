'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Calendar, Heart, Star, Menu, X } from 'lucide-react'
import InfiniteGallery from "./InfiniteGallery";

export default function VimarBeleza() {
  const [selectedService, setSelectedService] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { name: "Coloração e Madeixas",
      description: "Transforme o seu visual com asnossas técnicas avançadas de coloração e madeixas. Utilizamos produtos de alta qualidade para garantir cores vibrantes e duradouras.",
      images: [
        "/fotos/madeixas/madeixas1.jpg",
        "/fotos/madeixas/madeixas.jpg",
        "/fotos/madeixas/madeixas2.jpg"
        ]},
    { name: "Desfrizagem",
      description: "Elimine o frizz e tenha cabelos lisos e sedosos por mais tempo. Os nossos tratamentos de desfrizagem respeitam a estrutura natural dos fios.",
      images: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop"
      ]},
    { name: "Manicure e Pedicure",
      description: "Cuide das suas unhas com nossos s erviços completos de manicure e pedicure. Técnicas profissionais para unhas sempre impecáveis.",
      images: [
        "/fotos/unhas/unhas2.jpg",
        "/fotos/unhas/unhas4.jpg",
        "/fotos/unhas/unhas3.jpg",
        "/fotos/unhas/unhas1.jpg"
      ]},
    { name: "Hidratação e Botox Capilar",
      description: "Revitalize o seu cabelo com o tratamento de hidratação profunda e botox capilar. Fios mais saudáveis, brilhantes e resistentes.",
      images: [
        "/fotos/hidratacao/hidratacao1.jpg",
        "/fotos/hidratacao/hidratacao2.jpg",
      ]},
    { name: "Penteados",
      description: "Do liso perfeito às ondas naturais, do apanhado elegante ao look descontraído: criamos penteados que a fazem sentir ",
      images: [
        "/fotos/penteados/penteados3.jpg",
        "/fotos/penteados/penteado2.jpg",
        "/fotos/penteados/penteado1.jpg",
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
    { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop", alt: "Serviço de Beleza 1" },
    { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop", alt: "Serviço de Beleza 2" },
    { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop", alt: "Serviço de Beleza 3" },
    { src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop", alt: "Serviço de Beleza 4" }
  ]
  const galleryImagesBottom = [
    { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop", alt: "Galeria Vimar 1" },
    { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop", alt: "Galeria Vimar 2" },
    { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop", alt: "Galeria Vimar 3" },
    { src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop", alt: "Galeria Vimar 4" }
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
              <img src="/fotos/logo.png" alt="Vimar Beleza e Bem-Estar" className="h-13 w-13 object-contain" />
              <h1 className="text-xl font-bold text-foreground">Vimar Beleza e Bem-Estar</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                ['inicio','Início'],
                ['servicos','Serviços'],
                ['galeria','Galeria'],
                ['sobre','Sobre Nós'],
                ['contato','Contacto'],
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
                  ['contato','Contacto'],
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
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                A sua Beleza
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-700 -mt-3">
                  começa Aqui
                </span>
              </h1>
              <p className="text-xl text-muted mb-8 leading-relaxed">
                No nosso salão, transformamos a sua beleza natural em arte. 
                Experimente os nossos serviços profissionais num ambiente acolhedor e relaxante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:253261617" className="bg-gradient-to-r from-accent to-accent-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Marcação</span>
                </a>
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
                <p className="text-sm text-muted mt-1">+300 Clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Os Nossos Serviços</h2>
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
                <a href="tel:253261617" className="bg-gradient-to-r from-accent to-accent-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-fit">
                  <Calendar className="h-4 w-4" />
                  <span>Agendar Este Serviço</span>
                </a>
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

          <InfiniteGallery
            topImages={galleryImagesTop}
            bottomImages={galleryImagesBottom}
          />

        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="/fotos/gina.jpg" alt="Proprietária" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <p className="text-2xl font-bold text-accent">15+</p>
                <p className="text-sm text-muted">Anos de Experiência</p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Sobre Nós</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">Há mais de 15 anos, vivo a minha paixão por cuidar de pessoas e valorizar a sua beleza natural.</p>
              <p className="text-lg text-muted leading-relaxed mb-6">O nosso salão é o reflexo desse amor e um espaço criado para si, onde a beleza se encontra com o carinho, e o cuidado se transforma em amor-próprio.</p>
              <p className="text-lg text-muted leading-relaxed mb-8">Comprometo-me a oferecer-lhe um espaço onde possa sentir-se especial, por dentro e por fora.</p>
              <div className="flex items-center space-x-4">
                <Heart className="h-8 w-8 text-accent" />
                <span className="text-lg font-semibold text-foreground">Com amor, Gininha</span>
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
                      <h4 className="font-semibold text-foreground">Contactos</h4>
                      <p className="text-muted">
                        <a href="tel:+351936315846" className="hover:underline block">+351 936 315 846</a>
                        <a href="tel:253261617" className="hover:underline block mt-1">253 261 617</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent p-3 rounded-full"><MapPin className="h-6 w-6 text-white" /></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Localização</h4>
                      <p className="text-muted">Largo da Senhora Branca, nº100</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/p/Vimar-Beleza-e-Bem-Estar-100063737700742/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-accent p-3 rounded-full text-white hover:opacity-90 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/vimar_beleza_e_bem_estar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-accent p-3 rounded-full text-white hover:opacity-90 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <a href="tel:253261617" className="w-full bg-gradient-to-r from-accent to-accent-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Agendar Agora</span>
              </a>
            </div>

            {/* Google Maps */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d527.8217474714864!2d-8.416769024574013!3d41.55169590012651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24ffbcebea9b3b%3A0xd53a7fc8e7f58179!2sVimar!5e0!3m2!1spt-PT!2spt!4v1769661210786!5m2!1spt-PT!2spt"
                className="w-full h-full border-0"
                style={{ minHeight: '500px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
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
                <p>253 261 617 </p>
                <p>936 315 846</p>
                <div className="flex space-x-4 mt-4">
                  <a href="https://www.facebook.com/p/Vimar-Beleza-e-Bem-Estar-100063737700742/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/vimar_beleza_e_bem_estar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>  

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70">© 2026 Vimar Beleza e Bem-Estar. Todos os direitos reservados.</p>
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