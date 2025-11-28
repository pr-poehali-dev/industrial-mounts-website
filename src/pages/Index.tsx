import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navLinks = [
    { href: '#materials', label: 'Материалы' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#contact', label: 'Контакты' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const materials = [
    {
      title: 'НПЭ (Несшитый пенополиэтилен)',
      description: 'Легкий, экологичный материал с отличными амортизирующими свойствами',
      icon: 'Box'
    },
    {
      title: 'ППЭ (Сшитый пенополиэтилен)',
      description: 'Высокая плотность и прочность, идеален для защиты тяжелого оборудования',
      icon: 'Shield'
    },
    {
      title: 'Вспененный каучук',
      description: 'Повышенная эластичность и долговечность, устойчив к агрессивным средам',
      icon: 'Zap'
    },
    {
      title: 'Поролон',
      description: 'Классический материал для упаковки и комфортной защиты изделий',
      icon: 'Package'
    }
  ];

  const advantages = [
    {
      title: 'Современное оборудование',
      description: 'Высокоточные станки с ЧПУ для резки любой сложности',
      icon: 'Settings'
    },
    {
      title: 'Индивидуальный подход',
      description: 'Разработка решений под ваши конкретные задачи',
      icon: 'Target'
    },
    {
      title: 'Быстрое производство',
      description: 'Сжатые сроки изготовления без потери качества',
      icon: 'Rocket'
    },
    {
      title: 'Контроль качества',
      description: 'Проверка каждого изделия на всех этапах производства',
      icon: 'CheckCircle'
    }
  ];

  const portfolio = [
    {
      title: 'Защитная упаковка для электроники',
      image: 'https://cdn.poehali.dev/projects/2d66b7de-bd0c-4c2b-987a-2fed6dbaeefd/files/19ea6cd9-2a74-437d-8ff4-6d6062606bba.jpg'
    },
    {
      title: 'Ложементы для медицинского оборудования',
      image: 'https://cdn.poehali.dev/projects/2d66b7de-bd0c-4c2b-987a-2fed6dbaeefd/files/015801cc-2f08-4103-919f-fd8f4d90bb48.jpg'
    },
    {
      title: 'Промышленная упаковка для инструментов',
      image: 'https://cdn.poehali.dev/projects/2d66b7de-bd0c-4c2b-987a-2fed6dbaeefd/files/7c72394f-e7a3-4922-919c-67b68e651e9e.jpg'
    },
    {
      title: 'Защита оптического оборудования',
      image: 'https://cdn.poehali.dev/projects/2d66b7de-bd0c-4c2b-987a-2fed6dbaeefd/files/b72d94cc-dfe2-4e48-806d-1ac0e40cd3d6.jpg'
    },
    {
      title: 'Упаковка для измерительных приборов',
      image: 'https://cdn.poehali.dev/projects/2d66b7de-bd0c-4c2b-987a-2fed6dbaeefd/files/07a795a3-02b5-4012-a55d-86dee2e20126.jpg'
    },
    {
      title: 'Защита автомобильных комплектующих',
      image: 'https://cdn.poehali.dev/projects/2d66b7de-bd0c-4c2b-987a-2fed6dbaeefd/files/c894ab43-bb05-4032-b35c-e832dc9a9492.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Factory" size={32} className="text-primary" />
            <span className="text-2xl font-bold">ПромЛожементы</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Оставить заявку</a>
          </Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="w-full" onClick={handleNavClick}>
                  <a href="#contact">Оставить заявку</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Производство ложементов и защитной упаковки
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Высокоточное изготовление изделий из НПЭ, ППЭ, вспененного каучука и поролона на современном оборудовании
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#portfolio">Наши работы</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/2d66b7de-bd0c-4c2b-987a-2fed6dbaeefd/files/54412ac0-0801-4d73-a690-444da45660a4.jpg" 
                alt="Промышленное производство"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Материалы для производства</h2>
            <p className="text-xl text-muted-foreground">
              Работаем с широким спектром современных материалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-on-scroll">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={material.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
                <p className="text-muted-foreground">{material.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground">
              Почему выбирают нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4 animate-on-scroll">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={advantage.icon} size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">
              Примеры реализованных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all animate-on-scroll">
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Icon name="ZoomIn" size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-center text-lg font-semibold mt-4">{project.title}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Оставьте заявку</h2>
            <p className="text-xl text-muted-foreground">
              Свяжемся с вами в течение часа
            </p>
          </div>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя *</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <Input 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Название компании"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Опишите ваш проект..."
                  rows={5}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Factory" size={28} className="text-primary" />
                <span className="text-xl font-bold">ПромЛожементы</span>
              </div>
              <p className="text-muted-foreground">
                Производство защитной упаковки и ложементов из вспененных материалов
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (___) ___-__-__</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Промышленная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: Выходной</p>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground pt-8 border-t">
            <p>© 2024 ПромЛожементы. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </Button>
      )}
    </div>
  );
};

export default Index;