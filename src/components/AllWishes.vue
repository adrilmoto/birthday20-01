<script setup lang="ts">
import { ref, onMounted } from "vue";
import SectionWrapper from "./SectionWrapper.vue";
import { gsap } from "gsap";

const moments = ref([
  {
    date: "2025",
    title: "RAMIS - DASHA",
    description: `Мне кажется впервые мы познакомились с Аней в августе 2022 года у Ромы на даче. Там собрались все друзья ( уже не помню по какому поводу) и там мы устроили зарубу в фланки. 

Аня на столько была настроена на победу что каждый наш ход кричала "ЗАГОВОР НА ПОНОС, ЗАГОВОР НА ПОНОС". Тогда мы поняли, что Аня клевая деффчонка! 

Так вот, Аня, желаем тебе по жизни такого же рвения к победе и чтобы ни чьи заговоры на тебя не действовали!`,
    images: [`/ramis.jpg`],
    isOpen: false,
  },
  {
    title: "2025 ALINA",
    description: `Мой любимый зайчик
Моя Анечка 
Поздравляю тебя с днём рождения! 
Хочу пожелать тебе крепкого здоровья (тебе, как ипохондрику, это очень важно), женского счастья!!!!
Финансового благополучия (чтоб Рома давал денег и не спрашивал на что!!)
Хотела сказать побольше путешествий, но куда больше не понимаю ….
Пусть все твои мечты сбываются, а вокруг будут только самые лучшие люди 
Когда я думаю о тебе, мне на ум всегда приходят только самые веселые моменты!
А еще уралмаш, турция, пиво и бургеры из а ты где 🥹🥹
Мы столько пережили за время нашей дружбы и хорошего, и плохого, но хорошего было гораздо больше !!!
Оставайся всегда такой же молодой в душе, я тебя люблю ❤️
Спасибо, что у меня есть такой друг`,
    images: ["/alina/1.jpg", "/alina/2.jpg", "/alina/3.jpg", "/alina/4.jpg"],
    isOpen: false,
  },
  {
    title: "2025 YURA",
    description: `С днем рождения Анечка! 
Хочу продолжать смеяться с тобой и над тобой)))
Люблю тебя ❤️`,
    images: ["/yura.jpg"],
    isOpen: false,
  },
  {
    title: "2025 POLINA MOTOVILOVA",
    description: `Анечка, поздравляю тебя с твоим особенным днём!
    Ты – удивительный человек, чья яркая индивидуальность всегда привлекает внимание. У тебя потрясающий вкус в одежде, который делает каждый твой образ уникальным. А ещё я восхищаюсь тем, как осознанно ты подходишь к выбору еды и напитков – ведь иногда так приятно побаловать себя чем-то вкусным, будь то сладкая булочка или холодное пиво. Желаю тебе безграничного счастья, исполнения всех мечт и желаний. Пусть твоя жизнь будет наполнена радостью, улыбками и яркими моментами.`,
    images: [
      "/polina/1.jpg",
      "/polina/2.jpg",
      "/polina/3.jpg",
      "/polina/4.jpg",
    ],
    isOpen: false,
  },
  {
    title: "2025 KATYA TARANOVSKAYA",
    description: `Привет, мой дорогой друг, мой любимый брат и моя самая лучшая подруженька❤️
Поздравляю тебя с днем рождения! Я очень рада, что 26 лет назад ты у нас родилась. Спасибо твоей маме и папе. Я хочу пожелать тебе оставаться такой же жизнерадостной, веселой,умной, иногда ворчащей бабулей , вообщем будь всегда собой , моя зая! 
Спасибо, что разделяешь со мной все моменты этой прекрасной жизни! 
Начиная от тусовок у папы на балконе с водкой и соком , заканчивая нашими лучшими путешествиями вместе🤪
Ты всегда рядом в какой бы жопе я не была
Всегда поддержишь
Скажешь умный совет
Иногда не очень умный
Но я всегда к тебе прислушиваюсь и люблю твои советы 
Спасибо тебе за это❤️
Я очень сильно рада, что мы дружим уже 16 лет. Да да я посчитала, не знаю правильно или нет, но это очень много! Ты моя семья и я тебя очень люблю!
Будь счастлива каждый день! Надеюсь что в твоей жизни будет очень мало поводов для грусти, будут одни путешествия с ромочкой, не будет проблем на работе, проблем с друзьями,проблем с мамой и папой, а будут только самые лучшие воспоминания! Я тебя обнимаю очень сильно крепко!!! Очень грустно, что в этом году я не с тобой , не сижу и не читаю все твои классные поздравления, но в следующем году мы точно будем вместе, бро😘😘😘`,
    images: [
      "/katya/1.jpg",
      "/katya/2.jpg",
      "/katya/3.jpg",
      "/katya/4.jpg",
      "/katya/5.jpg",
      "/katya/6.jpg",
    ],
    isOpen: false,
  },
  {
    title: "2025 ALENA",
    description: `Дорогая Анечка, с днём рождения наш цветочек!
Коли тебе 26 лет, уже осознанная дама, пожелания будут взрослыми. Пусть железо восстановится и никогда не падает, пусть энергии будет много, пусть копчик не болит! Чтобы ремонт благополучно доделался и у тебя будет самая милая красивая квартирка (мы вложили свой вклад в это дело).
Ладно, это все конечно хорошо, но на самом деле, я бы хотела тебе пожелать внутренней гармонии с собой, улыбок, радостей, чтобы ты была счастлива, несмотря на окружающие факторы!!! Чтобы твое сердечко было наполнено теплом и любовью, мы будем его наполнять! И Рома! Пусть твоя творческая натура продолжала в тебе цвести, ты у нас самая талантливая! И стильная! И умная! И вообще самая ❤️ 
Спасибо за нашу дружбу, за поддержку и самые мудрые советы!
я тебя люблю, Анечка❤️ с днём рождения !!!`,
    images: [
      "/alena/1.jpg",
      "/alena/2.jpg",
      "/alena/3.jpg",
      "/alena/4.jpg",
      "/alena/5.jpg",
      "/alena/6.jpg",
    ],
    isOpen: false,
  },
  {
    title: "2025 VALERIA TARANOVSKAYA",
    description: `Вы слышите это? Это же фото со звуком! Крутые бобры! Аня ассоциируется у меня со стабильностью: крепкой долгой и здоровой дружбой, интересом друг к другу сквозь года и, конечно же, фото в шубах каждые 7 лет!`,
    images: ["/lera/1.jpg", "/lera/2.jpg"],
    isOpen: false,
  },
  {
    title: "2025 MAKS CHAVA",
    description: `Аняяяяя! Поздравляю тебя с этим замечательным и особенным днем! Желаю, чтобы каждый момент приносил радость, чтобы мечты сбывались, а впереди был только светлый путь. Пусть счастье всегда будет рядом, а рядом с тобой будут верные и искренние люди. Оставайся такой же яркой, сильной и вдохновляющей! С Днем Рождения!🎁🎈🎉🎊🎂🍾❤️🩷🧡💛💚🩵💜`,
    images: ["/chava.jpg"],
    isOpen: false,
  },
  {
    title: "2025 KATYA KARPOVA",
    description: `Дорогая Анечка!
С днем рождения! Пусть в твоей жизни будет бесконечное вдохновение, чтобы создавать настоящие шедевры, чтоб ваша любовь, которая делает каждый день ярче, никогда не заканчивалась, а самое главное  здоровье, чтобы хватило сил на все мечты и море путешествий!
Ты такая открытая, светлая и очень  смешная!

Вспоминая нашу первую встречу на Молебке, признаюсь, тогда у нас явно не случилось мэтча. Но спасибо судьбе, что мы оказались в одной команде на дне рождения Сережи, где я поняла, какая ты снаружи и внутри ☺️

Теперь ты – мой друг, человек, которому я доверяю, чьи советы слушаю и над чьими шутками искренне ржу. Спасибо, что ты есть в моей жизни!

Обнимаю крепко!❤️`,
    images: [`/karpova/1.jpg`, `/karpova/2.jpg`, `/karpova/3.jpg`],
    isOpen: false,
  },
  {
    title: "2025 ARINA",
    description: `Анечка, с днем рождения!!! Ты самое настоящее солнышко, которое озаряет этот мир. Я очень рада, что жизнь свела нас и у меня есть такая чудесная подруга, которая никогда не оставит грустить и скажет те слова, которые мне точно нужно услышать. Желаю, чтобы все твои мечты осуществлялись, запас вдохновения никогда не исчерпывался и просто оставайся всегда таким же миленьким котеночком 💕`,
    images: ["/arina/1.jpg"],
    isOpen: false,
  },
  {
    title: "2025 SEVA - RITA",
    description: `Аня, поздравляем тебя с твоим днем ! Желаем тебе гармонии с собой, вдохновения, что бы все мечты сбывались, и приносили много радости и денег (по возможности)). Что бы Рома любил и носил на руках) Не терять себя, радоваться мелочам жизни, и в каждой находить что то удивительное! Много путешествовать и познавать мир, пока она еще не до конца закрыт :D Обняли, приподняли, в лобик поцеловали :* 
(С) Рита и Сева`,
    images: ["/seva.jpg"],
    isOpen: false,
  },
  {
    title: "2025 NIKITA - DASHA",
    description: `Привет!

Аня, поздравляем тебя с днем рождения, желаем тебе невероятно яркой, насыщенной и изобильной жизни! Чтобы каждый твой год был наполнен путешествиями, приятными событиями, а также невероятными историями!

Ты у нас ассоциируешься с приключением на водопады в Турции

Никита и Даша`,
    images: ["/atnashev.jpg"],
    isOpen: false,
  },
  {
    title: "2025 NASTYA YURCHENKO",
    description: `Когда я думаю про Аню, то первое, что хочется про нее сказать это то, что она прекрасно знает какая она ахуенная. И это правда так! 

От нее исходит вайб уверенности, любви к себе и женственности. Несмотря на свою внешнюю строгость, она умеет быть легкой, веселой, задорной девочкой. В ней есть крутое сочетание способности отстаивать свои границы и добиваться желанного, но делать это мудро, находя подход к человеку. 

Я желаю ей сохранить эти уникальные качества и быть самой счастливой девушкой в мире ❤️`,
    images: ["/yurch/1.jpg", "/yurch/2.jpg", "/yurch/3.jpg", "/yurch/4.jpg"],
    isOpen: false,
  },
  {
    title: "2025 SASHA SHCHAPOVA",
    description: `Ты не связана для меня с каким-то одним событием, потому что ты сама — целое событие в моей жизни. Думая о тебе, я всегда вижу перед собой сильную, волевую и умную девушку, которой бесконечно горжусь. Несмотря на то, что ты младшая, я часто беру с тебя пример — и это безумно круто! Я радуюсь каждой твоей победе и искренне счастлива, что именно ты моя сестра. Даже несмотря на расстояния, ты всегда остаешься для меня самым близким и родным человеком.
Хочу пожелать тебе достичь всего, к чему ты стремишься, чтобы мечты сбывались, облететь как можно больше стран, реализоваться в профессии, заработать на этом много денег.  Счастья с Ромой. Он классный, и я уверена, что это именно тот парень, который будет делать всё, чтобы твои глаза сияли от радости, как сейчас. 
А еще желаю нам с тобой видеться чаще, потому что я скучаю, а переписки — это совсем не то.
Люблю❤️`,
    images: ["/sasha/1.jpg", "/sasha/2.jpg", "/sasha/3.jpg", "/sasha/4.jpg"],
    isOpen: false,
  },
  {
    title: "2025 YANA CHUMAKOVA",
    description: `У меня Аня ассоциируется с рыжим цветом волос, наверно потому что наше первое знакомство было, когда они были рыжие
Фоток с того времени нет 
Еще она ассоциируется с крутым чувством юмора, с заразительным смехом, с самоиронией, с некой любовью смешных фото
С разговорами о женском, о путешествиях
Я хочу пожелать ей быть счастливой всегда, чтобы в жизни было как можно больше радостных моментов , быть любимой, окутанной заботой девушкой , быть успешной леди, которая успевает сделать 100 дел за день. По больше путешествий, ярких впечатлений, конечно же успехов в работе , по больше денег, чтобы успешно доделать квартиру и использовать ее как задумано`,
    images: ["/yana/1.jpg", "/yana/2.jpg"],
    isOpen: false,
  },
  {
    title: "2025 SERGEY",
    description: `Думаю все три фото скажут сами за себя как было весело и пиздато🎉🤩`,
    images: ["/serga/1.jpg", "/serga/2.jpg", "/serga/3.jpg", "/serga/4.jpg"],
    isOpen: false,
  },
]);

