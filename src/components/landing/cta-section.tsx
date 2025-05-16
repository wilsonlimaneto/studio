
"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import ScrollReveal from './scroll-reveal';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const CTASection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); // Masked phone for display
  const [rawPhone, setRawPhone] = useState(''); // Raw digits for validation/submission
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusMessageType, setStatusMessageType] = useState<'success' | 'error' | ''>('');

  const validateEmail = (emailToValidate: string) => {
    if (!emailToValidate) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToValidate);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (statusMessage) {
      setStatusMessage('');
      setStatusMessageType('');
    }
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
    if (statusMessage) {
      setStatusMessage('');
      setStatusMessageType('');
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const digits = input.replace(/\D/g, '');

    const limitedDigits = digits.substring(0, 11);
    setRawPhone(limitedDigits);

    let masked = '';
    if (limitedDigits.length > 0) {
      masked = `(${limitedDigits.substring(0, 2)}`;
    }
    if (limitedDigits.length >= 3) {
      masked += `) ${limitedDigits.substring(2, 7)}`;
    }
    if (limitedDigits.length >= 8) {
      masked += `-${limitedDigits.substring(7, 11)}`;
    }
    setPhone(masked);

    setIsPhoneValid(limitedDigits.length === 11);
    if (statusMessage) {
      setStatusMessage('');
      setStatusMessageType('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage('');
    setStatusMessageType('');

    if (!name.trim() || !email.trim() || !rawPhone.trim()) {
      setStatusMessage("Por favor, preencha todos os campos obrigatórios.");
      setStatusMessageType('error');
      return;
    }

    if (!isEmailValid) {
      setStatusMessage("Formato de email inválido. Verifique o email digitado.");
      setStatusMessageType('error');
      return;
    }

    if (!isPhoneValid) {
      setStatusMessage("Telefone inválido. Deve conter 11 dígitos.");
      setStatusMessageType('error');
      return;
    }
    
    const webhookUrl = 'https://hook.us2.make.com/qw9rcxpxkxjn9sads59yc2sdddrvw8vg';
    const params = new URLSearchParams({
      nome: name,
      fone: rawPhone,
      email: email,
    });

    try {
      const response = await fetch(`${webhookUrl}?${params.toString()}`, {
        method: 'GET', // Or 'POST' if your webhook expects it, but query params usually go with GET
      });

      if (response.ok) {
        setStatusMessage("Obrigado! Em breve você receberá um contato instruindo como usar nossa busca por assistente!");
        setStatusMessageType('success');
        // Clear form fields after successful submission
        setName('');
        setPhone('');
        setRawPhone('');
        setEmail('');
        setIsEmailValid(false);
        setIsPhoneValid(false);
      } else {
        // Handle server errors (e.g., response.status is 4xx or 5xx)
        const errorData = await response.text();
        console.error('Webhook error:', errorData);
        setStatusMessage("Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.");
        setStatusMessageType('error');
      }
    } catch (error) {
      // Handle network errors or other issues with the fetch call
      console.error('Network error or other issue:', error);
      setStatusMessage("Ocorreu um erro de conexão. Por favor, verifique sua internet e tente novamente.");
      setStatusMessageType('error');
    }
  };

  const isButtonDisabled = 
    (email.trim() !== '' && !isEmailValid) || 
    (rawPhone.trim() !== '' && !isPhoneValid);

  return (
    <section id="cta" className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            <span className="text-primary">Não perca mais tempo</span> com tecnologias que inventam julgados.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Cadastre-se para acessar gratuitamente uma IA jurídica criada, por engenheiros e advogados, com inteligência humana (não nos confunda com gurus de prompt!)
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400} className="mt-10">
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col items-center space-y-4">
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="name" className="sr-only">Nome Completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={handleNameChange}
                className="w-full bg-card text-card-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="phone" className="sr-only">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={15} 
                className="w-full bg-card text-card-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="email" className="sr-only">Seu Melhor Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu Melhor Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-card text-card-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button type="submit" size="lg" className="text-lg px-10 py-6" disabled={isButtonDisabled}>
              Cadastrar para Acesso Gratuito
            </Button>
            {statusMessage && (
              <p className={cn(
                "mt-4 text-center p-3 rounded-md w-full max-w-sm",
                statusMessageType === 'success' ? "text-foreground bg-green-500/20" : "",
                statusMessageType === 'error' ? "text-destructive-foreground bg-destructive/80" : ""
              )}>
                {statusMessage}
              </p>
            )}
            <div className="mt-8">
              <Image 
                src="/googleforstartups.png" 
                alt="Google for Startups"
 width={200} height={100} />
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};
export default CTASection;
