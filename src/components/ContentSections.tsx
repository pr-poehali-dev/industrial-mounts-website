import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Material {
  title: string;
  description: string;
  icon: string;
}

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

interface PortfolioItem {
  title: string;
  image: string;
}

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

interface ContentSectionsProps {
  materials: Material[];
  advantages: Advantage[];
  portfolio: PortfolioItem[];
  testimonials: Testimonial[];
}

const ContentSections = ({ materials, advantages, portfolio, testimonials }: ContentSectionsProps) => {
  return (
    <>
      <section id="materials" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Материалы для производства</h2>
            <p className="text-xl text-muted-foreground">
              Работаем с широким спектром современных материалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-on-scroll">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={material.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
                <p className="text-muted-foreground text-sm">{material.description}</p>
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас наши партнеры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 animate-on-scroll">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;
