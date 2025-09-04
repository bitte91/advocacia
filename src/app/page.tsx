"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail, MapPin, ChevronRight, Quote, ArrowRight, Linkedin, Facebook, Instagram, MessageCircle, Star } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }
  }, [currentTestimonial]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://z-cdn-media.chatglm.cn/files/17a96081-0dc8-410c-bde5-20b9915e2b66_Gemini_Generated_Image_jg1q0njg1q0njg1q.png?auth_key=1788316877-4011345269de45018f63157263af71a7-0-8d976224225ef34618715ec01d38f3fb" 
                alt="Bittencourt Advocacia" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-light tracking-wide">BITTENCOURT</h1>
                <p className="text-xs text-blue-600 tracking-widest">ADVOCACIA</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-600 transition-colors text-sm tracking-wider">INÍCIO</button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-blue-600 transition-colors text-sm tracking-wider">SOBRE</button>
              <button onClick={() => scrollToSection('areas')} className="text-gray-300 hover:text-blue-600 transition-colors text-sm tracking-wider">ÁREAS</button>
              <button onClick={() => scrollToSection('trabalhos')} className="text-gray-300 hover:text-blue-600 transition-colors text-sm tracking-wider">TRABALHOS</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-blue-600 transition-colors text-sm tracking-wider">CONTATO</button>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gray-900 border-gray-800">
                <nav className="flex flex-col space-y-6 mt-8">
                  <button onClick={() => scrollToSection('home')} className="text-left text-gray-300 hover:text-blue-600 transition-colors py-2 text-lg">INÍCIO</button>
                  <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-300 hover:text-blue-600 transition-colors py-2 text-lg">SOBRE</button>
                  <button onClick={() => scrollToSection('areas')} className="text-left text-gray-300 hover:text-blue-600 transition-colors py-2 text-lg">ÁREAS</button>
                  <button onClick={() => scrollToSection('trabalhos')} className="text-left text-gray-300 hover:text-blue-600 transition-colors py-2 text-lg">TRABALHOS</button>
                  <button onClick={() => scrollToSection('contato')} className="text-left text-gray-300 hover:text-blue-600 transition-colors py-2 text-lg">CONTATO</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://z-cdn-media.chatglm.cn/files/3083dd60-ef98-4fa5-b271-a649272a792b_Gemini_Generated_Image_jg1q0mjg1q0mjg1q.png?auth_key=1788316877-4011345269de45018f63157263af71a7-0-f95b17c90a7f4459128c692b102705f3')" }}></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://z-cdn-media.chatglm.cn/files/17a96081-0dc8-410c-bde5-20b9915e2b66_Gemini_Generated_Image_jg1q0njg1q0njg1q.png?auth_key=1788316877-4011345269de45018f63157263af71a7-0-8d976224225ef34618715ec01d38f3fb" 
              alt="Bittencourt Advocacia" 
              className="w-24 h-24 mx-auto mb-6 object-contain"
            />
            <h1 className="text-5xl md:text-7xl font-light mb-4 leading-tight tracking-wide">
              BITTENCOURT
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-blue-400 mb-2 tracking-wide">
              ADVOCACIA
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Justiça e Inovação ao Seu Lado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={() => scrollToSection('contato')} className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 py-4 rounded-none tracking-wider font-light">
              SAIBA MAIS
            </Button>
            <Button onClick={() => scrollToSection('trabalhos')} variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-8 py-4 rounded-none tracking-wider font-light">
              NOSSOS TRABALHOS
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light mb-4 tracking-wide">SOBRE NÓS</h2>
                <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                O escritório Bittencourt Advocacia foi fundado com o propósito de oferecer assessoria jurídica de excelência, 
                combinando tradição e inovação. Nossa equipe é composta por profissionais altamente qualificados, 
                dedicados a proporcionar soluções estratégicas e personalizadas.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Com atuação nacional e internacional, atendemos empresas de todos os portes, 
                desde startups até grandes corporações, com foco em resultados e satisfação dos clientes.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {aboutStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-light text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-gray-800 p-1">
                <div className="w-full h-full bg-gray-900 p-8">
                  <div className="space-y-6">
                    {aboutValues.map((value, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-blue-600 mt-2"></div>
                        <div>
                          <h3 className="text-xl font-light text-blue-400 mb-2">{value.title}</h3>
                          <p className="text-gray-400">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="areas" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-wide">ÁREAS DE ATUAÇÃO</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Atuação especializada nas principais áreas do direito empresarial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-600 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-900/10 rounded-full flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-light text-white mb-4">{area.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="trabalhos" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-wide">TRABALHOS EM DESTAQUE</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Conheça alguns de nossos casos de sucesso e projetos realizados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-light text-white mb-2">{work.title}</h3>
                    <p className="text-gray-300 text-sm">{work.description}</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-900">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 text-sm tracking-wider">{work.category}</span>
                    <span className="text-gray-500 text-sm">{work.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-wide">DEPOIMENTOS</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              O que nossos clientes dizem sobre nosso trabalho
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" ref={testimonialRef}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-12">
                        <div className="flex items-center justify-between mb-8">
                          <Quote className="h-12 w-12 text-blue-600" />
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-blue-600 text-blue-600" />
                            ))}
                          </div>
                        </div>
                        <p className="text-2xl text-gray-300 leading-relaxed mb-8 italic text-center">
                          "{testimonial.text}"
                        </p>
                        <div className="text-center">
                          <div className="text-xl font-light text-white mb-2">{testimonial.author}</div>
                          <div className="text-gray-500">{testimonial.company}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light mb-4 tracking-wide">CONTATO</h2>
                <div className="w-16 h-1 bg-blue-600 mb-8"></div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Entre em contato conosco para agendar uma consulta ou tirar dúvidas sobre nossos serviços.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-900/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-white mb-1">{info.title}</h3>
                      <p className="text-gray-400">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-900 p-8">
                <h3 className="text-xl font-light text-white mb-4">ENDEREÇO</h3>
                <p className="text-gray-400 mb-4">
                  Av. Brigadeiro Faria Lima, 1500<br />
                  Jardim Paulistano - São Paulo/SP<br />
                  CEP: 01452-002
                </p>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-600" />
                  <span className="ml-2 text-gray-500">Mapa</span>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-white mb-6">ENVIE SUA MENSAGEM</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-400 mb-2 block">NOME *</Label>
                        <Input 
                          id="name" 
                          placeholder="Seu nome completo"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-none"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-400 mb-2 block">E-MAIL *</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="seu@email.com"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-none"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-400 mb-2 block">TELEFONE</Label>
                      <Input 
                        id="phone" 
                        placeholder="(00) 00000-0000"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-none"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-400 mb-2 block">MENSAGEM *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva sua necessidade jurídica..."
                        rows={6}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-none resize-none"
                      />
                    </div>
                    <div className="text-sm text-gray-500">
                      * Campos obrigatórios. Seus dados estão protegidos conforme a LGPD.
                    </div>
                    <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-none tracking-wider font-light">
                      ENVIAR MENSAGEM
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50">
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://z-cdn-media.chatglm.cn/files/17a96081-0dc8-410c-bde5-20b9915e2b66_Gemini_Generated_Image_jg1q0njg1q0njg1q.png?auth_key=1788316877-4011345269de45018f63157263af71a7-0-8d976224225ef34618715ec01d38f3fb" 
                  alt="Bittencourt Advocacia" 
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h1 className="text-xl font-light tracking-wide">BITTENCOURT</h1>
                  <p className="text-xs text-blue-600 tracking-widest">ADVOCACIA</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Justiça e Inovação ao Seu Lado. Excelência jurídica com mais de 25 anos de experiência.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-light text-white mb-4">LINKS RÁPIDOS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-sm">Início</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-sm">Sobre</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-sm">Áreas de Atuação</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-sm">Trabalhos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-sm">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-light text-white mb-4">CONTATO</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>contato@bittencourt.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>Av. Brigadeiro Faria Lima, 1500</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-light text-white mb-4">REDES SOCIAIS</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-light text-white mb-2">COMPLIANCE</h4>
                <p className="text-gray-400 text-xs">OAB/SP 123.456</p>
                <p className="text-gray-400 text-xs">Política de Privacidade</p>
                <p className="text-gray-400 text-xs">LGPD Compliance</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Bittencourt Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data arrays
const aboutStats = [
  { value: "25+", label: "ANOS DE EXPERIÊNCIA" },
  { value: "1000+", label: "CLIENTES ATENDIDOS" },
  { value: "99%", label: "SATISFAÇÃO" },
  { value: "24h", label: "SUPORTE" }
];

const aboutValues = [
  {
    title: "JUSTIÇA",
    description: "Compromisso com a justiça e equidade em todas as nossas ações."
  },
  {
    title: "INOVAÇÃO",
    description: "Abordagem moderna e criativa para resolver desafios jurídicos."
  },
  {
    title: "EXCELÊNCIA",
    description: "Qualidade reconhecida e resultados excepcionais em cada caso."
  },
  {
    title: "DEDICAÇÃO",
    description: "Atendimento personalizado e foco total nas necessidades do cliente."
  }
];

const practiceAreas = [
  {
    icon: MapPin,
    title: "DIREITO EMPRESARIAL",
    description: "Assessoria completa para empresas, desde a constituição até operações complexas e reestruturações societárias."
  },
  {
    icon: Phone,
    title: "DIREITO TRABALHISTA",
    description: "Soluções em relações trabalhistas, processos e compliance trabalhista para empresas e colaboradores."
  },
  {
    icon: Mail,
    title: "DIREITO CIVIL",
    description: "Atuação em contratos, responsabilidade civil, direitos do consumidor e propriedade intelectual."
  },
  {
    icon: MapPin,
    title: "DIREITO TRIBUTÁRIO",
    description: "Planejamento tributário, defesa em processos fiscais e consultoria em compliance fiscal."
  },
  {
    icon: Phone,
    title: "DIREITO DIGITAL",
    description: "Proteção de dados, cybersegurança, contratos tecnológicos e propriedade digital."
  },
  {
    icon: Mail,
    title: "DIREITO DE FAMÍLIA",
    description: "Suporte em casos de família, sucessões, planejamento sucessório e inventários."
  }
];

const works = [
  {
    title: "Reestruturação Societária",
    description: "Sucesso em complexa reestruturação de multinacional",
    category: "DIREITO EMPRESARIAL",
    year: "2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Recuperação Judicial",
    description: "Recuperação bem-sucedida de grande empresa do setor industrial",
    category: "DIREITO EMPRESARIAL",
    year: "2023",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Fusão e Aquisição",
    description: "Assessoria em operação de M&A de R$ 500 milhões",
    category: "DIREITO EMPRESARIAL",
    year: "2023",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c71ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Compliance Tributário",
    description: "Implementação de programa de compliance para multinacional",
    category: "DIREITO TRIBUTÁRIO",
    year: "2022",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Proteção de Dados",
    description: "Adequação de empresa à LGPD com 100% de conformidade",
    category: "DIREITO DIGITAL",
    year: "2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Disputa Societária",
    description: "Vitória em complexo caso de disputa entre sócios",
    category: "DIREITO CIVIL",
    year: "2021",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const testimonials = [
  {
    text: "O escritório Bittencourt demonstrou excelência e profissionalismo em nosso caso de recuperação judicial. Resultado beyond expectations.",
    author: "Carlos Silva",
    company: "CEO, Industrial Group"
  },
  {
    text: "Assessoria excepcional em nossa operação de M&A. Profissionais altamente qualificados e comprometidos com o sucesso do cliente.",
    author: "Ana Oliveira",
    company: "Diretora Financeira, Tech Corp"
  },
  {
    text: "Atendimento impecável e soluções criativas para nossos desafios jurídicos. Recomendo fortemente o escritório Bittencourt.",
    author: "Roberto Santos",
    company: "Presidente, Invest Brasil"
  }
];

const contactInfo = [
  {
    icon: Phone,
    title: "TELEFONE",
    content: "(11) 9999-9999"
  },
  {
    icon: Mail,
    title: "E-MAIL",
    content: "contato@bittencourt.com.br"
  },
  {
    icon: MapPin,
    title: "ENDEREÇO",
    content: "Av. Brigadeiro Faria Lima, 1500"
  },
  {
    icon: Phone,
    title: "HORÁRIO",
    content: "Seg-Sex: 9h-18h"
  }
];