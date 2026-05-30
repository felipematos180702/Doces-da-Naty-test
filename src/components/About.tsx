import { motion } from 'motion/react';
import { ChefHat, History, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-brand-cream/40">
                <img 
                  src="https://lh3.googleusercontent.com/d/1nt0xdBpvYZ9NBgV1ZiTH3dMnfhZ8M4xb" 
                  alt="Natascha - Naty"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 border border-brand-accent">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-serif font-bold text-brand-primary mb-1">07+</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Anos de Exp.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-brand-primary mb-1">21</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Cursos Criados</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-brand-secondary leading-tight">
              Uma história de <span className="text-brand-primary">coragem</span> e paixão pela confeitaria.
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Prazer, eu sou a <span className="font-bold text-brand-secondary">Natascha</span>, fundadora da Doces da Naty e confeiteira.
              </p>
              <p>
                Em 2017, decidi dar um passo corajoso: deixei 9 anos de estabilidade como supervisora de cobrança no regime CLT para mergulhar em um mundo onde eu não tinha nenhuma experiência, mas sobrava determinação. Comecei do zero, na cozinha do meu apartamento, e foi ali, entre erros e acertos, que conquistei meus primeiros clientes.
              </p>
              <p>
                Foram 3 anos trabalhando em casa. Investi muito em conhecimento, errei receitas, joguei ingredientes fora, mas nunca desisti. Hoje, vejo minha marca crescer e encantar não só clientes, mas também alunos e colegas de profissão.
              </p>
              <p className="bg-brand-primary/5 p-6 rounded-2xl border-l-4 border-brand-primary italic">
                "Meu propósito hoje é claro: ajudar você, que está começando ou já atua na confeitaria, a ser reconhecida pelo seu trabalho e a conquistar a tão sonhada liberdade financeira."
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Award className="text-brand-primary" />
                <span className="font-semibold text-brand-secondary">Metodologia Exclusiva</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-brand-primary" />
                <span className="font-semibold text-brand-secondary">Comunidade de Alunas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
