var resources = "resources/images/";
var host = "localhost:8080/";

var db = [{
	filename: "grzeslack_01.jpg",
	phrase: "Skoro w domu są awantury, bo ojciec krzyczy na dziecko, skoro starsze pokolenie ma pionowe, hierarchiczne podejście do zarządzania, a to nowe, tzw. Y, ma poziome, to nie trzeba specjalnie wchodzić w dzieciństwo, żeby ustalić, kto był przez rodziców kochany, a kto nie.",
	keywords: ["awantura", "awantury", "dom", "problemy", "dzieciństwo", "miłość rodzicielska"]
}, {
	filename: "grzeslack_02.jpg",
	phrase: "Chłopak, który miał raka i zaczął ze mną pracować, po kilku miesiącach się z niego wyleczył",
	keywords: ["rak", "raka", "uzdrowienie"]
}, {
	filename: "grzeslack_03.jpg",
	phrase: "W krajach latynowskich coś takiego nazywa się porwaniem ekspresowym - bierze się delikwenta na wycieczkę po bankomatach i wyciąga z nich pieniądze. Czasem jest gorzej, porywa się ofiarę dla okupu albo po prostu zabija, by zatrzeć ślady. Siedziałem w tym samochodzie i mimo palpitacji serca zacząłem z nimi rozmawiać, w ciągu godziny rozśmieszyłem ich kilka razy, namówiłem, by oddali mi część rabowanych rzeczy, i zbudowałem z nimi - paradoksalnie to zabrzmi - relację. Wypuścili mnie potem, żegnając się, a ja przeżyłem właśnie dzięki wiedzy psychologicznej, która pozwoliła mi kontrolować emocje i budować relacje z napastnikami.",
	keywords: ["latynowski", "latynos", "porwanie", "psychologia", "kradzież"]
}, {
	filename: "grzeslack_04.jpg",
	phrase: "Nie mamy problemów, bo się urodziliśmy nie w tym życiu co trzeba albo mieliśmy trudne dzieństwo, bo takie na swój sposób miał każdy",
	keywords: ["dzieciństwo", "problemy", "każdy ma problemy", "trudne dzieciństwo"]
}, {
	filename: "grzeslack_05.jpg",
	phrase: "Jedną z najbardziej babskich \"strategii\" przetrwania jest znaleźć męskiego samca, po czym zamienić go w cipę, która jest nudna i którą się zdradza na boku. Brzydki zazwyczaj, ale ferowany chęcią zapewnienia sobie poczucia bezpieczeństwa.",
	keywords: ["redpill", "red-pill", "małżeństwo"]
}, {
	filename: "grzeslack_06.jpg",
	phrase: "Każda nacja ma coś charakterystycznego, u nas akurat padło na przeintelektualizowanie.",
	keywords: ["nacjonalizm", "debilizm", "intelektualizm", "inteligencja"]
}, {
	filename: "grzeslack_07.jpg",
	phrase: "Bo wszystko, co niemiłe, jest miłością w przebraniu.",
	keywords: ["miłość", "niemiłe"]
}, {
	filename: "grzeslack_08.jpg",
	phrase: "Jesteśmy w stanie je kontrolować [hormony] i je kontrolujemy. Na przykład: uderzenie się w pysk - Endorfiny",
	keywords: ["endorfiny", "hormony", "hormon", "samokontrola", "kontrola", "przemoc"]
}, {
	filename: "grzeslack_09.jpg",
	phrase: "Boimy się tylko tego, czego nie znamy. Skonfrontuj się z lękiem, a będzie to lęk po raz ostatni.",
	keywords: ["strach", "lęk", "konfrontacja"]
}, {
	filename: "grzeslack_10.jpg",
	phrase: "Z emocjami mamy do czynienia przez całe życie, z budową pantofelka ledwie przez jego urywek.",
	keywords: ["pantofel", "pantofelek", "jednokomórkowce", "emocje", "budowa"]
}, {
	filename: "grzeslack_11.jpg",
	phrase: "Depresja nie chodzi. Nie przychodzi. Nie pojawia się. Ludzie ją robią. Tak jak wszystkie inne emocje.",
	keywords: ["depresja", "pojawianie", "pojawia", "emocje", "sad pepe", "pepe", "sad"]
}, {
	filename: "grzeslack_12.jpg",
	phrase: "Weź sobie dowolny wieczór i powiedz (albo miej powiedziane): chciałbym się skomunikować z częścią odpowiedzialną za polipa",
	keywords: ["polip", "wieczór", "komunikacja"]
}, {
	filename: "grzeslack_13.jpg",
	phrase: "Miłością jest chód człowieka bez nogi, bo została mu tylko jedna. Miłością jest zmywanie naczyń, bo to znaczy, że komuś smakowało jedzenie. Miłością jest dostać rachunek, bo to znaczy że się miało pieniądze do wydania. Miłością jest się rozwieść, bo to daje szansę zbliżyć się do prawdziwego siebie. Miłością jest deszcz, który daje trawie rosnąć, by potem zrobić na niej rodzinny piknik. Miłością jest sikajcy pies, którego przyjmuje bezwarunkowo ziemia. Miłością jesteś Ty. Ty sam, bez żadnej maski.",
	keywords: ["miłość", "samouwielbienie", "zmywanie", "naczynia", "naczyń", "jedzenie"] // add some keywords
}, {
	filename: "grzeslack_14.jpg",
	phrase: "Pieniądze nie dają szczęścia tylko tym, którzy już je mają.",
	keywords: ["pieniądze", "szczęście", "pieniądze szczęścia nie dają"]
}, {
	filename: "grzeslack_15.jpg",
	phrase: "Nigdy nikt nie będzie bardziej kompetentny w byciu Tobą niż Ty sam. I Ty nigdy nie staniesz się lepszy od kogoś w byciu nim.",
	keywords: ["bądź", "sobą", "lepszy", "kompetentny"]
}, {
	filename: "grzeslack_16.jpg",
	phrase: "Musiałem pozbyć się tzw. wewnętrznego Polaczka - zakompleksionego, zawistnego psa ogrodnika, który boi się zmian i nie wierzy w siebie. I zbudować mentalność obywatela świata.",
	keywords: ["polaczki", "polactwo", "testoviron", "pies ogrodnika"]
}, {
	filename: "grzeslack_17.jpg",
	phrase: "Prawda się kończy, gdy zaczynają się słowa, może dlatego, że inne są słowa osobowości, a inne serca",
	keywords: ["prawda", "koniec", "słowa", "słowa osobowości", "serce"]
}, {
	filename: "grzeslack_18.jpg",
	phrase: "Jeśli bardziej od siebie samego obchodzą Cię inni, to czas zbudować takie życie, które chcesz mieć.",
	keywords: ["sam", "osobowość", "ty", "prawda"]
}];

var Botkit = require('botkit');

var controller = Botkit.slackbot({
	debug: true
});

controller.spawn({
	token: "BOT_TOKEN",
}).startRTM();

controller.hears('', ['direct_message', 'direct_mention', 'mention'], function(bot, message) {

	var messageKeywords = message.text.split(" ");

	var max = {};
	max.index = 0;
	max.matched = 0;

	db.forEach(function (item, index) {
		var matched = 0;
		item.keywords.forEach(function (itemKeyword) {
			messageKeywords.forEach(function (messageKeyword) {
				if(itemKeyword == messageKeyword) {
					matched++;
				}
			});
		});

		if(matched > max.matched) {
			max.index = index;
			max.matched = matched;
		}
	});

	bot.reply(message, host + resources + db[max.index].filename);	
});