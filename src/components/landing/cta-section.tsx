
"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import ScrollReveal from './scroll-reveal';
import { Input } from '@/components/ui/input';

const CTASection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); // Masked phone for display
  const [rawPhone, setRawPhone] = useState(''); // Raw digits for validation/submission
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const validateEmail = (emailToValidate: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToValidate);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
    if (submissionMessage) setSubmissionMessage('');
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
    if (submissionMessage) setSubmissionMessage('');
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (submissionMessage) setSubmissionMessage('');
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, phone: rawPhone, email });
    
    setSubmissionMessage("Obrigado! Em breve você receberá um contato instruindo como usar nossa busca por assistente!");

    setName('');
    setPhone('');
    setRawPhone('');
    setEmail('');
    setIsEmailValid(false);
    setIsPhoneValid(false);
  };

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
              <Label htmlFor="name" className="sr-only">Name</Label>
              <Input
                id="name"
                type="text"
                required
                placeholder="Nome Completo"
                value={name}
                onChange={handleNameChange}
                className="w-full bg-card text-card-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="phone" className="sr-only">Phone</Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="(XX) XXXXX-XXXX"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={15}
                className="w-full bg-card text-card-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Seu Melhor Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-card text-card-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button type="submit" size="lg" className="text-lg px-10 py-6" disabled={!isEmailValid || !isPhoneValid || !name}>
              Cadastrar para Acesso Gratuito
            </Button>
            {submissionMessage && (
              <p className="mt-4 text-center text-foreground bg-green-500/20 p-3 rounded-md">
                {submissionMessage}
              </p>
            )}
          </form>
        </ScrollReveal>

        <ScrollReveal delay={600} className="mt-12">
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeq3odHZQBWFRmdv9ZgTPdm9JSJe_LKS5oL28gD1XKnbnEiAg/viewform?embedded=true"
              width="400"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulário de Contato Google"
              className="max-w-full"
            >
              Carregando…
            </iframe>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
export default CTASection;
