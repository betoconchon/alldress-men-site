import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Phone, MapPin, Clock, MessageCircle, Calendar, Star, Check, CreditCard } from 'lucide-react'
import './App.css'

// Importando as imagens reais
import terno1 from './assets/terno-slim-total-confort-marinho-1.jpg'
import terno2 from './assets/TERNO-SLIM-MICROFIBRA-MEDIUM-GREY-2.jpg'
import terno3 from './assets/terno-slim-azul-claro-3.jpg'
import terno4 from './assets/TERNO-SLIM-DIOR-PRETO-COLETE-MICROFIBRA-PRETO-2.jpg'
import terno5 from './assets/summer-slim-azul-carbono.jpg'
import terno6 from './assets/Summer-gola-xale-sardenha-Dior-preto-1.jpg'
import terno7 from './assets/smoking-slim-melange-indy-blue-3.jpg'
import terno8 from './assets/smoking-slim-com-faixa-para-formados.jpg'
import terno9 from './assets/smoking-preto-1.jpg'
import terno10 from './assets/slim.jpg'
import terno11 from './assets/terno-slim-total-confort-marinho-2.jpeg'
import terno12 from './assets/terno-slim-rosa-2.jpeg'
import terno13 from './assets/terno-slim-microfibra-stone.jpeg'
import terno14 from './assets/terno-slim-microfibra-botanical-1.jpeg'
import terno15 from './assets/terno-slim-linho-natural-2.jpeg'
import terno16 from './assets/terno-slim-dots-span-preto.jpeg'
import terno17 from './assets/terno-slim-confort-grafite.jpeg'
import terno18 from './assets/terno-slim-cinza.jpeg'
import terno19 from './assets/terno-slim-barcelona-preto-3.jpeg'
import terno20 from './assets/smoking-slim-vinho-1.jpeg'

// Novas imagens
import terno21 from './assets/WhatsAppImage2025-06-11at18.03.12.jpeg'
import terno22 from './assets/WhatsAppImage2025-06-11at18.03.12(4).jpeg'
import terno23 from './assets/WhatsAppImage2025-06-11at18.03.12(3).jpeg'
import terno24 from './assets/WhatsAppImage2025-06-11at18.03.12(2).jpeg'
import terno25 from './assets/WhatsAppImage2025-06-11at18.03.12(1).jpeg'
import terno26 from './assets/WhatsAppImage2025-06-11at18.03.11.jpeg'
import terno27 from './assets/WhatsAppImage2025-06-11at18.03.11(2).jpeg'
import terno28 from './assets/WhatsAppImage2025-06-11at18.03.11(1).jpeg'

