import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import ContactSection from '@/components/ContactSection';

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
    },
    {
      title: 'Картон',
      description: 'Экономичное решение для лёгкой упаковки и разделителей',
      icon: 'FileText'
    },
    {
      title: 'Вспененный ЭВА',
      description: 'Мягкий и упругий материал с высокой износостойкостью',
      icon: 'Layers'
    },
    {
      title: 'Текстильный сепаратор',
      description: 'Эргономичное упаковочное решение, используемое в основном в автомобильной промышленности',
      icon: 'Shirt'
    },
    {
      title: 'Пенопласт',
      description: 'Легкий теплоизоляционный материал для объемной упаковки',
      icon: 'Hexagon'
    },
    {
      title: 'Экструдированный пенополистирол',
      description: 'Высокопрочный материал с закрытой ячеистой структурой',
      icon: 'Grid3x3'
    },
    {
      title: 'МДВП',
      description: 'Плотная древесноволокнистая плита для жестких конструкций',
      icon: 'Square'
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

  const testimonials = [
    {
      name: 'Алексей Морозов',
      company: 'ТехноПром',
      text: 'Отличное качество ложементов для нашего измерительного оборудования. Все изделия выполнены точно в срок, материал прочный и надежный.',
      rating: 5
    },
    {
      name: 'Елена Соколова',
      company: 'МедТехника',
      text: 'Сотрудничаем уже второй год. Индивидуальный подход к каждому заказу, всегда идут навстречу. Рекомендуем!',
      rating: 5
    },
    {
      name: 'Игорь Петров',
      company: 'ЭлектроКомплект',
      text: 'Быстро изготовили партию защитных вкладышей для хрупкого оборудования. Упаковка выдержала транспортировку на 5000 км без повреждений.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header 
        navLinks={navLinks}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      <HeroSection />

      <ContentSections 
        materials={materials}
        advantages={advantages}
        portfolio={portfolio}
        testimonials={testimonials}
      />

      <ContactSection 
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />

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
