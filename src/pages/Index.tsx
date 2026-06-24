import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">МАРИЯ МАНДЖИЕВА</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                Обо мне
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Heart" className="w-3 h-3 mr-1" />
                    Практический психолог
                  </Badge>
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance">
                    Путь к себе
                    <span className="text-primary block">начинается с разговора</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Меня зовут Мария Манджиева. Помогаю взрослым справляться с тревогой,
                    выгоранием и кризисами, находить опору в себе и выстраивать тёплые
                    отношения с собой и близкими.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Записаться на консультацию
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Узнать о подходе
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero портрет */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Декоративный фон */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-primary/10 blur-xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-accent/15 blur-xl" />

                {/* Рамка с фото */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                  {/* Градиент поверх низа фото */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent z-10" />
                  <img
                    src="https://cdn.poehali.dev/projects/3f081303-8ac0-4223-9545-d31b5d4c70c4/bucket/19326ed7-f54b-41b6-a734-7755308b34fe.jpg"
                    alt="Мария Манджиева, психолог"
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                  {/* Бейдж поверх фото */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl px-4 py-3">
                      <div className="font-bold text-sm">Мария Манджиева</div>
                      <div className="text-xs text-muted-foreground">Практический психолог · 8+ лет</div>
                    </div>
                  </div>
                </div>

                {/* Декоративный элемент — листик */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                  <Icon name="Leaf" className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция подхода */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">КАК ПРОХОДИТ РАБОТА</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Безопасное пространство, где вас услышат без осуждения и помогут найти свои ответы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MessagesSquare" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Знакомство</h3>
              <p className="text-muted-foreground">
                На первой встрече мы обсуждаем ваш запрос, ожидания и формат работы — без давления и спешки.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Compass" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Исследование</h3>
              <p className="text-muted-foreground">
                Шаг за шагом разбираемся в причинах трудностей и находим новые опоры и ресурсы внутри вас.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Sprout" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Изменения</h3>
              <p className="text-muted-foreground">
                Вы постепенно ощущаете больше спокойствия, уверенности и тепла к себе в повседневной жизни.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">УСЛУГИ И ФОРМАТЫ</h2>
            <Button variant="outline">Все услуги</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform p-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="User" className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Индивидуальная консультация</h3>
              <p className="text-muted-foreground mb-4">
                Личная работа с тревогой, самооценкой, выгоранием и поиском внутренней опоры.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" className="w-4 h-4" />
                  50 минут
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Video" className="w-4 h-4" />
                  Онлайн / очно
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform p-8">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Users" className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Работа с парами</h3>
              <p className="text-muted-foreground mb-4">
                Помощь в восстановлении доверия, диалога и тёплых отношений между партнёрами.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" className="w-4 h-4" />
                  90 минут
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Video" className="w-4 h-4" />
                  Онлайн / очно
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform p-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="LifeBuoy" className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Кризисная поддержка</h3>
              <p className="text-muted-foreground mb-4">
                Бережное сопровождение в сложные периоды: утрата, развод, резкие перемены.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" className="w-4 h-4" />
                  50 минут
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Video" className="w-4 h-4" />
                  Онлайн
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция Обо мне */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Создаю пространство, где можно быть собой</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Я практический психолог с многолетним опытом. Работаю в бережном,
                  поддерживающем подходе и убеждена: каждый человек способен найти
                  свои ответы, если рядом есть внимательный и принимающий собеседник.
                </p>
                <p>
                  В работе опираюсь на современные методы и постоянно повышаю
                  квалификацию. Моя цель — не давать готовых решений, а помочь вам
                  услышать себя и вернуть ощущение опоры и внутреннего тепла.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">8+ лет</div>
                  <div className="text-muted-foreground">В практике</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-muted-foreground">Проведённых консультаций</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/3f081303-8ac0-4223-9545-d31b5d4c70c4/files/35d56951-c311-45c2-9093-6e2df920d9b4.jpg"
                  alt="Кабинет психолога"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ОТЗЫВЫ КЛИЕНТОВ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Слова тех, кто прошёл свой путь вместе со мной
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8">
              <div className="flex gap-1 mb-4 text-primary">
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
              </div>
              <p className="text-muted-foreground mb-6">
                «С Марией я впервые почувствовала, что меня действительно слышат.
                Тревога, с которой я жила годами, наконец отступила.»
              </p>
              <div className="font-semibold">Анна</div>
            </Card>

            <Card className="p-8">
              <div className="flex gap-1 mb-4 text-primary">
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
              </div>
              <p className="text-muted-foreground mb-6">
                «Бережный и профессиональный подход. После выгорания снова чувствую
                интерес к жизни и работе. Очень благодарен.»
              </p>
              <div className="font-semibold">Дмитрий</div>
            </Card>

            <Card className="p-8">
              <div className="flex gap-1 mb-4 text-primary">
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
                <Icon name="Star" className="w-5 h-5 fill-current" />
              </div>
              <p className="text-muted-foreground mb-6">
                «Мы пришли как пара на грани расставания, а ушли с новым пониманием
                друг друга. Спасибо за тёплое сопровождение.»
              </p>
              <div className="font-semibold">Ольга и Сергей</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Готовы сделать первый шаг?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Запишитесь на консультацию — мы вместе разберёмся, что вас тревожит, и
            найдём путь к спокойствию и внутренней опоре.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Записаться на консультацию
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="Send" className="w-4 h-4 mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contact" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">МАРИЯ МАНДЖИЕВА</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Практический психолог. Помогаю обрести спокойствие, уверенность и
                тёплые отношения с собой и близкими.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  Instagram
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Онлайн по всему миру</p>
                <p>Очно по записи</p>
                <p>+7 (___) ___-__-__</p>
                <p>hello@mandzhieva.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Индивидуальные консультации</p>
                <p>Работа с парами</p>
                <p>Кризисная поддержка</p>
                <p>Сопровождение</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Мария Манджиева. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;