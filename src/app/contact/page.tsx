'use client';

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation'; // ✅ عشان نحول لصفحة /thanks بتاعتنا

export default function ContactPage() {
  const router = useRouter();

  // ✅ تنظيف رقم الهاتف (لو مكتوب 00... نخليه +...)
  const normalizePhone = (p: string) =>
    p.trim().replace(/\s+/g, '').replace(/^00/, '+');

  // ✅ اتصال مباشر (تم إصلاحه - كان عندك Prefix ثابت غلط)
  const handleCallNow = (phone: string) =>
    window.open(`tel:${normalizePhone(phone)}`, '_self');

  const handleWhatsApp = () =>
    window.open('https://wa.me/218949830642', '_blank');

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'اتصل بنا',
      details: ['00218924235513', '00218918555111'],
      action: () => handleCallNow('00218918555111'),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'البريد الإلكتروني',
      details: ['info@raha-mattresses.com'],
      action: () => toast('📧 غير متاح حالياً'),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'العنوان',
      details: ['ليبيا', 'بنغازي - الطريق الساحل الشرقي قبل كوبري سيدي خليفة'],
      action: () => toast('📍 غير متاح حالياً'),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'ساعات العمل',
      details: ['السبت - الخميس', '9:00 ص - 4:00 م'],
      action: () => {},
    },
  ];

  // ✅ أهم جزء: إرسال الفورم بـ fetch ثم تحويل لصفحة /thanks بتاعتك
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ✅ يمنع التحويل لصفحة Formspree

    const form = e.currentTarget;
    const formData = new FormData(form);

    // ✅ (اختياري) نخلي Formspree كمان تعرف صفحة الرجوع لو حصل fallback
    // لكن احنا أساسًا هنعمل router.push("/thanks") بعد النجاح
    try {
      formData.set('_next', `${window.location.origin}/thanks`);
    } catch {
      // ignore (في حالات نادرة)
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        toast('✅ تم إرسال رسالتك بنجاح');
        form.reset(); // ✅ تفريغ الحقول بعد الإرسال
        router.push('/thanks'); // ✅ التحويل لصفحتك أنت
      } else {
        toast('❌ حدث خطأ أثناء إرسال الرسالة');
      }
    } catch (err) {
      console.error(err);
      toast('⚠️ مشكلة اتصال أثناء الإرسال');
    }
  };

  return (
    <>
      <Navbar />

      {/* ✅ نفس خلفية الموقع (بدون تغيير Structure) */}
      <div className="relative min-h-screen animated-gradient text-white">
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

        <div className="relative z-20 pt-20">
          <br /><br /><br /><br /><br /><br />

          <section className="flex items-center justify-center py-10 px-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              تواصل معنا
            </motion.h1>
          </section>

          <br />

          <section className="flex items-center justify-center py-10 px-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto text-center"
            >
              نحن هنا لمساعدتك في اختيار المنتج المثالي لاحتياجاتك
            </motion.p>
          </section>

          <br /><br />

          {/* ✅ Cards نفس ستايل الزجاجي */}
          <section className="py-16 px-4 mx-auto max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="
                  border border-white/15 rounded-xl
                  bg-white/10 backdrop-blur-md
                  p-6 text-center
                  hover:scale-105 transition-transform cursor-pointer
                  hover:border-white/25
                "
                onClick={info.action}
              >
                {/* ✅ أيقونة Accent دهبي */}
                <div className="text-[color:var(--accent-500)] mb-3 flex justify-center">
                  {info.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>

                {info.details.map((d, i) => (
                  <p key={i} className="text-sm text-white/85">
                    {d}
                  </p>
                ))}
              </motion.div>
            ))}
          </section>

          <br /><br />

          {/* ✅ نموذج التواصل – نفس Layout */}
          <section className="flex items-center justify-center py-10 px-2">
            <div className="w-full max-w-3xl text-center">
              <h2 className="text-4xl font-bold mb-8 text-white">📬 أرسل لنا رسالة</h2>
              <br />

              <form
                action="https://formspree.io/f/meozzvbv"
                method="POST"
                onSubmit={handleFormSubmit} // ✅ أهم سطر
                className="grid gap-4"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="الاسم الكامل"
                  className="bg-white/10 p-3 rounded-lg border border-white/20 placeholder-white/60 text-white focus:border-[color:var(--accent-500)] outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  dir="rtl"
                  placeholder="رقم الهاتف"
                  className="bg-white/10 p-3 rounded-lg border border-white/20 placeholder-white/60 text-white focus:border-[color:var(--accent-500)] outline-none"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="البريد الإلكتروني"
                  className="bg-white/10 p-3 rounded-lg border border-white/20 placeholder-white/60 text-white focus:border-[color:var(--accent-500)] outline-none"
                />

                <textarea
                  name="message"
                  required
                  placeholder="اكتب رسالتك هنا..."
                  rows={4}
                  className="bg-white/10 p-3 rounded-lg border border-white/20 placeholder-white/60 text-white focus:border-[color:var(--accent-500)] outline-none"
                ></textarea>

                {/* ✅ عنوان الرسالة */}
                <input type="hidden" name="_subject" value="📩 رسالة جديدة من موقع الراحة" />

                {/* ✅ زر إرسال نفس ستايل أزرار الموقع */}
                <Button
                  type="submit"
                  className="w-full py-3 flex items-center justify-center gap-2 text-white bg-blue-500 hover:bg-blue-600 transition font-bold"
                >
                  <Send className="w-5 h-5" /> إرسال الرسالة
                </Button>
              </form>
            </div>
          </section>

          <br /><br />

          {/* ✅ واتساب */}
          <section className="py-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">أو تواصل معنا مباشرة عبر</h3>
            <Button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold"
            >
              WhatsApp 📞
            </Button>
          </section>

          <br />

          <h2 className="text-3xl font-bold mb-6 text-center underline">لماذا تختارنا؟</h2>
          <br />

          {/* ✅ لماذا تختارنا */}
          <section className="flex items-center justify-center py-10 px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-6 border border-white/15">
                <h4 className="text-lg font-semibold mb-2 text-[color:var(--accent-500)]">جودة عالية</h4>
                <p className="text-sm text-white/85">نستخدم أفضل المواد والتقنيات لنضمن لك نومًا مريحًا.</p>
                <br />
              </div>

              <div className="bg-white/10 rounded-lg p-6 border border-white/15">
                <h4 className="text-lg font-semibold mb-2 text-[color:var(--accent-500)]">خدمة عملاء</h4>
                <p className="text-sm text-white/85">فريقنا متواجد دائمًا للرد على استفساراتك ومساعدتك.</p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 border border-white/15">
                <h4 className="text-lg font-semibold mb-2 text-[color:var(--accent-500)]">توصيل سريع</h4>
                <p className="text-sm text-white/85">نوصل منتجاتنا بسرعة وأمان إلى باب منزلك.</p>
              </div>
            </div>
          </section>

          <br /><br />

          <h2 className="text-3xl font-bold mb-8 text-center underline">الأسئلة الشائعة: </h2>
          <br />

          {/* ✅ FAQ */}
          <section className="flex items-center justify-center py-10 px-2">
            <div className="space-y-4">
              <details className="bg-white/10 p-4 rounded-lg border border-white/15">
                <summary className="cursor-pointer font-semibold">ما هي مدة الضمان على المراتب؟</summary>
                <p className="mt-2 text-md text-[color:var(--accent-500)]">
                 نقدم سنه ضمان من تاريخ الشراء للمنتج إذا وجد فيه عيوب تصنيع وليس سوء استخدام من المشترى واحترم تفهمكم لذلك.
                </p>
              </details>

              <br />

              <details className="bg-white/10 p-4 rounded-lg border border-white/15">
                <summary className="cursor-pointer font-semibold">هل يوجد توصيل خارج بنغازي؟</summary>
                <p className="mt-2 text-md text-[color:var(--accent-500)]">
                  نعم، نوصل إلى جميع أنحاء ليبيا برسوم إضافية حسب الموقع.
                </p>
              </details>

              <br />

              <details className="bg-white/10 p-4 rounded-lg border border-white/15">
                <summary className="cursor-pointer font-semibold">هل يمكنني تجربة المرتبة قبل الشراء؟</summary>
                <p className="mt-2 text-md text-[color:var(--accent-500)]">
                  بعض الفروع توفر أماكن للعرض والتجربة. يُرجى التواصل معنا لمعرفة أقرب فرع.
                </p>
              </details>
            </div>
          </section>

          <br />
        </div>
      </div>

      <Footer />
    </>
  );
}
