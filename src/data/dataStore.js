export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  header: {
    headIcon: 'dragon',
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things not to do !',
    description: 'Things witch I can not do now.',
    image: 'https://i.postimg.cc/52xrdfyp/pexels-dominika-roseclay-1856422.jpg',
  },
  {
    id: 'list-3',
    title: 'Shop list',
    description: 'Everything what I can eat',
    image: 'https://i.postimg.cc/9XP3v81m/pexels-jess-bailey-designs-983826.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const headersContent = [
  {
    id: 'header-1',
    title: 'Home',
    image: 'https://i.postimg.cc/L6pRHRVm/pexels-photo-2950003.jpg',
    icon: 'igloo',
    content: '',
    path: '/',
  },
  {
    id: 'header-2',
    title: 'Info',
    image: 'https://i.postimg.cc/0jpspH9g/pexels-photo-330771.jpg',
    icon: 'info',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    path: '/info',
  },
  {
    id: 'header-3',
    title: 'FAQ',
    image: 'https://i.postimg.cc/ZKpRcVw5/pexels-photo-2789781.jpg',
    icon: 'question',
    content: '<h2>Jak zam??wi?? diet?? pude??kow???</h2><p> Skorzystaj z naszego formularza zam??wie?? klikaj??c w przycisk ZAM??W.Wybierz typ diety, kaloryczno???? posi??k??w, zdecyduj przez ile dni chcesz mie?? dostarczany catering dietetyczny.Wy??lij formularz, a otrzymasz potwierdzenie przyj??cia zam??wienia do realizacji.Do Twojej dyspozycji jest te?? Biuro Obs??ugi Klienta ??? tel. 000 000 000, e- mail: kontakt@qwe.pl</p><h2>Na jaki okres powinienem zam??wi?? diet?? pude??kow???</h2><p>Minimalnym okresem zam??wienia cateringu dietetycznego jest 5 dni. Jednak najlepiej jest zamawia?? diet?? na miesi??c, zawsze otrzymasz dodatkowy bonus i masz gwarancj?? efekt??w w odchudzaniu.</p><h2>Czy mo??na kupi?? tylko jeden zestaw Dieta Figura?</h2><p>Klienci, kt??rzy wcze??niej nie korzystali z cateringu dietetycznego, mog?? zam??wi?? jeden zestaw pr??bny.</p><h2> Co otrzymam w zestawie ?</h2><p>Zestaw sk??ada si?? z pi??ciu posi??k??w (??niadanie, przek??ska, obiad, podwieczorek i kolacja). Tylko zestaw z diety Office sk??ada si?? z czterech posi??k??w (odpowiednio bez kolacji lub ??niadania ??? posi??ki te nale??y przygotowa?? we w??asnym zakresie.</p><h2>Ile i w jakim czasie schudn?? z Dieta Figura?</h2><p>Catering dietetyczny Dieta Figura jest tak skomponowany, aby chudn???? optymalnie poprzez utrat?? tkanki t??uszczowej. Odpowiednio dobrana kaloryczno???? to taka , kt??ra nie pozwala chudn???? gwa??townie. Efekt i tempo chudni??cia zale???? od wybranej kaloryczno??ci, stanu zdrowia, aktywno??ci fizycznej i przestrzegania zasad stosowania diety. Najw??a??ciwsza redukcja wagi waha si?? od 0,5 do 1,0 kg tygodniowo.</p>',
    path: '/faq',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
  headersContent: [...headersContent],
};

export default initialStoreData;
