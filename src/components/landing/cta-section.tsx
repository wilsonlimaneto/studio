
"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import ScrollReveal from './scroll-reveal';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast"; // Import useToast

const CTASection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); // Masked phone for display
  const [rawPhone, setRawPhone] = useState(''); // Raw digits for validation/submission
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const { toast } = useToast(); // Initialize toast

  const validateEmail = (emailToValidate: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToValidate);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const digits = input.replace(/\D/g, ''); // Remove non-digits

    const limitedDigits = digits.substring(0, 11); // Limit to 11 digits
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
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ name, phone: rawPhone, email }); // Log rawPhone
    
    // Display toast message
    toast({
      title: "Sucesso!",
      description: "Obrigado! Em breve você receberá um contato instruindo como usar nossa busca por assistente!",
      variant: "default", // Or "success" if you have such a variant
    });

    // Reset form or show success message
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
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                maxLength={15} // (XX) XXXXX-XXXX is 15 chars
                className="w-full bg-card text-card-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="w-full max-w-sm text-left">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-card text-card-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button type="submit" size="lg" className="text-lg px-10 py-6" disabled={!isEmailValid || !isPhoneValid}>
              Submit
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};
export default CTASection;
