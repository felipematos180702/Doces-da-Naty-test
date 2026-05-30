export type Category = 'Aulões (acesso de 06 meses)' | 'Cursos Rápidos (Acesso de 6 meses)' | 'Cursos Completos';

export interface Course {
  id: string;
  title: string;
  description: string;
  category: Category;
  price?: string;
  image: string;
  linkCheckout: string;
  detalhesLongos: string[];
  galeria: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}
