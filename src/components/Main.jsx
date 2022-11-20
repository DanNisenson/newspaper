import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleHeadline from "./ArticleHeadline";
import "./Main.css";

const Main = (props) => {
  // news storing state
  const [headlines, setHeadlines] = useState();

  useEffect(() => {
    const getNews = async () => {
      const mock = {
        data: {
          status: "ok",
          totalResults: 34,
          articles: [
            {
              source: {
                id: "la-nacion",
                name: "La Nacion",
              },
              author: "LA NACION",
              title:
                "Dólar blue, dólar hoy: el minuto a minuto de la cotización este jueves 17 de noviembre - LA NACION",
              description:
                "La divisa estadounidense paralela opera a $306 para la venta; de esta manera, la moneda cotiza dos pesos por encima del cierre de ayer",
              url: "https://www.lanacion.com.ar/economia/dolar/dolar-blue-dolar-hoy-el-minuto-a-minuto-de-la-cotizacion-este-jueves-17-de-noviembre-nid17112022/",
              urlToImage:
                "https://resizer.glanacion.com/resizer/mVXZ1sVlW6So7zR2kBJd9828ZOk=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/ZY5JN4AWDNEMJFYYIZDFAMAMTE.JPG",
              publishedAt: "2022-11-17T16:25:00Z",
              content:
                "A partir de enero próximo, la facturación anual máxima para poder estar en el régimen del monotributo será de $8.040.975 para el contribuyente que se dedique al comercio, y de $5.650.415 si la activi… [+10757 chars]",
            },
            {
              source: {
                id: null,
                name: "Clarín",
              },
              author: "Clarín.com",
              title:
                "Gran Hermano 2022, EN VIVO: Coti descubrió una mentira de la Tora que podría desatar un escándalo en la casa - Clarín",
              description:
                "Seguí los debates más picantes y las repercusiones de la convivencia en el reality más popular de la Argentina.",
              url: "https://www.clarin.com/fama/gran-hermano-2022-vivo-mensaje-novio-julieta-declaraciones_0_eAXymjHtph.html",
              urlToImage:
                "https://www.clarin.com/img/2022/11/17/KSRFp67G6_1200x630__1.jpg",
              publishedAt: "2022-11-17T15:53:41Z",
              content:
                'Juan Reverdito visitó a Georgina Barbarossa y se quebró al contar su historia de vida.\r\n"Cuando me quedé solo con mi nene fue duro, fue muy complicado. Pasé todas las situaciones que te puedas imagin… [+611 chars]',
            },
            {
              source: {
                id: "infobae",
                name: "Infobae",
              },
              author: "anónimo",
              title:
                "Echaron a un funcionario del Ministerio de Desarrollo Social por realizar piquetes y ollas populares en el barrio de Palermo - infobae",
              description:
                "Se trata de Rafael Klejzer director Nacional de Políticas Integradoras, un área que dependía de la Secretaría de Economía Social a cargo de Emilio Pérsico, referente del Movimiento Evita",
              url: "https://www.infobae.com/politica/2022/11/17/echaron-a-un-funcionario-nacional-por-realizar-piquetes-y-ollas-populares-en-el-barrio-de-palermo/",
              urlToImage:
                "https://www.infobae.com/new-resizer/nyXN3NECahjnrM9cR_KkqYWJwj8=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/UK6UQT5J7NACBKF4AG7347WLQQ.jpg",
              publishedAt: "2022-11-17T15:40:49Z",
              content:
                "La ministra de Desarrollo Social, Victoria Tolosa Paz, en acuerdo con Emilio Pérsico, secretario de Economía Social, resolvió echar de su cargo a Rafael Klejzer, el referente del Movimiento la Dignid… [+5515 chars]",
            },
            {
              source: {
                id: "infobae",
                name: "Infobae",
              },
              author: "anónimo",
              title:
                "Denunciaron penalmente a Cristina Kirchner por desobedecer el fallo de la Corte sobre el Consejo de la Magistratura - infobae",
              description:
                "La denuncia la realizó José Luis Espert por sedición y también incluye a los senadores que votaron la designación de Claudio Martín Doñate como consejero por el sub bloque kirchnerista “Unidad Ciudadana”",
              url: "https://www.infobae.com/politica/2022/11/17/denunciaron-penalmente-a-cristina-kirchner-por-desobedecer-el-fallo-de-la-corte-sobre-el-consejo-de-la-magistratura/",
              urlToImage:
                "https://www.infobae.com/new-resizer/w_A4MgETkV-Yuwvm6EouOYrOXP4=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/UPZARGE36JA67IN57552G4HG4M.jpg",
              publishedAt: "2022-11-17T14:23:57Z",
              content:
                "El diputado nacional José Luis Espert denunció penalmente a la vicepresidente de la Nación y titular del Senado, Cristina Kirchner por desconocer el reciente fallo de la Corte Suprema de Justicia de … [+3486 chars]",
            },
            {
              source: {
                id: "infobae",
                name: "Infobae",
              },
              author: "anónimo",
              title:
                "El fundador de FTX contó su versión en Twitter y dijo que declarar la quiebra fue un error - Infobae America",
              description:
                "Sam Bankman-Fried, en la mira de la justicia, criticó a los reguladores en una conversación que creía que era privada. Pero luego matizó sus declaraciones",
              url: "https://www.infobae.com/america/mundo/2022/11/17/el-fundador-de-ftx-conto-su-version-en-twitter-y-dijo-que-declarar-la-quiebra-fue-un-error/",
              urlToImage:
                "https://www.infobae.com/new-resizer/Ctfb4q3QEj87ttLFgX_Fk4r6Gag=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/OX5MFKDPAJDQ5J36SWDYKPRAOQ.jpg",
              publishedAt: "2022-11-17T13:41:18Z",
              content:
                "El fundador de la plataforma hundida de criptodivisas FTX, Sam Bankman-Fried, señalado como responsable del reciente desplome de las criptomonedas, ha estado activo en Twitter publicando sus descargo… [+2814 chars]",
            },
            {
              source: {
                id: "infobae",
                name: "Infobae",
              },
              author: "anónimo",
              title:
                "Trabas a las importaciones: una de las principales marcas de cierres del país dejó de tomar pedidos por falta de materia prima - infobae",
              description:
                "La filial local de la multinacional japonesa YKK, dueña del 40% del mercado de cierres a cremallera, comunicó a sus clientes que sólo cumplirá con órdenes pendientes. Llega en la época en la que se empieza a producir ropa de invierno",
              url: "https://www.infobae.com/economia/2022/11/17/trabas-a-las-importaciones-una-de-las-principales-marcas-de-cierres-del-pais-dejo-de-tomar-pedidos-por-falta-de-materia-prima/",
              urlToImage:
                "https://www.infobae.com/new-resizer/l_taYZCN3x4Klco3TelgSmJrL7Q=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/DRBTOYJKUNGPRKTZPOT5XRGW4A.jpg",
              publishedAt: "2022-11-17T13:37:31Z",
              content:
                "La empresa YKK Argentina, proveedora de cierres a cremallera anunció a sus clientes que no tomará más pedidos por falta de insumos en medio de trabas cada vez más duras para importar. La empresa mult… [+4908 chars]",
            },
            {
              source: {
                id: "la-nacion",
                name: "La Nacion",
              },
              author: null,
              title:
                "Guerra Rusia-Ucrania, en vivo: últimas noticias del conflicto y el minuto a minuto - LA NACION",
              description:
                "Seguí la cobertura del conflicto bélico; reacciones en Moscú, imágenes y todo lo que hay que saber",
              url: "https://www.lanacion.com.ar/el-mundo/guerra-rusia-ucrania-en-vivo-ultimas-noticias-del-conflicto-y-el-minuto-a-minuto-nid17112022/",
              urlToImage:
                "https://resizer.glanacion.com/resizer/TI7qzzFsc04RpLZcDfBo9yp4CN8=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/UQK5457KKBC4LBKDG45A6ATYSM.png",
              publishedAt: "2022-11-17T13:31:00Z",
              content:
                "Las autoridades de Rusia bloquearon hoy el acceso a la página web del periódico independiente Novaya Gazeta, que en los últimos meses ya se había visto obligado a reducir sus informaciones por las me… [+14195 chars]",
            },
            {
              source: {
                id: "la-nacion",
                name: "La Nacion",
              },
              author: null,
              title:
                "Mundial Qatar 2022: duelo entre las dos hinchadas argentinas se robó todas las miradas en Doha - LA NACION",
              description:
                "Cerca de la medianoche y hasta las 4 de la madrugada qatarí, se cruzaron argentinos y los fanáticos extranjeros que también hinchan por la selección; fue en el arribo de Messi a la concentración",
              url: "https://www.lanacion.com.ar/deportes/futbol/mundial-qatar-2022-un-falso-duelo-de-hinchadas-argentinas-se-robo-todas-las-miradas-en-doha-nid16112022/",
              urlToImage:
                "https://arc-static.glanacion.com/pf/resources/images/placeholderLN.jpg?d=1066",
              publishedAt: "2022-11-17T13:30:00Z",
              content:
                "DOHA (Enviado especial).- Mientras esperaban la llegada de la selección argentina a Doha, se produjo uno de los primeros duelos de hinchadas. Pero este cruce tuvo un condimento especial: ambos grupos… [+3099 chars]",
            },
            {
              source: {
                id: null,
                name: "La Página Millonaria",
              },
              author: "Lautaro Toschi",
              title:
                "La frase de Zuculini que hizo que Demichelis lo destaque en su presentación - La Página Millonaria",
              description:
                "Martín Demichelis fue presentado como director técnico de River y en la conferencia de prensa que brindó se refirió al armado del plantel de cara al 2023 y destacó el compromiso de Zucu.",
              url: "https://lapaginamillonaria.com/riverplate/La-frase-de-Zuculini-que-Demichelis-destaco-en-su-presentacion-en-River-20221117-0002.html",
              urlToImage:
                "https://lapaginamillonaria.com/__export/1668690571112/sites/lpm/img/2022/11/17/demichelis_-_zuculini_crop1668690369852.jpg_242310155.jpg",
              publishedAt: "2022-11-17T13:26:55Z",
              content:
                "River hizo oficial la llegada de Martín Demichelis como entrenador el pasado miércoles, primero lo hizo público en sus redes sociales oficiales y a las 19 horas mediante una conferencia de prensa en … [+1286 chars]",
            },
            {
              source: {
                id: null,
                name: "Rosario3.com",
              },
              author: "Rosario3",
              title:
                "Bizarrap y Duki lanzaron la Session #50 y explotaron las redes - Rosario3.com",
              description:
                "Con una letra autoreferencial y un homenaje al Quinto Escalón, Duki canta sobre sus comienzos en las batallas del freestyle y el salto de las plazas a los estudios de grabación y los escenarios. Mirá",
              url: "https://www.rosario3.com/ocio/Bizarrap-y-Duki-lanzaron-la-Session-50-y-explotaron-las-redes-20221117-0009.html",
              urlToImage:
                "https://www.rosario3.com/__export/1668685380354/sites/rosario3/img/2022/11/17/duki-bizarrapjpg.jpg_1192065467.jpg",
              publishedAt: "2022-11-17T13:02:00Z",
              content:
                'Luego de haber conquistado el puesto número uno a nivel global, el productor musical Bizarrap estrenó este miércoles la "BZRP Music Session #50" junto a Duki, el rapero que acaba de coronar su paso h… [+1561 chars]',
            },
            {
              source: {
                id: null,
                name: "ámbito.com",
              },
              author: "ámbito.com",
              title:
                "Dólar: la suba del tipo de cambio borró la ganancia del carry trade en noviembre - ámbito.com",
              description:
                "La fuerte suba del dólar en todas sus versiones que se produjo en los últimos tres días borró la ganancia de aquellos inversores que en busca de mejores rendimientos en plazos fijos.",
              url: "https://www.ambito.com/finanzas/dolar/la-suba-del-tipo-cambio-borro-la-ganancia-del-carry-trade-noviembre-n5585828",
              urlToImage:
                "https://media.ambito.com/p/6826d544e565c089228eb029bdfec91e/adjuntos/239/imagenes/037/238/0037238988/1200x675/smart/dolar-turistajpg.jpg",
              publishedAt: "2022-11-17T12:52:16Z",
              content:
                'De esta forma, la diferencia se convierte en una ganancia neta en moneda dura para el inversor.\r\nLa operatoria funcionó bien para aquellos que "vieron venir" la estabilidad del tipo de cambio desde a… [+1553 chars]',
            },
            {
              source: {
                id: null,
                name: "ámbito.com",
              },
              author: "ámbito.com",
              title:
                'OPS lanza alerta mundial ante un nuevo virus: "¡Por favor, usemos las vacunas!" - ámbito.com',
              description:
                "La Organización Panamericana de la Salud (OPS) alerta el aumento de casos de forma simultánea de Covid-19, gripe y virus VRS en América. Qué dicen los expertos.",
              url: "https://www.ambito.com/ops/lanza-alerta-mundial-un-nuevo-virus-por-favor-usemos-las-vacunas-n5585758",
              urlToImage:
                "https://media.ambito.com/p/f6e4d01b1f469f622ab3e279b591a64b/adjuntos/239/imagenes/040/295/0040295232/1200x675/smart/virus-respiratoriojpg.jpg",
              publishedAt: "2022-11-17T11:47:11Z",
              content:
                'Durante la última semana las infecciones por coronavirus han aumentado un 17% en la región, con un incremento de muertes en Sudamérica y Centroamérica.\r\n"Cada vez que nos dormimos en los laureles con… [+983 chars]',
            },
            {
              source: {
                id: "la-nacion",
                name: "La Nacion",
              },
              author: null,
              title:
                "Samanta Schweblin ganó el National Book Award por su libro de cuentos “Siete casas vacías” - LA NACION",
              description:
                "El único antecedente argentino en este prestigioso medallero internacional fue Julio Cortázar, hace 55 años, nada menos que con “Rayuela”",
              url: "https://www.lanacion.com.ar/cultura/samanta-schweblin-gano-el-national-book-award-por-su-libro-de-cuentos-siete-casas-vacias-nid17112022/",
              urlToImage:
                "https://resizer.glanacion.com/resizer/9F1lF-45duOP4IZDkD1tOiaIsso=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AMPJOVPNGVE5ROZ7VVAWCE6BIY.JPG",
              publishedAt: "2022-11-17T10:43:00Z",
              content:
                "Sigue aumentando el medallero internacional de la literatura argentina. La escritora Samanta Schweblin (Buenos Aires, 1978) ganó el National Book Award 2022 en la categoría de literatura traducidapor… [+4007 chars]",
            },
            {
              source: {
                id: null,
                name: "Clarín",
              },
              author: "Osvaldo Pepe",
              title:
                "A 50 años del regreso de Perón al país: el desafío a la dictadura y el fin de un largo exilio - Clarín",
              description:
                "Después de 17 años y 52 días, el fundador del justicialismo pisaba suelo argentino. Frenados por el Ejército, miles de militantes le daban la bienvenida.",
              url: "https://www.clarin.com/politica/50-anos-regreso-peron-pais-desafio-dictadura-fin-largo-exilio_0_uexFIv7bkw.html",
              urlToImage:
                "https://www.clarin.com/img/2013/08/07/B1WEVMin7e_600x338.jpg",
              publishedAt: "2022-11-17T05:30:28Z",
              content:
                "El avión, un DC-8 blanco de la flota de Alitalia, bautizado Giuseppe Verdi, toda una alegoría de la marcha triunfal que experimentaban sus pasajeros, por fin se había detenido en suelo argentino, pro… [+22407 chars]",
            },
            {
              source: {
                id: "la-nacion",
                name: "La Nacion",
              },
              author: null,
              title:
                "Casi sin debate, el oficialismo y sus aliados sancionaron el presupuesto, la prórroga de impuestos y un blanqueo - LA NACION",
              description:
                "La oposición no participó de la sesión y el proyecto se convirtió en ley con 37 votos y por unanimidad; se extendió la vigencia de Ganancias, Bienes Personales, Cheques, la nueva tasa a los vuelos y un blanqueo para la compra de viviendas usadas",
              url: "https://www.lanacion.com.ar/politica/casi-sin-debate-el-oficialismo-y-sus-aliados-sancionaron-el-presupuesto-la-prorroga-de-impuestos-y-nid16112022/",
              urlToImage:
                "https://resizer.glanacion.com/resizer/Qwu1xohe6iTZ_PkRWyvxa3ZeaXU=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4CUB5U2USRDQJIYSPAVUKRS33I.JPG",
              publishedAt: "2022-11-17T04:10:00Z",
              content:
                "Lejos del frenesí que se vivió en la Cámara de Diputados y con las bancas de la oposición vacías, el Senado sancionó este miércoles por unanimidad el presupuesto nacional 2023\r\n, que contempla un déf… [+5177 chars]",
            },
            {
              source: {
                id: "google-news",
                name: "Google News",
              },
              author: null,
              title:
                "Cristina Kirchner sale a la cancha en el acto por el Día de la Militancia - Página/12",
              description: null,
              url: "https://news.google.com/__i/rss/rd/articles/CBMiX2h0dHBzOi8vd3d3LnBhZ2luYTEyLmNvbS5hci80OTg0ODUtY3Jpc3RpbmEta2lyY2huZXItc2FsZS1hLWxhLWNhbmNoYS1lbi1lbC1hY3RvLXBvci1lbC1kaWEtZGUt0gFfaHR0cHM6Ly93d3cucGFnaW5hMTIuY29tLmFyLzQ5ODQ4NS1jcmlzdGluYS1raXJjaG5lci1zYWxlLWEtbGEtY2FuY2hhLWVuLWVsLWFjdG8tcG9yLWVsLWRpYS1kZS0?oc=5",
              urlToImage: null,
              publishedAt: "2022-11-17T03:57:12Z",
              content: null,
            },
            {
              source: {
                id: null,
                name: "Clarín",
              },
              author: "Clarín.com",
              title:
                'Guerra Rusia-Ucrania, EN VIVO: Polonia y OTAN le bajan el tono al conflicto del misil, pero Ucrania pide "inmediato acceso" al lugar donde cayó - Clarín',
              description:
                "El gobierno de Volodimir Zelenski sigue culpando a Rusia por el incidente que provocó dos muertes en territorio polaco.",
              url: "https://www.clarin.com/mundo/guerra-rusia-ucrania-vivo-polonia-afirma-misil-ucraniano-invocara-tratado-defensa-colectiva-otan_0_z80GuJtUCn.html",
              urlToImage:
                "https://www.clarin.com/img/2022/11/16/_fL-iHNAE_1200x630__1.jpg",
              publishedAt: "2022-11-17T03:54:17Z",
              content:
                "El presidente de Estados Unidos, Joe Biden, mantuvo una reunión de \"emergencia'' con los líderes del G7 y de la OTAN en Indonesia para realizar consultas después de que Polonia, país miembro de la OT… [+863 chars]",
            },
            {
              source: {
                id: null,
                name: "TN - Todo Noticias",
              },
              author: "TN",
              title:
                "Así se escucha la voz de Lionel Messi en el Call of Duty: Modern Warfare 2 - TN - Todo Noticias",
              description:
                "Antes de su lanzamiento, te compartimos la lista de las frases del nuevo personaje del videojuego interpretado por el  crack de la Selección.",
              url: "https://tn.com.ar/tecno/juegos/2022/11/16/filtran-los-audios-de-lionel-messi-en-el-call-of-duty-modern-warfare-2-llega-la-version-inspirada-en-qatar/",
              urlToImage:
                "https://tn.com.ar/resizer/lQZHPxWf8kgNVYZWptLfGqM604o=/1023x0/smart/filters:format(webp)/thumbs.vodgc.net/yjFD69rxHso-1668639036.jpg",
              publishedAt: "2022-11-17T01:25:58Z",
              content:
                "A menos de tres semanas de su lanzamiento oficial, la skin de Lionel Messi paraCall of Duty: Modern Warfare 2, con muchas de sus frases, empezó a circular por las redes sociales.\r\nUsuarios de Twitter… [+2479 chars]",
            },
            {
              source: {
                id: "infobae",
                name: "Infobae",
              },
              author: "anónimo",
              title:
                "Por qué con el despegue de Artemis I comenzó una nueva era de la exploración espacial - infobae",
              description:
                "La NASA lanzó el cohete más poderoso de la historia, que promete volver a poner humanos en la Luna en 2025 y utilizar esa tecnología para vuelos a Marte a partir de 2030",
              url: "https://www.infobae.com/america/ciencia-america/2022/11/17/por-que-con-el-despegue-de-artemis-i-comenzo-una-nueva-era-de-la-exploracion-espacial/",
              urlToImage:
                "https://www.infobae.com/new-resizer/pDrhUJz8x7H_H1_CoZajPVuqrGk=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/6UN6SD66STKTLYDYY6UAYLENNY.jpg",
              publishedAt: "2022-11-17T00:49:40Z",
              content:
                "Así despegó el cohete lunar de próxima generación de la NASA.\r\nLa nueva era de exploración del espacio profundo de la NASA ha comenzado. Pasaron dos huracanes, dos meses y una serie de arreglos técni… [+6238 chars]",
            },
            {
              source: {
                id: null,
                name: "Clarín",
              },
              author: "Clarín.com",
              title:
                "Vitamina D: los alimentos con mayor concentración de este nutriente - Clarín",
              description:
                "La lista de las principales fuentes de este nutriente tan esencial para la salud.",
              url: "https://www.clarin.com/internacional/alimentos-mayor-concentracion-vitamina-d_0_YWfGyvS7FU.html",
              urlToImage:
                "https://www.clarin.com/img/2022/02/09/fRvgAAb-a_1200x630__1.jpg",
              publishedAt: "2022-11-16T21:38:00Z",
              content:
                "Si se busca reforzar los niveles de vitamina D, se sabe que, además de las dosis recomendadas de sol, es necesario priorizar el consumo de ciertos alimentos.\r\n¿Cuáles son las principales fuentes de e… [+1336 chars]",
            },
          ],
        },
        status: 200,
        statusText: "",
        headers: {
          "cache-control": "no-cache",
          "content-type": "application/json; charset=utf-8",
          expires: "-1",
          pragma: "no-cache",
        },
        config: {
          transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false,
          },
          transformRequest: [null],
          transformResponse: [null],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {},
          headers: {
            Accept: "application/json, text/plain, */*",
          },
          method: "get",
          url: "https://newsapi.org/v2/top-headlines?country=ar&apiKey=5478f91e35d843b48c4c219e441a01cd",
        },
        request: {},
      };
      const resp = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=5478f91e35d843b48c4c219e441a01cd`
      );
      setHeadlines(resp.data.articles);
    };
    getNews();
  }, [props]);

  const goToArticle = (e) => {
    console.log(e)
  }

  return (
    <div className="main">
      {headlines?.map((e, i) => (
        <ArticleHeadline
          title={e.title}
          img={e.urlToImage}
          description={e.description}
          publishedAt={e.publishedAt}
          url={e.url}
          key={i.toString()}
        />
      ))}
    </div>
  );
};

export default Main;
