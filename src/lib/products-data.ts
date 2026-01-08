// ✅ تعريف نوع المنتج
export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  rating: number;
}

// ✅ كل المنتجات هنا
export const products: Product[] = [
  {
    id: 1,
    name: "مرتبة نسمه",
    category: "mattresses",
    image: "/products/New-Bilder/Nasma.webp",
    description: "راحة فائقة مع تقنية التبريد الطبيعي لنوم منعش",
    features: ["تقنية الريبوند", "مقاوم للبكتيريا", "ضمان 10 سنوات"],
    rating: 5,
  },
  {
    id: 2,

    name: "مرتبة ريبوند",
    category: "mattresses",
    image: "/products/New-Bilder/Rebond.webp",
    description: "مرتبة عالية الجودة مع تقنية الريبوند المتطورة",
    features: ["تقنية التبريد", "مواد طبيعية", "دعم مثالي للعمود الفقري"],
    rating: 5,
  },
  {
    id: 3,
    name: "مرتبة توليب",
    category: "mattresses",
    image: "/products/New-Bilder/Tulip.webp",
    description: "تصميم أنيق مع دعم مثالي للجسم وراحة استثنائية",
    features: ["تصميم عصري", "دعم متوازن", "مواد عالية الجودة"],
    rating: 5,
  },
  {
    id: 4,
    name: "مرتبة ريلاكس",
    category: "mattresses",
    image: "/products/New-Bilder/Relax.webp",
    description: "مرتبة فاخرة للاسترخاء التام مع طبقات متعددة من الراحة",
    features: ["طبقات متعددة", "نعومة فائقة", "تهوية ممتازة"],
    rating: 5,
  },
  {
    id: 5,
    name: "مرتبة بيلو توب",
    category: "mattresses",
    image: "/products/New-Bilder/Pillow-Top.webp",
    description: "مرتبة بتقنية البيلو توب لراحة إضافية ونوم هادئ",
    features: ["تقنية البيلو توب", "راحة إضافية", "مقاومة التآكل"],
    rating: 4,
  },

  {
    id: 6,
    name: "مرتبه بلاتينيوم 10 نجوم",
    category: "mattresses",
    image: "/products/New-Bilder/Platinum-10.webp",
    description: "مرتبة بلاتينيوم الفاخرة للحصول على تجربة نوم لا مثيل لها",
    features: ["جودة بلاتينيوم", "تقنية متقدمة", "راحة استثنائية"],
    rating: 10,
  },
  
  
  {
    id: 7,
    name: "مرتبة جولد",
    category: "mattresses",
    image: "/products/New-Bilder/Gold.webp",
    description: "مرتبة جولد الفاخرة بتصميم عصري لتجربة نوم مذهلة بثبات وراحة",
    features: [
      "تقفيل فاخر بخيوط ذهبية",
      "قماش مبطن مقاوم للرطوبة",
      "دعم مثالي للعمود الفقري",
    ],
    rating: 5,
  },
  {
    id: 8,
    name: "مرتبه بلاتينيوم 7 نجوم ",
    category: "mattresses",
    image: "/products/New-Bilder/Platinum-7.webp",
    description: "مرتبه تجمع المتانة والراحه معا بتقنيه متقدمه وجوده عاليه",
    features: [
      "توازن مثالي بين الصلابة والنعومة",
      "دعم ثابت للظهر والعمود الفقري",
      "تهوية جيدة ونوم مريح طوال الليل",
    ],
    rating: 7,
  },
  {
    id: 9,
    name: "مرتبة ريبو لاكس",
    category: "mattresses",
    image: "/products/New-Bilder/Rebolax.webp",
    description:
      "مزيج مثالي بين القوة والراحة بتصميم حديث يدعم الجسم طوال الليل",
    features: [
      "دعم قوي ومتوازن للجسم",
      "راحة مريحة تناسب الاستخدام اليومي",
      "تصميم عصري وخامات مختارة بعناية",
    ],
    rating: 5,
  },
  {
    id: 10,
    name: "مرتبة الراحة",
    category: "mattresses",
    image: "/products/New-Bilder/Raha.webp",
    description:
      "مرتبة الراحة الفاخرة بتصميم عصري لتجربة نوم مذهلة بثبات وراحة",
    features: [
      "نعومة فاخرة وإحساس مريح من أول لمسة",
      "طبقات راحة تساعد على توزيع الضغط",
      "قماش أنيق ومتين مناسب للاستخدام اليومي",
    ],
    rating: 5,
  },
  {
    id: 11,
    name: "مرتبة أجوان",
    category: "mattresses",
    image: "/products/New-Bilder/Ajwan.webp",
    description: "راحة ناعمة وخفيفة مع دعم عملي يساعدك تنام بهدوء وتصحى نشيط",
    features: [
      "ملمس ناعم وخفيف",
      "دعم عملي ومريح للجسم",
      "مناسبة للباحثين عن راحة متوازنة",
    ],
    rating: 4,
  },
  {
    id: 12,
    name: "مرتبة 2 Stars",
    category: "mattresses",
    image: "/products/New-Bilder/2-Stars.webp",
    description:
      "خيار عملي يوفر راحة مناسبة بسعر اقتصادي وجودة محترمة للاستخدام اليومي",
    features: [
      "اختيار اقتصادي وعملي",
      "راحة مناسبة للنوم اليومي",
      "مناسبة للغرف الإضافية والاستخدام المتوسط",
    ],
    rating: 2,
  },
  {
    id: 13,
    name: "مرتبة برينس",
    category: "mattresses",
    image: "/products/New-Bilder/Prince.webp",
    description: "مرتبة برينس تجمع بين الأناقة والراحة بلمسة ناعمة ونقشة جذابة",
    features: [
      "طبقة خارجية برسومات أنيقة",
      "راحة متوسطة ومرنة",
      "مناسبة لجميع الأعمار",
    ],
    rating: 4,
  },
];
