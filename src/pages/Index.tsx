import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    date: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
                СКА
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Медицинский центр СКА</h1>
                <p className="text-sm text-gray-600">Спортивная медицина • Реабилитация</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors">Врачи</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О центре</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                    Записаться
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Быстрая запись на прием</DialogTitle>
                    <DialogDescription>
                      Заполните форму и мы свяжемся с вами в течение 15 минут
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <Input 
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Выберите услугу</option>
                      <option value="consultation">Консультация</option>
                      <option value="diagnostics">Диагностика</option>
                      <option value="rehabilitation">Реабилитация</option>
                    </select>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Записаться
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </nav>
            
            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Медицинский центр СКА</SheetTitle>
                  <SheetDescription>
                    Спортивная медицина и реабилитация
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Услуги
                  </a>
                  <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Врачи
                  </a>
                  <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    О центре
                  </a>
                  <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Контакты
                  </a>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4">
                    Записаться
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Promotional Banners */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="/img/6ca30da1-0a7e-4c5d-86f9-213fb18675be.jpg" 
                  alt="Медицинское оборудование" 
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Современная диагностика</p>
                  <p className="text-xs text-gray-500">Новейшее оборудование</p>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Подробнее →</a>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="/img/17f768cb-cb61-47b8-8165-432fa2ceee19.jpg" 
                  alt="Реабилитация" 
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Персональная реабилитация</p>
                  <p className="text-xs text-gray-500">Индивидуальный подход</p>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Подробнее →</a>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="/img/cdb08294-b2a5-45d3-ab93-7ba49eeae9c4.jpg" 
                  alt="Телемедицина" 
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Телемедицинские консультации</p>
                  <p className="text-xs text-gray-500">Онлайн прием врачей</p>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Подробнее →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Stethoscope" className="text-blue-600" size={24} />
                <span className="text-blue-600 font-medium">Экспертная спортивная медицина</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Возвращаем к активности быстро и безопасно
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Индивидуальные программы диагностики и реабилитации, врачи из спорта высших достижений, современное оборудование. Онлайн-запись и телемедицина.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Записаться на прием
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Посмотреть услуги
                </Button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Контакт-центр</p>
                <p className="text-2xl font-bold text-gray-900">+7 (812) XXX-XX-XX</p>
                <p className="text-sm text-gray-600">Ежедневно 09:00 — 21:00</p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Онлайн-запись</h3>
              <p className="text-gray-600 mb-6">Выберите услугу</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Услуга</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Выберите услугу</option>
                    <option value="consultation">Первичная консультация</option>
                    <option value="diagnostics">Диагностика</option>
                    <option value="rehabilitation">Реабилитация</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ФИО</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="p-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="p-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Дата</label>
                  <Input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="p-3"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-gray-600">Согласие на обработку персональных данных</span>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Подтвердить запись
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Адрес: Российский пр. Санкт-Петербург
                  <br />
                  <a href="#" className="text-blue-600 hover:underline">Как добраться →</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-blue-600 hover:underline font-medium">Онлайн-консультации</a>
            <a href="#" className="text-blue-600 hover:underline font-medium">Телемедицина</a>
            <a href="#" className="text-blue-600 hover:underline font-medium">Реабилитация</a>
          </div>
        </div>
      </section>

      {/* Popular Directions */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Популярные направления</h2>
            <a href="#" className="text-blue-600 hover:underline font-medium flex items-center">
              Весь каталог услуг <Icon name="ArrowRight" className="ml-1" size={16} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon name="Bone" className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Травматология и ортопедия</CardTitle>
                <CardDescription>
                  Консультации, диагностика и восстановление после спортивных и бытовых травм
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">от 1200 ₽</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                        Подробнее →
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Травматология и ортопедия</DialogTitle>
                        <DialogDescription>
                          Полный спектр услуг по диагностике и лечению травм опорно-двигательного аппарата
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="font-semibold mb-2">Наши услуги:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            <li>Консультации травматолога-ортопеда</li>
                            <li>Диагностика спортивных травм</li>
                            <li>Лечение повреждений суставов</li>
                            <li>Реабилитация после операций</li>
                          </ul>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                          <span className="text-2xl font-bold text-blue-600">от 1200 ₽</span>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Записаться
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Icon name="Activity" className="text-green-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors">Функциональная диагностика</CardTitle>
                <CardDescription>
                  УЗИ, функциональные тесты, оценка двигательных нарушений и подготовка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">от 900 ₽</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                        Подробнее →
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Функциональная диагностика</DialogTitle>
                        <DialogDescription>
                          Современные методы диагностики для точной оценки состояния здоровья
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="font-semibold mb-2">Виды диагностики:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            <li>УЗИ суставов и мягких тканей</li>
                            <li>Функциональные тесты</li>
                            <li>Оценка двигательных функций</li>
                            <li>Подготовка к соревнованиям</li>
                          </ul>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                          <span className="text-2xl font-bold text-green-600">от 900 ₽</span>
                          <Button className="bg-green-600 hover:bg-green-700 text-white">
                            Записаться
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <Icon name="Zap" className="text-purple-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors">Реабилитация в ЛФК</CardTitle>
                <CardDescription>
                  Персональные и групповые программы восстановительной и профилактической реабилитации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">по запросу</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                        Подробнее →
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Реабилитация в ЛФК</DialogTitle>
                        <DialogDescription>
                          Индивидуальные и групповые программы восстановления
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="font-semibold mb-2">Программы реабилитации:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            <li>Восстановление после травм</li>
                            <li>Профилактическая ЛФК</li>
                            <li>Спортивная реабилитация</li>
                            <li>Групповые занятия</li>
                          </ul>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                          <span className="text-sm text-gray-600">Стоимость по запросу</span>
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            Узнать цену
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Наши врачи</h2>
            <a href="#" className="text-blue-600 hover:underline font-medium flex items-center">
              Все специалисты <Icon name="ArrowRight" className="ml-1" size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="/img/5bf4f3e9-0794-4edb-a8d3-1620e64cc4e8.jpg" 
                    alt="Иван Иванов" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Иван Иванов</CardTitle>
                <CardDescription>Травматолог-ортопед</CardDescription>
                <CardDescription>Опыт — 12 лет • Спорт</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Записаться
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Запись к врачу: Иван Иванов</DialogTitle>
                      <DialogDescription>
                        Травматолог-ортопед, специализация спортивная медицина
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Телефон" />
                      <Input type="date" />
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Записаться к врачу
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="/img/b556d150-dd87-4a94-b1d7-0a5b3bc54793.jpg" 
                    alt="Анна Петрова" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Анна Петрова</CardTitle>
                <CardDescription>Реабилитолог</CardDescription>
                <CardDescription>Спортивная медицина • ЛФК</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Записаться
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Запись к врачу: Анна Петрова</DialogTitle>
                      <DialogDescription>
                        Реабилитолог, специализация ЛФК и спортивная медицина
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Телефон" />
                      <Input type="date" />
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Записаться к врачу
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="/img/517e01f7-f5a8-4d0c-b285-3852422a6b01.jpg" 
                    alt="Екатерина Соколова" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Екатерина Соколова</CardTitle>
                <CardDescription>Функциональная диагностика</CardDescription>
                <CardDescription>Врач-диагност</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Записаться
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Запись к врачу: Екатерина Соколова</DialogTitle>
                      <DialogDescription>
                        Врач функциональной диагностики
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Телефон" />
                      <Input type="date" />
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Записаться к врачу
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News and Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Новости и статьи</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle>Персонализация реабилитации</CardTitle>
                <CardDescription>
                  Как правильно подбирать восстановительные упражнения после травмы — советы врачей.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Читать →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle>Новый кабинет диагностики</CardTitle>
                <CardDescription>
                  Открылся новое отделение с современным диагностическим оборудованием.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Читать →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle>Спортивная медицина</CardTitle>
                <CardDescription>
                  Без боли реабилитация для спортсменов: реабилитация — очень важный.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Читать →
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Читать все →
            </a>
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Отзывы пациентов</h2>
            <a href="#" className="text-blue-600 hover:underline font-medium flex items-center">
              Все отзывы <Icon name="ArrowRight" className="ml-1" size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <CardTitle className="text-lg">Алексей, 32</CardTitle>
                  </div>
                </div>
                <CardDescription>
                  Быстро восстановился после растяжения. Команда профессионалов — рекомендую.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария, 45</CardTitle>
                  </div>
                </div>
                <CardDescription>
                  Удобная запись, понятные объяснения врача. Видно, что оборудование современное.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    О
                  </div>
                  <div>
                    <CardTitle className="text-lg">Олег, 27</CardTitle>
                  </div>
                </div>
                <CardDescription>
                  Телемедицинская консультация помогла получить грамотную рекомендацию — очень удобно.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">О Медицинском центре СКА</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Медицинский центр СКА — специализированный центр спортивной медицины и реабилитации с современным оборудованием и опытной командой врачей.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Мы уделяем внимание качественной диагностике, индивидуальным программам восстановления и современным сервисам: онлайн-запись, напоминания, телемедицина.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Диагностика</h4>
                  <p className="text-sm text-gray-600">УЗИ, функциональные тесты</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Реабилитация</h4>
                  <p className="text-sm text-gray-600">Персональные программы</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Телемедицина</h4>
                  <p className="text-sm text-gray-600">Онлайн-консультации</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Медицинский центр СКА</CardTitle>
                  <CardDescription>
                    Российский пр., Санкт-Петербург
                    <br />
                    Тел: +7 (812) XXX-XX-XX
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Подписаться на новости</CardTitle>
                  <div className="flex gap-2 mt-4">
                    <Input placeholder="Ваш email" className="flex-1" />
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Подписаться
                    </Button>
                  </div>
                  <CardDescription className="mt-2">
                    Написать в «Повсеместске», но обязательно не откажусь на открытую персональную диагностику.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold">
                  СКА
                </div>
                <span className="font-semibold">Медицинский центр СКА</span>
              </div>
              <p className="text-gray-400 text-sm">© Медицинский центр СКА, 2025</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Диагностика</a></li>
                <li><a href="#" className="hover:text-white">Реабилитация</a></li>
                <li><a href="#" className="hover:text-white">Телемедицина</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">О центре</a></li>
                <li><a href="#" className="hover:text-white">Врачи</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400 text-sm mb-2">
                Российский пр., Санкт-Петербург
              </p>
              <p className="text-gray-400 text-sm">
                Тел: +7 (812) XXX-XX-XX
              </p>
              <p className="text-gray-400 text-sm mt-4">
                Разработка сайта — по внутреннему Т3
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;