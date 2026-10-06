import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-12 md:py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Image - Centered and Stacked Above Copy on Desktop and Mobile */}
          <div className="w-full max-w-lg md:max-w-xl mb-10 md:mb-12 relative mx-auto">
            <div className="aspect-[3/4] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 md:border-8 border-white bg-brand-cream/40">
              <img 
                src="https://lh3.googleusercontent.com/d/1nt0xdBpvYZ9NBgV1ZiTH3dMnfhZ8M4xb" 
                alt="Natascha - Naty"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-32 h-32 bg-brand-secondary/10 rounded-full blur-3xl" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-[47px] font-bold mb-6 md:mb-8 text-brand-secondary leading-tight max-w-2xl text-center md:text-left w-full">
            “A confeitaria transformou minha <span className="text-brand-primary">vida</span> e a minha <span className="text-brand-primary">carreira</span>”
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-base md:text-lg text-left md:text-justify max-w-2xl">
            <p>
              Prazer, eu sou a <span className="font-bold text-brand-secondary">Natascha</span>, fundadora da Doces da Naty e confeiteira.
            </p>
            <p>
              Em 2017, decidi dar um passo corajoso: deixei 9 anos de estabilidade como supervisora de cobrança no regime CLT para mergulhar em um mundo onde eu não tinha nenhuma experiência, mas sobrava determinação. Comecei do zero, na cozinha do meu apartamento, e foi ali, entre erros e acertos, que conquistei meus primeiros clientes.
            </p>
            <p>
              Foram 3 anos trabalhando em casa. Investi muito em conhecimento, errei receitas, joguei ingredientes fora, mas nunca desisti. Hoje, vejo minha marca crescer e encantar não só clientes, mas também alunos e colegas de profissão.
            </p>
            <p className="bg-brand-primary/5 p-5 md:p-6 rounded-2xl border-l-4 border-brand-primary italic">
              "Meu propósito hoje é claro: ajudar você, que está começando ou já atua na confeitaria, a ser reconhecida pelo seu trabalho e a conquistar a tão sonhada liberdade financeira."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
