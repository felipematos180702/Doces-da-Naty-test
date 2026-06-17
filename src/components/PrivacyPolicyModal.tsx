import { X } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-secondary/80 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-brand-cream border border-brand-secondary/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl z-10"
      >
        {/* Header */}
        <div className="p-6 border-b border-brand-secondary/10 flex items-center justify-between bg-white/50">
          <h3 className="font-serif text-2xl font-bold text-brand-secondary">
            Política de Privacidade
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-brand-secondary/10 flex items-center justify-center text-brand-secondary/60 hover:text-brand-secondary hover:bg-brand-secondary/5 transition-all"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-brand-secondary/80 text-sm md:text-base leading-relaxed font-sans">
          <p>
            Olá! A consultoria e cursos **Doces da Naty** valoriza a transparência e tem o compromisso de proteger a sua privacidade e segurança durante sua navegação em nosso site e ao adquirir nossos cursos.
          </p>

          <section className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-secondary">
              1. Coleta e Uso de Informações
            </h4>
            <p>
              Nós não solicitamos dados pessoais diretamente durante a simples navegação neste site portfólio. Eventuais interações de contato ocorrem sob sua iniciativa e consentimento através de canais externos oficiais, incluindo:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-brand-secondary/70">
              <li>**WhatsApp**: Onde respondemos suas dúvidas comerciais e prestamos suporte sobre os cursos.</li>
              <li>**Instagram**: Utilizado para divulgação, interação e envio de novidades sobre os produtos digitais.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-secondary">
              2. Processamento de Pagamento Seguro
            </h4>
            <p>
              Ao optar por adquirir qualquer curso (por exemplo: <em>Fatias de Sucesso</em>, <em>Comece com Brigadeiros</em> ou <em>Box Gelados</em>), você será redirecionado com segurança para a plataforma **Hotmart**, que gerencia de forma 100% criptografada a sua compra, faturamento e acesso ao conteúdo. Nós não armazenamos seus dados de pagamento (como cartões de crédito ou credenciais bancárias).
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-secondary">
              3. Cookies e Rastreamento de Conversão
            </h4>
            <p>
              Para otimizar o nosso alcance de divulgação, este site pode empregar recursos de rastreamento de anúncios (como o pixel do Meta Ads ou Google Analytics). Estes cookies coletam apenas estatísticas anônimas de visualizações e de cliques para que possamos oferecer anúncios direcionados apenas a pessoas interessadas em confeitaria, não revelando detalhes pessoais ou individuais.
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-secondary">
              4. Direitos e Legislação (LGPD)
            </h4>
            <p>
              Respeitando a Lei Geral de Proteção de Dados (LGPD) do Brasil, asseguramos o seu direito de consultar, excluir ou atualizar suas informações de contato a qualquer momento. Suas conversas no suporte via WhatsApp são estritamente confidenciais e jamais vendidas ou fornecidas a terceiros.
            </p>
          </section>

          <section className="space-y-3 pb-4">
            <h4 className="font-serif text-lg font-bold text-brand-secondary">
              5. Contato e Esclarecimentos
            </h4>
            <p>
              Sempre que tiver dúvidas ou quiser solicitar a exclusão de seus dados de nossa lista de contatos, fale diretamente conosco. Nosso WhatsApp de suporte é o **+55 31 9347-6920**.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 bg-brand-cream border-t border-brand-secondary/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-brand-secondary text-brand-cream rounded-xl font-medium hover:bg-brand-primary hover:text-brand-secondary transition-all shadow-md text-sm cursor-pointer"
          >
            Entendi e Concordo
          </button>
        </div>
      </motion.div>
    </div>
  );
}
