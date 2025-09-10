import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from './portfolio-data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: portfolioData.personal.email,
      link: `mailto:${portfolioData.personal.email}`
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telefono",
      value: portfolioData.personal.phone,
      link: `tel:${portfolioData.personal.phone.replace(/\s/g, '')}`
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Posizione",
      value: portfolioData.personal.location,
      link: null
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/rickyperniciano",
      link: portfolioData.personal.github
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: portfolioData.personal.linkedin
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Contattami</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Disponibile per opportunità full-time, progetti freelance e collaborazioni innovative nel campo dello sviluppo software e AI
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Informazioni di Contatto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target={info.link.startsWith('http') ? "_blank" : undefined}
                            rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="hover:text-purple-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Availability Card */}
              <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-white">Disponibile per nuovi progetti</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Attualmente disponibile per opportunità di lavoro full-time o progetti freelance interessanti.
                    Specializzato in sviluppo full-stack, AI integration e architetture enterprise.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                      Full-time
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50">
                      Freelance
                    </Badge>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                      Consulenza
                    </Badge>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/50">
                      Remote
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Tempo di risposta</h3>
                  </div>
                  <p className="text-gray-400">
                    Generalmente rispondo entro 24-48 ore. Per richieste urgenti, preferisco il contatto telefonico.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Invia un Messaggio</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                        placeholder="tua@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Oggetto *
                    </label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                      placeholder="Di cosa vuoi parlare?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Messaggio *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                      placeholder="Il tuo messaggio..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Invio in corso...
                      </span>
                    ) : submitStatus === 'success' ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Messaggio Inviato!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        Invia Messaggio
                      </span>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                      <p className="text-green-300">
                        Grazie per il tuo messaggio! Ti risponderò il prima possibile.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;