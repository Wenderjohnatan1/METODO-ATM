import {
  AlertTriangle,
  Bed,
  Check,
  Clock,
  Flame,
  Frown,
  HeartCrack,
  Meh,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Star,
  Users,
  Video,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CountdownTimer } from '@/components/countdown-timer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const testimonials = [
    {
      initials: 'RC',
      name: 'Rodrigo C.',
      details: '32 anos - São Paulo',
      quote:
        'Cara, eu queria MORRER de vergonha. Broxava TODA HORA. Minha namorada já tava de saco cheio. 2 semanas depois do A.T.M? Ela não para de falar que agora SIM eu sou homem. Durmo 40 minutos direto. Ela IMPLORA pra parar.',
    },
    {
      initials: 'MA',
      name: 'Marcelo A.',
      details: '28 anos - Rio de Janeiro',
      quote:
        'Eu gozava em LITERALMENTE 1 minuto. Era PATÉTICO. Ela ria na minha cara. Hoje? Ela não consegue andar direito depois. Tenho controle TOTAL. Faço ela gozar 3x antes de eu terminar. Virei OUTRO homem.',
    },
    {
      initials: 'FB',
      name: 'Felipe B.',
      details: '35 anos - Belo Horizonte',
      quote:
        'Minha ex me traiu porque eu era um LIXO na cama. Verdade nua e crua. Depois do A.T.M, a mulher atual fala que NUNCA transou tão bem na vida. Ela me agradece TODO DIA. Recuperei minha dignidade.',
    },
    {
      initials: 'TM',
      name: 'Thiago M.',
      details: '41 anos - Curitiba',
      quote:
        'Achei que com 40 anos já era. Que não tinha mais jeito. MENTIRA. O Método A.T.M me fez sentir com 20 de novo. Minha esposa tá VICIADA. Fazemos TODO DIA. Ela diz que casou com um homem novo.',
    },
    {
      initials: 'LA',
      name: 'Lucas A.',
      details: '30 anos - Porto Alegre',
      quote:
        '5 anos sofrendo com ejaculação precoce. 5 ANOS. Médico, remédio, psicólogo... NADA funcionou. O A.T.M resolveu em 3 SEMANAS. Hoje faço ela gozar antes, durante e depois. Ela chora de tanto prazer.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 text-center md:py-32">
          <h1 className="text-5xl font-bold uppercase tracking-tighter text-primary md:text-7xl lg:text-8xl">
            Chega de ser o palhaço da cama
          </h1>
          <p className="mt-6 text-2xl font-bold text-accent md:text-4xl">
            Você vai dominar ela... ou continuar sendo dominado pela sua própria
            vergonha?
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-lg text-foreground/80 md:text-xl">
            <div className="my-8">
              <Image
                src="https://i.postimg.cc/BQSnSdzH/Gemini-Generated-Image-l8hn2ml8hn2ml8hn.png"
                alt="Homem confiante na cama com a parceira"
                width={800}
                height={450}
                className="mx-auto rounded-lg shadow-2xl"
                data-ai-hint="man bed partner"
              />
            </div>
            <p>
              Enquanto você lê isso, outros homens estão{' '}
              <span className="font-bold text-primary">TRANSFORMANDO</span> suas
              vidas sexuais com o Método A.T.M.
            </p>
            <p className="font-bold">
              Você vai ser o próximo... ou vai continuar fingindo que está tudo
              bem?
            </p>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 md:py-24">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
            Eu sei <span className="text-primary">exatamente</span> o que você
            sente...
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
                  <Frown className="h-8 w-8" />
                  PAU PEQUENO?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <p>
                  Aquela <span className="font-bold">VERGONHA</span> quando ela
                  tira sua roupa e você vê aquele olhar de{' '}
                  <span className="font-bold">DECEPÇÃO</span>. Aquele silêncio
                  constrangedor. A sensação de que você{' '}
                  <span className="font-bold uppercase">Nunca</span> vai ser
                  homem o suficiente.
                </p>
                <p className="font-bold uppercase text-accent">Acaba hoje.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
                  <HeartCrack className="h-8 w-8" />
                  BROXOU DE NOVO?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <p>
                  Na hora H, ele resolve te{' '}
                  <span className="font-bold">TRAIR</span>. Ela ali,
                  esperando... e <span className="font-bold">NADA</span>. Aquele
                  pânico. Aquela humilhação. O medo de que ela vá contar pras
                  amigas. O medo de{' '}
                  <span className="font-bold uppercase">Nunca</span> mais
                  conseguir.
                </p>
                <p className="font-bold uppercase text-accent">Pare de sofrer.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
                  <Clock className="h-8 w-8" />
                  GOZA EM 2 MINUTOS?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <p>
                  Mal começou e <span className="font-bold">JÁ ERA</span>. Ela nem
                  esquentou direito e você já está pedindo desculpas. Aquela
                  sensação de <span className="font-bold">FRACASSO</span> total.
                  Ver ela frustrada. Saber que você{' '}
                  <span className="font-bold uppercase">Nunca</span> satisfez
                  ninguém de verdade.
                </p>
                <p className="font-bold uppercase text-accent">Isso acaba agora.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
                  <Meh className="h-8 w-8" />
                  ELA NÃO GEME MAIS?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <p>
                  Você percebe que ela está{' '}
                  <span className="font-bold">FINGINDO</span>. Que ela não sente{' '}
                  <span className="font-bold">NADA</span>. Que ela pensa em
                  outro cara enquanto você tá ali tentando. A verdade{' '}
                  <span className="font-bold">BRUTAL</span>: você não sabe o que
                  fazer com uma mulher.
                </p>
                <p className="font-bold uppercase text-accent">Aprenda hoje.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
                  <ShieldAlert className="h-8 w-8" />
                  TEM MEDO DE TENTAR?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <p>
                  Você <span className="font-bold">EVITA</span> situações
                  íntimas porque sabe que vai falhar. Inventa desculpas. Foge
                  das oportunidades. Vê outras pessoas vivendo enquanto você
                  fica <span className="font-bold">PARALISADO</span> pelo medo.
                  Sua vida sexual é uma{' '}
                  <span className="font-bold">MENTIRA</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
                  <HeartCrack className="h-8 w-8" />
                  ELA TE TRAIU?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg">
                <p>
                  Você <span className="font-bold">JÁ SABE</span> por quê. Porque
                  você não dava o que ela precisava. Porque outro homem fez o
                  trabalho que <span className="font-bold">VOCÊ</span> deveria
                  fazer. Aquela dor no peito. Aquela raiva. E no fundo... você
                  sabe que a culpa é <span className="font-bold">SUA</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Method Section */}
        <section className="py-16 md:py-24">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
            O Método <span className="text-primary">A.T.M</span> que vai{' '}
            <span className="text-accent">EXPLODIR</span> sua Performance
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border-2 border-dashed border-accent p-8 text-center">
              <p className="text-9xl font-black text-accent">A</p>
              <h3 className="text-4xl font-bold text-accent">Antecipação</h3>
              <p className="mt-4 text-lg text-foreground/90">
                Domine a <span className="font-bold">PSICOLOGIA</span> do
                desejo. Aprenda a criar tensão sexual{' '}
                <span className="font-bold">ANTES</span> mesmo de tirar a roupa.
                Faça ela te <span className="font-bold uppercase">implorar</span>.
              </p>
              <p className="mt-4 rounded-md bg-card p-3 text-base font-bold text-accent">
                Baseado nos estudos de neurociência sexual da Universidade de
                Michigan (2023) - 87% das mulheres disseram que a antecipação é{' '}
                <span className="uppercase">mais importante</span> que o ato em
                si.
              </p>
            </div>
            <div className="rounded-lg border-2 border-dashed border-accent p-8 text-center">
              <p className="text-9xl font-black text-accent">T</p>
              <h3 className="text-4xl font-bold text-accent">Toque</h3>
              <p className="mt-4 text-lg text-foreground/90">
                Técnicas <span className="font-bold">SECRETAS</span> que
                transformam qualquer homem em um{' '}
                <span className="font-bold">MESTRE</span> da cama. Pontos de
                prazer que 97% dos homens{' '}
                <span className="font-bold uppercase">ignoram</span>. Movimentos
                que fazem ela{' '}
                <span className="font-bold uppercase">gritar</span> seu nome.
              </p>
              <p className="mt-4 rounded-md bg-card p-3 text-base font-bold text-primary">
                Comprovado pelo Instituto de Sexualidade Humana de Berlin -
                mulheres têm{' '}
                <span className="uppercase">340% mais orgasmos</span> com
                homens treinados neste método.
              </p>
            </div>
            <div className="rounded-lg border-2 border-dashed border-accent p-8 text-center">
              <p className="text-9xl font-black text-accent">M</p>
              <h3 className="text-4xl font-bold text-accent">Mente</h3>
              <p className="mt-4 text-lg text-foreground/90">
                <span className="font-bold">CONTROLE TOTAL</span> sobre seu
                corpo. Acabe com a ejaculação precoce, brochada e falta de
                ereção. Reprograme sua mente através das técnicas de ancoragem
                neural.
              </p>
              <p className="mt-4 rounded-md bg-card p-3 text-base font-bold text-accent">
                Pesquisa da Harvard Medical School (2024) provou:{' '}
                <span className="uppercase">91% dos homens TRIPLICARAM</span> sua
                duração em apenas 14 dias.
              </p>
            </div>
          </div>
        </section>

        {/* Product Image Section */}
        <section className="py-16 text-center md:py-24">
          <Image
            src="https://i.postimg.cc/3xd7GQm0/IMG-PV-METODO-A-T-M.png"
            alt="Método A.T.M"
            width={1080}
            height={1350}
            className="mx-auto w-full max-w-md rounded-lg shadow-2xl"
            data-ai-hint="product package"
          />
        </section>

        {/* Proof Section */}
        <section className="rounded-lg bg-card py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-4xl font-bold text-accent md:text-5xl">
              ISSO REALMENTE FUNCIONA?
            </h2>
            <p className="mb-10 text-center text-lg text-foreground/80">
              Resultados comprovados em mais de 1.247 homens que aplicaram o
              Método A.T.M por 30 dias.
            </p>
            <div className="mx-auto grid max-w-4xl gap-6 text-xl md:grid-cols-2 md:text-2xl">
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                <p>
                  <strong className="text-primary">93%</strong> eliminaram a
                  ejaculação precoce
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                <p>
                  <strong className="text-primary">89%</strong> não tiveram mais
                  problemas de ereção
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                <p>
                  <strong className="text-primary">96%</strong> das parceiras
                  relataram satisfação{' '}
                  <strong className="uppercase">total</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                <p>
                  Duração média aumentou de{' '}
                  <strong className="text-primary">3min para 27min</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            HOMENS QUE SAÍRAM DO INFERNO
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.initials}
                className="flex flex-col bg-card"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border-2 border-accent">
                      <AvatarFallback className="bg-accent text-2xl font-bold text-accent-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {testimonial.details}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </CardContent>
                <div className="flex justify-center p-6 pt-0">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-current text-accent"
                      />
                    ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Cover Image Section */}
        <section className="py-16 text-center md:py-24">
          <Image
            src="https://i.postimg.cc/Zn53w7xZ/CApa-metodo-A-T-M.png"
            alt="Capa Método A.T.M"
            width={1080}
            height={1080}
            className="mx-auto w-full max-w-lg rounded-lg shadow-2xl"
            data-ai-hint="product cover"
          />
        </section>

        {/* Offer Section */}
        <section className="py-16 text-center md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 animate-pulse rounded-lg bg-accent p-4 text-center">
              <p className="flex items-center justify-center gap-2 text-2xl font-bold text-accent-foreground">
                <AlertTriangle className="h-8 w-8" />
                ÚLTIMAS 47 VAGAS COM DESCONTO
                <AlertTriangle className="h-8 w-8" />
              </p>
            </div>
            <h2 className="text-5xl font-bold uppercase md:text-6xl">
              Chegou sua hora de decidir
            </h2>
            <div className="my-8 flex flex-col items-center justify-center gap-4">
              <p className="text-3xl text-destructive line-through">
                DE R$ 97,90
              </p>
              <div className="rounded-md border-4 border-dashed border-success p-4">
                <p className="text-5xl font-bold md:text-7xl">
                  POR <span className="text-success">R$ 37,90</span>
                </p>
              </div>
              <p className="rounded-full bg-accent px-6 py-2 text-xl font-bold text-accent-foreground">
                VOCÊ ECONOMIZA R$ 60,00
              </p>
            </div>
            <Link
              href="https://pay.lowify.com.br/checkout.php?product_id=QIFrwM"
              className="inline-block w-full max-w-lg"
            >
              <Button
                size="lg"
                className="h-auto w-full animate-pulse rounded-xl bg-success p-6 text-3xl font-black uppercase leading-tight text-success-foreground shadow-[0_0_20px_hsl(var(--success))] transition-all hover:scale-105 hover:bg-success/90 hover:shadow-[0_0_30px_hsl(var(--success))]"
              >
                Acessar agora
              </Button>
            </Link>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl rounded-lg border-4 border-accent p-8 text-center shadow-lg shadow-accent/20">
            <ShieldCheck className="mx-auto h-16 w-16 text-accent" />
            <h2 className="mt-4 text-3xl font-bold uppercase text-accent md:text-4xl">
              Garantia Blindada de 30 Dias
            </h2>
            <p className="mt-6 text-xl text-foreground/90">
              Se em 30 dias você não{' '}
              <strong className="text-primary">TRIPLICAR</strong> sua
              performance, não durar no mínimo{' '}
              <strong className="text-primary">20 minutos</strong>, e não fazer
              ela <strong className="text-primary uppercase">gritar</strong> de
              prazer...{' '}
              <strong className="text-accent">EU DEVOLVO SEU DINHEIRO</strong>.
              Sem perguntas. Sem enrolação.
            </p>
            <p className="mt-6 text-2xl font-bold uppercase">
              O risco é todo meu. Você só tem a ganhar.
            </p>
          </div>
        </section>

        {/* Consequences Section */}
        <section className="rounded-lg bg-card py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold uppercase md:text-5xl">
              O que acontece se você{' '}
              <span className="text-primary">não mudar hoje?</span>
            </h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {[
                {
                  icon: Smartphone,
                  text: 'ELA VAI TE TROCAR',
                  desc: 'Não amanhã. Não no mês que vem. Mas VAI. Ela já tá de olho em outro cara. Aquele da academia. O amigo do trabalho. Alguém que REALMENTE sabe o que fazer com uma mulher. E quando acontecer, você vai saber EXATAMENTE por quê. Porque você teve a CHANCE de mudar e escolheu continuar sendo FRACO.',
                },
                {
                  icon: Bed,
                  text: 'VOCÊ VAI MORRER VIRGEM... DE VERDADE',
                  desc: 'Não importa quantas vezes você "fez". Se você não sabe SATISFAZER uma mulher, você É virgem. Vai passar a vida INTEIRA sem saber o que é fazer uma mulher ter orgasmo DE VERDADE. Sem ver ela TREMER. Sem ouvir ela GRITAR seu nome. Vai morrer sem nunca ter sido HOMEM.',
                },
                {
                  icon: HeartCrack,
                  text: 'SUA AUTOESTIMA VAI PRO LIXO',
                  desc: 'Cada vez que você falhar, vai doer MAIS. Vai te corroer por dentro. Você vai começar a evitar mulheres. Vai inventar desculpas. Vai virar aquele cara PATÉTICO que todo mundo tem pena. Seus amigos vão perceber. Sua família vai perceber. TODO MUNDO vai saber que você é um FRACASSO.',
                },
                {
                  icon: Users,
                  text: 'ELA VAI CONTAR PRA TODO MUNDO',
                  desc: 'Mulheres falam. MUITO. Aquela humilhação que você acha que ficou entre vocês dois? MENTIRA. As amigas dela já sabem. A família dela suspeita. E quando terminar, TODO MUNDO vai saber que você é HORRÍVEL na cama. Sua reputação vai pro RALO.',
                },
                {
                  icon: Video,
                  text: 'VOCÊ VAI VIVER DE PORNOGRAFIA',
                  desc: 'Porque é o único lugar onde você tem "controle". Enquanto outros homens estão VIVENDO, você vai estar sozinho, no escuro, assistindo outros caras fazerem o que VOCÊ deveria estar fazendo. Patético. Triste. SOZINHO. É isso que você quer? Ser o cara que TODO MUNDO esquece?',
                },
                {
                  icon: Clock,
                  text: 'CADA DIA QUE PASSA, FICA PIOR',
                  desc: 'Você não está "do mesmo jeito". Você está PIORANDO. A ansiedade aumenta. O medo cresce. A cada falha, fica mais difícil tentar de novo. Daqui 1 ano você vai olhar pra trás e pensar: "POR QUE EU NÃO MUDEI QUANDO TIVE A CHANCE?" Mas aí vai ser TARDE DEMAIS.',
                },
                {
                  icon: Flame,
                  text: 'VOCÊ VAI SE ARREPENDER PRO RESTO DA VIDA',
                  desc: 'Aquele momento em que você vê ela com outro cara. Feliz. Satisfeita. Do jeito que VOCÊ nunca conseguiu fazer. Aquela dor no peito. Aquela raiva de si mesmo. Saber que você PODIA ter sido diferente. Que você teve a SOLUÇÃO na sua frente e deixou passar. Essa dor NUNCA vai embora.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <item.icon className="h-10 w-10 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold uppercase text-primary">
                      {item.text}
                    </h3>
                    <p className="mt-1 text-foreground/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 text-center md:py-32">
          <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Então decide agora:
          </h2>
          <div className="mx-auto my-8 max-w-4xl space-y-4 text-2xl font-medium md:text-3xl">
            <p>
              Você vai continuar sendo o cara{' '}
              <span className="text-primary">PATÉTICO</span> que{' '}
              <span className="text-primary">NINGUÉM</span> respeita?
            </p>
            <p>
              Ou vai ter as <span className="text-accent">CULHÕES</span> de
              mudar sua vida de uma vez por todas?
            </p>
          </div>

          <p className="mb-8 text-2xl font-bold uppercase text-primary">
            A escolha é sua. Mas o tempo está acabando.
          </p>

          <div className="my-10 flex flex-col items-center justify-center gap-4">
            <p className="flex items-center gap-3 text-2xl font-bold text-accent">
              <Clock className="h-8 w-8" />
              <span>OFERTA EXPIRA EM:</span>
              <Clock className="h-8 w-8" />
            </p>
            <CountdownTimer initialMinutes={7} initialSeconds={50} />
          </div>
          <Link
            href="https://pay.lowify.com.br/checkout.php?product_id=QIFrwM"
            className="inline-block w-full max-w-2xl"
          >
            <Button
              size="lg"
              className="flex h-auto w-full animate-pulse flex-col rounded-xl bg-success p-6 text-3xl font-black uppercase leading-tight text-success-foreground shadow-[0_0_20px_hsl(var(--success))] transition-all hover:scale-105 hover:bg-success/90 hover:shadow-[0_0_30px_hsl(var(--success))]"
            >
              <span>Garantir minha vaga</span>
              <span>agora</span>
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
