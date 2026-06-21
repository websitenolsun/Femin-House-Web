export type BlogPostSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  publishedDate: string;
  updatedDate: string;
  readingMinutes: number;
  keywords: string[];
  sections: BlogPostSection[];
  takeaway: string;
  relatedSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hamile-pilatesi",
    title: "Hamile Pilatesi",
    category: "Klinik Pilates",
    summary:
      "Gebelik sürecinde nefes, postür ve güvenli hareket odağıyla hazırlanan ders yaklaşımı.",
    seoTitle: "Hamile Pilatesi: Güvenli Egzersiz ve Nefes | Fem'n House",
    seoDescription:
      "Hamile pilatesi; nefes, postür ve güvenli hareketle gebelikte bedeni destekler. Fem'n House'ta fizyoterapist eşliğinde kişiye özel ve güvenli planlanır.",
    image: "/optimized/blog-hamile-pilatesi.webp",
    imageWidth: 368,
    imageHeight: 368,
    alt: "Fem'n House stüdyosunda hamile pilatesi seansı",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 4,
    keywords: ["hamile pilatesi", "gebelikte egzersiz", "nefes çalışması", "klinik pilates"],
    sections: [
      {
        heading: "Hamile pilatesi neden farklı planlanır?",
        body: [
          "Gebelikte bedenin merkezi, nefes ritmi, bel ve pelvis çevresi her ay değişir. Bu nedenle hamile pilatesi standart bir reformer dersi gibi değil; annenin haftası, doktor yönlendirmesi, enerji seviyesi ve günlük ihtiyacı dikkate alınarak planlanmalıdır.",
          "Fem'n House'ta seansın odağı yüksek performans değil, kontrollü hareket kalitesi ve güven hissidir. Amaç bedeni zorlamak değil; omurgayı desteklemek, nefesi sakinleştirmek ve anne adayının hareket ederken kendini daha dengeli hissetmesini sağlamaktır.",
        ],
      },
      {
        heading: "Seanslarda hangi konulara odaklanılır?",
        body: [
          "Hamile pilatesinde nefes yönetimi, postür farkındalığı, kalça ve sırt desteği birlikte ele alınır. Her hareket yavaş, anlaşılır ve takip edilebilir bir akışta ilerler.",
        ],
        bullets: [
          "Diyafram ve ritmik nefes farkındalığı",
          "Bel, sırt ve omuz çevresini rahatlatan kontrollü egzersizler",
          "Pelvis ve kalça çevresinde güvenli mobilite çalışmaları",
          "Günlük yaşamda duruşu destekleyen basit alışkanlıklar",
        ],
      },
      {
        heading: "Fizyoterapist eşliği ne kazandırır?",
        body: [
          "Gebelikte her bedenin hikayesi farklıdır. Daha önce bel ağrısı yaşamış olmak, postür değişiklikleri, ödem, nefes kısıtlılığı ya da hareket korkusu dersin akışını etkileyebilir. Fizyoterapist eşliğinde ilerlemek, hareketin doğru dozda ve doğru açıyla uygulanmasına yardımcı olur.",
          "Bu yaklaşım özellikle hamilelik sürecinde güvenli alan hissini güçlendirir. Ders boyunca sadece egzersiz değil, annenin bedeninden gelen sinyaller de takip edilir.",
        ],
      },
      {
        heading: "Derse başlamadan önce nelere dikkat edilmeli?",
        body: [
          "Hamile pilatesine başlamadan önce doktor onayı alınması önemlidir. İlk görüşmede gebelik haftası, önceki hareket deneyimi, varsa ağrı veya hassasiyetler değerlendirilir. Böylece seans, anne adayının ihtiyacına göre sade ve güvenli bir akışla hazırlanır.",
        ],
      },
    ],
    takeaway:
      "Hamile pilatesi, doğru nefes ve güvenli hareketle gebelik sürecinde bedeni destekleyen sakin bir eşlik alanıdır.",
    relatedSlugs: ["dogru-dokunus-dogru-terapi", "postur-bozuklugu-kifoz"],
  },
  {
    slug: "omuzda-sikisma-sendromu",
    title: "Omuzda Sıkışma Sendromu",
    category: "Fizyoterapi",
    summary: "Omuz hareket açıklığı, kuvvet dengesi ve doğru egzersiz seçiminin önemi.",
    seoTitle: "Omuzda Sıkışma Sendromu ve Egzersiz | Fem'n House",
    seoDescription:
      "Omuzda sıkışma sendromunda ağrı, hareket kısıtlılığı ve kas dengesi birlikte değerlendirilir. Fem'n House'ta fizyoterapi odaklı yaklaşımı okuyun.",
    image: "/optimized/blog-omuzda-sikisma.webp",
    imageWidth: 368,
    imageHeight: 368,
    alt: "Omuzda sıkışma sendromu ve slap yırtık bilgilendirme görseli",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 4,
    keywords: ["omuzda sıkışma", "slap yırtık", "omuz ağrısı", "fizyoterapi"],
    sections: [
      {
        heading: "Omuzda sıkışma ne anlama gelir?",
        body: [
          "Omuzda sıkışma sendromu, kolu kaldırma, uzanma veya günlük aktiviteler sırasında omuz çevresinde ağrı ve zorlanma hissiyle kendini gösterebilir. Bu tablo yalnızca tek bir kasla ilgili değildir; kürek kemiği pozisyonu, boyun-sırt hattı, omuz hareket açıklığı ve kas kuvvet dengesi birlikte değerlendirilmelidir.",
          "Ağrının şiddeti kişiden kişiye değişir. Bazı kişilerde gece ağrısı öne çıkarken, bazı kişilerde spor, iş ya da ev içi hareketlerde kısıtlılık daha belirgin olabilir.",
        ],
      },
      {
        heading: "Doğru değerlendirme neden önemlidir?",
        body: [
          "Omuz bölgesi çok hareketli bir yapıya sahiptir. Bu hareketliliğin sağlıklı kalması için eklem, kas, tendon ve kürek kemiği ritminin uyumlu çalışması gerekir. Sadece ağrılı noktaya odaklanmak çoğu zaman yeterli olmaz.",
          "Fizyoterapi değerlendirmesinde hareketin hangi açıda zorlandığı, hangi kas grubunun fazla çalıştığı ve hangi bölgenin desteklenmesi gerektiği incelenir. Böylece egzersizler rastgele değil, kişinin ihtiyacına göre seçilir.",
        ],
      },
      {
        heading: "Seanslarda nasıl bir yol izlenir?",
        body: [
          "Fem'n House'ta omuz problemlerinde amaç hareketten kaçmak değil, hareketi doğru dozda yeniden öğretmektir. Manuel terapi, klinik egzersiz ve postür farkındalığı birlikte planlanabilir.",
        ],
        bullets: [
          "Ağrısız hareket açıklığını artırmaya yönelik mobilite çalışmaları",
          "Kürek kemiği kontrolünü destekleyen egzersizler",
          "Boyun ve sırt hattını rahatlatan postür düzenlemeleri",
          "Günlük hayatta omuzu koruyan hareket alışkanlıkları",
        ],
      },
      {
        heading: "Ne zaman destek almak gerekir?",
        body: [
          "Omuz ağrısı günlük hareketleri kısıtlıyor, gece uykusunu etkiliyor ya da kolu kaldırırken belirgin zorlanma yaratıyorsa profesyonel değerlendirme almak önemlidir. Erken ve doğru planlanan bir süreç, hareket korkusunu azaltır ve omuzun daha dengeli çalışmasına destek olur.",
        ],
      },
    ],
    takeaway:
      "Omuzda sıkışma sendromunda kalıcı rahatlama için ağrıyı, postürü ve hareket kalitesini birlikte ele almak gerekir.",
    relatedSlugs: ["dogru-dokunus-dogru-terapi", "postur-bozuklugu-kifoz"],
  },
  {
    slug: "dogru-dokunus-dogru-terapi",
    title: "Doğru Dokunuş, Doğru Terapi",
    category: "Manuel Terapi",
    summary: "Manuel terapi ve egzersizin birlikte planlandığı bütüncül rahatlama süreci.",
    seoTitle: "Manuel Terapi ve Klinik Egzersiz | Fem'n House",
    seoDescription:
      "Manuel terapi, doğru değerlendirme ve klinik egzersizle birleştiğinde ağrı yönetimi ve hareket kalitesini destekler. Fem'n House yaklaşımını inceleyin.",
    image: "/optimized/gallery-07.webp",
    imageWidth: 368,
    imageHeight: 368,
    alt: "Fem'n House manuel terapi ve doğru dokunuş çalışması",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 3,
    keywords: ["manuel terapi", "klinik egzersiz", "ağrı yönetimi", "fizyoterapi"],
    sections: [
      {
        heading: "Manuel terapi tek başına bir masaj değildir",
        body: [
          "Manuel terapi, kas ve eklem sistemini değerlendiren, hareket kısıtlılığı ve ağrı döngüsünü anlamaya çalışan fizyoterapi uygulamalarından biridir. Doğru dokunuş, yalnızca rahatlatma hissi oluşturmak için değil; bedenin hangi bölgede desteğe ihtiyaç duyduğunu anlamak için kullanılır.",
          "Bu nedenle manuel terapi seansları kişiye özel olmalıdır. Aynı ağrı bölgesi iki kişide farklı nedenlerle ortaya çıkabilir.",
        ],
      },
      {
        heading: "Egzersizle desteklenmeyen süreç eksik kalabilir",
        body: [
          "Manuel uygulamalar bedeni rahatlatabilir, fakat kalıcı değişim için hareket kalitesinin de yeniden kurulması gerekir. Klinik egzersizler bu noktada devreye girer. Amaç bedeni güçlendirmek, eklem hareketini desteklemek ve ağrının tekrar eden döngüsünü azaltmaktır.",
        ],
      },
      {
        heading: "Fem'n House yaklaşımı",
        body: [
          "Seanslarda önce bedenin verdiği sinyaller dinlenir. Ağrının yeri, hareketle ilişkisi, günlük yaşam alışkanlıkları ve postür birlikte değerlendirilir. Ardından manuel terapi, nefes ve egzersiz çalışmaları dengeli bir plan içinde uygulanır.",
        ],
        bullets: [
          "Kişiye özel fizyoterapi değerlendirmesi",
          "Hareket açıklığı ve kas dengesi odağı",
          "Evde sürdürülebilecek basit farkındalık önerileri",
        ],
      },
      {
        heading: "Ne zaman değerlendirme almak gerekir?",
        body: [
          "Ağrı tekrarlıyor, hareketi kısıtlıyor veya günlük yaşamda güven hissini azaltıyorsa fizyoterapist eşliğinde değerlendirme almak yol gösterici olabilir. Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.",
        ],
      },
    ],
    takeaway:
      "Doğru terapi, yalnızca rahatlatan değil; bedene daha sağlıklı hareket etmeyi yeniden öğreten süreçtir.",
    relatedSlugs: ["omuzda-sikisma-sendromu", "postur-bozuklugu-kifoz"],
  },
  {
    slug: "postur-bozuklugu-kifoz",
    title: "Postür Bozukluğu ve Kifoz",
    category: "Postür",
    summary:
      "Duruş farkındalığı, sırt kuvveti ve günlük yaşam alışkanlıklarıyla desteklenen yaklaşım.",
    seoTitle: "Postür Bozukluğu ve Kifoz Egzersizleri | Fem'n House",
    seoDescription:
      "Postür bozukluğu ve kifozda sırt kuvveti, nefes, omurga hareketliliği ve günlük alışkanlıklar birlikte ele alınır. Fem'n House notlarını okuyun.",
    image: "/optimized/gallery-11.webp",
    imageWidth: 368,
    imageHeight: 368,
    alt: "Postür bozukluğu ve kifoz bilgilendirme görseli",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 4,
    keywords: ["postür bozukluğu", "kifoz", "duruş", "klinik pilates"],
    sections: [
      {
        heading: "Postür yalnızca dik durmak değildir",
        body: [
          "Postür, bedenin gün boyunca yer çekimine, alışkanlıklara ve hareket biçimine verdiği cevaptır. Uzun süre oturmak, telefon ve bilgisayar kullanımı, stres, nefesin yüzeyselleşmesi ve sırt kaslarının zayıflaması duruşu etkileyebilir.",
          "Kifoz eğilimi olan kişilerde sırtın üst bölgesinde yuvarlanma, omuzların öne gelmesi ve boyun hattında yük hissi görülebilir. Bu tablo yalnızca estetik bir konu değil, hareket kalitesiyle de ilgilidir.",
        ],
      },
      {
        heading: "Nefes ve omurga ilişkisi",
        body: [
          "Duruş çalışmaları sadece sırt kaslarını güçlendirmekten ibaret değildir. Diyaframın kullanımı, kaburga hareketliliği ve omurganın esnekliği postür üzerinde belirgin etki yaratır. Bu yüzden nefes çalışmaları, postür seanslarının önemli bir parçasıdır.",
        ],
      },
      {
        heading: "Klinik pilates nasıl destek olur?",
        body: [
          "Klinik pilates, kontrollü hareket ve beden farkındalığıyla postürü yeniden organize etmeye yardımcı olur. Reformer ekipmanı doğru dirençle kullanıldığında omurga çevresi kasları daha bilinçli şekilde çalıştırılabilir.",
        ],
        bullets: [
          "Sırt ve merkez bölge kuvvetini destekleme",
          "Omuz ve kürek kemiği pozisyonunu fark etme",
          "Günlük duruş alışkanlıklarını yeniden düzenleme",
          "Nefes ve hareket uyumunu geliştirme",
        ],
      },
      {
        heading: "Sürdürülebilir sonuç için düzenli takip",
        body: [
          "Postür bozukluklarında hızlı farkındalık oluşabilir, ancak kalıcı değişim düzenli pratik ister. Kişiye özel egzersiz planı ve doğru takip, bedenin yeni duruş alışkanlığını güvenle öğrenmesine yardımcı olur.",
        ],
      },
    ],
    takeaway:
      "Postür çalışmaları, bedenin günlük hayatta daha dengeli ve rahat hareket etmesini hedefleyen uzun soluklu bir farkındalık sürecidir.",
    relatedSlugs: ["hamile-pilatesi", "dogru-dokunus-dogru-terapi"],
  },
  {
    slug: "diastazis-rekti-manuel-yaklasimlar",
    title: "Diastazis Rekti Üzerine Manuel Yaklaşımlar",
    category: "Kadın Sağlığı",
    summary:
      "Doğum sonrası karın ayrılması, nefes, merkez kontrolü ve güvenli manuel terapi yaklaşımıyla birlikte değerlendirilir.",
    seoTitle: "Diastazis Rekti Manuel Yaklaşımlar | Fem'n House",
    seoDescription:
      "Diastazis rekti, doğum sonrası karın ayrılması ve fizyoterapist eşliğinde güvenli manuel yaklaşım sürecini keşfedin. Fem'n House notlarını okuyun.",
    image: "/optimized/blog-diastazis-rekti-manuel-yaklasimlar.webp",
    imageWidth: 960,
    imageHeight: 960,
    alt: "Diastazis rekti manuel terapi uygulaması",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 5,
    keywords: [
      "diastazis rekti",
      "doğum sonrası karın ayrılması",
      "manuel terapi",
      "fizyoterapi",
      "klinik pilates",
    ],
    sections: [
      {
        heading: "Diastazis rekti nasıl değerlendirilir?",
        body: [
          "Diastazis rekti, doğum sonrası karın ayrılması olarak bilinen ve karın ön duvarındaki yük paylaşımını etkileyebilen bir durumdur. İlk aşamada diastazis rekti yalnızca görüntüyle değil, nefes, merkez kontrolü, bel-pelvis hattı ve günlük hareket alışkanlıklarıyla birlikte ele alınmalıdır.",
          "Fem'n House'ta süreç kişiye özel değerlendirme ile başlar. Fizyoterapist eşliğinde karın duvarının tepkisi, nefesin yönü, gövde stabilitesi ve hassasiyet alanları incelenir.",
        ],
      },
      {
        heading: "Manuel terapi bu süreçte nasıl konumlanır?",
        body: [
          "Manuel terapi, diastazis rekti sürecinde dokuyu zorlayan bir uygulama gibi değil, beden farkındalığını destekleyen sakin bir yaklaşım olarak planlanır. Amaç karın, diyafram, kaburga ve pelvis çevresindeki gerilimi anlamak ve egzersiz rehabilitasyonu için daha güvenli bir başlangıç zemini oluşturmaktır.",
        ],
      },
      {
        heading: "Egzersiz rehabilitasyonu neden önemlidir?",
        body: [
          "Doğum sonrası dönemde sadece karın egzersizi yapmak çoğu zaman yeterli değildir. Nefes, pelvik taban, derin karın kasları ve omurga kontrolü birlikte çalışmalıdır. Bu yüzden egzersiz rehabilitasyonu, annenin günlük yaşama daha kontrollü dönmesini destekleyen aşamalı bir planla ilerler.",
        ],
        bullets: [
          "Nefes ve karın duvarı farkındalığı",
          "Pelvik taban ve merkez kontrolünü destekleyen çalışmalar",
          "Bel ve pelvis çevresinde güvenli hareket eğitimi",
          "Klinik pilates ile kontrollü kuvvetlenme",
        ],
      },
      {
        heading: "Ne zaman destek almak daha doğru olur?",
        body: [
          "Karında belirgin ayrılma hissi, bel yüklenmesi, egzersizde kontrol kaybı veya günlük aktivitelerde güvensizlik varsa fizyoterapi değerlendirmesi yol gösterici olabilir. Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.",
        ],
      },
    ],
    takeaway:
      "Diastazis rekti sürecinde hedef hızlı baskı kurmak değil; nefes, merkez kontrolü ve güvenli hareketle bedeni yeniden organize etmektir.",
    relatedSlugs: ["hamile-pilatesi", "dogru-dokunus-dogru-terapi"],
  },
  {
    slug: "kurek-kemigi-arasi-kulunc-fibrozit",
    title: "Kürek Kemiği Arası Kulunç ve Fibrozit Ağrıları",
    category: "Manuel Terapi",
    summary:
      "Kürek kemiği arası ağrı; postür, nefes, kas gerginliği ve hareket alışkanlıklarıyla birlikte ele alınır.",
    seoTitle: "Kürek Kemiği Arası Kulunç ve Fibrozit | Fem'n House",
    seoDescription:
      "Kürek kemiği arası ağrı, kulunç ve fibrozit şikayetlerinde manuel terapi ve egzersiz rehabilitasyonu yaklaşımını Fem'n House uzman notlarıyla okuyun.",
    image: "/optimized/blogg-kurek-kemigi-kulunc-fibrozit.webp",
    imageWidth: 960,
    imageHeight: 960,
    alt: "Kürek kemiği arasında kulunç ve fibrozit değerlendirmesi",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 5,
    keywords: [
      "kulunç ağrısı",
      "fibrozit",
      "kürek kemiği arası ağrı",
      "sırt ağrısı",
      "manuel terapi",
    ],
    sections: [
      {
        heading: "Kürek kemiği arası ağrı neden sık görülür?",
        body: [
          "Kürek kemiği arası kulunç ve fibrozit ağrıları, uzun süre oturma, masa başı çalışma, stres, nefesin yüzeyselleşmesi ve omuzların öne kapanmasıyla daha belirgin hissedilebilir. Kürek kemiği arası ağrı çoğu zaman tek bir noktadan ibaret değildir; boyun, sırt, omuz ve kaburga hareketi birlikte değerlendirilmelidir.",
          "Kişiye özel değerlendirme, ağrının yalnızca bulunduğu bölgeyi değil, onu artıran günlük alışkanlıkları da anlamayı sağlar.",
        ],
      },
      {
        heading: "Fibrozit ve kulunç hissi nasıl ele alınır?",
        body: [
          "Fibrozit veya kulunç olarak tarif edilen hassas noktalar, kas dokusunun yüklenme biçimiyle ilişkili olabilir. Fizyoterapist eşliğinde manuel terapi uygulamaları, bölgenin rahatlamasına ve hareketin daha kontrollü yeniden kurulmasına destek olabilir.",
        ],
      },
      {
        heading: "Egzersiz rehabilitasyonu hangi alanları destekler?",
        body: [
          "Sadece ağrılı noktayı gevşetmek yerine sırt, kürek kemiği ve boyun hattının birlikte çalışması hedeflenir. Egzersiz rehabilitasyonu; hareket açıklığı, nefes ritmi ve postür farkındalığıyla birlikte planlandığında daha sürdürülebilir bir yaklaşım sunar.",
        ],
        bullets: [
          "Kürek kemiği kontrolünü destekleyen egzersizler",
          "Göğüs ve sırt hattında mobilite çalışmaları",
          "Nefes ve kaburga hareketi farkındalığı",
          "Günlük oturma pozisyonunu düzenleyen öneriler",
        ],
      },
      {
        heading: "Hangi belirtilerde profesyonel destek gerekir?",
        body: [
          "Ağrı uzun sürüyor, kola yayılıyor, hareketi kısıtlıyor veya günlük yaşamı etkiliyorsa değerlendirme almak önemlidir. Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.",
        ],
      },
    ],
    takeaway:
      "Kürek kemiği arası ağrılarda kalıcı konfor için manuel terapi, egzersiz ve postür farkındalığı birlikte düşünülmelidir.",
    relatedSlugs: ["omuzda-sikisma-sendromu", "postur-bozuklugu-kifoz"],
  },
  {
    slug: "diz-agrisi-egzersiz-rehabilitasyonu",
    title: "Diz Ağrısı Sonrası Egzersiz Rehabilitasyonu",
    category: "Ortopedik Rehabilitasyon",
    summary:
      "Diz ağrısı sonrası güvenli dönüş; kas dengesi, hareket kalitesi ve aşamalı egzersiz planıyla desteklenir.",
    seoTitle: "Diz Ağrısı Egzersiz Rehabilitasyonu | Fem'n House",
    seoDescription:
      "Diz ağrısı sonrası hareket kalitesi, kas dengesi ve güvenli egzersiz rehabilitasyonu için fizyoterapi yaklaşımını Fem'n House uzman notlarında okuyun.",
    image: "/optimized/blog-diz-agrisi-egzersiz-rehabilitasyonu.webp",
    imageWidth: 764,
    imageHeight: 764,
    alt: "Diz ağrısı sonrası egzersiz rehabilitasyonu",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 5,
    keywords: [
      "diz ağrısı",
      "diz ağrısı tedavisi",
      "diz rehabilitasyonu",
      "egzersiz rehabilitasyonu",
      "fizyoterapi",
    ],
    sections: [
      {
        heading: "Diz ağrısı sonrası ilk hedef nedir?",
        body: [
          "Diz ağrısı sonrası egzersiz rehabilitasyonu, ağrılı bölgeyi hemen zorlamak yerine hareket kalitesini güvenli şekilde geri kazanmayı hedefler. Diz ağrısı; kalça, ayak bileği, diz çevresi kas dengesi ve günlük yüklenme alışkanlıklarıyla birlikte değerlendirilmelidir.",
          "Fem'n House'ta süreç kişiye özel değerlendirme ile başlar. Fizyoterapist eşliğinde ağrının ne zaman arttığı, hangi hareketlerin zorladığı ve hangi kas gruplarının desteğe ihtiyaç duyduğu incelenir.",
        ],
      },
      {
        heading: "Egzersiz rehabilitasyonu nasıl ilerler?",
        body: [
          "Egzersiz rehabilitasyonu aşamalı ilerlemelidir. Önce ağrısız hareket açıklığı, sonra kontrol, denge ve kuvvet çalışmaları planlanır. Gerekli durumlarda manuel terapi, diz çevresi dokuların ve komşu eklemlerin daha rahat hareket etmesine destek olabilir.",
        ],
      },
      {
        heading: "Diz çevresinde hangi yapılar önemlidir?",
        body: [
          "Diz yalnız çalışan bir eklem değildir. Kalça kontrolü, ayak basışı, ön-arka bacak kas dengesi ve merkez stabilitesi dizin yüklenme biçimini etkiler. Bu nedenle rehabilitasyon planı tek bir egzersizden değil, bedenin bütün hareket zincirinden oluşur.",
        ],
        bullets: [
          "Kalça ve diz çevresi kuvvet dengesi",
          "Kontrollü squat ve basamak çalışmaları",
          "Denge ve propriosepsiyon egzersizleri",
          "Günlük yürüyüş ve merdiven alışkanlıkları",
        ],
      },
      {
        heading: "Ne zaman değerlendirme almak gerekir?",
        body: [
          "Diz ağrısı yürüyüşü, merdiveni, sporu veya günlük hareketleri kısıtlıyorsa profesyonel destek almak faydalı olabilir. Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.",
        ],
      },
    ],
    takeaway:
      "Diz ağrısı sonrası güvenli ilerleme; doğru dozda egzersiz, sabırlı takip ve hareket zincirini bütüncül değerlendirmeyle mümkündür.",
    relatedSlugs: ["postur-bozuklugu-kifoz", "dogru-dokunus-dogru-terapi"],
  },
  {
    slug: "quadratus-lumborum-bel-agrisi",
    title: "Quadratus Lumborum Kası ve Bel Ağrısı",
    category: "Bel Ağrısı",
    summary:
      "Quadratus lumborum kası; bel, kalça, kaburga ve postür hattındaki yüklenmelerle ilişkili olabilir.",
    seoTitle: "Quadratus Lumborum ve Bel Ağrısı | Fem'n House",
    seoDescription:
      "Quadratus lumborum kası kaynaklı bel ağrısı, kalça çevresi gerginliği ve postür ilişkisini Fem'n House uzman yaklaşımıyla sade şekilde öğrenin bugün.",
    image: "/optimized/blog-quadratus-lumborum-bel-agrisia.webp",
    imageWidth: 960,
    imageHeight: 960,
    alt: "Quadratus lumborum kası ve bel ağrısı",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 5,
    keywords: [
      "bel ağrısı",
      "quadratus lumborum",
      "QL kası",
      "kalça ağrısı",
      "bacağa vuran ağrı",
      "postür",
    ],
    sections: [
      {
        heading: "Quadratus lumborum kası bel ağrısını nasıl etkiler?",
        body: [
          "Quadratus lumborum kası ve bel ağrısı ilişkisi, özellikle tek taraflı bel gerginliği, kalça çevresi hassasiyet ve postür değişikliklerinde gündeme gelebilir. Quadratus lumborum; omurga, pelvis ve kaburga hattıyla bağlantılı derin bir kas olduğu için sadece lokal ağrı olarak düşünülmemelidir.",
          "Kişiye özel değerlendirme ile ağrının nefes, yana eğilme, yürüyüş ve uzun süre oturmayla ilişkisi incelenir.",
        ],
      },
      {
        heading: "QL kası neden gerginleşebilir?",
        body: [
          "Uzun süre aynı pozisyonda kalmak, tek taraflı yük taşımak, kalça çevresi kuvvet dengesizliği veya nefes mekaniğindeki kısıtlılık QL kasında gerginlik hissini artırabilir. Fizyoterapist eşliğinde yapılan değerlendirme, bel ağrısının hangi hareket zinciriyle ilişkili olduğunu anlamaya yardımcı olur.",
        ],
      },
      {
        heading: "Manuel terapi ve egzersiz nasıl birleşir?",
        body: [
          "Manuel terapi, bel çevresindeki gerginlik ve hareket kısıtlılığını anlamak için destekleyici olabilir. Ancak sürecin temelinde egzersiz rehabilitasyonu vardır. Nefes, kalça kontrolü, gövde stabilitesi ve postür farkındalığı birlikte çalışıldığında bel çevresindeki yük daha dengeli paylaşılabilir.",
        ],
        bullets: [
          "Bel ve kalça çevresi mobilite çalışmaları",
          "Nefes ve kaburga hareketi farkındalığı",
          "Merkez bölge kontrol egzersizleri",
          "Günlük oturma ve yük taşıma düzenlemeleri",
        ],
      },
      {
        heading: "Bel ağrısında ne zaman dikkatli olunmalı?",
        body: [
          "Bel ağrısı bacağa yayılıyor, günlük hareketleri belirgin kısıtlıyor veya sık tekrarlıyorsa değerlendirme almak önemlidir. Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.",
        ],
      },
    ],
    takeaway:
      "Quadratus lumborum kaynaklı bel gerginliğinde hedef yalnızca gevşeme değil; nefes, kalça ve postür kontrolünü birlikte güçlendirmektir.",
    relatedSlugs: ["postur-bozuklugu-kifoz", "diz-agrisi-egzersiz-rehabilitasyonu"],
  },
  {
    slug: "boyun-kaslari-cene-eklemi-tmj",
    title: "Boyun Kasları Çene Eklemini Etkileyebilir mi?",
    category: "Çene Eklemi",
    summary:
      "Boyun kas gerginliği, diş sıkma ve çene eklemi hareketleri birbirini etkileyebilen yakın ilişkili alanlardır.",
    seoTitle: "Boyun Kasları ve Çene Eklemi TMJ | Fem'n House",
    seoDescription:
      "Boyun kas gerginliği, diş sıkma ve çene eklemi ağrısı arasındaki ilişkiyi fizyoterapi bakış açısıyla Fem'n House uzman notlarında inceleyin bugün.",
    image: "/optimized/blog-boyun-kaslari-cene-eklemi-tmjz.webp",
    imageWidth: 960,
    imageHeight: 960,
    alt: "Boyun kasları ve çene eklemi ilişkisi",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 5,
    keywords: ["çene eklemi ağrısı", "TMJ", "diş sıkma", "boyun ağrısı", "boyun kas gerginliği"],
    sections: [
      {
        heading: "Boyun kasları çene eklemini nasıl etkileyebilir?",
        body: [
          "Boyun kasları çene eklemini etkileyebilir mi sorusu, TMJ, diş sıkma ve boyun kas gerginliği yaşayan kişilerde sık gündeme gelir. Çene eklemi ağrısı yalnızca çene hareketiyle değil; baş pozisyonu, boyun kas tonusu, stres ve nefes alışkanlıklarıyla da ilişkili olabilir.",
          "Kişiye özel değerlendirme ile çene hareket açıklığı, boyun pozisyonu, omuz hattı ve günlük sıkma alışkanlıkları birlikte incelenir.",
        ],
      },
      {
        heading: "Diş sıkma ve boyun gerginliği arasında bağ var mı?",
        body: [
          "Diş sıkma, çene çevresi kasları kadar boyun ve baş çevresindeki kasları da etkileyebilir. Fizyoterapist eşliğinde yapılan değerlendirme, hangi kasların fazla aktif olduğunu ve hangi hareketlerin rahatlatıcı olabileceğini anlamaya yardımcı olur.",
        ],
      },
      {
        heading: "Manuel terapi ve egzersiz rehabilitasyonu nasıl destek olur?",
        body: [
          "Manuel terapi; boyun, çene çevresi ve omuz hattındaki gerginliği değerlendirmek için destekleyici bir yöntem olabilir. Egzersiz rehabilitasyonu ise çene farkındalığı, nefes, boyun pozisyonu ve postür kontrolünü sürdürülebilir hale getirmeyi hedefler.",
        ],
        bullets: [
          "Çene dinlenme pozisyonu farkındalığı",
          "Boyun ve omuz gevşeme egzersizleri",
          "Nefes ve stres yönetimine destek çalışmalar",
          "Günlük diş sıkma alışkanlığını izleme",
        ],
      },
      {
        heading: "Hangi durumlarda destek alınmalı?",
        body: [
          "Çiğneme sırasında ağrı, çenede kilitlenme hissi, baş-boyun gerginliği veya diş sıkma günlük yaşamı etkiliyorsa değerlendirme almak faydalı olabilir. Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.",
        ],
      },
    ],
    takeaway:
      "Çene eklemi ve boyun kasları birlikte çalışır; bu yüzden rahatlama süreci postür, nefes ve günlük alışkanlıkları da kapsamalıdır.",
    relatedSlugs: ["scm-kasi-dis-sikma-kulak-cinlamasi", "quadratus-lumborum-bel-agrisi"],
  },
  {
    slug: "scm-kasi-dis-sikma-kulak-cinlamasi",
    title: "SCM Kası, Diş Sıkma ve Kulak Çınlaması",
    category: "Baş Boyun Bölgesi",
    summary:
      "SCM kası, diş sıkma, çene eklemi ve kulak çınlaması şikayetleri güvenli değerlendirmeyle ele alınmalıdır.",
    seoTitle: "SCM Kası, Diş Sıkma ve Kulak Çınlaması | Fem'n House",
    seoDescription:
      "SCM kası, diş sıkma, çene eklemi ve kulak çınlaması ilişkisini güvenli, sade ve bilgilendirici Fem'n House uzman notlarıyla keşfedin bugün burada.",
    image: "/optimized/blog-scm-kasi-dis-sikma-kulak-cinlamasi.webp",
    imageWidth: 960,
    imageHeight: 960,
    alt: "SCM kası, diş sıkma ve kulak çınlaması ilişkisi",
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    readingMinutes: 5,
    keywords: [
      "kulak çınlaması",
      "SCM kası",
      "diş sıkma",
      "çene eklemi",
      "boyun kasları",
      "tinnitus",
    ],
    sections: [
      {
        heading: "SCM kası kulak çınlamasıyla ilişkili olabilir mi?",
        body: [
          "SCM kası, diş sıkma ve kulak çınlaması ilişkisi; boyun kas gerginliği, çene eklemi ve baş-boyun postürü birlikte düşünüldüğünde daha anlaşılır hale gelir. Kulak çınlaması her zaman kas kaynaklı değildir, bu yüzden güvenli değerlendirme ve gerektiğinde hekim yönlendirmesi önemlidir.",
          "Kişiye özel değerlendirme ile boyun hareketleri, çene sıkma alışkanlığı, baş pozisyonu ve stresle ilişkili kas yanıtları incelenir.",
        ],
      },
      {
        heading: "Diş sıkma SCM kasını nasıl etkileyebilir?",
        body: [
          "Diş sıkma, çene çevresindeki kasların yanında boyun kaslarında da yüklenme oluşturabilir. Fizyoterapist eşliğinde yapılan değerlendirme, SCM kası ve çevre dokuların hareketle nasıl tepki verdiğini anlamaya yardımcı olur.",
        ],
      },
      {
        heading: "Manuel terapi ve egzersiz rehabilitasyonu nasıl planlanır?",
        body: [
          "Manuel terapi, boyun ve çene çevresindeki hassasiyetleri anlamak için dikkatli ve yumuşak şekilde kullanılabilir. Egzersiz rehabilitasyonu ise nefes, baş-boyun pozisyonu, çene farkındalığı ve gevşeme alışkanlıklarını destekler.",
        ],
        bullets: [
          "Boyun kas gerginliğini izleme",
          "Çene sıkma farkındalığı ve gevşeme çalışmaları",
          "Nefes ve omuz hattı rahatlatma egzersizleri",
          "Günlük ekran ve uyku pozisyonu düzenlemeleri",
        ],
      },
      {
        heading: "Kulak çınlamasında güvenli yaklaşım nedir?",
        body: [
          "Kulak çınlaması yeni başladıysa, tek taraflı belirginse, baş dönmesi veya işitme değişikliği eşlik ediyorsa hekim değerlendirmesi önceliklidir. Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.",
        ],
      },
    ],
    takeaway:
      "SCM, diş sıkma ve kulak çınlaması ilişkisinde güvenli yaklaşım; kas, çene, postür ve hekim gerekliliğini birlikte düşünmektir.",
    relatedSlugs: ["boyun-kaslari-cene-eklemi-tmj", "kurek-kemigi-arasi-kulunc-fibrozit"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slugs: string[]) {
  return slugs.map((slug) => getBlogPost(slug)).filter((post): post is BlogPost => Boolean(post));
}
