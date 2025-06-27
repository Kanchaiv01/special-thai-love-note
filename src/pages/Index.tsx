import { useState, useEffect } from 'react';
import { 
  Heart, 
  Lightbulb, 
  Headphones, 
  BookOpen, 
  Gamepad2,
  ChefHat,
  CloudRain,
  Handshake,
  MessageCircle,
  Sprout,
  Smile,
  Users,
  Music,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const passions = [
    {
      icon: CloudRain,
      title: "วันที่ฝนตก",
      description: "ชอบบรรยากาศอบอุ่นในวันที่ฝนโปรยปราย เป็นช่วงเวลาที่ดีสำหรับการพักผ่อนและคิดอะไรเพลินๆ",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Gamepad2,
      title: "การเล่นเกม",
      description: "สนุกกับการผจญภัยในโลกของเกม และท้าทายตัวเองไปกับภารกิจใหม่ๆ",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Headphones,
      title: "การฟังเพลง",
      description: "เสียงเพลงคือเพื่อนคู่ใจในทุกๆ วัน ช่วยผ่อนคลายและเติมเต็มชีวิต",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: ChefHat,
      title: "การกินของอร่อย",
      description: "มีความสุขกับการได้ลิ้มลองอาหารอร่อยๆ และค้นพบรสชาติใหม่ๆ อยู่เสมอ",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const values = [
    {
      icon: Handshake,
      title: "ความจริงใจ",
      description: "เชื่อว่าความจริงใจคือหัวใจของทุกความสัมพันธ์ที่ดี",
      color: "from-blue-500 to-sky-500"
    },
    {
      icon: Lightbulb,
      title: "การเรียนรู้",
      description: "เปิดใจเรียนรู้สิ่งใหม่ๆ และเติบโตไปพร้อมกับประสบการณ์ในชีวิต",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: MessageCircle,
      title: "ความเข้าใจ",
      description: "ให้ความสำคัญกับการรับฟังและเข้าใจมุมมองของผู้อื่น",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Sprout,
      title: "การเติบโต",
      description: "เชื่อในการพัฒนาตนเองและเป็นเวอร์ชันที่ดีขึ้นในทุกๆ วัน",
      color: "from-lime-500 to-green-500"
    },
    {
      icon: Smile,
      title: "อารมณ์ขัน",
      description: "ชอบที่จะสร้างรอยยิ้มและเสียงหัวเราะให้กับคนรอบข้าง",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "การแบ่งปัน",
      description: "มีความสุขกับการได้แบ่งปันสิ่งดีๆ ให้กับคนที่พิเศษ",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-kanit">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-float-0"></div>
        <div className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 animate-float-1"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-float-2"></div>
        
        {/* Floating sparkles */}
        {[...Array(8)].map((_, i) => (
          <Sparkles 
            key={i}
            className={`absolute text-indigo-300 opacity-40 animate-float-${i % 3}`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${8 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              fontSize: `${16 + i * 2}px`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        {/* Header Section */}
        <header className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 animate-fade-in font-inter tracking-tight">
              แด่แกคนพิเศษของกันต์..
            </h1>
            <div className="absolute -top-6 -right-6 animate-glow">
              <Heart className="text-pink-500 w-12 h-12" fill="currentColor" />
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            ยินดีต้อนรับสู่โลกใบเล็กๆ ของผม
          </p>
        </header>

        {/* About Me Section */}
        <section className={`mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-16 font-inter">
              มาทำความรู้จักผมกัน
            </h2>
            
            <Card className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                <div className="text-slate-700 leading-relaxed text-xl space-y-6 font-light">
                  <div className="block">สวัสดีครับ เราชื่อ <span className="font-semibold text-indigo-600 text-2xl">กันต์</span></div>
                  <div className="block">เป็นคนที่มีโลกส่วนตัวที่ค่อนข้างชัดเจน ชอบอยู่กับรูทีนที่คุ้นเคย</div>
                  <div className="block">จนบางทีก็ไม่ค่อยทันได้รับรู้สิ่งใหม่ๆ ที่ผ่านเข้ามาสักเท่าไหร่</div>
                  <div className="block">แต่เชื่อมั้ย... ถ้าฉันได้ลองเปิดใจรับอะไรสักอย่างเข้ามาในชีวิตแล้วล่ะก็</div>
                  <div className="block">ฉันจะตั้งใจและทุ่มเทให้สิ่งนั้นมากๆ เลยนะ ทำได้ทุกวันไม่มีเบื่อเลยแหละ!</div>
                  <div className="block">ฉันชอบค้นหาความสุขจากสิ่งเล็กๆ น้อยๆ รอบตัวเสมอ และมีความสุขกับการได้แบ่งปันรอยยิ้มให้กับคนรอบข้าง</div>
                  <div className="block">เรื่องขี้ลืมเนี่ย เป็นเรื่องจริงจังที่เพื่อนที่ทำงานต้องคอยแซวตลอด</div>
                  <div className="block">ทั้งลืมปิดแอร์ ลืมกุญแจ จนไปไหนด้วยกันทีไร พวกเค้าต้องช่วยเช็คของให้ตลอดเลย 😅</div>
                  <div className="block text-slate-500 italic text-lg">(หวังว่าเธอคงไม่ว่ากันนะ)</div>
                  <div className="block">ทักษะการเข้าสังคมฉันอาจจะไม่ได้โดดเด่นมากนัก เลยมีเพื่อนสนิทแค่กลุ่มเล็กๆ</div>
                  <div className="block">ที่รู้ใจกันจริงๆ ซึ่งนั่นก็ทำให้ฉันได้ใช้เวลากับคนที่สำคัญอย่างเต็มที่</div>
                  <div className="block">ปกติฉันไม่ค่อยชอบเล่นโซเชียลเลยนะ...</div>
                  <div className="block">แต่ถ้าเมื่อไหร่ที่ฉันเริ่มเล่นมากขึ้นมากๆ ล่ะก็ เหตุผลทั้งหมดก็คงเป็นเพราะแกนั่นแหละ 😉</div>
                  <div className="block font-medium text-indigo-600 text-xl">หวังว่าเว็บเพจเล็กๆ นี้ จะทำให้แกได้เห็นมุมที่หลากหลายและได้รู้จักฉันมากขึ้นนะ</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Passions Section */}
        <section className={`mb-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent text-center mb-16 font-inter">
            สิ่งที่ผมหลงใหล
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {passions.map((passion, index) => {
              const IconComponent = passion.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-r ${passion.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse shadow-lg`}>
                      <IconComponent className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4 font-inter">{passion.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg font-light">{passion.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Values Section */}
        <section className={`mb-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent text-center mb-16 font-inter">
            ค่านิยมและความคิด
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-r ${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse shadow-lg`}>
                      <IconComponent className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4 font-inter">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg font-light">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Music Sharing Section */}
        <section className={`mb-24 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent text-center mb-16 font-inter">
            เพลงที่อยากแชร์ให้เธอฟัง
          </h2>
          
          <Card className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border-0 shadow-2xl overflow-hidden rounded-3xl">
            <CardContent className="p-12 text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-glow shadow-lg">
                <Music className="text-white w-12 h-12" />
              </div>
              
              <h3 className="text-3xl font-semibold text-slate-800 mb-6 font-inter">
                เพลงพิเศษจากใจผม
              </h3>
              
              <p className="text-slate-600 mb-10 leading-relaxed text-xl font-light">
                มีเพลงเพลงหนึ่งที่ผมอยากให้เธอได้ฟัง เป็นเพลงที่ทำให้ผมนึกถึงเธอ
                และหวังว่าเธอจะชอบเหมือนกับที่ผมชอบ
              </p>
              
              <Button 
                onClick={() => window.open('https://music.youtube.com/watch?v=EXZaOFw021M&si=iMpjW7zWIAArt32v', '_blank')}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group font-inter"
              >
                <Headphones className="mr-4 w-7 h-7 group-hover:animate-pulse" />
                ฟังเพลงที่ YouTube Music
                <ExternalLink className="ml-4 w-6 h-6" />
              </Button>
              
              <p className="text-sm text-slate-500 mt-6 italic font-light">
                คลิกเพื่อเปิดในแท็บใหม่
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Special Message Section */}
        <section className={`text-center mb-24 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-12 font-inter">
            มีบางอย่างที่ผมอยากบอกคุณ...
          </h2>
          
          <Button 
            onClick={() => setShowMessage(!showMessage)}
            className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 hover:from-pink-600 hover:via-red-600 hover:to-pink-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-inter"
          >
            {showMessage ? 'ซ่อนข้อความ' : 'คลิกเพื่ออ่านข้อความพิเศษ'}
          </Button>

          {showMessage && (
            <Card className="mt-12 mx-auto max-w-5xl bg-gradient-to-r from-pink-50/80 to-red-50/80 backdrop-blur-xl border-l-4 border-red-400 shadow-2xl animate-fade-in rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                <div className="text-slate-700 text-xl leading-relaxed space-y-6 italic font-light">
                  <p>
                    ตั้งแต่ครั้งแรกที่เราได้คุยกัน ผมก็รู้สึกได้ถึงความพิเศษในตัวคุณ
                    รอยยิ้มของคุณทำให้โลกสดใสขึ้น และเสียงหัวเราะของคุณก็เป็นเหมือนเสียงเพลงที่ไพเราะที่สุด
                  </p>
                  <p>
                    ผมรู้ว่านี่อาจจะดูแปลกไปหน่อย แต่ผมอยากให้คุณรู้ว่าผมกำลังคิดถึงคุณอยู่เสมอ
                    และหวังว่าในอนาคต เราจะมีโอกาสได้สร้างเรื่องราวดีๆ ร่วมกันนะครับ
                    คุณคือแรงบันดาลใจที่ทำให้ผมอยากเป็นคนที่ดีขึ้นในทุกๆ วัน
                  </p>
                  <p className="font-semibold text-red-600 text-2xl">
                    ด้วยความจริงใจจากใจจริง... <br />
                    กันต์
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm font-light">
          <p>&copy; 2025 สร้างสรรค์เพื่อคุณเท่านั้น</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
