import Image from "next/image";

export default function Home() {
  return (
    <main className="animate-fade-in" dir="rtl">
      {/* Background Decor */}
      <div className="bg-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>

      {/* Navigation */}
      <nav className="glass" style={{
        position: 'fixed',
        top: '25px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        height: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        zIndex: 1000,
        borderRadius: '20px'
      }}>
        <div style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-1.5px' }}>
          WEB<span className="gold-text">BUILDER</span>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.95rem', fontWeight: '600' }}>
          <a href="#challenges" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>چالش‌ها</a>
          <a href="#offer" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>پیشنهاد ما</a>
          <a href="#process" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>فرآیند</a>
        </div>
        <a href="#contact-form" className="btn btn-primary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.85rem' }}>
          درخواست شیشه‌ای
        </a>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        position: 'relative'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '5rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(212, 175, 55, 0.1)',
              borderRadius: '100px',
              color: 'var(--gold)',
              fontSize: '0.85rem',
              fontWeight: '700',
              marginBottom: '2rem',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              ✨ ظرفیت محدود برای دی‌ماه
            </div>
            <h1 style={{ fontSize: '4rem', lineHeight: '1.2', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-1px' }}>
              طراحی لندینگ <span className="gold-text">تبدیل‌گرا</span> <br />
              <span style={{ fontSize: '2.5rem', opacity: 0.9 }}>با صفر هزینه طراحی اولیه!</span>
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '650px', lineHeight: '1.9' }}>
              یک ویترین دیجیتال شیشه‌ای و مدرن که با هوش مصنوعی طراحی شده تا مراجعین شما را در اولین نگاه میخکوب کند.
            </p>

            <div className="glass" style={{ padding: '2rem', marginBottom: '3rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '100%', background: 'var(--gold-gradient)' }}></div>
              <p style={{ fontWeight: '800', marginBottom: '0.5rem', fontSize: '1.1rem' }}>تضمین رضایت کامل:</p>
              <p style={{ fontSize: '1rem', opacity: 0.8, color: 'var(--text-muted)' }}>«تا زمانی که از خروجی نهایی صد درصد راضی نباشید، هیچ هزینه‌ای بابت طراحی پرداخت نمی‌کنید.»</p>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#contact-form" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>شروع ساخت لندینگ</a>
              <a href="#process" className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>چطور کار می‌کنیم؟</a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '1.5rem',
              borderRadius: '32px',
              transform: 'perspective(1000px) rotateY(-5deg)',
              boxShadow: '20px 20px 60px rgba(0,0,0,0.5)'
            }}>
              <Image
                src="/hero.png"
                alt="Digital Agency"
                width={600}
                height={700}
                style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Table (Glass) */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="glass" style={{ display: 'flex', justifyContent: 'space-around', padding: '3rem', borderRadius: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="gold-text" style={{ fontSize: '3rem' }}>+۱۰۰</div>
              <div style={{ color: 'var(--text-muted)', fontWeight: '600' }}>سرعت لود (Lighthouse)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="gold-text" style={{ fontSize: '3rem' }}>٪۴۵</div>
              <div style={{ color: 'var(--text-muted)', fontWeight: '600' }}>افزایش نرخ تبدیل</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="gold-text" style={{ fontSize: '3rem' }}>۲۴س</div>
              <div style={{ color: 'var(--text-muted)', fontWeight: '600' }}>پشتیبانی هوشمند</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '900' }}>زمان خداحافظی با <span className="gold-text">روش‌های قدیمی</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>اگر بیزینس کوچ هستید، نباید درگیر پیچیدگی‌های فنی باشید.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {[
              { title: 'طراحی‌های خسته‌کننده', desc: 'قالب‌های آماده وردپرسی که همه رقبا هم از آن استفاده می‌کنند دیگر جواب نمی‌دهد.' },
              { title: 'اتلاف وقت در پشتیبانی', desc: 'دیگر نگران آپدیت افزونه‌ها و کندی دیتابیس سایت خود نباشید.' },
              { title: 'عدم پیوستگی لیدها', desc: 'اطلاعات مشتریان شما باید در یک پلتفرم امن (Supabase) متمرکز باشد.' }
            ].map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '3rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{idx === 0 ? '❌' : idx === 1 ? '⏳' : '📥'}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box (Heavy Glass) */}
      <section id="offer" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="glass" style={{
            padding: '5rem',
            borderRadius: '40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '60%', height: '200%', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: '900' }}>یک پیشنهاد <span className="gold-text">تکرار نشدنی</span></h2>
            <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 4rem', color: 'var(--text-muted)', lineHeight: '2' }}>
              من برای اعضای گروه، تمام زیرساخت (Vercel, Next.js, Supabase) را به صورت رایگان راه‌اندازی می‌کنم. شما فقط وقتی هزینه پرداخت می‌کنید که از نتیجه شگفت‌زده شوید.
            </p>
            <a href="#contact-form" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.5rem 4rem' }}>درخواست لندینگ رایگان</a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" style={{ padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="glass-card" style={{ padding: '4rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem' }}>رزرو نوبت <span className="gold-text">طراحی</span></h2>
              <p style={{ color: 'var(--text-muted)' }}>اطلاعات خود را بگذارید، در کمتر از ۲ ساعت با شما تماس می‌گیرم.</p>
            </div>
            <form style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.8 }}>نام کامل</label>
                  <input type="text" className="glass-input" placeholder="مثلاً: علی رضایی" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.8 }}>شماره تماس</label>
                  <input type="text" className="glass-input" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.8 }}>موضوع فعالیت کوچینگ</label>
                <input type="text" className="glass-input" placeholder="بیزینس کوچینگ، کوچینگ فردی و..." />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.8 }}>پیام شما</label>
                <textarea className="glass-input" rows={5} placeholder="چطور می‌توانم به شما کمک کنم؟"></textarea>
              </div>
              <button className="btn btn-primary" style={{ height: '70px', fontSize: '1.2rem' }}>ارسال درخواست و رزرو</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 0', textAlign: 'center', opacity: 0.8 }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '1.5rem' }}>
          WEB<span className="gold-text">BUILDER</span>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>طراحی شده با مدرن‌ترین متدهای هوش مصنوعی ۲۰۲۶</p>
      </footer>
    </main>
  );
}
