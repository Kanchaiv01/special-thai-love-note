
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
  Users
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
      description: "ชอบบรรยากาศอบอุ่นในวันที่ฝนโปรยปราย เป็นช่วงเวลาที่ดีสำหรับการพักผ่อนและคิดอะไรเพลินๆ"
    },
    {
      icon: Gamepad2,
      title: "การเล่นเกม",
      description: "สนุกกับการผจญภัยในโลกของเกม และท้าทายตัวเองไปกับภารกิจใหม่ๆ"
    },
    {
      icon: Headphones,
      title: "การฟังเพลง",
      description: "เสียงเพลงคือเพื่อนคู่ใจในทุกๆ วัน ช่วยผ่อนคลายและเติมเต็มชีวิต"
    },
    {
      icon: ChefHat,
      title: "การกินของอร่อย",
      description: "มีความสุขกับการได้ลิ้มลองอาหารอร่อยๆ และค้นพบรสชาติใหม่ๆ อยู่เสมอ"
    },
    {
      icon: BookOpen,
      title: "การอ่าน",
      description: "หลงใหลในการอ่านหนังสือและบทความต่างๆ เพื่อเพิ่มพูนความรู้และมุมมอง"
    },
    {
      icon: Heart,
      title: "ความสัมพันธ์",
      description: "ให้ความสำคัญกับความสัมพันธ์ที่ดี ซื่อสัตย์ และเข้าใจกัน"
    }
  ];

  const values = [
    {
      icon: Handshake,
      title: "ความจริงใจ",
      description: "เชื่อว่าความจริงใจคือหัวใจของทุกความสัมพันธ์ที่ดี"
    },
    {
      icon: Lightbulb,
      title: "การเรียนรู้",
      description: "เปิดใจเรียนรู้สิ่งใหม่ๆ และเติบโตไปพร้อมกับประสบการณ์ในชีวิต"
    },
    {
      icon: MessageCircle,
      title: "ความเข้าใจ",
      description: "ให้ความสำคัญกับการรับฟังและเข้าใจมุมมองของผู้อื่น"
    },
    {
      icon: Sprout,
      title: "การเติบโต",
      description: "เชื่อในการพัฒนาตนเองและเป็นเวอร์ชันที่ดีขึ้นในทุกๆ วัน"
    },
    {
      icon: Smile,
      title: "อารมณ์ขัน",
      description: "ชอบที่จะสร้างรอยยิ้มและเสียงหัวเราะให้กับคนรอบข้าง"
    },
    {
      icon: Users,
      title: "การแบ่งปัน",
      description: "มีความสุขกับการได้แบ่งปันสิ่งดีๆ ให้กับคนพิเศษ"
    }
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", caption: "วิวพระอาทิตย์ตกที่ภูเขา" },
    { src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop", caption: "ช่วงเวลาสบายๆ กับสัตว์เลี้ยง" },
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop", caption: "มื้ออาหารที่ภูมิใจนำเสนอ" },
    { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop", caption: "การเดินทางครั้งล่าสุด" },
    { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop", caption: "กับเพื่อนๆ ที่น่ารัก" },
    { src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop", caption: "ช่วงเวลาที่คิดงานศิลปะ" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 font-sarabun">
      {/* Floating hearts animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Heart 
            key={i}
            className={`absolute text-pink-300 opacity-20 animate-float-${i % 3}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              fontSize: `${20 + i * 5}px`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Header Section */}
        <header className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              แด่เธอคนพิเศษของผม...
            </h1>
            <div className="absolute -top-4 -right-4 animate-pulse">
              <Heart className="text-pink-400 w-8 h-8" fill="currentColor" />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ยินดีต้อนรับสู่โลกใบเล็กๆ ของผม
          </p>
        </header>

        {/* About Me Section */}
        <section className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
              มาทำความรู้จักผมกัน
            </h2>
            
            <div className="relative inline-block mb-8">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                alt="รูปโปรไฟล์" 
                className="w-48 h-48 rounded-full object-cover border-4 border-gradient-to-r from-pink-400 to-purple-400 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 shadow-lg animate-bounce">
                <Heart className="text-white w-6 h-6" fill="currentColor" />
              </div>
            </div>

            <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg space-y-4">
                  <span className="block">สวัสดีครับ เราชื่อ <span className="font-semibold text-purple-600">กันต์</span></span>
                  <span className="block">เป็นคนที่มีโลกส่วนตัวที่ค่อนข้างชัดเจน ชอบอยู่กับรูทีนที่คุ้นเคย</span>
                  <span className="block">จนบางทีก็ไม่ค่อยทันได้รับรู้สิ่งใหม่ๆ ที่ผ่านเข้ามาสักเท่าไหร่</span>
                  <span className="block">แต่เชื่อมั้ย... ถ้าฉันได้ลองเปิดใจรับอะไรสักอย่างเข้ามาในชีวิตแล้วล่ะก็</span>
                  <span className="block">ฉันจะตั้งใจและทุ่มเทให้สิ่งนั้นมากๆ เลยนะ ทำได้ทุกวันไม่มีเบื่อเลยแหละ!</span>
                  <span className="block">ฉันชอบค้นหาความสุขจากสิ่งเล็กๆ น้อยๆ รอบตัวเสมอ และมีความสุขกับการได้แบ่งปันรอยยิ้มให้กับคนรอบข้าง</span>
                  <span className="block">เรื่องขี้ลืมเนี่ย เป็นเรื่องจริงจังที่เพื่อนที่ทำงานต้องคอยแซวตลอด</span>
                  <span className="block">ทั้งลืมปิดแอร์ ลืมกุญแจ จนไปไหนด้วยกันทีไร พวกเค้าต้องช่วยเช็คของให้ตลอดเลย 😅</span>
                  <span className="block text-gray-500 italic">(หวังว่าเธอคงไม่ว่ากันนะ)</span>
                  <span className="block">ทักษะการเข้าสังคมฉันอาจจะไม่ได้โดดเด่นมากนัก เลยมีเพื่อนสนิทแค่กลุ่มเล็กๆ</span>
                  <span className="block">ที่รู้ใจกันจริงๆ ซึ่งนั่นก็ทำให้ฉันได้ใช้เวลากับคนที่สำคัญอย่างเต็มที่</span>
                  <span className="block">ปกติฉันไม่ค่อยชอบเล่นโซเชียลเลยนะ...</span>
                  <span className="block">แต่ถ้าเมื่อไหร่ที่ฉันเริ่มเล่นมากขึ้นมากๆ ล่ะก็ เหตุผลทั้งหมดก็คงเป็นเพราะแกนั่นแหละ 😉</span>
                  <span className="block font-medium text-purple-600">หวังว่าเว็บเพจเล็กๆ นี้ จะทำให้แกได้เห็นมุมที่หลากหลายและได้รู้จักฉันมากขึ้นนะ</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Passions Section */}
        <section className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12">
            สิ่งที่ผมหลงใหล
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {passions.map((passion, index) => {
              const IconComponent = passion.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-pink-50 border-0 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                      <IconComponent className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{passion.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{passion.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Values Section */}
        <section className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-center mb-12">
            ค่านิยมและความคิด
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                      <IconComponent className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Gallery Section */}
        <section className={`mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center mb-12">
            ภาพเล่าเรื่อง
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Message Section */}
        <section className={`text-center mb-20 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-8">
            มีบางอย่างที่ผมอยากบอกคุณ...
          </h2>
          
          <Button 
            onClick={() => setShowMessage(!showMessage)}
            className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 hover:from-pink-600 hover:via-red-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {showMessage ? 'ซ่อนข้อความ' : 'คลิกเพื่ออ่านข้อความพิเศษ'}
          </Button>

          {showMessage && (
            <Card className="mt-8 mx-auto max-w-4xl bg-gradient-to-r from-pink-50 to-red-50 border-l-4 border-red-400 shadow-2xl animate-fade-in">
              <CardContent className="p-8">
                <div className="text-gray-700 text-lg leading-relaxed space-y-4 italic">
                  <p>
                    ตั้งแต่ครั้งแรกที่เราได้คุยกัน ผมก็รู้สึกได้ถึงความพิเศษในตัวคุณ
                    รอยยิ้มของคุณทำให้โลกสดใสขึ้น และเสียงหัวเราะของคุณก็เป็นเหมือนเสียงเพลงที่ไพเราะที่สุด
                  </p>
                  <p>
                    ผมรู้ว่านี่อาจจะดูแปลกไปหน่อย แต่ผมอยากให้คุณรู้ว่าผมกำลังคิดถึงคุณอยู่เสมอ
                    และหวังว่าในอนาคต เราจะมีโอกาสได้สร้างเรื่องราวดีๆ ร่วมกันนะครับ
                    คุณคือแรงบันดาลใจที่ทำให้ผมอยากเป็นคนที่ดีขึ้นในทุกๆ วัน
                  </p>
                  <p className="font-semibold text-red-600">
                    ด้วยความจริงใจจากใจจริง... <br />
                    กันต์
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <p>&copy; 2025 สร้างสรรค์เพื่อคุณเท่านั้น</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
