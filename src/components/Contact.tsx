import { useState } from 'react'
import { Send, Mail, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const mailto = `mailto:Rrivald20@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Yourdevelover' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rrivald-34b160340' },
  ]

  return (
    <section id="contact" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left */}
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#e85d2c]">Get in touch</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Let's create
              <br />
              something
              <br />
              <span className="italic text-[#e85d2c]">together.</span>
            </h2>

            <p className="mt-8 text-[#a8a298] text-lg leading-relaxed max-w-md">
              Have a project in mind, or just want to say hello? I'm always open to discussing new opportunities, collaborations, and ideas.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:Rrivald20@gmail.com"
                className="flex items-center gap-4 text-[#f5f1ea] hover:text-[#e85d2c] transition-colors"
                data-hover
              >
                <span className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center">
                  <Mail size={18} />
                </span>
                Rrivald20@gmail.com
              </a>

              <div className="flex gap-3 pt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#8a847c] hover:text-white hover:bg-[#e85d2c] hover:border-[#e85d2c] transition-all duration-400"
                    aria-label={s.label}
                    data-hover
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal space-y-6">
            <FormField label="Your name">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/15 py-3 focus:border-[#e85d2c] outline-none transition-colors text-[#f5f1ea] placeholder-[#5a5650]"
                placeholder="Jane Doe"
              />
            </FormField>

            <FormField label="Email">
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/15 py-3 focus:border-[#e85d2c] outline-none transition-colors text-[#f5f1ea] placeholder-[#5a5650]"
                placeholder="jane@email.com"
              />
            </FormField>

            <FormField label="Subject">
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-transparent border-b border-white/15 py-3 focus:border-[#e85d2c] outline-none transition-colors text-[#f5f1ea] placeholder-[#5a5650]"
                placeholder="Brand identity project"
              />
            </FormField>

            <FormField label="Message">
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/15 py-3 focus:border-[#e85d2c] outline-none transition-colors text-[#f5f1ea] placeholder-[#5a5650] resize-none"
                placeholder="Tell me about your project..."
              />
            </FormField>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#e85d2c] text-white font-medium hover:bg-white hover:text-[#0f0e0d] transition-all duration-400 disabled:opacity-60"
              data-hover
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent!' : 'Send message'}
              <Send size={18} className={status === 'sent' ? 'rotate-0' : 'rotate-12'} />
            </button>

            {status === 'sent' && (
              <p className="text-sm text-[#6b7d5f]">Thanks for reaching out. Your email client will open to send the message.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Please email me directly at Rrivald20@gmail.com.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-[#8a847c]">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  )
}