const cheat_meals = [
  { Name: "Lupo", Url: "https://static.posters.cz/image/750/poster/call-of-wolf-i1661.jpg" },
  { Name: "Serpente", Url: "https://images.everyeye.it/img-notizie/il-veleno-serpenti-evoluto-uccidere-non-autodifesa-v4-436365.jpg" },
  {
    Name: "Volpe Artica",
    Url: "https://www.focusjunior.it/content/uploads/site_stored/imgs/0001/020/volpe-artica_01.jpg",
  },
  { Name: "Cane", Url: "https://best5.it/b5/wp-content/uploads/2016/05/Siberian-Husky6-800x400-800x400.jpg" },
  { Name: "Scimpanzé", Url: "https://www.skande.com/wp-content/uploads/2019/06/scimmia-alimenta.jpg" },
  { Name: "Orso", Url: "https://www.oipa.org/italia/wp-content/uploads/2019/05/orso-844x475.jpg" },
  { Name: "Gatto", Url: "https://st.ilfattoquotidiano.it/wp-content/uploads/2020/04/09/gatto1200.jpg" },
  { Name: "Coniglio", Url: "https://www.zoo-service.it/wp-content/uploads/2019/05/coniglio-nano.jpg" },
  { Name: "Pesce Rosso", Url: "https://maxizoo.it/blog/wp-content/uploads/2017/03/Come-far-vivere-a-lungo-il-pesce-rosso.jpg" },
  { Name: "Leone", Url: "https://i.pinimg.com/originals/9a/7a/4d/9a7a4d2012d4665c488c2487da400368.jpg" },
  { Name: "Tigre", Url: "https://www.focusjunior.it/content/uploads/2014/03/tigre-1.jpg" },
  { Name: "Pinguino", Url: "https://guidominciotti.blog.ilsole24ore.com/wp-content/uploads/sites/98/2017/07/pinguino_imperatore-e1499452179808-1024x512.jpg" },
  { Name: "Cavallo", Url: "https://cdn.cosedicasa.com/wp-content/uploads/2018/04/cavallo-640x320.jpg" },
  { Name: "Cervo", Url: "https://lh3.googleusercontent.com/proxy/ZUbSoGX1M1wZusWRYTH_ZnNyrj7CkpPuDiqOjxAYBJEyD47fnqUbX9eUGuRYYTm5reEtazLL1lZ_cEzPAKconbfiwvAwmym9U-X9U1UfWh2aJv5L1udhgz-7qQskkwgJ4PiWG-q8l5BHvpTUk-Sd_QxioOxSoGfpDmTUZAA" },
];

const rouletteContainer = document.querySelector(".roulette-container");
const roulette = document.querySelector(".roulette");
const linkTo = document.querySelector(".link-to");
const spin = document.querySelector(".spin");

spin.addEventListener("click", () => {
  rouletteContainer.classList.remove("tada");

  const total = cheat_meals.length;
  const selected = Math.floor(Math.random() * total);

  for (let i = 0; i <= total; i++) {
    setTimeout(
      ((i) => {
        return () => {
          roulette.innerText = cheat_meals[i % total].Name;
          linkTo.href = cheat_meals[i % total].Url;
          if (i === selected) {
            roulette.classList.add("tada");
          }
        };
      })(i),
      i * 100
    );

    if (i === selected) {
      break;
    }
  }
});