// Importando o logo
import logo from './assets/Logo2.jpg'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Dados dos ternos com as imagens reais
  const ternos = [
    { id: 1, name: 'Terno Slim Total Confort Marinho', category: 'slim', image: terno1 },
    { id: 2, name: 'Terno Slim Microfibra Medium Grey', category: 'slim', image: terno2 },
    { id: 3, name: 'Terno Slim Azul Claro', category: 'slim', image: terno3 },
    { id: 4, name: 'Terno Slim Dior Preto com Colete', category: 'slim', image: terno4 },
    { id: 5, name: 'Summer Slim Azul Carbono', category: 'summer', image: terno5 },
    { id: 6, name: 'Summer Gola Xale Sardenha Dior Preto', category: 'smoking', image: terno6 },
    { id: 7, name: 'Smoking Slim Melange Indy Blue', category: 'smoking', image: terno7 },
    { id: 8, name: 'Smoking Slim com Faixa para Formados', category: 'smoking', image: terno8 },
    { id: 9, name: 'Smoking Preto Clássico', category: 'smoking', image: terno9 },
    { id: 10, name: 'Terno Slim Clássico', category: 'slim', image: terno10 },
    { id: 11, name: 'Terno Slim Total Confort Marinho', category: 'slim', image: terno11 },
    { id: 12, name: 'Terno Slim Rosa', category: 'colorido', image: terno12 },
    { id: 13, name: 'Terno Slim Microfibra Stone', category: 'slim', image: terno13 },
    { id: 14, name: 'Terno Slim Microfibra Botanical', category: 'slim', image: terno14 },
    { id: 15, name: 'Terno Slim Linho Natural', category: 'linho', image: terno15 },
    { id: 16, name: 'Terno Slim Dots Span Preto', category: 'slim', image: terno16 },
    { id: 17, name: 'Terno Slim Confort Grafite', category: 'slim', image: terno17 },
    { id: 18, name: 'Terno Slim Cinza', category: 'slim', image: terno18 },
    { id: 19, name: 'Terno Slim Barcelona Preto', category: 'slim', image: terno19 },
    { id: 20, name: 'Smoking Slim Vinho', category: 'smoking', image: terno20 },
    { id: 21, name: 'Terno', category: 'terno', image: terno21 },
    { id: 22, name: 'Terno', category: 'terno', image: terno22 },
    { id: 23, name: 'Terno', category: 'terno', image: terno23 },
    { id: 24, name: 'Terno', category: 'terno', image: terno24 },
    { id: 25, name: 'Terno', category: 'terno', image: terno25 },
    { id: 26, name: 'Terno', category: 'terno', image: terno26 },
    { id: 27, name: 'Terno', category: 'terno', image: terno27 },
    { id: 28, name: 'Terno', category: 'terno', image: terno28 }
  ]

  const testimonials = [
    {
      name: 'Felipe Salazar',
      text: 'Atendimento muito bom, valores dentro do esperado, o terno é muito lindo, tudo perfeito! Recomendo demais!'
    },
    {
      name: 'Luiz Fernando Lopes',
      text: 'Eu adorei! eles ajustam sob medida o terno e o atendimento é impecável ⭐️⭐️⭐️⭐️⭐️'
    },
    {
      name: 'Danilo Correia',
      text: 'Encontrei a Alldress no google e resolvi fazer uma visita para procurar o terno da minha formatura, e afirmo que foi uma excelente decisão. Trajes de ótima qualidade e atendimento impecável.'
    },
    {
      name: 'Matheus Albert',
      text: 'Tive uma experiência muito positiva. Fui atendido rapidamente e com muita atenção pelas funcionárias, que foram simpáticas e prestativas durante todo o processo. Consegui alugar o terno perfeito com apenas 3 dias de antecedência do evento, o que me salvou! Recomendo com certeza.'
    },
    {
      name: 'Alex Reinaldo',
      text: 'Atendimento nota 10, preços ótimos Atendimento tranquilo. recomendo'
    },
    {
      name: 'Gerson Tonon',
      text: 'Excelente atendimento. Conta com pessoas qualificadas para o seu atendimento. Trabalham com roupas de alta qualidade e um preço bem justo.'
    }
  ]

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511930293188', '_blank')
  }

  const handleAgendarVisita = () => {
    window.open('https://calendly.com/alldresssp/visita-alldress?preview_source=et_card&month=2025-06', '_blank')
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Minimalista */}
      <header className="bg-white border-b border-gray-100 py-6 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-light tracking-wider text-gray-900">
            <img src={logo} alt="AllDress Men Logo" className="h-16" />
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-600 hidden md:block">(11) 93029.3188 (WhatsApp) | (11) 3208.0684 (Fixo)</span>
            <Button 
              onClick={handleWhatsApp}
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-none px-6"
            >
              CONTATO
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section Elegante */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-wide leading-tight">
            Aluguel de Ternos
            <span className="block text-gray-600 text-4xl md:text-5xl mt-2">para Ocasiões Especiais</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Encontre o terno perfeito para casamentos, formaturas e eventos especiais. 
            Elegância e sofisticação em cada detalhe.
          </p>
          <Button 
            onClick={handleAgendarVisita}
            size="lg" 
            className="bg-gray-900 text-white hover:bg-gray-800 text-base px-12 py-4 rounded-none tracking-wide transition-all duration-300"
          >
            AGENDAR VISITA
          </Button>
        </div>
      </section>

      {/* Seção de Preços */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
              Nossos Preços
            </h2>
            <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Preços transparentes e justos para o seu evento especial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Ternos */}
            <Card className="border border-gray-200 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">TERNOS</h3>
                <div className="text-4xl font-light text-gray-900 mb-6">R$ 490</div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Check className="w-4 h-4" />
                    <span className="font-light">Calça</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Check className="w-4 h-4" />
                    <span className="font-light">Paletó</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Check className="w-4 h-4" />
                    <span className="font-light">Colete</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Check className="w-4 h-4" />
                    <span className="font-light">Gravata</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">Qualquer cor disponível</div>
                </div>
                <Button 
                  onClick={handleAgendarVisita}
                  className="bg-gray-900 text-white hover:bg-gray-800 rounded-none px-8 py-3 tracking-wide transition-all duration-300 w-full"
                >
                  AGENDAR VISITA
                </Button>
              </CardContent>
            </Card>

            {/* Smokings */}
            <Card className="border border-gray-200 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">SMOKINGS</h3>
                <div className="text-4xl font-light text-gray-900 mb-6">R$ 690</div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Check className="w-4 h-4" />
                    <span className="font-light">Calça</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Check className="w-4 h-4" />
                    <span className="font-light">Paletó</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Check className="w-4 h-4" />
                    <span className="font-light">Faixa</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Check className="w-4 h-4" />
                    <span className="font-light">Gravata Borboleta</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">Qualquer cor disponível</div>
                </div>
                <Button 
                  onClick={handleAgendarVisita}
                  className="bg-gray-900 text-white hover:bg-gray-800 rounded-none px-8 py-3 tracking-wide transition-all duration-300 w-full"
                >
                  AGENDAR VISITA
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Informações Adicionais */}
          <div className="bg-gray-50 p-8 rounded-none max-w-4xl mx-auto border border-gray-200">
            <h4 className="text-xl font-light text-gray-900 mb-6 text-center tracking-wide">CAMISAS (VENDA)</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-lg font-light text-gray-900">Para Ternos</div>
                <div className="text-2xl font-light text-gray-900">R$ 290</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-light text-gray-900">Para Smokings</div>
                <div className="text-2xl font-light text-gray-900">R$ 390</div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h5 className="text-lg font-light text-gray-900 mb-4 text-center tracking-wide">FORMAS DE PAGAMENTO</h5>
              <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>4x sem juros</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>10x com taxa</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>10% desconto à vista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Minimalista */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
              Nossa Coleção
            </h2>
            <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Cada peça é cuidadosamente selecionada para garantir qualidade excepcional 
              e ajuste perfeito para o seu evento especial.
            </p>
          </div>

          {/* Grid Elegante */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {ternos.map((terno) => (
              <div 
                key={terno.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedImage(terno)}
              >
                <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden mb-4">
                  <img 
                    src={terno.image} 
                    alt={terno.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <h3 className="text-sm text-gray-900 font-light tracking-wide text-center group-hover:text-gray-600 transition-colors duration-300">
                  {terno.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
              O que nossos clientes dizem
            </h2>
            <div className="w-24 h-px bg-gray-900 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 rounded-none shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gray-900 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-base font-light text-gray-900 mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-gray-600 font-light">{testimonial.name}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
              Por que escolher a AllDress
            </h2>
            <div className="w-24 h-px bg-gray-900 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 border border-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-light mb-4 tracking-wide text-gray-900">Qualidade Premium</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Ternos de alta qualidade com tecidos nobres e acabamento impecável 
                para garantir elegância em cada ocasião.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border border-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-light mb-4 tracking-wide text-gray-900">Atendimento Personalizado</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Consultoria especializada para escolher o modelo ideal e ajustes 
                personalizados para o caimento perfeito.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border border-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-light mb-4 tracking-wide text-gray-900">Localização Central</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Localizada no coração de São Paulo, com fácil acesso e 
                estacionamento para sua comodidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato Elegante */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-wide">
                Visite Nossa Loja
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gray-900 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Endereço</p>
                    <p className="text-gray-600 font-light">Av. Armando Ferrentini, 364<br />Paraíso, São Paulo - SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gray-900 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Horário de Funcionamento</p>
                    <p className="text-gray-600 font-light">Segunda à sexta: 10h às 19h<br />Sábados: 10h às 17h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gray-900 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Telefone</p>
                    <p className="text-gray-600 font-light">(11) 93029.3188 (WhatsApp) | (11) 3208.0684 (Fixo)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <Button 
                  onClick={handleAgendarVisita}
                  size="lg" 
                  className="bg-gray-900 text-white hover:bg-gray-800 text-base px-12 py-4 rounded-none tracking-wide transition-all duration-300"
                >
                  AGENDAR VISITA
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-100 aspect-square rounded-none flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.086498804922!2d-46.63778832446998!3d-23.56519636156749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c81a2f523f%3A0x28f7d2b7e1b2f2b!2sAv.%20Armando%20Ferrentini%2C%20364%20-%20Para%C3%ADso%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004014-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-white text-black py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-light tracking-wider mb-6">
            <img src={logo} alt="AllDress Men Logo" className="h-12 mx-auto" />
          </div>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-gray-600 font-light">
            © 2024 AllDress. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Flutuante Elegante */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={handleWhatsApp}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      </div>
    </div>
  )
}

export default App

