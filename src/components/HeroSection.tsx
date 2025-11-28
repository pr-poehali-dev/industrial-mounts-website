import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