const toggleMoment = (index: number) => {
  // const prevIndex = moments.value.findIndex((m) => m.isOpen);
  // console.log(prevIndex);
  // if (prevIndex >= 0 && index !== prevIndex) {
  //   moments.value[prevIndex].isOpen = false;
  // }
  moments.value[index].isOpen = !moments.value[index].isOpen;
};

onMounted(() => {
  gsap.from(".all-wishes-section-title", {
    duration: 1,
    yPercent: 120,
    ease: "power4",
    stagger: 0.3,
    rotate: 10,
    scrollTrigger: {
      trigger: ".all-wishes-section",
      start: "top center",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });
});
</script>

<template>
  <SectionWrapper
    class="all-wishes-section"
    :left-words="['20 / 01', 'ANNA SHAPOVA', '20 / 01', 'WISHES']"
    :right-words="['ANNA SHCHAPOVA', '20 / 01', 'WISHES', '20 / 01']"
    :block-height="340"
  >
    <template #default>
      <div class="moments-content">
        <div class="subtitle">FRIENDS</div>
        <div class="title">
          <div class="all-wishes-section-title">WISHES</div>
        </div>
        <div class="text">
          Каждое поздравление здесь — это искреннее проявление любви,
          благодарности и восхищения её уникальностью. Друзья из разных уголков
          мира собрали в этих словах всё тепло, чтобы подарить ей радость и
          вдохновение. Эти пожелания — как яркие огоньки, освещающие её путь и
          напоминающие о том, как сильно она любима.
        </div>
        <div class="accordion-section">
          <div
            v-for="(moment, index) in moments"
            :key="index"
            class="moment-item"
            :class="{ 'is-open': moment.isOpen }"
          >
            <div class="moment-header" @click="toggleMoment(index)">
              <h3>{{ moment.date }} {{ moment.title }}</h3>
              <div class="cross">
                <span class="vert" />
                <span class="hors" />
              </div>
            </div>
            <div class="wish-content">
              <div class="wish-content-container">
                <p class="wish-content-description">
                  {{ moment.description }}
                </p>
                <div class="image-drid">
                  <img v-for="image in moment.images" :src="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionWrapper>
</template>

<style lang="scss">
.all-wishes-section {
  background-color: var(--background-color);
  --border-color: var(--primary-color);

  .subtitle {
    font-size: 56px;
    margin-bottom: 0px;
    @media screen and (max-width: 900px) {
      font-size: 36px;
    }
  }
  .title {
    font-size: 280px;
    line-height: 100%;
    margin-bottom: 0px;
    overflow: hidden;
    @media screen and (max-width: 900px) {
      font-size: 10vh;
    }
  }
  .text {
    font-size: 20px;
    margin-bottom: 100px;
    max-width: 500px;
    text-align: center;
    margin-top: 60px;
    font-family: "Oswald";
    @media screen and (max-width: 900px) {
      max-width: calc(100% - 40px);
    }
  }
}

.moments-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--primary-color);
  padding: 60px 0px;

  .accordion-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--background-color);

    .moment-item {
      // background-color: white;
      width: 100%;
      border-bottom: 1px solid var(--primary-color);
      overflow: hidden;
      transition: all 200ms;
      background-color: none;

      .cross {
        position: relative;
        width: 40px;
        height: 40px;
        --cross-color: var(--primary-color);
        transition: all 400ms;
        display: flex;
        align-items: center;
        justify-content: center;
        .vert {
          width: 2px;
          height: 40px;
          @media screen and (max-width: 900px) {
            height: 20px;
          }
          background-color: var(--cross-color);
          position: absolute;
          transition: 400ms;
          transform-origin: center;
        }
        .hors {
          width: 40px;
          height: 2px;
          @media screen and (max-width: 900px) {
            width: 20px;
          }
          background-color: var(--cross-color);
          position: absolute;
        }
      }

      .moment-header {
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        color: var(--primary-color);
        transition: all 300ms;

        &:hover {
          background-color: var(--primary-color);
          color: var(--background-color);
          .cross {
            --cross-color: var(--background-color);
          }
        }

        h3 {
          margin: 0;
          font-size: 42px;
          text-transform: capitalize !important;
          font-family: "PPNikkeiLine";
          @media screen and (max-width: 900px) {
            font-size: 24px;
          }
        }

        .toggle-icon {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }
      }

      .wish-content {
        background-color: var(--primary-color);
        color: var(--background-color);
        padding: 0;

        max-height: 0px;
        overflow: hidden;
        transition: max-height 0s ease-in-out;

        &-container {
          display: flex;
          flex-direction: row;
          padding: 1.5rem;
          gap: 40px;

          @media screen and (max-width: 900px) {
            flex-direction: column;
          }
        }
        &-description {
          width: 400px;
          font-family: "Oswald";
          @media screen and (max-width: 900px) {
            width: 100%;
          }
        }

        .image-drid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;

          @media screen and (max-width: 900px) {
            grid-template-columns: 1fr;
          }
        }

        img {
          width: 366px;
          height: 366px;
          object-fit: cover;
          border: 1px solid var(--background-color);

          @media screen and (max-width: 900px) {
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
          }
        }
      }

      &.is-open .toggle-icon {
        --cross-color: var(--background);
      }

      &.is-open .moment-header {
        background-color: var(--primary-color);
        color: var(--background-color);
      }

      &.is-open .cross {
        --cross-color: var(--background-color);
        .vert {
          transform: rotate(90deg);
          transform-origin: center;
        }
      }

      &.is-open .wish-content {
        max-height: 7000px;
        transition: max-height 1s ease-in-out;
      }
    }
  }
}
</style>
