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
              Foram 3 anos trabalhando em casa até dar o próximo grande passo: em 2021, abri as portas da loja física da Doces da Naty. Hoje, com a loja aberta e funcionando todos os dias com delivery e balcão, transformei essa vivência real de confeitaria em método prático de ensino.
            </p>
            <p>
              Esse caminho me permitiu alcançar marcas que me enchem de orgulho: já são mais de 5 mil alunas online espalhadas pelo mundo, dezenas de alunas formadas em turmas de cursos presenciais e milhares de seguidores que acompanham nossos doces e bastidores nas redes sociais diariamente.
            </p>

            {/* Destaques de Autoridade */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-2 text-center not-italic">
              <div className="bg-white/90 p-3.5 rounded-2xl border border-brand-primary/15 shadow-sm">
                <span className="block font-serif font-bold text-xl text-brand-primary">+ de 5 mil</span>
                <span className="text-xs text-gray-600 font-medium leading-tight">Alunas online</span>
              </div>
              <div className="bg-white/90 p-3.5 rounded-2xl border border-brand-primary/15 shadow-sm">
                <span className="block font-serif font-bold text-xl text-brand-primary">Desde 2021</span>
                <span className="text-xs text-gray-600 font-medium leading-tight">Loja aberta</span>
              </div>
              <div className="bg-white/90 p-3.5 rounded-2xl border border-brand-primary/15 shadow-sm">
                <span className="block font-serif font-bold text-xl text-brand-primary">Dezenas</span>
                <span className="text-xs text-gray-600 font-medium leading-tight">De alunas no presencial</span>
              </div>
              <div className="bg-white/90 p-3.5 rounded-2xl border border-brand-primary/15 shadow-sm">
                <span className="block font-serif font-bold text-xl text-brand-primary">Milhares</span>
                <span className="text-xs text-gray-600 font-medium leading-tight">De seguidores</span>
              </div>
            </div>

            <p className="bg-brand-primary/5 p-5 md:p-6 rounded-2xl border-l-4 border-brand-primary italic">
              "Meu propósito hoje é claro: ajudar você, que está começando ou já atua na confeitaria, a ser reconhecida pelo seu trabalho e a conquistar a tão sonhada liberdade financeira."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
