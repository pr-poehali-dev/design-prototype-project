import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    date: ''
  });

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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Записаться
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Promotional Banners */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Рекламное предложение 1</p>
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Подробнее</a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Рекламное предложение 2</p>
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Подробнее</a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Рекламное предложение 3</p>
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Подробнее</a>
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Bone" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Травматология и ортопедия</CardTitle>
                <CardDescription>
                  Консультации, диагностика и восстановление после спортивных и бытовых травм
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">от 1200 ₽</span>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Подробнее →
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Activity" className="text-green-600" size={24} />
                </div>
                <CardTitle>Функциональная диагностика</CardTitle>
                <CardDescription>
                  УЗИ, функциональные тесты, оценка двигательных нарушений и подготовка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">от 900 ₽</span>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Подробнее →
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-purple-600" size={24} />
                </div>
                <CardTitle>Реабилитация в ЛФК</CardTitle>
                <CardDescription>
                  Персональные и групповые программы восстановительной и профилактической реабилитации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">по запросу</span>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Подробнее →
                  </a>
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  ИВ
                </div>
                <CardTitle>Иван Иванов</CardTitle>
                <CardDescription>Травматолог-ортопед</CardDescription>
                <CardDescription>Опыт — 12 лет • Спорт</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  АП
                </div>
                <CardTitle>Анна Петрова</CardTitle>
                <CardDescription>Реабилитолог</CardDescription>
                <CardDescription>Спортивная медицина • ЛФК</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  ЕС
                </div>
                <CardTitle>Екатерина Соколова</CardTitle>
                <CardDescription>Функциональная диагностика</CardDescription>
                <CardDescription>Врач-диагност</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Записаться
                </Button>
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