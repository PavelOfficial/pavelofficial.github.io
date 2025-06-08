const heightPriorityWordsMap = {
  "abide": {"initFormEn": "abide", "displayEn": "abide, abode, abided, abode, abided", "ru": "пребывать, держаться"},
  "arise": {"initFormEn": "arise", "displayEn": "arise, arose, arisen", "ru": "подняться, возникнуть"},
  "awake": {"initFormEn": "awake", "displayEn": "awake, awoke, awaked, awoke", "ru": "будить, проснуться"},
  "backbite": {"initFormEn": "backbite", "displayEn": "backbite, backbitten, backbitten", "ru": "клеветать"},
  "backslide": {"initFormEn": "backslide", "displayEn": "backslide, backslid, backslid", "ru": "отпадать"},
  "be": {"initFormEn": "be", "displayEn": "be, was, were, been", "ru": "быть, нести, родить"},
  "bear": {"initFormEn": "bear", "displayEn": "bear, bore, born, borne", "ru": "родить"},
  "beat": {"initFormEn": "beat", "displayEn": "beat, beat, beaten", "ru": "бить"},
  "become": {"initFormEn": "become", "displayEn": "become, became, become", "ru": "стать, сделаться"},
  "befall": {"initFormEn": "befall", "displayEn": "befall, befell, befallen", "ru": "случиться"},
  "beget": {"initFormEn": "beget", "displayEn": "beget, begot, begat, begotten", "ru": "порождать"},
  "begin": {"initFormEn": "begin", "displayEn": "begin, began, begun", "ru": "начать"},
  "begird": {"initFormEn": "begird", "displayEn": "begird, begirt, begirt", "ru": "опоясывать"},
  "behold": {"initFormEn": "behold", "displayEn": "behold, beheld, beheld", "ru": "зреть"},
  "bend": {"initFormEn": "bend", "displayEn": "bend, bent, bent, bended", "ru": "гнуть"},
  "bereave": {"initFormEn": "bereave", "displayEn": "bereave, bereft, bereaved, bereft, bereaved", "ru": "лишать"},
  "beseech": {
    "initFormEn": "beseech",
    "displayEn": "beseech, besought, beseeched, besought, beseeched",
    "ru": "умолять, упрашивать"
  },
  "beset": {"initFormEn": "beset", "displayEn": "beset, beset, beset", "ru": "осаждать"},
  "bespeak": {"initFormEn": "bespeak", "displayEn": "bespeak, bespoke, bespoke, bespoken", "ru": "заказывать"},
  "bespit": {"initFormEn": "bespit", "displayEn": "bespit, bespat, bespat", "ru": "заплевывать"},
  "bestride": {
    "initFormEn": "bestride",
    "displayEn": "bestride, bestrode, bestridden",
    "ru": "садиться, сидеть верхом"
  },
  "bet": {"initFormEn": "bet", "displayEn": "bet, bet, betted, bet, betted", "ru": "держать пари"},
  "betake": {"initFormEn": "betake", "displayEn": "betake, betook, betaken", "ru": "приниматься, отправляться"},
  "bid": {"initFormEn": "bid", "displayEn": "bid, bad, bade, bid, bid, bidden", "ru": "велеть, просить"},
  "bind": {"initFormEn": "bind", "displayEn": "bind, bound, bound", "ru": "связать"},
  "bite": {"initFormEn": "bite", "displayEn": "bite, bit, bit, bitten", "ru": "кусать"},
  "bleed": {"initFormEn": "bleed", "displayEn": "bleed, bled, bled", "ru": "кровоточить"},
  "bless": {"initFormEn": "bless", "displayEn": "bless, blessed, blessed, blest", "ru": "благословлять"},
  "blow": {"initFormEn": "blow", "displayEn": "blow, blew, blown, blowed", "ru": "дуть"},
  "break": {"initFormEn": "break", "displayEn": "break, broke, broken", "ru": "ломать"},
  "breed": {"initFormEn": "breed", "displayEn": "breed, bred, bred", "ru": "выращивать, разводить"},
  "bring": {"initFormEn": "bring", "displayEn": "bring, brought, brought", "ru": "принести"},
  "broadcast": {
    "initFormEn": "broadcast",
    "displayEn": "broadcast, broadcast, broadcast",
    "ru": "вещать (о ТВ, радио)"
  },
  "browbeat": {"initFormEn": "browbeat", "displayEn": "browbeat, browbeat, browbeaten", "ru": "запугивать"},
  "build": {"initFormEn": "build", "displayEn": "build, built, built", "ru": "строить"},
  "burn": {"initFormEn": "burn", "displayEn": "burn, burnt, burned, burnt, burned", "ru": "жечь, гореть"},
  "burst": {"initFormEn": "burst", "displayEn": "burst, burst, burst", "ru": "разразиться, взорваться"},
  "bust": {"initFormEn": "bust", "displayEn": "bust, bust, busted, bust, busted", "ru": "разжаловать, уничтожить"},
  "buy": {"initFormEn": "buy", "displayEn": "buy, bought, bought", "ru": "купить"},
  "can": {"initFormEn": "can", "displayEn": "can, could, —, /, been, able", "ru": "мочь, уметь"},
  "cast": {"initFormEn": "cast", "displayEn": "cast, cast, cast", "ru": "кинуть, лить металл"},
  "catch": {"initFormEn": "catch", "displayEn": "catch, caught, caught", "ru": "ловить, поймать"},
  "chide": {"initFormEn": "chide", "displayEn": "chide, chid, chided, chid, chided, chidden", "ru": "бранить"},
  "choose": {"initFormEn": "choose", "displayEn": "choose, chose, chosen", "ru": "выбрать"},
  "cleave": {
    "initFormEn": "cleave",
    "displayEn": "cleave, clove, cleft, cleaved, cloven, cleft, cleaved",
    "ru": "рассечь"
  },
  "cling": {"initFormEn": "cling", "displayEn": "cling, clung, clung", "ru": "цепляться, льнуть"},
  "clothe": {"initFormEn": "clothe", "displayEn": "clothe, clothed, clad, clothed, clad", "ru": "одеваться"},
  "come": {"initFormEn": "come", "displayEn": "come, came, come", "ru": "прийти"},
  "cost": {"initFormEn": "cost", "displayEn": "cost, cost, cost", "ru": "стоить"},
  "countersink": {"initFormEn": "countersink", "displayEn": "countersink, countersank, countersunk", "ru": "зенковать"},
  "creep": {"initFormEn": "creep", "displayEn": "creep, crept, crept", "ru": "ползти"},
  "crow": {"initFormEn": "crow", "displayEn": "crow, crowed, crew, crowed", "ru": "петь (о петухе)"},
  "cut": {"initFormEn": "cut", "displayEn": "cut, cut, cut", "ru": "резать"},
  "dare": {"initFormEn": "dare", "displayEn": "dare, durst, dared, dared", "ru": "сметь"},
  "deal": {"initFormEn": "deal", "displayEn": "deal, dealt, dealt", "ru": "иметь дело"},
  "dig": {"initFormEn": "dig", "displayEn": "dig, dug, dug", "ru": "копать"},
  "disprove": {"initFormEn": "disprove", "displayEn": "disprove, disproved, disproved, disproven", "ru": "опровергать"},
  "dive": {"initFormEn": "dive", "displayEn": "dive, dived, dove, dived", "ru": "нырять, погружаться"},
  "do": {"initFormEn": "do", "displayEn": "do, did, done", "ru": "делать"},
  "draw": {"initFormEn": "draw", "displayEn": "draw, drew, drawn", "ru": "тащить, рисовать"},
  "dream": {"initFormEn": "dream", "displayEn": "dream, dreamt, dreamed, dreamt, dreamed", "ru": "грезить, мечтать"},
  "drink": {"initFormEn": "drink", "displayEn": "drink, drank, drunk", "ru": "пить, выпить"},
  "drive": {"initFormEn": "drive", "displayEn": "drive, drove, driven", "ru": "гнать, ехать"},
  "dwell": {"initFormEn": "dwell", "displayEn": "dwell, dwelt, dwelt", "ru": "обитать, задерживаться"},
  "eat": {"initFormEn": "eat", "displayEn": "eat, ate, eaten", "ru": "кушать, есть"},
  "fall": {"initFormEn": "fall", "displayEn": "fall, fell, fallen", "ru": "падать"},
  "feed": {"initFormEn": "feed", "displayEn": "feed, fed, fed", "ru": "кормить"},
  "feel": {"initFormEn": "feel", "displayEn": "feel, felt, felt", "ru": "чувствовать"},
  "fight": {"initFormEn": "fight", "displayEn": "fight, fought, fought", "ru": "сражаться, драться"},
  "find": {"initFormEn": "find", "displayEn": "find, found, found", "ru": "находить"},
  "fit": {"initFormEn": "fit", "displayEn": "fit, fit, fit", "ru": "подходить по размеру"},
  "flee": {"initFormEn": "flee", "displayEn": "flee, fled, fled", "ru": "бежать, спасаться"},
  "fling": {"initFormEn": "fling", "displayEn": "fling, flung, flung", "ru": "бросить"},
  "floodlight": {
    "initFormEn": "floodlight",
    "displayEn": "floodlight, floodlighted, floodlit, floodlighted, floodlit",
    "ru": "освещать прожектором"
  },
  "fly": {"initFormEn": "fly", "displayEn": "fly, flew, flown", "ru": "летать"},
  "forbear": {"initFormEn": "forbear", "displayEn": "forbear, forbore, forborne", "ru": "воздерживаться"},
  "forbid": {"initFormEn": "forbid", "displayEn": "forbid, forbad, forbade, forbidden", "ru": "запретить"},
  "forgo": {
    "initFormEn": "forgo",
    "displayEn": "forgo, forego, forewent, foregone",
    "ru": "отказываться, воздерживаться"
  },
  "forecast": {
    "initFormEn": "forecast",
    "displayEn": "forecast, forecast, forecasted, forecast, forecasted",
    "ru": "предсказывать"
  },
  "foresee": {"initFormEn": "foresee", "displayEn": "foresee, foresaw, foreseen", "ru": "предвидеть"},
  "foretell": {"initFormEn": "foretell", "displayEn": "foretell, foretold, foretold", "ru": "предсказывать"},
  "forget": {"initFormEn": "forget", "displayEn": "forget, forgot, forgotten", "ru": "забыть"},
  "forgive": {"initFormEn": "forgive", "displayEn": "forgive, forgave, forgiven", "ru": "простить"},
  "forsake": {"initFormEn": "forsake", "displayEn": "forsake, forsook, forsaken", "ru": "покидать"},
  "forswear": {"initFormEn": "forswear", "displayEn": "forswear, forswore, forsworn", "ru": "отрекаться"},
  "freeze": {"initFormEn": "freeze", "displayEn": "freeze, froze, frozen", "ru": "замерзнуть, замораживать"},
  "gainsay": {"initFormEn": "gainsay", "displayEn": "gainsay, gainsaid, gainsaid", "ru": "отрицать, противоречить"},
  "get": {"initFormEn": "get", "displayEn": "get, got, got", "ru": "получить"},
  "gild": {"initFormEn": "gild", "displayEn": "gild, gilt, gilded, gilt, gilded", "ru": "позолотить"},
  "gird": {"initFormEn": "gird", "displayEn": "gird, girded, girt, girded, girt", "ru": "опоясывать"},
  "give": {"initFormEn": "give", "displayEn": "give, gave, given", "ru": "дать"},
  "go": {"initFormEn": "go", "displayEn": "go, went, gone", "ru": "идти, уходить"},
  "grave": {"initFormEn": "grave", "displayEn": "grave, graved, graved, graven", "ru": "гравировать"},
  "grind": {"initFormEn": "grind", "displayEn": "grind, ground, ground", "ru": "точить, молоть"},
  "grow": {"initFormEn": "grow", "displayEn": "grow, grew, grown", "ru": "расти"},
  "hamstring": {
    "initFormEn": "hamstring",
    "displayEn": "hamstring, hamstringed, hamstrung, hamstringed, hamstrung",
    "ru": "подрезать поджилки"
  },
  "hang": {"initFormEn": "hang", "displayEn": "hang, hung, hanged, hung, hanged", "ru": "висеть, повесить"},
  "have": {"initFormEn": "have", "displayEn": "have, had, had", "ru": "иметь"},
  "hear": {"initFormEn": "hear", "displayEn": "hear, heard, heard", "ru": "слушать"},
  "heave": {"initFormEn": "heave", "displayEn": "heave, heaved, hove, heaved, hove", "ru": "подымать(ся)"},
  "hew": {"initFormEn": "hew", "displayEn": "hew, hewed, hewed, hewn", "ru": "рубить, тесать"},
  "hide": {"initFormEn": "hide", "displayEn": "hide, hid, hidden", "ru": "прятать(ся)"},
  "hit": {"initFormEn": "hit", "displayEn": "hit, hit, hit", "ru": "ударить, попасть"},
  "hold": {"initFormEn": "hold", "displayEn": "hold, held, held", "ru": "держать"},
  "hurt": {"initFormEn": "hurt", "displayEn": "hurt, hurt, hurt", "ru": "причинить боль"},
  "inlay": {"initFormEn": "inlay", "displayEn": "inlay, inlaid, inlaid", "ru": "вкладывать, выстилать"},
  "input": {"initFormEn": "input", "displayEn": "input, input, inputted, input, inputted", "ru": "входить"},
  "inset": {"initFormEn": "inset", "displayEn": "inset, inset, inset", "ru": "вставлять, вкладывать"},
  "interweave": {
    "initFormEn": "interweave",
    "displayEn": "interweave, interwove, interwoven",
    "ru": "вплести, воткать"
  },
  "keep": {"initFormEn": "keep", "displayEn": "keep, kept, kept", "ru": "хранить"},
  "ken": {"initFormEn": "ken", "displayEn": "ken, kenned, kent, kenned", "ru": "знать, узнавать по виду"},
  "kneel": {"initFormEn": "kneel", "displayEn": "kneel, knelt, kneeled, knelt, kneeled", "ru": "становиться на колени"},
  "knit": {"initFormEn": "knit", "displayEn": "knit, knit, knitted, knit, knitted", "ru": "вязать"},
  "know": {"initFormEn": "know", "displayEn": "know, knew, known", "ru": "знать"},
  "lade": {"initFormEn": "lade", "displayEn": "lade, laded, laded, laden", "ru": "грузить"},
  "lay": {"initFormEn": "lay", "displayEn": "lay, laid, laid", "ru": "класть, положить"},
  "lead": {"initFormEn": "lead", "displayEn": "lead, led, led", "ru": "вести"},
  "lean": {"initFormEn": "lean", "displayEn": "lean, leant, leaned, leant, leaned", "ru": "опереться, прислониться"},
  "leap": {"initFormEn": "leap", "displayEn": "leap, leapt, leaped, leapt, leaped", "ru": "прыгать"},
  "learn": {"initFormEn": "learn", "displayEn": "learn, learnt, learned, learnt, learned", "ru": "учить"},
  "leave": {"initFormEn": "leave", "displayEn": "leave, left, left", "ru": "оставить"},
  "lend": {"initFormEn": "lend", "displayEn": "lend, lent, lent", "ru": "одолжить"},
  "let": {"initFormEn": "let", "displayEn": "let, let, let", "ru": "пустить, дать"},
  "": {"initFormEn": "", "displayEn": ", lie, lay, lain", "ru": "лежать"},
  "light": {"initFormEn": "light", "displayEn": "light, lit, lighted, lit, lighted", "ru": "осветить"},
  "lose": {"initFormEn": "lose", "displayEn": "lose, lost, lost", "ru": "терять"},
  "make": {"initFormEn": "make", "displayEn": "make, made, made", "ru": "делать"},
  "may": {"initFormEn": "may", "displayEn": "may, might, might", "ru": "мочь, иметь возможность"},
  "mean": {"initFormEn": "mean", "displayEn": "mean, meant, meant", "ru": "подразумевать"},
  "meet": {"initFormEn": "meet", "displayEn": "meet, met, met", "ru": "встретить"},
  "miscast": {"initFormEn": "miscast", "displayEn": "miscast, miscast, miscast", "ru": "неправильно распределять роли"},
  "misdeal": {"initFormEn": "misdeal", "displayEn": "misdeal, misdealt, misdealt", "ru": "поступать неправильно"},
  "misgive": {"initFormEn": "misgive", "displayEn": "misgive, misgave, misgiven", "ru": "внушать опасения"},
  "mishear": {"initFormEn": "mishear", "displayEn": "mishear, misheard, misheard", "ru": "ослышаться"},
  "mishit": {"initFormEn": "mishit", "displayEn": "mishit, mishit, mishit", "ru": "промахнуться"},
  "mislay": {"initFormEn": "mislay", "displayEn": "mislay, mislaid, mislaid", "ru": "класть не на место"},
  "mislead": {"initFormEn": "mislead", "displayEn": "mislead, misled, misled", "ru": "ввести в заблуждение"},
  "misread": {"initFormEn": "misread", "displayEn": "misread, misread, misread", "ru": "неправильно истолковывать"},
  "misspell": {
    "initFormEn": "misspell",
    "displayEn": "misspell, misspelt, misspeled, misspelt, misspeled",
    "ru": "писать с ошибками"
  },
  "misspend": {"initFormEn": "misspend", "displayEn": "misspend, misspent, misspent", "ru": "экономить"},
  "mistake": {"initFormEn": "mistake", "displayEn": "mistake, mistook, mistaken", "ru": "неправильно понимать"},
  "misunderstand": {
    "initFormEn": "misunderstand",
    "displayEn": "misunderstand, misunderstood, misunderstood",
    "ru": "неправильно понимать"
  },
  "mow": {"initFormEn": "mow", "displayEn": "mow, mowed, mown, mowed", "ru": "косить"},
  "outbid": {"initFormEn": "outbid", "displayEn": "outbid, outbid, outbid", "ru": "перебивать цену"},
  "outdo": {"initFormEn": "outdo", "displayEn": "outdo, outdid, outdone", "ru": "превосходить"},
  "outfight": {"initFormEn": "outfight", "displayEn": "outfight, outfought, outfought", "ru": "побеждать (в бою)"},
  "outgrow": {"initFormEn": "outgrow", "displayEn": "outgrow, outgrew, outgrown", "ru": "вырастать из"},
  "output": {
    "initFormEn": "output",
    "displayEn": "output, output, outputted, output, outputted",
    "ru": "выдавать, производить"
  },
  "outrun": {"initFormEn": "outrun", "displayEn": "outrun, outran, outrun", "ru": "перегонять, опережать"},
  "outsell": {"initFormEn": "outsell", "displayEn": "outsell, outsold, outsold", "ru": "продавать лучше или дороже"},
  "outshine": {"initFormEn": "outshine", "displayEn": "outshine, outshone, outshone", "ru": "затмевать"},
  "overbid": {"initFormEn": "overbid", "displayEn": "overbid, overbid, overbid", "ru": "повелевать"},
  "overcome": {"initFormEn": "overcome", "displayEn": "overcome, overcame, overcome", "ru": "компенсировать"},
  "overdo": {
    "initFormEn": "overdo",
    "displayEn": "overdo, overdid, overdone",
    "ru": "делать что-либо излишне, чрезмерно"
  },
  "overdraw": {"initFormEn": "overdraw", "displayEn": "overdraw, overdrew, overdrawn", "ru": "превышать"},
  "overeat": {"initFormEn": "overeat", "displayEn": "overeat, overate, overeaten", "ru": "объедаться"},
  "overfly": {"initFormEn": "overfly", "displayEn": "overfly, overflew, overflown", "ru": "перелетать"},
  "overhang": {"initFormEn": "overhang", "displayEn": "overhang, overhung, overhung", "ru": "нависать"},
  "overhear": {"initFormEn": "overhear", "displayEn": "overhear, overheard, overheard", "ru": "подслушивать"},
  "overlay": {"initFormEn": "overlay", "displayEn": "overlay, overlaid, overlaid", "ru": "покрывать"},
  "overpay": {"initFormEn": "overpay", "displayEn": "overpay, overpaid, overpaid", "ru": "переплачивать"},
  "override": {"initFormEn": "override", "displayEn": "override, overrode, overridden", "ru": "отвергать, отклонять"},
  "overrun": {"initFormEn": "overrun", "displayEn": "overrun, overran, overrun", "ru": "переливаться через край"},
  "oversee": {"initFormEn": "oversee", "displayEn": "oversee, oversaw, overseen", "ru": "надзирать за"},
  "overshoot": {"initFormEn": "overshoot", "displayEn": "overshoot, overshot, overshot", "ru": "расстрелять"},
  "oversleep": {"initFormEn": "oversleep", "displayEn": "oversleep, overslept, overslept", "ru": "проспать"},
  "overtake": {"initFormEn": "overtake", "displayEn": "overtake, overtook, overtaken", "ru": "догонять"},
  "overthrow": {"initFormEn": "overthrow", "displayEn": "overthrow, overthrew, overthrown", "ru": "свергать"},
  "partake": {"initFormEn": "partake", "displayEn": "partake, partook, partaken", "ru": "вкушать"},
  "pay": {"initFormEn": "pay", "displayEn": "pay, paid, paid", "ru": "платить"},
  "plead": {"initFormEn": "plead", "displayEn": "plead, pleaded, pled, pleaded, pled", "ru": "обращаться к суду"},
  "prepay": {"initFormEn": "prepay", "displayEn": "prepay, prepaid, prepaid", "ru": "платить вперед"},
  "prove": {"initFormEn": "prove", "displayEn": "prove, proved, proved, proven", "ru": "доказывать, оказаться"},
  "put": {"initFormEn": "put", "displayEn": "put, put, put", "ru": "класть"},
  "quit": {"initFormEn": "quit", "displayEn": "quit, quit, quitted, quit, quitted", "ru": "покидать, оставлять"},
  "read": {"initFormEn": "read", "displayEn": "read, read, red, read, red", "ru": "читать"},
  "rebind": {"initFormEn": "rebind", "displayEn": "rebind, rebound, rebound", "ru": "перевязывать"},
  "rebuild": {"initFormEn": "rebuild", "displayEn": "rebuild, rebuilt, rebuilt", "ru": "перестроить"},
  "recast": {"initFormEn": "recast", "displayEn": "recast, recast, recast", "ru": "видоизменять, преобразовывать"},
  "redo": {"initFormEn": "redo", "displayEn": "redo, redid, redone", "ru": "повторять сделанное"},
  "rehear": {"initFormEn": "rehear", "displayEn": "rehear, reheard, reheard", "ru": "слушать вторично"},
  "relay": {"initFormEn": "relay", "displayEn": "relay, relayed, relayed", "ru": "передавать, транслировать"},
  "remake": {"initFormEn": "remake", "displayEn": "remake, remade, remade", "ru": "переделывать"},
  "rend": {"initFormEn": "rend", "displayEn": "rend, rent, rent", "ru": "раздирать"},
  "repay": {"initFormEn": "repay", "displayEn": "repay, repaid, repaid", "ru": "отдавать долг"},
  "rerun": {"initFormEn": "rerun", "displayEn": "rerun, reran, rerun", "ru": "выполнять повторно"},
  "resell": {"initFormEn": "resell", "displayEn": "resell, resold, resold", "ru": "перепродавать"},
  "reset": {"initFormEn": "reset", "displayEn": "reset, reset, reset", "ru": "возвращать"},
  "resit": {"initFormEn": "resit", "displayEn": "resit, resat, resat", "ru": "пересиживать"},
  "retake": {"initFormEn": "retake", "displayEn": "retake, retook, retaken", "ru": "забирать"},
  "retell": {"initFormEn": "retell", "displayEn": "retell, retold, retold", "ru": "пересказывать"},
  "rewrite": {"initFormEn": "rewrite", "displayEn": "rewrite, rewrote, rewritten", "ru": "переписать"},
  "rid": {"initFormEn": "rid", "displayEn": "rid, rid, ridded, rid, ridded", "ru": "избавлять"},
  "ride": {"initFormEn": "ride", "displayEn": "ride, rode, ridden", "ru": "ездить верхом"},
  "ring": {"initFormEn": "ring", "displayEn": "ring, rang, rung", "ru": "звонить"},
  "rise": {"initFormEn": "rise", "displayEn": "rise, rose, risen", "ru": "подняться"},
  "rive": {"initFormEn": "rive", "displayEn": "rive, rived, riven", "ru": "расщеплять"},
  "run": {"initFormEn": "run", "displayEn": "run, ran, run", "ru": "бежать, течь"},
  "saw": {"initFormEn": "saw", "displayEn": "saw, sawed, sawn, sawed", "ru": "пилить"},
  "say": {"initFormEn": "say", "displayEn": "say, said, said", "ru": "говорить, сказать"},
  "see": {"initFormEn": "see", "displayEn": "see, saw, seen", "ru": "видеть"},
  "seek": {"initFormEn": "seek", "displayEn": "seek, sought, sought", "ru": "искать"},
  "sell": {"initFormEn": "sell", "displayEn": "sell, sold, sold", "ru": "продавать"},
  "send": {"initFormEn": "send", "displayEn": "send, sent, sent", "ru": "послать"},
  "set": {"initFormEn": "set", "displayEn": "set, set, set", "ru": "устанавливать"},
  "sew": {"initFormEn": "sew", "displayEn": "sew, sewed, sewed, sewn", "ru": "шить"},
  "shake": {"initFormEn": "shake", "displayEn": "shake, shook, shaken", "ru": "трясти"},
  "shave": {"initFormEn": "shave", "displayEn": "shave, shaved, shaved, shaven", "ru": "брить"},
  "shear": {"initFormEn": "shear", "displayEn": "shear, sheared, shorn, sheared", "ru": "стричь"},
  "shed": {"initFormEn": "shed", "displayEn": "shed, shed, shed", "ru": "проливать"},
  "shine": {"initFormEn": "shine", "displayEn": "shine, shone, shined, shone, shined", "ru": "светить, сиять"},
  "shoe": {"initFormEn": "shoe", "displayEn": "shoe, shod, shod", "ru": "обувать, подковывать"},
  "shoot": {"initFormEn": "shoot", "displayEn": "shoot, shot, shot", "ru": "стрелять, давать побеги"},
  "show": {"initFormEn": "show", "displayEn": "show, showed, shown, showed", "ru": "показывать"},
  "shred": {
    "initFormEn": "shred",
    "displayEn": "shred, shred, shredded, shred, shredded",
    "ru": "кромсать, расползаться"
  },
  "shrink": {
    "initFormEn": "shrink",
    "displayEn": "shrink, shrank, shrunk, shrunk",
    "ru": "сокращаться, сжиматься, отпрянуть"
  },
  "shrive": {"initFormEn": "shrive", "displayEn": "shrive, shrove, shrived, shriven, shrived", "ru": "исповедовать"},
  "shut": {"initFormEn": "shut", "displayEn": "shut, shut, shut", "ru": "закрывать"},
  "sing": {"initFormEn": "sing", "displayEn": "sing, sang, sung", "ru": "петь"},
  "sink": {"initFormEn": "sink", "displayEn": "sink, sank, sunk", "ru": "тонуть"},
  "sit": {"initFormEn": "sit", "displayEn": "sit, sat, sat", "ru": "сидеть"},
  "slay": {"initFormEn": "slay", "displayEn": "slay, slew, slain", "ru": "убивать"},
  "sleep": {"initFormEn": "sleep", "displayEn": "sleep, slept, slept", "ru": "спать"},
  "slide": {"initFormEn": "slide", "displayEn": "slide, slid, slid", "ru": "скользить"},
  "sling": {"initFormEn": "sling", "displayEn": "sling, slung, slung", "ru": "швырять, подвешивать"},
  "slink": {"initFormEn": "slink", "displayEn": "slink, slunk, slunk", "ru": "идти крадучись"},
  "slit": {"initFormEn": "slit", "displayEn": "slit, slit, slit", "ru": "раздирать, разрезать (вдоль)"},
  "smell": {"initFormEn": "smell", "displayEn": "smell, smelt, smelled, smelt, smelled", "ru": "пахнуть, нюхать"},
  "smite": {"initFormEn": "smite", "displayEn": "smite, smote, smitten", "ru": "ударять, разбивать"},
  "sow": {"initFormEn": "sow", "displayEn": "sow, sowed, sowed, sown", "ru": "сеять"},
  "speak": {"initFormEn": "speak", "displayEn": "speak, spoke, spoken", "ru": "говорить"},
  "speed": {"initFormEn": "speed", "displayEn": "speed, sped, speeded, sped, speeded", "ru": "ускорять, спешить"},
  "spell": {
    "initFormEn": "spell",
    "displayEn": "spell, spelt, spelled, spell, spelled",
    "ru": "писать или читать по буквам"
  },
  "spend": {"initFormEn": "spend", "displayEn": "spend, spent, spent", "ru": "тратить, проводить"},
  "spill": {"initFormEn": "spill", "displayEn": "spill, spilt, spilled, spilt, spilled", "ru": "пролить"},
  "spin": {"initFormEn": "spin", "displayEn": "spin, spun, span, spun", "ru": "прясть"},
  "spit": {"initFormEn": "spit", "displayEn": "spit, spat, spit, spat, spit", "ru": "плевать"},
  "split": {"initFormEn": "split", "displayEn": "split, split, split", "ru": "расщепить"},
  "spoil": {"initFormEn": "spoil", "displayEn": "spoil, spoilt, spoiled, spoilt, spoiled", "ru": "портить"},
  "spotlight": {
    "initFormEn": "spotlight",
    "displayEn": "spotlight, spotlit, spotlighted, spotlit, spotlighted",
    "ru": "осветить"
  },
  "spread": {"initFormEn": "spread", "displayEn": "spread, spread, spread", "ru": "распространяться"},
  "spring": {"initFormEn": "spring", "displayEn": "spring, sprang, sprung", "ru": "скакать, пружинить"},
  "stand": {"initFormEn": "stand", "displayEn": "stand, stood, stood", "ru": "стоять"},
  "stave": {"initFormEn": "stave", "displayEn": "stave, staved, stove, staved, stove", "ru": "проламывать, разбивать"},
  "steal": {"initFormEn": "steal", "displayEn": "steal, stole, stolen", "ru": "украсть"},
  "stick": {"initFormEn": "stick", "displayEn": "stick, stuck, stuck", "ru": "уколоть, приклеить"},
  "sting": {"initFormEn": "sting", "displayEn": "sting, stung, stung", "ru": "ужалить"},
  "stink": {"initFormEn": "stink", "displayEn": "stink, stank, stunk, stunk", "ru": "вонять"},
  "strew": {"initFormEn": "strew", "displayEn": "strew, strewed, strewn, strewed", "ru": "усеять, устлать"},
  "stride": {"initFormEn": "stride", "displayEn": "stride, strode, stridden", "ru": "шагать"},
  "strike": {"initFormEn": "strike", "displayEn": "strike, struck, struck", "ru": "ударить, бить, бастовать"},
  "string": {"initFormEn": "string", "displayEn": "string, strung, strung", "ru": "нанизать, натянуть"},
  "strive": {"initFormEn": "strive", "displayEn": "strive, strove, striven", "ru": "стараться"},
  "sublet": {"initFormEn": "sublet", "displayEn": "sublet, sublet, sublet", "ru": "передавать в субаренду"},
  "swear": {"initFormEn": "swear", "displayEn": "swear, swore, sworn", "ru": "клясться, браниться"},
  "sweat": {"initFormEn": "sweat", "displayEn": "sweat, sweat, sweated, sweat, sweated", "ru": "потеть"},
  "sweep": {"initFormEn": "sweep", "displayEn": "sweep, swept, swept", "ru": "мести, промчаться"},
  "swell": {"initFormEn": "swell", "displayEn": "swell, swelled, swollen, swelled", "ru": "вздуться"},
  "swim": {"initFormEn": "swim", "displayEn": "swim, swam, swum", "ru": "плыть"},
  "swing": {"initFormEn": "swing", "displayEn": "swing, swung, swung", "ru": "качаться"},
  "take": {"initFormEn": "take", "displayEn": "take, took, taken", "ru": "взять, брать"},
  "teach": {"initFormEn": "teach", "displayEn": "teach, taught, taught", "ru": "учить"},
  "tear": {"initFormEn": "tear", "displayEn": "tear, tore, torn", "ru": "рвать"},
  "tell": {"initFormEn": "tell", "displayEn": "tell, told, told", "ru": "рассказывать, сказать"},
  "think": {"initFormEn": "think", "displayEn": "think, thought, thought", "ru": "думать"},
  "thrive": {"initFormEn": "thrive", "displayEn": "thrive, throve, trived, thriven, trived", "ru": "процветать"},
  "throw": {"initFormEn": "throw", "displayEn": "throw, threw, thrown", "ru": "бросить"},
  "thrust": {"initFormEn": "thrust", "displayEn": "thrust, thrust, thrust", "ru": "толкнуть, сунуть"},
  "tread": {"initFormEn": "tread", "displayEn": "tread, trod, trod, trodden", "ru": "ступать"},
  "unbend": {"initFormEn": "unbend", "displayEn": "unbend, unbent, unbent", "ru": "разогнуть"},
  "underbid": {"initFormEn": "underbid", "displayEn": "underbid, underbid, underbid", "ru": "снижать цену"},
  "undercut": {"initFormEn": "undercut", "displayEn": "undercut, undercut, undercut", "ru": "сбивать цены"},
  "undergo": {"initFormEn": "undergo", "displayEn": "undergo, underwent, undergone", "ru": "проходить, подвергаться"},
  "underlie": {"initFormEn": "underlie", "displayEn": "underlie, underlay, underlain", "ru": "лежать в основе"},
  "underpay": {
    "initFormEn": "underpay",
    "displayEn": "underpay, underpaid, underpaid",
    "ru": "оплачивать слишком низко"
  },
  "undersell": {"initFormEn": "undersell", "displayEn": "undersell, undersold, undersold", "ru": "продавать дешевле"},
  "understand": {"initFormEn": "understand", "displayEn": "understand, understood, understood", "ru": "понимать"},
  "undertake": {"initFormEn": "undertake", "displayEn": "undertake, undertook, undertaken", "ru": "предпринять"},
  "underwrite": {"initFormEn": "underwrite", "displayEn": "underwrite, underwrote, underwritten", "ru": "подписывать"},
  "undo": {"initFormEn": "undo", "displayEn": "undo, undid, undone", "ru": "уничтожать сделанное"},
  "unfreeze": {"initFormEn": "unfreeze", "displayEn": "unfreeze, unfroze, unfrozen", "ru": "размораживать"},
  "unsay": {"initFormEn": "unsay", "displayEn": "unsay, unsaid, unsaid", "ru": "брать назад свои слова"},
  "unwind": {"initFormEn": "unwind", "displayEn": "unwind, unwound, unwound", "ru": "развертывать"},
  "uphold": {"initFormEn": "uphold", "displayEn": "uphold, upheld, upheld", "ru": "поддерживать"},
  "upset": {"initFormEn": "upset", "displayEn": "upset, upset, upset", "ru": "опрокинуть, огорчить"},
  "wake": {"initFormEn": "wake", "displayEn": "wake, woke, waked, woken, waked", "ru": "просыпаться, будить"},
  "waylay": {"initFormEn": "waylay", "displayEn": "waylay, waylaid, waylaid", "ru": "подстерегать"},
  "wear": {"initFormEn": "wear", "displayEn": "wear, wore, worn", "ru": "носить (одежду)"},
  "weave": {"initFormEn": "weave", "displayEn": "weave, wove, weaved, woven, weaved", "ru": "ткать"},
  "wed": {"initFormEn": "wed", "displayEn": "wed, wed, wedded, wed, wedded", "ru": "выдавать замуж"},
  "weep": {"initFormEn": "weep", "displayEn": "weep, wept, wept", "ru": "плакать"},
  "wet": {"initFormEn": "wet", "displayEn": "wet, wet, wetted, wet, wetted", "ru": "мочить, увлажнять"},
  "win": {"initFormEn": "win", "displayEn": "win, won, won", "ru": "выиграть"},
  "wind": {"initFormEn": "wind", "displayEn": "wind, wound, wound", "ru": "заводить (механизм)"},
  "withdraw": {"initFormEn": "withdraw", "displayEn": "withdraw, withdrew, withdrawn", "ru": "взять назад, отозвать"},
  "withhold": {"initFormEn": "withhold", "displayEn": "withhold, withheld, withheld", "ru": "удерживать"},
  "withstand": {"initFormEn": "withstand", "displayEn": "withstand, withstood, withstood", "ru": "противиться"},
  "work": {"initFormEn": "work", "displayEn": "work, worked, wrought, worked, wrought", "ru": "работать"},
  "wring": {"initFormEn": "wring", "displayEn": "wring, wrung, wrung", "ru": "скрутить, сжать"},
  "write": {"initFormEn": "write", "displayEn": "write, wrote, written", "ru": "писать"},

  "go out": {
    "initFormEn": "go out",
    "displayEn": "go out",
    "ru": "непереходный:1) выходить в свет, в люди 2) издаваться 3) выйти из моды 4) потерять сознание 5) выйти из строя выйти из строя"
  },
  "go through": {
    "initFormEn": "go through",
    "displayEn": "go through",
    "ru": "неразделяемый (почти всегда), непереходный:1) преодолеть (трудности и т.п.) 2) исследовать 3) быть одобренным 4) быть изданным"
  },
  "stand up": {"initFormEn": "stand up", "displayEn": "stand up", "ru": "непереходный: выдержать проверку на что-либо"},
  "feel up to": {"initFormEn": "feel up to", "displayEn": "feel up to", "ru": "неразделяемый: быть в силах, готовым"},
  "come on": {
    "initFormEn": "come on",
    "displayEn": "come on",
    "ru": "неразделяемый, непереходный:1) надвигаться 2) наткнуться 3) включиться 4) приставать 5) Давай! Прекрати! (в повелит. наклонении)"
  },
  "mix up": {"initFormEn": "mix up", "displayEn": "mix up", "ru": "разделяемый: перепутать"},
  "hold up": {
    "initFormEn": "hold up",
    "displayEn": "hold up",
    "ru": "разделяемый:1) поддержать 2) показать над головой 3) ограбить 4) задержать"
  },
  "turn out": {
    "initFormEn": "turn out",
    "displayEn": "turn out",
    "ru": "непереходный: обнаружиться разделяемый:1) выгнать 2) погасить свет 3) опустошить"
  },
  "come across": {
    "initFormEn": "come across",
    "displayEn": "come across",
    "ru": "неразделяемый: наткнуться, встретить непереходный: доходить"
  },
  "put forward": {
    "initFormEn": "put forward",
    "displayEn": "put forward",
    "ru": "разделяемый:1) выдвинуть на пост 2) представить на рассмотрение 3) перевести часы вперед"
  },
  "put on": {
    "initFormEn": "put on",
    "displayEn": "put on",
    "ru": "разделяемый:1) надеть 2) включить 3) включить 4) организовать 5) прибавить (в весе и т.п.) 6) притвориться"
  },
  "go without": {"initFormEn": "go without", "displayEn": "go without", "ru": "неразделяемый, непереходный: нуждаться"},
  "set off": {
    "initFormEn": "set off",
    "displayEn": "set off",
    "ru": "непереходный: отправиться разделяемый: вызвать, побудить"
  },
  "knock out": {
    "initFormEn": "knock out",
    "displayEn": "knock out",
    "ru": "разделяемый:1) нокаутировать 2) сломать 3) отключить электричество 4) работать на износ"
  },
  "get down": {
    "initFormEn": "get down",
    "displayEn": "get down",
    "ru": "разделяемый:1) расстроиться 2) записать 3) проглотить 4) подстрелить"
  },
  "go away": {
    "initFormEn": "go away",
    "displayEn": "go away",
    "ru": "непереходный:1) закончиться 2) сбежать 3) лидировать"
  },
  "look up": {
    "initFormEn": "look up",
    "displayEn": "look up",
    "ru": "непереходный: улучшиться (о ситуации) разделяемый: искать информацию неразделяемый: уважать"
  },
  "call up": {
    "initFormEn": "call up",
    "displayEn": "call up",
    "ru": "1) призывать на службу2) вызвать меню (компьютер) 2) вызвать меню (компьютер)"
  },
  "pull away": {
    "initFormEn": "pull away",
    "displayEn": "pull away",
    "ru": "непереходный:1) тронуться 2) вырваться вперед 3) отпрянуть"
  },
  "look on": {
    "initFormEn": "look on",
    "displayEn": "look on",
    "ru": "непереходный, неразделяемый:1) наблюдать со стороны 2) рассматривать"
  },
  "look out": {
    "initFormEn": "look out",
    "displayEn": "look out",
    "ru": "непереходный:1) быть настороже 2) выходить (на какую-то сторону)"
  },
  "get around (to)": {
    "initFormEn": "get around (to)",
    "displayEn": "get around (to)",
    "ru": "неразделяемый, непереходный:1) перехитрить 2) передвигаться 3) приступить"
  },
  "eat out": {"initFormEn": "eat out", "displayEn": "eat out", "ru": "непереходный: есть вне дома"},
  "put down": {
    "initFormEn": "put down",
    "displayEn": "put down",
    "ru": "разделяемый:1) критиковать 2) ругать 3) укладывать спать 4) делать заготовки на зиму 5) сажать самолет 6) пресекать"
  },
  "get over with": {
    "initFormEn": "get over with",
    "displayEn": "get over with",
    "ru": "разделяемый: разделаться (о делах)"
  },
  "check in": {
    "initFormEn": "check in",
    "displayEn": "check in",
    "ru": "непереходный: прописываться, регистрироваться разделяемый: прописать, зарегистрировать"
  },
  "try on": {"initFormEn": "try on", "displayEn": "try on", "ru": "разделяемый: примерять"},
  "get away with": {"initFormEn": "get away with", "displayEn": "get away with", "ru": "остаться безнаказанным"},
  "take after": {"initFormEn": "take after", "displayEn": "take after", "ru": "неразделяемый: быть похожим"},
  "call off": {"initFormEn": "call off", "displayEn": "call off", "ru": "разделяемый: отложить, перенести"},
  "turn away": {
    "initFormEn": "turn away",
    "displayEn": "turn away",
    "ru": "разделяемый: прогнать, не пустить непереходный: отвернуться"
  },
  "come out": {
    "initFormEn": "come out",
    "displayEn": "come out",
    "ru": "непереходный:1) приехать 2) возникать, появляться 3) освободиться, выписаться 4) получить известность 5) бывать в обществе"
  },
  "drop in": {"initFormEn": "drop in", "displayEn": "drop in", "ru": "непереходный:1) заскочить 2) присоединиться"},
  "cut off": {"initFormEn": "cut off", "displayEn": "cut off", "ru": "разделяемый:1) отрубить, отрезать 2) прекратить"},
  "grow up": {"initFormEn": "grow up", "displayEn": "grow up", "ru": "непереходный: вырасти, повзрослеть"},
  "let in": {"initFormEn": "let in", "displayEn": "let in", "ru": "разделяемый:1) впустить 2) посвятить"},
  "run into": {
    "initFormEn": "run into",
    "displayEn": "run into",
    "ru": "неразделяемый:1) столкнуться 2) достичь уровня 3) встретиться"
  },
  "have on": {"initFormEn": "have on", "displayEn": "have on", "ru": "разделяемый:1) дурачить 2) носить (об одежде)"},
  "be off": {
    "initFormEn": "be off",
    "displayEn": "be off",
    "ru": "непереходный:1) уехать, уйти 2) не работать, быть свободным 3) испортиться"
  },
  "knock down": {
    "initFormEn": "knock down",
    "displayEn": "knock down",
    "ru": "разделяемый:1) сбивать с ног 2) разрушать 3) снижать"
  },
  "pass out": {
    "initFormEn": "pass out",
    "displayEn": "pass out",
    "ru": "непереходный:1) терять сознание 2) успешно пройти курс разделяемый: раздать"
  },
  "put up": {
    "initFormEn": "put up",
    "displayEn": "put up",
    "ru": "непереходный: разместиться разделяемый:1) приютить, разместить 2) выдвинуть кандидатуру 3) построить 4) поднять (руку и т.п.) 5) обеспечивать 6) повысить цены 7) консервировать 8) организовать"
  },
  "do in": {"initFormEn": "do in", "displayEn": "do in", "ru": "разделяемый:1) вымотать 2) прикончить"},
  "go with": {"initFormEn": "go with", "displayEn": "go with", "ru": "непереходный:1) подходить 2) встречаться"},
  "get in": {
    "initFormEn": "get in",
    "displayEn": "get in",
    "ru": "неразделяемый, непереходный:1) войти 2) прибыть 3) поступить 4) подружиться"
  },
  "hold on": {
    "initFormEn": "hold on",
    "displayEn": "hold on",
    "ru": "непереходный:1) держаться за 2) упорствовать 3) ждать у телефона разделяемый: прикрепить"
  },
  "go by": {"initFormEn": "go by", "displayEn": "go by", "ru": "непереходный:1) проходить (о времени) 2) упустить"},
  "set up": {
    "initFormEn": "set up",
    "displayEn": "set up",
    "ru": "разделяемый:1) установить 2) основать 3) восстановить (силы и т.п.) 4) выдавать себя за кого-то 5) подводить кого-то"
  },
  "help out": {"initFormEn": "help out", "displayEn": "help out", "ru": "разделяемый: помогать"},
  "run away": {"initFormEn": "run away", "displayEn": "run away", "ru": "непереходный: сбежать"},
  "turn down": {"initFormEn": "turn down", "displayEn": "turn down", "ru": "разделяемый:1) уменьшить 2) отклонить"},
  "back down": {"initFormEn": "back down", "displayEn": "back down", "ru": "непереходный: уступить"},
  "look after": {"initFormEn": "look after", "displayEn": "look after", "ru": "неразделяемый: заботиться"},
  "fall through": {"initFormEn": "fall through", "displayEn": "fall through", "ru": "непереходный: провалиться"},
  "make up": {
    "initFormEn": "make up",
    "displayEn": "make up",
    "ru": "непереходный: мириться неразделяемый: составить единое целое разделяемый:1) наносить косметику 2) наверстать 3) компенсировать 4) придумывать 5) готовить 6) прибирать"
  },
  "work up": {
    "initFormEn": "work up",
    "displayEn": "work up",
    "ru": "разделяемый:1) возбуждаться, волноваться 2) выработать"
  },
  "lie behind": {"initFormEn": "lie behind", "displayEn": "lie behind", "ru": "неразделяемый: служить причиной"},
  "turn over": {
    "initFormEn": "turn over",
    "displayEn": "turn over",
    "ru": "непереходный:1) запуститься (о моторе) 2) переключаться на другой канал разделяемый:1) завести мотор 2) передать управление кому-то"
  },
  "stand out": {
    "initFormEn": "stand out",
    "displayEn": "stand out",
    "ru": "непереходный:1) отличаться, выделяться 2) выступать против или за"
  },
  "pull over": {"initFormEn": "pull over", "displayEn": "pull over", "ru": "непереходный: съехать на обочину"},
  "shut off": {"initFormEn": "shut off", "displayEn": "shut off", "ru": "отключать"},
  "sit back": {"initFormEn": "sit back", "displayEn": "sit back", "ru": "непереходный: расслабиться, бездельничать"},
  "run out": {
    "initFormEn": "run out",
    "displayEn": "run out",
    "ru": "непереходный:1) закончиться 2) сбежать 3) истекать"
  },
  "tell apart": {"initFormEn": "tell apart", "displayEn": "tell apart", "ru": "разделяемый: различать"},
  "hung up": {
    "initFormEn": "hung up",
    "displayEn": "hung up",
    "ru": "непереходный: положить трубку разделяемый: повесить"
  },
  "put in": {
    "initFormEn": "put in",
    "displayEn": "put in",
    "ru": "непереходный: вставить слово разделяемый:1) подключить оборудование 2) подать (иск и т.п.) 3) вложить деньги, силы"
  },
  "turn against": {
    "initFormEn": "turn against",
    "displayEn": "turn against",
    "ru": "неразделяемый: испытать неприязнь"
  },
  "go over": {
    "initFormEn": "go over",
    "displayEn": "go over",
    "ru": "неразделяемый, непереходный:1) проверить 2) сменить, партию и т.п. 3) быть принятым"
  },
  "work out": {
    "initFormEn": "work out",
    "displayEn": "work out",
    "ru": "непереходный:1) тренироваться 2) составить сумму 3) иметь хороший результат разделяемый 1) подсчитать 2) решить (проблему и т.п.) 3) спланировать"
  },
  "turn up": {
    "initFormEn": "turn up",
    "displayEn": "turn up",
    "ru": "непереходный: появиться, оказаться разделяемый:1) усилить (о звуке), прибавить (газ и т.п.) 2) подвернуть рукава и т.п. 3) отыскать информацию"
  },
  "come off": {
    "initFormEn": "come off",
    "displayEn": "come off",
    "ru": "неразделяемый, непереходный:1) состояться 2) справиться 3) удалиться 4) оторваться 5) бросить что-либо"
  },
  "hand in": {
    "initFormEn": "hand in",
    "displayEn": "hand in",
    "ru": "разделяемый:1) сдать (о работе) 2) подать (прошение и пр.)"
  },
  "end up": {"initFormEn": "end up", "displayEn": "end up", "ru": "непереходный: добраться"},
  "let up": {"initFormEn": "let up", "displayEn": "let up", "ru": "неразделяемый: ослабеть"},
  "turn back": {
    "initFormEn": "turn back",
    "displayEn": "turn back",
    "ru": "разделяемый или непереходный: возвратиться разделяемый: вернуть"
  },
  "go off": {
    "initFormEn": "go off",
    "displayEn": "go off",
    "ru": "непереходный:1) взорваться 2) испортиться (о еде) 3) заснуть 4) отключиться 5) исчезнуть"
  },
  "hand out": {"initFormEn": "hand out", "displayEn": "hand out", "ru": "разделяемый: выдать, раздать"},
  "take up": {
    "initFormEn": "take up",
    "displayEn": "take up",
    "ru": "разделяемый:1) взяться за что-то 2) занять должность 3) отнимать у кого-то время и т.п. 4) путаться с кем-то 5) укоротить 6) принимать вызов и т.п."
  },
  "fill in": {"initFormEn": "fill in", "displayEn": "fill in", "ru": "  разделяемый: заполнить (об анкете)"},
  "run on": {"initFormEn": "run on", "displayEn": "run on", "ru": "неразделяемый: тянуться"},
  "get through": {
    "initFormEn": "get through",
    "displayEn": "get through",
    "ru": "разделяемый: сдать экзамен непереходный: дозвониться"
  },
  "put back": {
    "initFormEn": "put back",
    "displayEn": "put back",
    "ru": "разделяемый:1) отложить 2) положить на место 3) вернуться к берегу 4) переставить назад стрелки часов"
  },
  "blow up": {
    "initFormEn": "blow up",
    "displayEn": "blow up",
    "ru": "непереходный:1) взрываться 2) разозлиться 3) разразиться, начаться разделяемый:1) взрывать, уничтожать 2) ругать 3) надуть"
  },
  "take on": {
    "initFormEn": "take on",
    "displayEn": "take on",
    "ru": "разделяемый1) принять на работу 2) брать на себя ответственность 3) иметь какие-либо качества 4) расстраиваться, сердиться"
  },
  "come from": {
    "initFormEn": "come from",
    "displayEn": "come from",
    "ru": "неразделяемый: происходить откуда-то, быть родом"
  },
  "pass away": {"initFormEn": "pass away", "displayEn": "pass away", "ru": "непереходный: умереть"},
  "clean up": {"initFormEn": "clean up", "displayEn": "clean up", "ru": "разделяемый: прибирать"},
  "put through": {
    "initFormEn": "put through",
    "displayEn": "put through",
    "ru": "разделяемый:1) соединять по телефону 2) создать проблемы 3) закончить работу 4) платить за обучение"
  },
  "break into": {
    "initFormEn": "break into",
    "displayEn": "break into",
    "ru": "неразделяемый:1) вломиться силой 2) вмешаться 3) разразиться"
  },
  "set back": {"initFormEn": "set back", "displayEn": "set back", "ru": "разделяемый:1) задерживать 2) обходиться"},
  "give up": {"initFormEn": "give up", "displayEn": "give up", "ru": "неразделяемый: сдаться разделяемый: отказаться"},
  "find out": {"initFormEn": "find out", "displayEn": "find out", "ru": "разделяемый: разоблачать, раскрыть"},
  "be out": {
    "initFormEn": "be out",
    "displayEn": "be out",
    "ru": "непереходный:1) быть на улице 2) распуститься 3) выходить их моды 4) появиться, взойти (о светиле) 5) публиковаться 6) вылететь (с работы, из игры и пр.) 7) ошибиться 8) завершиться"
  },
  "get back": {
    "initFormEn": "get back",
    "displayEn": "get back",
    "ru": "непереходный:1) перезвонить 2) вернуться разделяемый:1) отомстить 2) вернуть что-то"
  },
  "sit down": {"initFormEn": "sit down", "displayEn": "sit down", "ru": "непереходный: сесть"},
  "blow out": {
    "initFormEn": "blow out",
    "displayEn": "blow out",
    "ru": "1) непереходный: взрываться, разбиваться 2) разделяемый: потушить огонь 3) разделяемый: взорвать, разнести"
  },
  "turn into": {
    "initFormEn": "turn into",
    "displayEn": "turn into",
    "ru": "неразделяемый: превратиться разделяемый: превратить"
  },
  "be up to": {
    "initFormEn": "be up to",
    "displayEn": "be up to",
    "ru": "неразделяемый:1) быть расположенным 2) соответствовать нормам, уровню"
  },
  "move on": {"initFormEn": "move on", "displayEn": "move on", "ru": "непереходный: идти дальше"},
  "cross out": {"initFormEn": "cross out", "displayEn": "cross out", "ru": "разделяемый: вычеркнуть"},
  "walk off": {
    "initFormEn": "walk off",
    "displayEn": "walk off",
    "ru": "непереходный: удрать с украденными вещами разделяемый: пройтись после обильной еды"
  },
  "look out for": {"initFormEn": "look out for", "displayEn": "look out for", "ru": "подыскать разделяемый: разыскать"},
  "line up": {
    "initFormEn": "line up",
    "displayEn": "line up",
    "ru": "непереходный, разделяемый: выстроить, построиться в линию"
  },
  "wake up": {
    "initFormEn": "wake up",
    "displayEn": "wake up",
    "ru": "непереходный: проснуться, прийти в себя разделяемый: будить"
  },
  "tell on": {
    "initFormEn": "tell on",
    "displayEn": "tell on",
    "ru": "чаще неразделяемый: доносить неразделяемый: плохо влиять на здоровье и т.п."
  },
  "switch on": {
    "initFormEn": "switch on",
    "displayEn": "switch on",
    "ru": "  разделяемый: включить непереходный: включиться"
  },
  "pull up": {
    "initFormEn": "pull up",
    "displayEn": "pull up",
    "ru": "непереходный: подъехать, притормозить разделяемый:1) ругать 2) останавливать 3) улучшать"
  },
  "drop by": {"initFormEn": "drop by", "displayEn": "drop by", "ru": "неразделяемый, непереходный: зайти"},
  "get on": {
    "initFormEn": "get on",
    "displayEn": "get on",
    "ru": "непереходный:1) входить в общественный транспорт 2) уживаться 3) поживать 4) продолжить что-либо разделяемый: надеть"
  },
  "go ahead": {
    "initFormEn": "go ahead",
    "displayEn": "go ahead",
    "ru": "непереходный:1) продолжиться 2) продолжить, начать говорить"
  },
  "hang on": {
    "initFormEn": "hang on",
    "displayEn": "hang on",
    "ru": "неразделяемый, непереходный:1) вцепиться 2) удерживать, сохранять 3) подождать у телефона"
  },
  "go in": {
    "initFormEn": "go in",
    "displayEn": "go in",
    "ru": "непереходный:1) начинать работать 2) участвовать 3) заходить за тучу (о светиле) 4) увлекаться"
  },
  "run across": {"initFormEn": "run across", "displayEn": "run across", "ru": "неразделяемый: случайно встретить"},
  "break up": {
    "initFormEn": "break up",
    "displayEn": "break up",
    "ru": "непереходный:1) рассеяться 2) расстаться 3) закончиться (о мероприятии), прекращать (занятия) разделяемый:1) прекращать, останавливать 2) разорвать, расторгнуть, разрушить"
  },
  "stand for": {
    "initFormEn": "stand for",
    "displayEn": "stand for",
    "ru": "непереходный, неразделяемый 1) терпеть 2) поддерживать идеи и т.п."
  },
  "do over": {
    "initFormEn": "do over",
    "displayEn": "do over",
    "ru": "  разделяемый:1) переделать, обновить, отремонтировать"
  },
  "wear out": {"initFormEn": "wear out", "displayEn": "wear out", "ru": "разделяемый:1) износить 2) изнурить"},
  "caryy on": {"initFormEn": "caryy on", "displayEn": "caryy on", "ru": "разделяемый: продолжать делать"},
  "take off": {
    "initFormEn": "take off",
    "displayEn": "take off",
    "ru": "непереходный: уйти, отправиться разделяемый:1) снимать с себя 2) убирать 3) взять выходной"
  },
  "set down": {
    "initFormEn": "set down",
    "displayEn": "set down",
    "ru": "разделяемый:1) высадить пассажиров 2) записать 3) установить правило"
  },
  "run off": {
    "initFormEn": "run off",
    "displayEn": "run off",
    "ru": "неразделяемый: убежать разделяемый: печатать копии"
  },
  "look down on": {"initFormEn": "look down on", "displayEn": "look down on", "ru": "неразделяемый:"},
  "come forward": {
    "initFormEn": "come forward",
    "displayEn": "come forward",
    "ru": "  непереходный: пожелать что-то сделать"
  },
  "put off": {
    "initFormEn": "put off",
    "displayEn": "put off",
    "ru": "разделяемый:1) отложить 2) вызвать какое-то чувство 3) отвлечь 4) выключить электричество 5) отделаться"
  },
  "turn off": {
    "initFormEn": "turn off",
    "displayEn": "turn off",
    "ru": "разделяемый:1) выключать (приборы) 2) вызывать отвращение непереходный, неразделяемый: повернуть на другой путь"
  },
  "make out": {
    "initFormEn": "make out",
    "displayEn": "make out",
    "ru": "непереходный: поживать разделяемый:1) разбирать, разбираться 2) составить документ неразделяемый: притвориться"
  },
  "walk in on": {
    "initFormEn": "walk in on",
    "displayEn": "walk in on",
    "ru": "неразделяемый: наткнуться неожиданно, войти и создать неловкую ситуацию"
  },
  "break free / away": {
    "initFormEn": "break free / away",
    "displayEn": "break free / away",
    "ru": "непереходный:1) освободиться 2) вырваться вперед"
  },
  "call back": {
    "initFormEn": "call back",
    "displayEn": "call back",
    "ru": "разделяемый:1) отозвать 2) перезвонить 3) восстановить 4) вспомнить"
  },
  "break out": {
    "initFormEn": "break out",
    "displayEn": "break out",
    "ru": "непереходный:1) прорваться, вырваться 2) вспыхивать, начинаться 3) покрываться потом и т. п.   разделяемый, переходный: разворачивать"
  },
  "go for": {
    "initFormEn": "go for",
    "displayEn": "go for",
    "ru": "неразделяемый:1) принять решение 2) добиваться 3) нападать 4) относиться"
  },
  "let down": {"initFormEn": "let down", "displayEn": "let down", "ru": "разделяемый: подвести"},
  "settle down": {
    "initFormEn": "settle down",
    "displayEn": "settle down",
    "ru": "непереходный: устроиться, поселиться разделяемый: остепениться, угомониться"
  },
  "wind up": {
    "initFormEn": "wind up",
    "displayEn": "wind up",
    "ru": "непереходный: закончить где-то, очутиться разделяемый:1) дразнить, злить 2) закрыть компанию 3) завести часы и т.п."
  },
  "go out with": {"initFormEn": "go out with", "displayEn": "go out with", "ru": "  выходить с кем-либо"},
  "do away (with)": {"initFormEn": "do away (with)", "displayEn": "do away (with)", "ru": "разделаться"},
  "keep up": {
    "initFormEn": "keep up",
    "displayEn": "keep up",
    "ru": "непереходный:1) поспевать 2) продолжать (делать) 3) быть в курсе 4) поддерживать связи 5) нагнать разделяемый:1) поддерживать (отношения и т.п.) 2) продолжать (делать) 3) содержать на уровне 4) не давать спать"
  },
  "stick together": {
    "initFormEn": "stick together",
    "displayEn": "stick together",
    "ru": "непереходный: оставаться вместе"
  },
  "throw away": {
    "initFormEn": "throw away",
    "displayEn": "throw away",
    "ru": "разделяемый:1) выбросить 2) упустить шанс"
  },
  "fill in for": {"initFormEn": "fill in for", "displayEn": "fill in for", "ru": "непереходный: заменить"},
  "let out": {
    "initFormEn": "let out",
    "displayEn": "let out",
    "ru": "неразделяемый: заканчиваться разделяемый:1) освободить (от обязательств и пр.) 2) издать (звук и т.п.) 3) сделать шире 4) сообщить"
  },
  "keep on": {
    "initFormEn": "keep on",
    "displayEn": "keep on",
    "ru": "неразделяемый: продолжить непереходный: пилить, ныть"
  },
  "hang around / about": {
    "initFormEn": "hang around / about",
    "displayEn": "hang around / about",
    "ru": "непереходный:1) околачиваться 2) надвигаться"
  },
  "draw up": {"initFormEn": "draw up", "displayEn": "draw up", "ru": "разделяемый: составить (о тексте)"},
  "fill out": {
    "initFormEn": "fill out",
    "displayEn": "fill out",
    "ru": "разделяемый: заполнить (об анкете) непереходный: потолстеть"
  },
  "go up": {
    "initFormEn": "go up",
    "displayEn": "go up",
    "ru": "непереходный:1) увеличиться 2) повысить статус положения 3) строиться 4) загореться внезапно"
  },
  "take back": {
    "initFormEn": "take back",
    "displayEn": "take back",
    "ru": "разделяемый:1) возвратить на место, сделать возврат 2) отречься"
  },
  "pick up": {
    "initFormEn": "pick up",
    "displayEn": "pick up",
    "ru": "непереходный:1) усилиться 2) улучшиться 3) прибраться непереходный, неразделяемый: ответить на телефонный звонок разделяемый:1) нахвататься, узнать 2) заразиться 3) прикупить переходный:1) забрать 2) задержать"
  },
  "cut out": {
    "initFormEn": "cut out",
    "displayEn": "cut out",
    "ru": "разделяемый:1) вырезать, вычеркнуть 2) отключить 3) прекратить работать"
  },
  "pick on": {"initFormEn": "pick on", "displayEn": "pick on", "ru": "неразделяемый:1) придираться 2) выбирать"},
  "watch out": {"initFormEn": "watch out", "displayEn": "watch out", "ru": "неразделяемый: соблюдать осторожность"},
  "hold out": {"initFormEn": "hold out", "displayEn": "hold out", "ru": "непереходный:1) сопротивляться 2) хватать"},
  "spread out": {
    "initFormEn": "spread out",
    "displayEn": "spread out",
    "ru": "непереходный: развернуться, рассредоточиться"
  },
  "walk away": {
    "initFormEn": "walk away",
    "displayEn": "walk away",
    "ru": "непереходный:1) не пострадать (в аварии и т.п.) 2) уйти от ответственности"
  },
  "put away": {
    "initFormEn": "put away",
    "displayEn": "put away",
    "ru": "разделяемый:1) убрать 2) засадить в тюрьму и пр. 3) избавиться 4) копить деньги"
  },
  "turn on": {
    "initFormEn": "turn on",
    "displayEn": "turn on",
    "ru": "разделяемый: включить (приборы) неразделяемый: атаковать, наброситься"
  },
  "come to": {
    "initFormEn": "come to",
    "displayEn": "come to",
    "ru": "неразделяемый:1) составлять (сумму) непереходный: приходить в себя"
  },
  "come by": {"initFormEn": "come by", "displayEn": "come by", "ru": "неразделяемый: заехать, зайти"},
  "go back on": {"initFormEn": "go back on", "displayEn": "go back on", "ru": "нарушать обещание"},
  "get out": {
    "initFormEn": "get out",
    "displayEn": "get out",
    "ru": "непереходный:1) убираться 2) распространяться разделяемый:1) выгнать 2) опубликовать 3) решить задачу"
  },
  "ask out": {"initFormEn": "ask out", "displayEn": "ask out", "ru": "разделяемый: приглашать куда-либо"},
  "write up": {"initFormEn": "write up", "displayEn": "write up", "ru": "разделяемый: описать в подробностях"},
  "put together": {"initFormEn": "put together", "displayEn": "put together", "ru": "разделяемый: собрать"},
  "drop off": {"initFormEn": "drop off", "displayEn": "drop off", "ru": "разделяемый: подвезти"},
  "go along": {
    "initFormEn": "go along",
    "displayEn": "go along",
    "ru": "непереходный:1) развиваться 2) сопровождаться 3) согласиться 4) уйти"
  },
  "ask for": {"initFormEn": "ask for", "displayEn": "ask for", "ru": "неразделяемый: выяснять, искать"},
  "go down": {
    "initFormEn": "go down",
    "displayEn": "go down",
    "ru": "непереходный:1) уменьшиться, снизиться 2) потерпеть крушение 3) потерпеть поражение 4) отключиться (о компьютере) 5) случиться 6) садиться (о солнце)"
  },
  "get away": {"initFormEn": "get away", "displayEn": "get away", "ru": "непереходный: улизнуть"},
  "stand up for": {
    "initFormEn": "stand up for",
    "displayEn": "stand up for",
    "ru": "защищать разделяемый: не прийти на свидание"
  },
  "go down with": {"initFormEn": "go down with", "displayEn": "go down with", "ru": "заболевать"},
  "stick out": {
    "initFormEn": "stick out",
    "displayEn": "stick out",
    "ru": "непереходный: выпирать, бросаться в глаза разделяемый: высунуть"
  },
  "fall down": {
    "initFormEn": "fall down",
    "displayEn": "fall down",
    "ru": "непереходный:1) упасть 2) рушиться 3) обладать недостатками"
  },
  "break in": {
    "initFormEn": "break in",
    "displayEn": "break in",
    "ru": "непереходный: вмешиваться неразделяемый: врываться (силой)"
  },
  "walk out": {
    "initFormEn": "walk out",
    "displayEn": "walk out",
    "ru": "непереходный:1) покинуть в знак протеста 2) бросить"
  },
  "take out": {
    "initFormEn": "take out",
    "displayEn": "take out",
    "ru": "разделяемый:1) вытаскивать 2) убивать 3) повести развлекаться 4) удалить зуб, пятно и т.п."
  },
  "burst out": {
    "initFormEn": "burst out",
    "displayEn": "burst out",
    "ru": "  непереходный:1) разразиться 2) резко начать что-то 3) воскликнуть 4) вырасти из одежды"
  },
  "be up": {
    "initFormEn": "be up",
    "displayEn": "be up",
    "ru": "непереходный 1) проснуться, бодрствовать 2) повышаться, возрастать 3) произойти 4) истечь, закончиться"
  },
  "get along (with)": {
    "initFormEn": "get along (with)",
    "displayEn": "get along (with)",
    "ru": "непереходный: ужиться, поладить"
  },
  "tick off": {
    "initFormEn": "tick off",
    "displayEn": "tick off",
    "ru": "разделяемый:1) раздражать 2) отчитывать 3) вычеркивать выполненное"
  },
  "come over": {
    "initFormEn": "come over",
    "displayEn": "come over",
    "ru": "непереходный:1) приходить 2) изменять мнение неразделяемый:1) нахлынуть"
  },
  "put out": {
    "initFormEn": "put out",
    "displayEn": "put out",
    "ru": "разделяемый:1) беспокоить 2) сделать анестезию 3) погасить 4) транслировать 5) вывихнуть 6) протянуть руку 7) отдать работу на сторону"
  },
  "try out for": {
    "initFormEn": "try out for",
    "displayEn": "try out for",
    "ru": "неразделяемый: пробоваться на роль и т.п."
  },
  "write down": {"initFormEn": "write down", "displayEn": "write down", "ru": "  разделяемый: записать"},
  "back off": {"initFormEn": "back off", "displayEn": "back off", "ru": "непереходный:уступить"},
  "get up": {
    "initFormEn": "get up",
    "displayEn": "get up",
    "ru": "непереходный:1) подняться 2) усилиться разделяемый: разбудить"
  },
  "back up": {
    "initFormEn": "back up",
    "displayEn": "back up",
    "ru": "непереходный: устроить пробку, затор разделяемый:1) подтвердить; 2) создать резервную копию"
  },
  "stand off": {
    "initFormEn": "stand off",
    "displayEn": "stand off",
    "ru": "непереходный: держаться в сторонке разделяемый: отогнать"
  },
  "get over": {
    "initFormEn": "get over",
    "displayEn": "get over",
    "ru": "непереходный: завершиться неразделяемый: оправиться"
  },
  "look over": {"initFormEn": "look over", "displayEn": "look over", "ru": "разделяемый: просмотреть, пролистать"},
  "come down": {
    "initFormEn": "come down",
    "displayEn": "come down",
    "ru": "непереходный:1) снизиться, опуститься 2) обвалиться 3) заболеть 4) совершить аварийную посадку"
  },
  "take over": {
    "initFormEn": "take over",
    "displayEn": "take over",
    "ru": "непереходный: принять на себя ответственность от кого-то разделяемый: взять под контроль, захватить"
  },
  "back away": {"initFormEn": "back away", "displayEn": "back away", "ru": "непереходный: попятиться, отступить"},
  "call on": {
    "initFormEn": "call on",
    "displayEn": "call on",
    "ru": "неразделяемый:1) зайти, навестить 2) вызывать к доске"
  },
  "switch off": {
    "initFormEn": "switch off",
    "displayEn": "switch off",
    "ru": "разделяемый: выключить непереходный: выключиться"
  },
  "sit up": {
    "initFormEn": "sit up",
    "displayEn": "sit up",
    "ru": "непереходный:1) сесть из положения лежа, сидеть прямо 2) бодрствовать разделяемый: посадить разделяемый: раскладывать"
  },
  "stand by": {
    "initFormEn": "stand by",
    "displayEn": "stand by",
    "ru": "непереходный:1) быть свидетелем, не вмешиваться 2) хранить верность"
  },
  "break down": {
    "initFormEn": "break down",
    "displayEn": "break down",
    "ru": "непереходный:1) растеряться, расстроиться 2) разразиться слезами и т.п. 3) сломаться (о технике) 4) провалиться, прекратиться разделяемый:1) поломать, разрушить 2) прерывать 3) анализировать"
  },
  "take in": {
    "initFormEn": "take in",
    "displayEn": "take in",
    "ru": "разделяемый:1) давать приют 2) брать надомную работу 3) понять 4) запастись 5) включать в себя 6) ушивать"
  },
  "add up": {
    "initFormEn": "add up",
    "displayEn": "add up",
    "ru": "1) непереходный: соответствовать2) разделяемый: сложить"
  },
  "come up": {"initFormEn": "come up", "displayEn": "come up", "ru": "непереходный:1) появиться 2) приехать"},
  "catch up": {"initFormEn": "catch up", "displayEn": "catch up", "ru": "непереходный: догонять"},
  "walk into": {
    "initFormEn": "walk into",
    "displayEn": "walk into",
    "ru": "неразделяемый: по неосторожности попасть в нехорошую ситуацию"
  },
  "turn in": {
    "initFormEn": "turn in",
    "displayEn": "turn in",
    "ru": "разделяемый:1) подать, отдать, вернуть 2) сдавать властям, сдаваться непереходный: ложиться спать"
  },
  "show up": {"initFormEn": "show up", "displayEn": "show up", "ru": "непереходный: появиться разделяемый: смутить"},
  "be over": {
    "initFormEn": "be over",
    "displayEn": "be over",
    "ru": "непереходный:1) прийти, прибыть, заехать 2) прекратиться 3) остаться"
  },
  "draw out": {"initFormEn": "draw out", "displayEn": "draw out", "ru": "разделяемый: продолжить"},
  "throw out": {"initFormEn": "throw out", "displayEn": "throw out", "ru": "разделяемый:1) выбросить 2) выгнать"},
  "put up with": {"initFormEn": "put up with", "displayEn": "put up with", "ru": "мириться"},
  "move in": {"initFormEn": "move in", "displayEn": "move in", "ru": "непереходный:1) заселиться 2) вторгнуться"},
  "wait up": {"initFormEn": "wait up", "displayEn": "wait up", "ru": "непереходный: дожидаться, не ложась спать"},
  "tell off": {"initFormEn": "tell off", "displayEn": "tell off", "ru": "разделяемый: отчитать, отругать"},
  "count on": {"initFormEn": "count on", "displayEn": "count on", "ru": "неразделяемый: рассчитывать на кого-либо"},
  "shut down": {"initFormEn": "shut down", "displayEn": "shut down", "ru": "разделяемый: закрыть фирму и т.п."},
  "check out": {
    "initFormEn": "check out",
    "displayEn": "check out",
    "ru": "  непереходный:1) выписаться 2) подтвердиться разделяемый: осмотреть, проверить"
  },
  "give in": {
    "initFormEn": "give in",
    "displayEn": "give in",
    "ru": "непереходный: сдаться, согласиться разделяемый: сдать работу, подать заявку и пр."
  },
  "hang up on": {
    "initFormEn": "hang up on",
    "displayEn": "hang up on",
    "ru": "  неразделяемый: резко завершить телефонный разговор"
  },
  "shut up": {
    "initFormEn": "shut up",
    "displayEn": "shut up",
    "ru": "разделяемый:1) заставлять замолчать 2) заколотить, закрыть окна и двери"
  },
  "make for": {
    "initFormEn": "make for",
    "displayEn": "make for",
    "ru": "неразделяемый:1) двигаться 2) содействовать 3) подходить"
  },
  "go around": {
    "initFormEn": "go around",
    "displayEn": "go around",
    "ru": "неразделяемый, непереходный:1) крутиться 2) хватать 3) встречаться 4) распространяться"
  },
  "look for": {"initFormEn": "look for", "displayEn": "look for", "ru": "неразделяемый: разыскивать"},
  "wait on": {"initFormEn": "wait on", "displayEn": "wait on", "ru": "неразделяемый: обслуживать за столом"},
  "be back": {"initFormEn": "be back", "displayEn": "be back", "ru": "непереходный: возвратиться"},
  "figure out": {"initFormEn": "figure out", "displayEn": "figure out", "ru": "разделяемый: понять"},
  "act up": {"initFormEn": "act up", "displayEn": "act up", "ru": "непереходный: капризничать, барахлить"},
  "get off": {
    "initFormEn": "get off",
    "displayEn": "get off",
    "ru": "непереходный: отправляться неразделяемый: выходить из общественного транспорта разделяемый: быть выходным"
  },
  "run down": {
    "initFormEn": "run down",
    "displayEn": "run down",
    "ru": "разделяемый:1) сбивать 2) находить 3) критиковать без оснований 4) уменьшаться 5) прекращать работать"
  },
  "go back": {
    "initFormEn": "go back",
    "displayEn": "go back",
    "ru": "неразделяемый, непереходный:1) вернуться 2) перевести назад часы 3) простираться вглубь"
  },
  "look forward to": {
    "initFormEn": "look forward to",
    "displayEn": "look forward to",
    "ru": "неразделяемый: предвкушать"
  },
  "pick out": {"initFormEn": "pick out", "displayEn": "pick out", "ru": "Разделяемый:1) отличить 2) выделить"},
  "be in for": {
    "initFormEn": "be in for",
    "displayEn": "be in for",
    "ru": "неразделяемый:1) напрашиваться (на неприятности), 2) ожидать 3) участвовать (напр., в соревнованиях), попасть в списки участников"
  },
  "try out": {"initFormEn": "try out", "displayEn": "try out", "ru": "разделяемый: испытывать (о технике)"},
  "get down to": {"initFormEn": "get down to", "displayEn": "get down to", "ru": "приступить"},
  "look in": {"initFormEn": "look in", "displayEn": "look in", "ru": "непереходный: навестить"},
  "turn around": {
    "initFormEn": "turn around",
    "displayEn": "turn around",
    "ru": "непереходный: разворачиваться разделяемый:1) разворачивать 2) изменять к лучшему"
  },
  "take away": {
    "initFormEn": "take away",
    "displayEn": "take away",
    "ru": "разделяемый:1) унести 2) вычитать 3) заказывать на вынос"
  },
  "drop out of": {"initFormEn": "drop out of", "displayEn": "drop out of", "ru": "непереходный: выбыть"},
  "fall off": {"initFormEn": "fall off", "displayEn": "fall off", "ru": "непереходный: снизиться"},
  "come back": {"initFormEn": "come back", "displayEn": "come back", "ru": "Непереходный:1) вернуться 2) вспомнить"},
  "care for": {
    "initFormEn": "care for",
    "displayEn": "care for",
    "ru": "неразделяемый:1) ухаживать 2) любить (чаще в вопросах и отрицаниях)"
  },
  "go in for": {
    "initFormEn": "go in for",
    "displayEn": "go in for",
    "ru": "1) выбрать (профессию, стиль и пр.) 2) явиться на экзамен и т.п. 3) участвовать"
  },
  "pull out": {
    "initFormEn": "pull out",
    "displayEn": "pull out",
    "ru": "непереходный:1) отказаться от участия 2) отступить (об армии) 3) отъехать (с пассажирами) разделяемый: отозвать (войска)"
  },
  "cut back": {"initFormEn": "cut back", "displayEn": "cut back", "ru": "неразделяемый, непереходный: сократить"},
  "knock off": {
    "initFormEn": "knock off",
    "displayEn": "knock off",
    "ru": "разделяемый:1) убить 2) перестать 3) состряпать 4) уменьшить"
  },
  "run over": {
    "initFormEn": "run over",
    "displayEn": "run over",
    "ru": "непереходный:1) превысить предел 2) просмотреть разделяемый: сбить, переехать"
  },
  "move out": {"initFormEn": "move out", "displayEn": "move out", "ru": "непереходный: съехать"},
  "carry out": {"initFormEn": "carry out", "displayEn": "carry out", "ru": "разделяемый: выполнить"},
  "go on": {
    "initFormEn": "go on",
    "displayEn": "go on",
    "ru": "неразделяемый, непереходный:1) продолжить 2) нудно, долго говорить 3) произойти 4) ладить"
  },
  "calm down": {
    "initFormEn": "calm down",
    "displayEn": "calm down",
    "ru": "непереходный: успокоиться разделяемый: успокаивать"
  },
  "pull off": {"initFormEn": "pull off", "displayEn": "pull off", "ru": "непереходный:трогаться"},
  "point out": {"initFormEn": "point out", "displayEn": "point out", "ru": "разделяемый:1) указать 2) подчеркнуть"},
  "show off": {
    "initFormEn": "show off",
    "displayEn": "show off",
    "ru": "непереходный: красоваться разделяемый: демонстрировать"
  },
  "break off": {
    "initFormEn": "break off",
    "displayEn": "break off",
    "ru": "непереходный:1) замолкнуть 2) отделиться, отломиться разделяемый:1) прервать, прекратить 2) отделить, отломить"
  },
  "look back": {"initFormEn": "look back", "displayEn": "look back", "ru": "непереходный: оглядываться"},
  "hand on": {"initFormEn": "hand on", "displayEn": "hand on", "ru": "разделяемый: передать преемникам"},
  "drag on": {"initFormEn": "drag on", "displayEn": "drag on", "ru": "непереходный: продолжать одно и то же"},
  "come in": {
    "initFormEn": "come in",
    "displayEn": "come in",
    "ru": "непереходный:1) прибыть 2) занять должность 3) иметь важное значение 4) быть избранным 5) добраться до финиша 6) поступать (о деньгах)"
  },
  "come along": {
    "initFormEn": "come along",
    "displayEn": "come along",
    "ru": "непереходный:1) сопровождать; ехать, идти совместно 2) случиться 3) выздороветь"
  },
  "throw up": {
    "initFormEn": "throw up",
    "displayEn": "throw up",
    "ru": "чаще непереходный, а с дополнением – неразделяемый 1) тошнить 2) бросить работу 3) создать, подбросить проблему и т.п."
  },

  "re": {
    "initFormEn": "re",
    "displayEn": "re",
    "ru": "относительно, касательно (в начале делового письма, в теме сообщения по электронной почте); насчёт, о; в деле, по делу, дело; ре (нота; буквенное обозначениепредл.;"
  },
  "digital": {
    "initFormEn": "digital",
    "displayEn": "digital",
    "ru": "пальцевидный, пальцеобразный, перстовидный; относящийся к пальцам;  цифровой, числовой; перст, палец; клавиша (музыкального инструмента"
  },
  "cd": {"initFormEn": "cd", "displayEn": "cd", "ru": "кандела; пластинка; компакт-диск; "},
  "et": {"initFormEn": "et", "displayEn": "et", "ru": "восточное время Eastern Time; внеземной ExtraTerrestrial"},
  "minutes": {"initFormEn": "minutes", "displayEn": "minutes", "ru": "протокол (заседания "},
  "mac": {"initFormEn": "mac", "displayEn": "mac", "ru": "непромокаемый плащ; макинтош;"},
  "gmt": {
    "initFormEn": "gmt",
    "displayEn": "gmt",
    "ru": "Гринвич; время по Гринвичу; гринвичское время; всемирное время; время;"
  },
  "disclaimer": {
    "initFormEn": "disclaimer",
    "displayEn": "disclaimer",
    "ru": "отказ, отклонение, отречение; письменный отказ от ответственности; оговорка о случайном характере совпадений (имён персонажей в книге или фильме с именами реально существующих людей); отказ (от права"
  },
  "faculty": {
    "initFormEn": "faculty",
    "displayEn": "faculty",
    "ru": "дар, способность; право, правомочие; факультет; профессорско-преподавательский состав; лица с высшим образованием, принадлежащие к одной профессии"
  },
  "isbn": {"initFormEn": "isbn", "displayEn": "isbn", "ru": "Номер ISBN. Номер книги."},
  "mike": {
    "initFormEn": "mike",
    "displayEn": "mike",
    "ru": "слоняться, бездельничать; отлынивать от работыот; микрофон; майк;"
  },
  "setting": {
    "initFormEn": "setting",
    "displayEn": "setting",
    "ru": "окружающая обстановка, окружение; место действия (фильма, пьесы, романа); сценография; декорации и костюмы; художественное оформление (спектакля); огранка; оправа (камня); музыка на слова (стихотворения); сочинение, создание музыки;"
  },
  "milf": {"initFormEn": "milf", "displayEn": "milf", "ru": "женщина в возросте; возможно с детьми;"},
  "cum": {
    "initFormEn": "cum",
    "displayEn": "cum",
    "ru": "как компонент сложных слов со значением  совмещённый; сперма;"
  },
  "llc": {"initFormEn": "llc", "displayEn": "llc", "ru": "компания с ограниченной ответственностью; ооо"},
  "hardcore": {
    "initFormEn": "hardcore",
    "displayEn": "hardcore",
    "ru": "ужасный; наиболее откровенный (о порнографии); основательный, чистый;\nаппаратное ядро (содержащее информацию, потеря которой делает невозможным восстановление системы"
  },
  "jones": {
    "initFormEn": "jones",
    "displayEn": "jones",
    "ru": "героин; пристрастие, (пагубная) привычка (особенно к героину); инстинктивная потребность, жажда; испытывать (инстинктивную) потребность (в чём-л"
  },
  "premium": {
    "initFormEn": "premium",
    "displayEn": "premium",
    "ru": "награда; вознаграждение; премия; приз;; более высокая цена; наценка; надбавка; надбавка, лаж; плата за обучение (ремеслу, профессии); страховая премия, страховой взнос; высший сорт; отличное качество"
  },
  "ft": {"initFormEn": "ft", "displayEn": "ft", "ru": "фут; футы;"},
  "designated": {
    "initFormEn": "designated",
    "displayEn": "designated",
    "ru": "назначенный; заданный; обозначенный; обозначаемый; намеченный; специально выделенный; обозначившийся; назначенныйопределенныйназначать; назначить; обозначать; обозначить; определять; определить; указывать; указать; называть; назвать; именовать; выделить; выделять; предназначить; означать; обозначиться; провозгласить"
  },
  "compliance": {
    "initFormEn": "compliance",
    "displayEn": "compliance",
    "ru": "согласие; соответствие; податливость, покладистость, уступчивость; угодливость"
  },
  "cc": {"initFormEn": "cc", "displayEn": "cc", "ru": "копия; авто; рабочий объём (двигателяот; кубический сантиметр"},
  "ct": {"initFormEn": "ct", "displayEn": "ct", "ru": "цепь; контур;"},
  "iv": {"initFormEn": "iv", "displayEn": "iv", "ru": "внутривенный; внутривенно;"},
  "rw": {"initFormEn": "rw", "displayEn": "rw", "ru": "радиологическая война; досточтимый; достопочтенный; "},
  "logged": {
    "initFormEn": "logged",
    "displayEn": "logged",
    "ru": "отяжелевший, тяжёлый, тяжеловесный; пропитавшийся водой; стоячий (о воде); болотистый (об участке местности); заблокированный; лишённый возможности развиваться, изменяться; расчищенный от леса (о терри"
  },
  "gratis": {"initFormEn": "gratis", "displayEn": "gratis", "ru": "бесплатно, даром"},
  "shemale": {"initFormEn": "shemale", "displayEn": "shemale", "ru": "транссексуал; Шимейл; "},
  "intel": {
    "initFormEn": "intel",
    "displayEn": "intel",
    "ru": "интеллект; информация полицейского и политической значимости;"
  },
  "adobe": {
    "initFormEn": "adobe",
    "displayEn": "adobe",
    "ru": "саман (кирпич воздушной сушки, необожжённый кирпич); смесь глины, песка и соломы (для изготовления саманов); глинобитное строение; саманное строение;"
  },
  "permalink": {"initFormEn": "permalink", "displayEn": "permalink", "ru": "постоянная ссылка;"},
  "eric": {"initFormEn": "eric", "displayEn": "eric", "ru": "вира (денежная компенсация родственникам убитого)"},
  "trackback": {"initFormEn": "trackback", "displayEn": "trackback", "ru": "обратный путь"},
  "hiv": {"initFormEn": "hiv", "displayEn": "hiv", "ru": "ВИЧ;"},
  "victoria": {
    "initFormEn": "victoria",
    "displayEn": "victoria",
    "ru": "победа!, виктория! (возглас победылёгкий двухместный экипаж с откидным верхом)"
  },
  "pda": {
    "initFormEn": "pda",
    "displayEn": "pda",
    "ru": "КПК; карманный компьютер; персональный цифровой секретарь; кпккарманный"
  },
  "dsl": {"initFormEn": "dsl", "displayEn": "dsl", "ru": "цифровая абонентская линия; абонентская линия;"},
  "nd": {"initFormEn": "nd", "displayEn": "nd", "ru": "ой; без обозначения даты; Северная Дакота"},
  "gnu": {"initFormEn": "gnu", "displayEn": "gnu", "ru": "гну (антилопа)"},
  "costa": {
    "initFormEn": "costa",
    "displayEn": "costa",
    "ru": "ребро; средняя жилка листа; костальная жилка крыла (насекомого"
  },
  "hardcover": {
    "initFormEn": "hardcover",
    "displayEn": "hardcover",
    "ru": "в жёстком переплёте, в твёрдой обложке; книга в жёстком переплёте, в твёрдой обложке;"
  },
  "lewis": {"initFormEn": "lewis", "displayEn": "lewis", "ru": "волчья лапа; анкерный болт;"},
  "blowjob": {"initFormEn": "blowjob", "displayEn": "blowjob", "ru": "минет"},
  "pt": {"initFormEn": "pt", "displayEn": "pt", "ru": "часть; доля; пинта; точка;"},
  "nw": {"initFormEn": "nw", "displayEn": "nw", "ru": "северо-запад"},
  "dildo": {"initFormEn": "dildo", "displayEn": "dildo", "ru": "фаллоимитатор"},
  "sexcam": {"initFormEn": "sexcam", "displayEn": "sexcam", "ru": "секс-камера"},
  "milfhunter": {"initFormEn": "milfhunter", "displayEn": "milfhunter", "ru": "охотник за милфами;"},
  "qty": {"initFormEn": "qty", "displayEn": "qty", "ru": "количество; кол-во"},
  "beastiality": {"initFormEn": "beastiality", "displayEn": "beastiality", "ru": "звериность"},
  "pursuant": {"initFormEn": "pursuant", "displayEn": "pursuant", "ru": "соответствующий, согласующийся"},
  "bestiality": {
    "initFormEn": "bestiality",
    "displayEn": "bestiality",
    "ru": "скотоложство, зоофилия; скотство; грубость, жестокость, зверство"
  },
  "jr": {"initFormEn": "jr", "displayEn": "jr", "ru": "младший"},
  "franklin": {
    "initFormEn": "franklin",
    "displayEn": "franklin",
    "ru": "свободный землевладелец недворянского происхождения; Фрэнклин, Франклин (мужское имя);"
  },
  "biz": {"initFormEn": "biz", "displayEn": "biz", "ru": "дело, занятие; работа"},
  "cumshot": {"initFormEn": "cumshot", "displayEn": "cumshot", "ru": "кончил"},
  "asp": {"initFormEn": "asp", "displayEn": "asp", "ru": "гадюка; ядовитая змеяот; как можно скорее"},
  "eligibility": {
    "initFormEn": "eligibility",
    "displayEn": "eligibility",
    "ru": "право на избрание; приемлемость, годность, пригодность (для выбора или предпочтения); данные, необходимые для занятия поста, должности; положительные качества, которые дают возможность занять какой-л. пост, должность; \"правило приемлемости\" (критерии"
  },
  "kent": {
    "initFormEn": "kent",
    "displayEn": "kent",
    "ru": "знать, иметь познания; узнавать (по виду); быть знакомым (с кем-л.); "
  },
  "rc": {
    "initFormEn": "rc",
    "displayEn": "rc",
    "ru": "дистанционное управление; (римско-)католический; Roman Catholic 2.; Красный Крест - Red Cross"
  },
  "rm": {"initFormEn": "rm", "displayEn": "rm", "ru": "комната, помещение"},
  "terry": {"initFormEn": "terry", "displayEn": "terry", "ru": "вытяжной или булавчатый ворс"},
  "jerry": {
    "initFormEn": "jerry",
    "displayEn": "jerry",
    "ru": "механические ножницы (для подравнивания краёв ткани); ночной горшок; круглая фетровая шляпа; подрядчик, возводящий непрочные постройки из плохого материала;"
  },
  "laura": {
    "initFormEn": "laura",
    "displayEn": "laura",
    "ru": "лавра (название крупных православных мужских монастырей, подчинённых непосредственно патриарху)"
  },
  "tranny": {"initFormEn": "tranny", "displayEn": "tranny", "ru": "транзисторный приёмник; авто трансмиссия;"},
  "emerging": {"initFormEn": "emerging", "displayEn": "emerging", "ru": "развивающийся, начинающий существование;"},
  "rf": {"initFormEn": "rf", "displayEn": "rf", "ru": "ВЧ"},
  "td": {
    "initFormEn": "td",
    "displayEn": "td",
    "ru": "посадка, приземление; touchdown; телеметрические данные - telemetry data;"
  },
  "johnny": {
    "initFormEn": "johnny",
    "displayEn": "johnny",
    "ru": "больничная сорочка с завязкой на спине; презерватив; = john - сортир, туалет, уборная;"
  },
  "blvd": {"initFormEn": "blvd", "displayEn": "blvd", "ru": "бульвар;"},
  "amd": {"initFormEn": "amd", "displayEn": "amd", "ru": "драма;"},
  "jimmy": {
    "initFormEn": "jimmy",
    "displayEn": "jimmy",
    "ru": "тележка для транспортировки угля; воровской ломик, \"фомка\"; отмычка; взламывать ломом;"
  },
  "graham": {
    "initFormEn": "graham",
    "displayEn": "graham",
    "ru": "непросеянный, грубого помола (о муке); изготовленный из непросеянной пшеничной муки"
  },
  "wright": {"initFormEn": "wright", "displayEn": "wright", "ru": "мастер, создатель или строитель; Райт;"},
  "barry": {"initFormEn": "barry", "displayEn": "barry", "ru": "классный, клёвый; хороший;"},
  "gt": {"initFormEn": "gt", "displayEn": "gt", "ru": "большой; великийот; длинная или английская тонна (1016 кг"},
  "rv": {
    "initFormEn": "rv",
    "displayEn": "rv",
    "ru": "кемпер (автофургон, оборудованный кухней, спальными местами, туалетом)"
  },
  "yr": {"initFormEn": "yr", "displayEn": "yr", "ru": "год; ваш;"},
  "decor": {
    "initFormEn": "decor",
    "displayEn": "decor",
    "ru": "сценография; декорации и костюмы; художественное оформление (спектакля); отделка интерьера, внутреннее убранство;"
  },
  "bidder": {"initFormEn": "bidder", "displayEn": "bidder", "ru": "выступающий на торгах покупатель;"},
  "sigma": {"initFormEn": "sigma", "displayEn": "sigma", "ru": "сигма; стандартное отклонение;"},
  "polyphonic": {
    "initFormEn": "polyphonic",
    "displayEn": "polyphonic",
    "ru": "многоголосный, полифонический; полифоничный (об инструменте); многозвучный; -; лиричный, мелодичный (о тексте, имеющем определённую мелодику); имеющий разное произношение, соответствующий нескольким звукам (о букве"
  },
  "tt": {"initFormEn": "tt", "displayEn": "tt", "ru": "трезвенник; teetotal; teetotaller"},
  "aka": {"initFormEn": "aka", "displayEn": "aka", "ru": "также известный под именем или кличкой"},
  "robinson": {"initFormEn": "robinson", "displayEn": "robinson", "ru": "в два счёта, ахнуть[ моргнуть] не успеешь"},
  "fy": {"initFormEn": "fy", "displayEn": "fy", "ru": "финансовый год;"},
  "gbp": {"initFormEn": "gbp", "displayEn": "gbp", "ru": "фунт стерлингов; английский фунт стерлингов;"},
  "tracker": {
    "initFormEn": "tracker",
    "displayEn": "tracker",
    "ru": "охотник, выслеживающий диких зверей; филёр; лямочник; буксир"
  },
  "isp": {
    "initFormEn": "isp",
    "displayEn": "isp",
    "ru": "провайдер; интернет провайдера; провайдер интернет; Internet service provider\n"
  },
  "brad": {"initFormEn": "brad", "displayEn": "brad", "ru": "гвоздь без шляпки, штифтик; Брэд;"},
  "pantyhose": {
    "initFormEn": "pantyhose",
    "displayEn": "pantyhose",
    "ru": "колготки; трико (акробата, танцора и т. п.);"
  },
  "locator": {"initFormEn": "locator", "displayEn": "locator", "ru": "определитель; локатор; обнаружитель; землемер;"},
  "plc": {"initFormEn": "plc", "displayEn": "plc", "ru": "открытое акционерное общество; public limited company;"},
  "thru": {"initFormEn": "thru", "displayEn": "thru", "ru": "через, сквозь, по, внутри;"},
  "procurement": {
    "initFormEn": "procurement",
    "displayEn": "procurement",
    "ru": "получение, приобретение; закупка; поставка, снабжение; сводничество"
  },
  "starring": {
    "initFormEn": "starring",
    "displayEn": "starring",
    "ru": "в главной роли; снявшийся звездный исполнитель главной ролисниматься; играть главные роли; украшать звёздами; осыпать звёздами; "
  },
  "lung": {"initFormEn": "lung", "displayEn": "lung", "ru": "лёгкое; рак легких; болезнь легких;"},
  "cole": {"initFormEn": "cole", "displayEn": "cole", "ru": "капуста (огородная); Коул;"},
  "bp": {
    "initFormEn": "bp",
    "displayEn": "bp",
    "ru": "епископ; слон (шахматная фигураот  ; точка кипения, температура кипения;"
  },
  "std": {"initFormEn": "std", "displayEn": "std", "ru": "стандарт;"},
  "connectivity": {
    "initFormEn": "connectivity",
    "displayEn": "connectivity",
    "ru": "связность; подсоединение; соединение; возможность подключения;"
  },
  "murphy": {"initFormEn": "murphy", "displayEn": "murphy", "ru": "картофелина; (murphies) женская грудь;"},
  "syndication": {
    "initFormEn": "syndication",
    "displayEn": "syndication",
    "ru": "синдикация; синдицирование; распространение по подписке; синдикат; объединение в синдикаты; границы"
  },
  "piss": {
    "initFormEn": "piss",
    "displayEn": "piss",
    "ru": "мочиться; облить мочой; забить на что-л., бросить что-л.; наплевать на кого-л., портить жизнь кому-л.; обмочиться; обхохотаться, уписаться от смеха; моча; мочеиспускание; старое пиво; пойло, палево (любой некачественный алко"
  },
  "citation": {
    "initFormEn": "citation",
    "displayEn": "citation",
    "ru": "цитирование; ссылка, упоминание; выдержка, выписка, цитата;   ,   ; официальный вызов в суд; повестка о вызове в суд; упоминание в списках отличившихся; объявление благодарности"
  },
  "benjamin": {
    "initFormEn": "benjamin",
    "displayEn": "benjamin",
    "ru": "бензойная смола (добывается из стираксового дерева); =   стираксовое дерево, бензоинмужское пальто особого покроя;"
  },
  "alt": {"initFormEn": "alt", "displayEn": "alt", "ru": "высокий звук; альт; altitude -\nвысота;"},
  "realty": {"initFormEn": "realty", "displayEn": "realty", "ru": "недвижимость, недвижимое имущество"},
  "chuck": {
    "initFormEn": "chuck",
    "displayEn": "chuck",
    "ru": "зажимный патрон; держатель (на токарном станке, электродрели); =   кулачки зажимного патрона; обрабатывать (на станке), зажав в патроне деталь, инструментбросать; кидать; швырять;    ; =   /  бросить (работу, занятие); порвать (с кем-л.); выкинуть, выбросить;  ,    ; выгнать, выставить; , ; дружески похлопывать; щекотатьквохтанье, кудахтанье;   ,   ; звук, издаваемый наездником или кучером для понукания лошади; дружище, приятель (обращение);  ,  ; кудахтать, квохтать (о домашней птице);   ,   ; скликать домашнюю птицу; понукать лошадь; гулполено, чурбак, чурка; шея, лопатка (разделанной туши); шмат, большой кусок (мяса, хлеба);  ,  ; сниж. пища, жратва"
  },
  "cox": {"initFormEn": "cox", "displayEn": "cox", "ru": "рулевой; рулевой шлюпки; кокс; рулить;"},
  "sg": {
    "initFormEn": "sg",
    "displayEn": "sg",
    "ru": "высшего разряда; senior grade; начальник медицинской службы в армии, военно-морском флоте или военно-воздушных силах;"
  },
  "phys": {"initFormEn": "phys", "displayEn": "phys", "ru": "физиологический; физиологот; физиология; "},
  "morocco": {"initFormEn": "morocco", "displayEn": "morocco", "ru": "сафьян; сафьяновый;"},
  "lambda": {
    "initFormEn": "lambda",
    "displayEn": "lambda",
    "ru": "ламбда, лямбда (11-я буква греческого алфавита); место соединения ламбдовидного и стреловидного швов черепа; биол. ламбда-фаг (инфицирующий кишечную палочку); ламбда-гиперон; миллионная часть литра"
  },
  "josh": {
    "initFormEn": "josh",
    "displayEn": "josh",
    "ru": "добродушная шутка, подшучивание; подшучивать, посмеиваться, подтрунивать над кем-л"
  },
  "chad": {
    "initFormEn": "chad",
    "displayEn": "chad",
    "ru": "кусочки бумаги или картона, выбиваемые при перфорации отверстий; Чад;"
  },
  "zoophilia": {
    "initFormEn": "zoophilia",
    "displayEn": "zoophilia",
    "ru": "зоофилия, необычно сильная привязанность к животным"
  },
  "hampton": {
    "initFormEn": "hampton",
    "displayEn": "hampton",
    "ru": "«Малыш». «Дружок» (о члене); Хамптон (США, шт. Виргиния);"
  },
  "univ": {
    "initFormEn": "univ",
    "displayEn": "univ",
    "ru": "университет; преподаватели и студенты университета; университетская спортивная команда;"
  },
  "np": {"initFormEn": "np", "displayEn": "np", "ru": "нотариус; именное словосочетание;"},
  "cgi": {"initFormEn": "cgi", "displayEn": "cgi", "ru": "компьютерная графика"},
  "dt": {"initFormEn": "dt", "displayEn": "dt", "ru": "Второзаконие"},
  "fellowship": {
    "initFormEn": "fellowship",
    "displayEn": "fellowship",
    "ru": "товарищество, братство; чувство товарищества, дружеские отношения; общество, ассоциация; членство (в научном обществе и т. п.); должность (в университете, колледже), предполагающая проведение научно-исследовательских;"
  },
  "macromedia": {"initFormEn": "macromedia", "displayEn": "macromedia", "ru": "макросреда, макроокружение;"},
  "brunette": {"initFormEn": "brunette", "displayEn": "brunette", "ru": "брюнетка; брюнет; шатенка;"},
  "pmc": {"initFormEn": "pmc", "displayEn": "pmc", "ru": "Частная военная компания - private military company;"},
  "mba": {"initFormEn": "mba", "displayEn": "mba", "ru": "магистр делового администрирования; МВА;"},
  "ciao": {"initFormEn": "ciao", "displayEn": "ciao", "ru": "Чао;"},
  "chem": {"initFormEn": "chem", "displayEn": "chem", "ru": "Химия - chemistry"},
  "twinks": {"initFormEn": "twinks", "displayEn": "twinks", "ru": "геи"},
  "cant": {
    "initFormEn": "cant",
    "displayEn": "cant",
    "ru": "скошенный край; наклон; скос; наклонная поверхность; наклонное положение; отклонение от прямой; брус; поворотный шпангоут; толчок, удар;    ,   ; перевёртывание, опрокидывание; косой, скошенный; наклонный; скашивать;   ; наклонять, накренжаргон, арго; тайный язык; профессиональный жаргон; ноющий, плаксивый тон (обычно у нищих);   ; лицемерие, ханжество; лицемерные речи; лицемер, ханжа; лицемерный, ханжеский; ,   ; говорить плаксивым тоном (о нищем); клянчиирл.; продажа с аукциона; ирл.; продавать с аукциона"
  },
  "furnishings": {
    "initFormEn": "furnishings",
    "displayEn": "furnishings",
    "ru": "обстановка; мебель; меблировка; отделка; убранство; предметы интерьера; украшение; оборудование; предметы обстановки; предметы мебели; меблирование; предметы домашнего обихода; ярмаркаобстановка; меблировка; отделка; убранство; оборудование; оснащение; предоставление; комплектация; мебелировка; меблирование; украшения; наматрасник"
  },
  "gpl": {"initFormEn": "gpl", "displayEn": "gpl", "ru": "лицензия GPL;"},
  "dm": {"initFormEn": "dm", "displayEn": "dm", "ru": "немецкая марка; сахарный диабет;"},
  "threesome": {
    "initFormEn": "threesome",
    "displayEn": "threesome",
    "ru": "три человека, трое; гольф для трёх игроков; половой акт с участием трёх партнёров; состоящий из трёх; осуществляемый тремя людьми;"
  },
  "handjob": {"initFormEn": "handjob", "displayEn": "handjob", "ru": "мастурбирует"},
  "registrar": {
    "initFormEn": "registrar",
    "displayEn": "registrar",
    "ru": "архивариус; чиновник-регистратор; секретарь учебного заведения; регистрационное бюро;"
  },
  "dist": {"initFormEn": "dist", "displayEn": "dist", "ru": "расстояние; удаленный;"},
  "swingers": {"initFormEn": "swingers", "displayEn": "swingers", "ru": "жизнелюб; свингеры;"},
  "donna": {
    "initFormEn": "donna",
    "displayEn": "donna",
    "ru": "донна (форма почтительного обращения к женщине в Италии); дама, госпожа (о женщине итальянского происхождения"
  },
  "trivia": {"initFormEn": "trivia", "displayEn": "trivia", "ru": "мелочи, пустяки"},
  "statewide": {"initFormEn": "statewide", "displayEn": "statewide", "ru": "в масштабе штата; по всему штату; "},
  "semiconductor": {
    "initFormEn": "semiconductor",
    "displayEn": "semiconductor",
    "ru": "полупроводник; \nполупроводниковый прибор;\nполупроводниковый элемент; полупроводниковый;"
  },
  "capitol": {"initFormEn": "capitol", "displayEn": "capitol", "ru": "Капитолий; конгресс США; столица; капитолий;"},
  "replica": {
    "initFormEn": "replica",
    "displayEn": "replica",
    "ru": "реплика, точная копия; репродукция; копия, факсимиле; модель; копир; повторение;"
  },
  "troy": {
    "initFormEn": "troy",
    "displayEn": "troy",
    "ru": "троянский; монетный вес; трой; тройская система мер и весов (используемая в Великобритании и США и включающая граны, унции и фунты; применяется для взвешивания благородных металлов и драгоценных камней; получила название от французского города Труа, где проводились знаменитые ярма"
  },
  "webshots": {"initFormEn": "webshots", "displayEn": "webshots", "ru": "веб-снимки"},
  "subcommittee": {"initFormEn": "subcommittee", "displayEn": "subcommittee", "ru": "подкомиссия, подкомитет"},
  "oops": {
    "initFormEn": "oops",
    "displayEn": "oops",
    "ru": "хоп!; ой!, ух!, ох! (при испуге, тревоге, удивлении собственной ошибке, неловкости"
  },
  "rrp": {
    "initFormEn": "rrp",
    "displayEn": "rrp",
    "ru": "Цена по прейскуранту, также известная как рекомендуемая розничная цена; ррп;"
  },
  "fg": {"initFormEn": "fg", "displayEn": "fg", "ru": "Первый сорт; First Grade;"},
  "spencer": {
    "initFormEn": "spencer",
    "displayEn": "spencer",
    "ru": "спенсер (короткий шерстяной жакет); корсаж; двубортный мужской камзол (в 18-19 вв.); винтовка или карабин времён Гражданской войны"
  },
  "britannica": {
    "initFormEn": "britannica",
    "displayEn": "britannica",
    "ru": "Британника; британская энциклопедия; британника;"
  },
  "neo": {
    "initFormEn": "neo",
    "displayEn": "neo",
    "ru": "нео-, ново-; недавний, недавно появившийся; нео-, возобновлённый, модифицированный;"
  },
  "tp": {"initFormEn": "tp", "displayEn": "tp", "ru": "район (часть округа) - township; туалетная бумага;"},
  "vp": {"initFormEn": "vp", "displayEn": "vp", "ru": "вице;вице-президент;"},
  "zen": {"initFormEn": "zen", "displayEn": "zen", "ru": "дзен; Дзэн; дзен"},
  "hwy": {"initFormEn": "hwy", "displayEn": "hwy", "ru": "от хайвей, автомагистраль; шоссе"},
  "gdp": {
    "initFormEn": "gdp",
    "displayEn": "gdp",
    "ru": "ВВП; валовой внутренний продукт; ввп; - gross domestic product;"
  },
  "precipitation": {
    "initFormEn": "precipitation",
    "displayEn": "precipitation",
    "ru": "низвержение, стремительное падение; стремительность, торопливость; опрометчивость; неоправданная спешка, гонка; ускорение, увеличение темпа; осаждение; выпадение осадка; осадок; выпадение осадков; осадки; "
  },
  "gba": {"initFormEn": "gba", "displayEn": "gba", "ru": "генеральный директор;"},
  "harper": {"initFormEn": "harper", "displayEn": "harper", "ru": "Харпер, арфист;"},
  "livestock": {
    "initFormEn": "livestock",
    "displayEn": "livestock",
    "ru": "домашний скот; паразиты (блохи, вши); животноводство; домашние животные; племенной;"
  },
  "affiliation": {
    "initFormEn": "affiliation",
    "displayEn": "affiliation",
    "ru": "приём в члены, присоединение; членство, принадлежность; установление отцовства;"
  },
  "mesa": {
    "initFormEn": "mesa",
    "displayEn": "mesa",
    "ru": "плоскогорье; столовая гора (холм с плоской вершиной на юго-западе США); плато;"
  },
  "hull": {
    "initFormEn": "hull",
    "displayEn": "hull",
    "ru": "скорлупа, шелуха; кожица, кожура; оболочка (плодов, зёрен); чашелистики (клубники); сердцевина яблока; покрышка, чехол; оболочка; обёртка; корпус (корабля, танка); каркас, остов (какой-л. громоздкой конструкции"
  },
  "surrey": {
    "initFormEn": "surrey",
    "displayEn": "surrey",
    "ru": "лёгкий двухместный экипаж (с сиденьями, расположенными друг против друга);"
  },
  "accreditation": {
    "initFormEn": "accreditation",
    "displayEn": "accreditation",
    "ru": "аккредитование, аккредитация (дипломатических представителей, журналистов); аккредитация, сертификация (процедура признания соответствия чего-л. требуемым стандартам;"
  },
  "eh": {
    "initFormEn": "eh",
    "displayEn": "eh",
    "ru": "а?, как?, что (вы сказали)? (просьба повторить сказанное); так ведь?, не правда ли? (ожидание согласия); да?, вот как? (удивление сказанным кем-то);"
  },
  "aqua": {"initFormEn": "aqua", "displayEn": "aqua", "ru": "вода; раствор; жидкость; =   цвет морской волны"},
  "fp": {"initFormEn": "fp", "displayEn": "fp", "ru": "точка замерзания"},
  "somerset": {
    "initFormEn": "somerset",
    "displayEn": "somerset",
    "ru": "кульбит, прыжок кувырком, кувырканье; кувыркаться; переворачиваться; = somersault"
  },
  "rehab": {
    "initFormEn": "rehab",
    "displayEn": "rehab",
    "ru": "реабилитация, восстановление трудоспособности; восстановление, ремонт, реконструкция (здания);"
  },
  "calibration": {
    "initFormEn": "calibration",
    "displayEn": "calibration",
    "ru": "маркировка; калибровка; градуировка; тарирование; классифицирование; определение начальной скорости;"
  },
  "batman": {"initFormEn": "batman", "displayEn": "batman", "ru": "вестовой, денщик, ординарец; Бэтмен;"},
  "prerequisite": {
    "initFormEn": "prerequisite",
    "displayEn": "prerequisite",
    "ru": "предпосылка; предварительное условие; необходимый как предварительное условие;"
  },
  "palmer": {
    "initFormEn": "palmer",
    "displayEn": "palmer",
    "ru": "пилигрим, паломник (средневековые паломники украшали себя пальмовыми листьями в доказательство того, что они дошли до Святой земли"
  },
  "celebs": {"initFormEn": "celebs", "displayEn": "celebs", "ru": "знаменитость; звезда; знаменитости"},
  "designation": {
    "initFormEn": "designation",
    "displayEn": "designation",
    "ru": "обозначение, называние, указание; знак, обозначение, имя; назначение (на должность, для исполнения определённых обязанностей); указание профессии, занятий, адреса (для идентификации имени"
  },
  "softball": {
    "initFormEn": "softball",
    "displayEn": "softball",
    "ru": "софтбол (разновидность бейсбола); мяч для игры в софтбол"
  },
  "wn": {"initFormEn": "wn", "displayEn": "wn", "ru": "Беспроводная сеть - Wireless Network"},
  "dg": {"initFormEn": "dg", "displayEn": "dg", "ru": "дециграммот; генеральный директор;"},
  "vg": {"initFormEn": "vg", "displayEn": "vg", "ru": "видеоигра - video game"},
  "tmp": {"initFormEn": "tmp", "displayEn": "tmp", "ru": "температура"},
  "tract": {
    "initFormEn": "tract",
    "displayEn": "tract",
    "ru": "трактат; брошюра (особенно на религиозные темыполоса, участок, пространство (земли, леса, воды); период времени; тракт;"
  },
  "hq": {"initFormEn": "hq", "displayEn": "hq", "ru": "штаб; технология;"},
  "irrigation": {
    "initFormEn": "irrigation",
    "displayEn": "irrigation",
    "ru": "полив; ирригация, орошение; промывание; спринцевание;"
  },
  "yen": {
    "initFormEn": "yen",
    "displayEn": "yen",
    "ru": "иена (денежная единица Японии; тяга к наркотикам; сильное желание; быть наркоманом, испытывать тягу к наркотикам; жаждать, стремиться к (чему-л. / сделать что-л"
  },
  "dosage": {
    "initFormEn": "dosage",
    "displayEn": "dosage",
    "ru": "дозировка (лекарственных средств); доза; дозирование, дозация;"
  },
  "arbitration": {"initFormEn": "arbitration", "displayEn": "arbitration", "ru": "третейский суд, арбитраж"},
  "gibraltar": {
    "initFormEn": "gibraltar",
    "displayEn": "gibraltar",
    "ru": "Гибралтар; Гибралтарский пролив; гибралтарГибралтарский"
  },
  "burke": {
    "initFormEn": "burke",
    "displayEn": "burke",
    "ru": "убить, задушить (по имени знаменитого преступника; душил свои жертвы и затем продавал их тела для анатомирования); замять (дело); разделаться тихо и незаметно (с чем-л"
  },
  "vertex": {
    "initFormEn": "vertex",
    "displayEn": "vertex",
    "ru": "вершина (угла, кривой); вертекс, темя, макушка головы (в антропометрии); зенит (наивысшая точка небесной сферы); вершина, верхушка"
  },
  "waiver": {
    "initFormEn": "waiver",
    "displayEn": "waiver",
    "ru": "отказ (от права, требования, привилегии); документ (об отказе от права); отказывающийся от своего права"
  },
  "cingular": {
    "initFormEn": "cingular",
    "displayEn": "cingular",
    "ru": "поясной; кольцевойсеть от cingulum - пояс; пояс стихаря (часть облачения церковнослужителей;"
  },
  "wc": {"initFormEn": "wc", "displayEn": "wc", "ru": "туалет; уборная; туалет; - water closet"},
  "powerseller": {"initFormEn": "powerseller", "displayEn": "powerseller", "ru": "продавец энергии"},
  "cj": {"initFormEn": "cj", "displayEn": "cj", "ru": "Главный Судья - Chief Justice"},
  "masturbation": {"initFormEn": "masturbation", "displayEn": "masturbation", "ru": "мастурбация"},
  "deferred": {
    "initFormEn": "deferred",
    "displayEn": "deferred",
    "ru": "замедленный; задержанный; заторможенный; отложенный, отсроченный"
  },
  "qc": {"initFormEn": "qc", "displayEn": "qc", "ru": "контроль качества; королевский адвокат; талсаКК"},
  "flashers": {"initFormEn": "flashers", "displayEn": "flashers", "ru": "мигалка; проблесковые маячки; мигалки;"},
  "cw": {"initFormEn": "cw", "displayEn": "cw", "ru": "по часовой стрелке;"},
  "municipality": {
    "initFormEn": "municipality",
    "displayEn": "municipality",
    "ru": "город, имеющий самоуправление; муниципалитет; управление по принципу муниципалитета;"
  },
  "usps": {"initFormEn": "usps", "displayEn": "usps", "ru": "почтовая служба США; правила;"},
  "movers": {
    "initFormEn": "movers",
    "displayEn": "movers",
    "ru": "двигатель; движитель; инициатор; автор предложения; движущая сила; автор; движенец; грузчик; первичный двигатель; тягач; перевозчик; источник энергии; грузчики;"
  },
  "voyuer": {"initFormEn": "voyuer", "displayEn": "voyuer", "ru": "путешественник"},
  "gage": {
    "initFormEn": "gage",
    "displayEn": "gage",
    "ru": "заклад, залог; вызов (на поединок); ручаться; давать в качестве залога; биться об заклад"
  },
  "replication": {
    "initFormEn": "replication",
    "displayEn": "replication",
    "ru": "копирование; дублирование; повторение; тиражирование, размножение; иск. копия, репродукция; ответ истца на возражение по иску; реплика (какой-л. из сторон во время судебного заседания); возражение, ответ; ,  , ; отражение; эхо; отг"
  },
  "inexpensive": {
    "initFormEn": "inexpensive",
    "displayEn": "inexpensive",
    "ru": "недорогой, дешёвый; нерасточительный, экономный"
  },
  "beastality": {"initFormEn": "beastality", "displayEn": "beastality", "ru": "звериный"},
  "evanescence": {"initFormEn": "evanescence", "displayEn": "evanescence", "ru": "исчезновение"},
  "lm": {"initFormEn": "lm", "displayEn": "lm", "ru": "люмен, лмот; лунный модуль;"},
  "firmware": {
    "initFormEn": "firmware",
    "displayEn": "firmware",
    "ru": "прошивка; микропрограммное обеспечение; программно-аппаратные средства; встроенные программы; \"зашитые программы\" (в ПЗУ)"
  },
  "intl": {"initFormEn": "intl", "displayEn": "intl", "ru": "международный"},
  "redhead": {"initFormEn": "redhead", "displayEn": "redhead", "ru": "рыжеволосый человек; рыжеволосый\nрыжий; "},
  "groundwater": {"initFormEn": "groundwater", "displayEn": "groundwater", "ru": "грунтовые воды, подземные воды"},
  "infringement": {
    "initFormEn": "infringement",
    "displayEn": "infringement",
    "ru": "нарушение (закона, клятвы); покушение, посягательство (на права, свободу"
  },
  "lightbox": {
    "initFormEn": "lightbox",
    "displayEn": "lightbox",
    "ru": "лайтбокс; световой короб; осветитель; короб; рекламное"
  },
  "arbor": {"initFormEn": "arbor", "displayEn": "arbor", "ru": "вал; ось; шпиндель; оправка, штифт, штырь"},
  "ethnicity": {"initFormEn": "ethnicity", "displayEn": "ethnicity", "ru": "этническая или расовая принадлежность"},
  "derivatives": {
    "initFormEn": "derivatives",
    "displayEn": "derivatives",
    "ru": "производное; дериват; производная; дериватив; производный инструмент; производная ценная бумага; медиавики"
  },
  "severity": {
    "initFormEn": "severity",
    "displayEn": "severity",
    "ru": "строгость, суровость; жестокость; трудность, тяжесть (чего-л.); резкость суждений, критика, упрёк; суровость (морали); аскетизм; строгость мышления, логичность, соответствие истине, фактам; строгость (стиля, вкуса и т. п.); су"
  },
  "greenland": {
    "initFormEn": "greenland",
    "displayEn": "greenland",
    "ru": "лугопастбищное угодье; сенокосное угодье; луг; пастбище"
  },
  "slr": {"initFormEn": "slr", "displayEn": "slr", "ru": "зеркалка; зеркальный фотоаппарат"},
  "vitro": {"initFormEn": "vitro", "displayEn": "vitro", "ru": "пробиркой; экстракорпоральное; искусственного;"},
  "cosponsors": {
    "initFormEn": "cosponsors",
    "displayEn": "cosponsors",
    "ru": "коспонсоры; соавторы; медиавикикоспонсорспонсировать"
  },
  "btw": {"initFormEn": "btw", "displayEn": "btw", "ru": "кстати (употребляется в электронной переписке"},
  "italicized": {
    "initFormEn": "italicized",
    "displayEn": "italicized",
    "ru": "курсивный; шерилвыделить курсивом; выделять курсивом"
  },
  "garnet": {
    "initFormEn": "garnet",
    "displayEn": "garnet",
    "ru": "геол. гранат (прототипический цвет этого камня - красный); любой оттенок спектра от тёмно-красного цвета до насыщенно-бордового; гитов-тали, тали на грота-штаге"
  },
  "mk": {"initFormEn": "mk", "displayEn": "mk", "ru": "знак"},
  "hogtied": {"initFormEn": "hogtied", "displayEn": "hogtied", "ru": "связанный; связать;"},
  "clipart": {"initFormEn": "clipart", "displayEn": "clipart", "ru": "графический элемент;"},
  "tonga": {"initFormEn": "tonga", "displayEn": "tonga", "ru": "лёгкая двуколка; Тонга;"},
  "chapman": {"initFormEn": "chapman", "displayEn": "chapman", "ru": "странствующий торговец; коробейник;"},
  "appellant": {
    "initFormEn": "appellant",
    "displayEn": "appellant",
    "ru": "податель апелляции, апеллянт; подающий апелляцию, апеллирующий; апелляционный"
  },
  "transmitter": {
    "initFormEn": "transmitter",
    "displayEn": "transmitter",
    "ru": "отправитель, передатчик; (радио)передатчик; микрофон"
  },
  "toxicity": {"initFormEn": "toxicity", "displayEn": "toxicity", "ru": "токсичность"},
  "sz": {"initFormEn": "sz", "displayEn": "sz", "ru": "размер; длина; объем выборки; емкость запоминающего устройства"},
  "scat": {
    "initFormEn": "scat",
    "displayEn": "scat",
    "ru": "брысь, \"скат\" (манера джазового пения, когда певец выпевает бессмысленный набор слогов, подражая музыкальному инструменту); исполнять \"скат\"уходить прочь, убираться (часто в повелительном наклонении, команда животному покинуть место; экскременты (животных), помёта ргус ( , какая-л. рыба из семейства аргусовых); аргус обыкновенный, аргус крапчатый"
  },
  "slipknot": {
    "initFormEn": "slipknot",
    "displayEn": "slipknot",
    "ru": "скользящий узел; узел, который может быть легко развязан; петля  "
  },
  "bf": {"initFormEn": "bf", "displayEn": "bf", "ru": "клейтон; Boy Friend;"},
  "residual": {
    "initFormEn": "residual",
    "displayEn": "residual",
    "ru": "остаточный; оставшийся после вычитания; остаток, остаточный продукт; остаток, разность; остаточные явления (после болезни); авторский гонорар актёра, музыканта и т. п., начисляемый с каждого повторного исполнения"
  },
  "occupancy": {
    "initFormEn": "occupancy",
    "displayEn": "occupancy",
    "ru": "арендование, аренда, временное владение; арендуемое помещение; срок аренды, пользования; занятие; завладение (пространством, территорией"
  },
  "issuance": {
    "initFormEn": "issuance",
    "displayEn": "issuance",
    "ru": "издание, выпуск (приказа); выпуск, эмиссия, запуск в обращение (акций, ценных бумаг); выдача (лицензий, продовольствия"
  },
  "elk": {"initFormEn": "elk", "displayEn": "elk", "ru": "лось"},
  "definitive": {
    "initFormEn": "definitive",
    "displayEn": "definitive",
    "ru": "окончательный; решительный; имеющий решающее значение, решающий; последний;  , ,  , ; определённый, отличительный, характерный; фиксированный; ;   ; авторитетный; (наиболее) полный, точный (об из"
  },
  "barcode": {"initFormEn": "barcode", "displayEn": "barcode", "ru": "штриховой код"},
  "accession": {
    "initFormEn": "accession",
    "displayEn": "accession",
    "ru": "прирост; прибавление; пополнение, увеличение; вход, доступ; вступление (в должность, в организацию, на престол); вносить книги в каталог; приобретать книги для библиотеки;"
  },
  "anchorage": {
    "initFormEn": "anchorage",
    "displayEn": "anchorage",
    "ru": "якорная стоянка; стоянка на якоре; сбор за стоянку на якоре; опора; закрепление, жёсткая заделка; убежище, прибежище, якорь спасения"
  },
  "suv": {"initFormEn": "suv", "displayEn": "suv", "ru": "внедорожник; герцеговина"},
  "lacrosse": {
    "initFormEn": "lacrosse",
    "displayEn": "lacrosse",
    "ru": "лакросс – контактная спортивная игра между двумя командами, с использованием небольшого резинового мяча и клюшки с длинной рукояткой, называющейся стик."
  },
  "bbq": {"initFormEn": "bbq", "displayEn": "bbq", "ru": "барбекю; герцеговина;"},
  "tanning": {"initFormEn": "tanning", "displayEn": "tanning", "ru": "дубление; кожевенный; загар;\nсолярий;"},
  "objectionable": {
    "initFormEn": "objectionable",
    "displayEn": "objectionable",
    "ru": "вызывающий возражения; нежелательный; спорный; неприятный, ужасный; неудобный;"
  },
  "lemma": {
    "initFormEn": "lemma",
    "displayEn": "lemma",
    "ru": "аннотация, краткое содержание; тема, предмет; заметка на полях, глосса; лемма;"
  },
  "mediation": {
    "initFormEn": "mediation",
    "displayEn": "mediation",
    "ru": "посредничество, ходатайство, заступничество"
  },
  "notation": {
    "initFormEn": "notation",
    "displayEn": "notation",
    "ru": "нотация (изображение условными знаками, цифрами, буквами); условные знаки, условный алфавит (применяемые для выражения каких-л. понятий); записывание; запись, замечание, примечание, ссылка"
  },
  "assoc": {"initFormEn": "assoc", "displayEn": "assoc", "ru": "помощник; ассоциация"},
  "dentistry": {"initFormEn": "dentistry", "displayEn": "dentistry", "ru": "профессия зубного врача; лечение зубов"},
  "fedora": {"initFormEn": "fedora", "displayEn": "fedora", "ru": "мягкая фетровая шляпа"},
  "roi": {
    "initFormEn": "roi",
    "displayEn": "roi",
    "ru": "коэффициент окупаемости инвестиций; рентабельность инвестиций; возврат инвестиций; коэффициент"
  },
  "ladyboy": {"initFormEn": "ladyboy", "displayEn": "ladyboy", "ru": "ледибой"},
  "spinning": {
    "initFormEn": "spinning",
    "displayEn": "spinning",
    "ru": "прядение; нить, пряжа (продукт прядения); быстрое круговое движение, вращение; рыбная ловля на вращающуюся блесну; прядильный; вращающийся, крутящийся"
  },
  "followup": {"initFormEn": "followup", "displayEn": "followup", "ru": "отклик (на полученное послание"},
  "topical": {
    "initFormEn": "topical",
    "displayEn": "topical",
    "ru": "актуальный, злободневный; животрепещущий, жизненный; тематический, посвящённый какой-л. теме, связанный с какой-л. тематикой; местный; имеющий лишь местное или временное значение; местный, локальный;местно-ане"
  },
  "femdom": {"initFormEn": "femdom", "displayEn": "femdom", "ru": "женское доминирование"},
  "scarface": {"initFormEn": "scarface", "displayEn": "scarface", "ru": "лицо со шрамом;"},
  "duff": {
    "initFormEn": "duff",
    "displayEn": "duff",
    "ru": "бесполезный; тесто; клёцка; даф (пудинг; готовится в мешочке или на паруугольная мелочь; палый лист и хворост; лесная подстилка;   , 6подделывать, фальсифицировать; искусно выдавать одно за другое; мошенничать, обманывать; надувать, вводить в заблуждение;  воровать скот и менять клеймо; бить, избивать;   1); запороть удар (в гольфебесполезный; сломанный; низкокачественный; поддельный, фальшивыйзадницабрюхатый, беременный"
  },
  "overstock": {
    "initFormEn": "overstock",
    "displayEn": "overstock",
    "ru": "делать слишком большой запас; затоваривать (магазин, рынок); излишний запас, избыток;"
  },
  "hmm": {"initFormEn": "hmm", "displayEn": "hmm", "ru": "хм;"},
  "hath": {"initFormEn": "hath", "displayEn": "hath", "ru": "редуцированные формы has"},
  "audioslave": {"initFormEn": "audioslave", "displayEn": "audioslave", "ru": "аудиослужба"},
  "canterbury": {"initFormEn": "canterbury", "displayEn": "canterbury", "ru": "резная этажерка (для нот, газет"},
  "hex": {
    "initFormEn": "hex",
    "displayEn": "hex",
    "ru": "колдунья, чародейка; гадалка, ведьма; сглаз, колдовство, злые чары; дурной знак, дурное предзнаменование (противоположность талисману; нечто, приносящее несчастье); злой гений (человек, всё время приносящий несчастья); заколдовывать, привораживатьшестиугольный"
  },
  "evite": {"initFormEn": "evite", "displayEn": "evite", "ru": "даже; приглашение; вызвать; Ивайт;"},
  "blogroll": {"initFormEn": "blogroll", "displayEn": "blogroll", "ru": "список ссылок на другие блоги или сайты"},
  "dissemination": {
    "initFormEn": "dissemination",
    "displayEn": "dissemination",
    "ru": "разбрасывание, рассеивание; распространение"
  },
  "deletion": {
    "initFormEn": "deletion",
    "displayEn": "deletion",
    "ru": "разрушение; уничтожение; устранение; вычёркивание, стирание (того, что написано, напечатано, записано на плёнку);  то, что вычеркнуто, стёрто; подчищенное, стёртое место в тексте;"
  },
  "commencement": {
    "initFormEn": "commencement",
    "displayEn": "commencement",
    "ru": "отправная точка, начало; церемония присвоения учёных степеней и вручения дипломов; актовый день (в американских университетах;"
  },
  "ecards": {"initFormEn": "ecards", "displayEn": "ecards", "ru": "электронные открытки"},
  "clit": {"initFormEn": "clit", "displayEn": "clit", "ru": "клитор - clitoris"},
  "laserjet": {"initFormEn": "laserjet", "displayEn": "laserjet", "ru": "лазерный принтер;"},
  "peso": {
    "initFormEn": "peso",
    "displayEn": "peso",
    "ru": "песо (денежная единица ряда стран Латинской Америки; содержит 100 сентаво, в Уругвае - 100 сентесимо"
  },
  "vibration": {
    "initFormEn": "vibration",
    "displayEn": "vibration",
    "ru": "колебание; резонанс, отклик; колебание, дрожание; вибрация; колебание, сомнение, нерешительность; ( )  флюиды (исходящие от человека); атмосфера (места); неясное предчувствие, смутное впечатление"
  },
  "hamas": {"initFormEn": "hamas", "displayEn": "hamas", "ru": "ХАМАС; хамас"},
  "aux": {"initFormEn": "aux", "displayEn": "aux", "ru": "вспомогательный; дополнительный; - auxiliary"},
  "newswire": {
    "initFormEn": "newswire",
    "displayEn": "newswire",
    "ru": "служба новостей; лента новостей; новостная лента; капсулы"
  },
  "spermshack": {"initFormEn": "spermshack", "displayEn": "spermshack", "ru": "мешок со спермой;"},
  "brokerage": {
    "initFormEn": "brokerage",
    "displayEn": "brokerage",
    "ru": "маклерство; профессия / должность брокера; комиссионное вознаграждение, гонорар (выплачиваемые брокеру;"
  },
  "durability": {
    "initFormEn": "durability",
    "displayEn": "durability",
    "ru": "продолжительность, длительность; , ; долговечность; срок службы; живучесть; носкость; прочность; стойкость; износостойкость, износоустойчивость; ресурс прочности; стойкость;"
  },
  "msc": {"initFormEn": "msc", "displayEn": "msc", "ru": "магистр; магистратура; божественный"},
  "feasibility": {"initFormEn": "feasibility", "displayEn": "feasibility", "ru": "осуществимость, выполнимость;"},
  "napa": {
    "initFormEn": "napa",
    "displayEn": "napa",
    "ru": "пекинская капуста; мягкая кожа для изготовления перчаток;"
  },
  "abt": {"initFormEn": "abt", "displayEn": "abt", "ru": "около, приблизительно, примерно"},
  "cote": {"initFormEn": "cote", "displayEn": "cote", "ru": "загон, овчарня, хлев"},
  "jenna": {"initFormEn": "jenna", "displayEn": "jenna", "ru": "джины; дженна;"},
  "sgt": {"initFormEn": "sgt", "displayEn": "sgt", "ru": "сержант; "},
  "fender": {
    "initFormEn": "fender",
    "displayEn": "fender",
    "ru": "бампер; каминная решётка; ограда, перила; буфер, предохранительная решётка (на паровозе, трамвае);   , 1), г) крыло (автомобиля); кранец"
  },
  "apc": {"initFormEn": "apc", "displayEn": "apc", "ru": "БТР; бронетранспортер; БМП; "},
  "rue": {
    "initFormEn": "rue",
    "displayEn": "rue",
    "ru": "жалость, сострадание; раскаяние, сожаление; раскаиваться, сожалеть, чувствовать угрызения совести по поводу (чего-л.); горевать, печалиться; сочувствовать, сострадатьрута (душистая"
  },
  "lisp": {
    "initFormEn": "lisp",
    "displayEn": "lisp",
    "ru": "шепелявость; шорох, шелест (листвы, травы); шепелявить; =    лепетать (о детях); льстить, присюсюкивать"
  },
  "petitioner": {"initFormEn": "petitioner", "displayEn": "petitioner", "ru": "проситель; податель петиции; истец"},
  "deprecated": {
    "initFormEn": "deprecated",
    "displayEn": "deprecated",
    "ru": "возражать; протестовать; резко осуждать; осуждать; умалять; осуждаемый"
  },
  "municipalities": {
    "initFormEn": "municipalities",
    "displayEn": "municipalities",
    "ru": "муниципалитет; муниципальное образование; мэрия; город; муниципия; муниципальный орган; муниципальный округ; городское самоуправление; гмина; муниципалитеты"
  },
  "dreamcast": {"initFormEn": "dreamcast", "displayEn": "dreamcast", "ru": "трансляция снов"},
  "ew": {"initFormEn": "ew", "displayEn": "ew", "ru": "фу; фу"},
  "gf": {"initFormEn": "gf", "displayEn": "gf", "ru": "ГС"},
  "sightseeing": {"initFormEn": "sightseeing", "displayEn": "sightseeing", "ru": "осмотр достопримечательностей"},
  "cameltoe": {"initFormEn": "cameltoe", "displayEn": "cameltoe", "ru": "отряд на верблюдах; верблюжья упряжка;"},
  "pvt": {"initFormEn": "pvt", "displayEn": "pvt", "ru": "параллельный подсчет;"},
  "hotwire": {
    "initFormEn": "hotwire",
    "displayEn": "hotwire",
    "ru": "замыкать накоротко провода для запуска двигателя без ключа зажигания"
  },
  "uncut": {
    "initFormEn": "uncut",
    "displayEn": "uncut",
    "ru": "неразрезанный, несрезанный; с необрезанными полями (о книге); полный, несокращённый (о тексте); нешлифованный, негранёный; неподстриженный (о деревьях); нескошенный"
  },
  "mvp": {"initFormEn": "mvp", "displayEn": "mvp", "ru": "ПМК; самый ценный игрок"},
  "govt": {"initFormEn": "govt", "displayEn": "govt", "ru": "правительство; government"},
  "stein": {
    "initFormEn": "stein",
    "displayEn": "stein",
    "ru": "глиняная кружка (особенно для пива, обычно ёмкостью около пинты;"
  },
  "fuller": {
    "initFormEn": "fuller",
    "displayEn": "fuller",
    "ru": "валяльщик, сукновалинструмент для выделки желобов; выделывать желоба; чеканить;"
  },
  "vaginal": {"initFormEn": "vaginal", "displayEn": "vaginal", "ru": "влагалищный, вагинальный;"},
  "interpreter": {
    "initFormEn": "interpreter",
    "displayEn": "interpreter",
    "ru": "интерпретатор, истолкователь; устный переводчик;"
  },
  "reconciliation": {
    "initFormEn": "reconciliation",
    "displayEn": "reconciliation",
    "ru": "мир, согласие; восстановление дружественных отношений, примирение; улаживание (споров, конфликтов); урегулирование (разногласий); взаимодействие, согласование, согласованность; переосвящение осквернённой церкви; примирение согрешившего человека"
  },
  "lesbianas": {"initFormEn": "lesbianas", "displayEn": "lesbianas", "ru": "лесбиянки"},
  "xmas": {"initFormEn": "xmas", "displayEn": "xmas", "ru": "Рождество; рождестворождественский"},
  "silicone": {
    "initFormEn": "silicone",
    "displayEn": "silicone",
    "ru": "силиконовый; кремнийорганический; кремниевый; силиконсиликон; кремний"
  },
  "marley": {"initFormEn": "marley", "displayEn": "marley", "ru": "марля;"},
  "pharmacist": {"initFormEn": "pharmacist", "displayEn": "pharmacist", "ru": "аптекарь, фармацевт"},
  "jupiter": {"initFormEn": "jupiter", "displayEn": "jupiter", "ru": "Юпитер;"},
  "footnote": {
    "initFormEn": "footnote",
    "displayEn": "footnote",
    "ru": "подстрочное примечание; сноска; снабжать подстрочными примечаниями, составлять подстрочные примечания"
  },
  "approximation": {
    "initFormEn": "approximation",
    "displayEn": "approximation",
    "ru": "приближённое значение; приблизительное соответствие; аппроксимация, приближение; наложение, репозиция, сопоставление (краёв раны"
  },
  "foreclosures": {
    "initFormEn": "foreclosures",
    "displayEn": "foreclosures",
    "ru": "потеря права выкупа; взыскание; выкуп;"
  },
  "fave": {"initFormEn": "fave", "displayEn": "fave", "ru": "любимое, лучшее; любимец; любимый;"},
  "propagation": {
    "initFormEn": "propagation",
    "displayEn": "propagation",
    "ru": "воспроизведение, размножение; распространение (идей, веры и т. п"
  },
  "hardback": {
    "initFormEn": "hardback",
    "displayEn": "hardback",
    "ru": "в жёстком переплёте, в твёрдой обложке; ; книга в жёстком переплёте, в твёрдой обложке"
  },
  "twp": {"initFormEn": "twp", "displayEn": "twp", "ru": "район (часть округа) - township"},
  "clarification": {
    "initFormEn": "clarification",
    "displayEn": "clarification",
    "ru": "ректификация, очищение (жидкостей и газов от примесей); просветление, прояснение, ясность (мыслей, ума, рассудка); преобразование, видоизменение"
  },
  "fn": {"initFormEn": "fn", "displayEn": "fn", "ru": "примечание, сноска"},
  "cruiser": {
    "initFormEn": "cruiser",
    "displayEn": "cruiser",
    "ru": "крейсер; комфортабельный катер; человек, отправляющийся в круиз; самолёт или космический корабль (в научной фантастике); полицейская машина, патрулирующая улицы"
  },
  "validate": {
    "initFormEn": "validate",
    "displayEn": "validate",
    "ru": "ратифицировать, утверждать; объявлять действительным, придавать законную силу; обосновывать; подтверждать"
  },
  "outerwear": {"initFormEn": "outerwear", "displayEn": "outerwear", "ru": "верхняя одежда"},
  "reflective": {
    "initFormEn": "reflective",
    "displayEn": "reflective",
    "ru": "отражающий (свет, изображение, звуковые волны); отражательный; склонный к размышлениям, задумчивости; мыслящий, размышляющий; задумчивый, погружённый в размышления;  отражённый"
  },
  "greenwood": {"initFormEn": "greenwood", "displayEn": "greenwood", "ru": "лиственный лес; лес в зелёном уборе;"},
  "attendees": {
    "initFormEn": "attendees",
    "displayEn": "attendees",
    "ru": "присутствующий; скобыучастник; слушатель; посетитель; участник встречи;"
  },
  "toc": {"initFormEn": "toc", "displayEn": "toc", "ru": "оглавление; содержание;"},
  "datasheet": {
    "initFormEn": "datasheet",
    "displayEn": "datasheet",
    "ru": "таблица данных; таблица; техническое описание; спецификация;"
  },
  "planetary": {
    "initFormEn": "planetary",
    "displayEn": "planetary",
    "ru": "планетный, планетарный; напоминающий планету, схожий (по какому-л. признаку) с планетой; космический, вселенский; земной, мирской; принадлежащий нашей планете, земной, с Земли; блуждающий, странствующий, скитающийся"
  },
  "desc": {"initFormEn": "desc", "displayEn": "desc", "ru": "описание; рассказ;"},
  "docket": {
    "initFormEn": "docket",
    "displayEn": "docket",
    "ru": "опись партии товара (с указанием владельца); квитанция об уплате таможенной пошлины; выписка решения суда; книга; список дел к слушанию; вести досье судопроизводства, вести книгу записей по делу; вносить краткое содержание дела в книгу, в реестр; мар"
  },
  "hastings": {
    "initFormEn": "hastings",
    "displayEn": "hastings",
    "ru": "скороспелые или ранние овощи и фрукты; зелёный горошек;"
  },
  "taxonomy": {
    "initFormEn": "taxonomy",
    "displayEn": "taxonomy",
    "ru": "систематика, таксономия; классификация; систематизация;"
  },
  "hancock": {"initFormEn": "hancock", "displayEn": "hancock", "ru": "подпись; Хэнкок; "},
  "smugmug": {"initFormEn": "smugmug", "displayEn": "smugmug", "ru": "самодовольный"},
  "limo": {"initFormEn": "limo", "displayEn": "limo", "ru": "лимузин"},
  "outpatient": {
    "initFormEn": "outpatient",
    "displayEn": "outpatient",
    "ru": "амбулаторный больной; амбулаторное отделение в больнице"
  },
  "wholesalers": {
    "initFormEn": "wholesalers",
    "displayEn": "wholesalers",
    "ru": "оптовых закупщика; оптовикиоптовый поставщик; оптовик; оптовый торговец; оптовая торговля; оптовый продавец; оптовый покупатель; оптовая компания; оптовая фирма; оптовое предприятие; оптовая сеть"
  },
  "coldfusion": {"initFormEn": "coldfusion", "displayEn": "coldfusion", "ru": "холодный ядерный синтез;"},
  "cookware": {"initFormEn": "cookware", "displayEn": "cookware", "ru": "кухонная утварь"},
  "lavigne": {"initFormEn": "lavigne", "displayEn": "lavigne", "ru": "лавина; "},
  "vr": {"initFormEn": "vr", "displayEn": "vr", "ru": "виртуальная реальность; стабиловольт;"},
  "rodeo": {
    "initFormEn": "rodeo",
    "displayEn": "rodeo",
    "ru": "загон для клеймения скота; сбор скота (для осмотра, пересчёта, клеймения); родео, состязание ковбоев"
  },
  "voyager": {"initFormEn": "voyager", "displayEn": "voyager", "ru": "мореплаватель"},
  "corrosion": {
    "initFormEn": "corrosion",
    "displayEn": "corrosion",
    "ru": "коррозия; ржавление; разъедание; окисление, ржавчина"
  },
  "solicitation": {
    "initFormEn": "solicitation",
    "displayEn": "solicitation",
    "ru": "настойчивая просьба, ходатайство; обольщение, соблазн; приставание к мужчине на улице; подстрекательство (к преступлению);   ведение дела (в суде; домогательство; подстрекательство"
  },
  "pooh": {
    "initFormEn": "pooh",
    "displayEn": "pooh",
    "ru": "уф!; тьфу! (выражает нетерпение, раздражение или презрение"
  },
  "ich": {
    "initFormEn": "ich",
    "displayEn": "ich",
    "ru": "ихтиофтириоз (возбудительот ; ихтиологическийот ; ихтиология"
  },
  "tarot": {"initFormEn": "tarot", "displayEn": "tarot", "ru": "таро (гадальные карты"},
  "footer": {
    "initFormEn": "footer",
    "displayEn": "footer",
    "ru": "длиной или ростом в столько-то футов; (-/ -) удар, выполненный правой или левой ногой; футбол; нижний колонтитул; ; пешеход"
  },
  "figurines": {"initFormEn": "figurines", "displayEn": "figurines", "ru": "статуэтка; фигурка; статуэтки"},
  "lynx": {"initFormEn": "lynx", "displayEn": "lynx", "ru": "рысь; мех рыси"},
  "jedi": {"initFormEn": "jedi", "displayEn": "jedi", "ru": "джедай; джедай"},
  "feeder": {
    "initFormEn": "feeder",
    "displayEn": "feeder",
    "ru": "кормилец; едок; тунеядец, паразит, приживальщик; толстяк; кормушка; с.-х. скот, откармливаемый на убой; приток (у реки); подземный водоток; ж.-д. ветка; вспомогательная транспортная линия; источник снабжения (чем-л.); питатель, подающий механизм, авт"
  },
  "mercer": {
    "initFormEn": "mercer",
    "displayEn": "mercer",
    "ru": "торговец тканями (особенно шёлком, бархатом и другими дорогими тканями"
  },
  "goodman": {"initFormEn": "goodman", "displayEn": "goodman", "ru": "хозяин, глава семьи; муж; йомен, крестьянин"},
  "subunit": {"initFormEn": "subunit", "displayEn": "subunit", "ru": "часть, подразделение; субъединица;  субблок;"},
  "rhapsody": {
    "initFormEn": "rhapsody",
    "displayEn": "rhapsody",
    "ru": "восторженная речь; рапсодия; музыкальное произведение; эпическая песня, исполняемая древнегреческим рапсодом"
  },
  "solitaire": {
    "initFormEn": "solitaire",
    "displayEn": "solitaire",
    "ru": "солитэр (настольная игра); карт. пасьянс;  3); солитер (драгоценный камень, обычно бриллиант); =    кольцо с драгоценным камнем (обычно бриллиантом); дронт (вымершая птица);  , 1"
  },
  "rumors": {
    "initFormEn": "rumors",
    "displayEn": "rumors",
    "ru": "кривотолки; домыслы; слухислух; молва; слушокслух; молва; сплетня; слушок; толковраспространять слухи"
  },
  "yds": {"initFormEn": "yds", "displayEn": "yds", "ru": "ярд (мера длины, равная 3 футам или 91,44 см)"},
  "cctv": {
    "initFormEn": "cctv",
    "displayEn": "cctv",
    "ru": "система видеонаблюдения; центральное телевидение; видеонаблюдение"
  },
  "remover": {
    "initFormEn": "remover",
    "displayEn": "remover",
    "ru": "перевозчик мебели; средство уничтожения; средство для удаления; растворитель; съёмник"
  },
  "ticker": {
    "initFormEn": "ticker",
    "displayEn": "ticker",
    "ru": "маятник; часы; сердце; отвага, мужество; =    тикер (биржевой аппарат, передающий котировки ценных бумаг); =   любитель орнитологии, старающийся увидеть и внести в свой список как можно больше разных видов птиц; зуммер, тиккер"
  },
  "asap": {"initFormEn": "asap", "displayEn": "asap", "ru": "как можно скорее; как можно быстрее; срочно"},
  "onsite": {"initFormEn": "onsite", "displayEn": "onsite", "ru": "локальный; локальный"},
  "mapquest": {"initFormEn": "mapquest", "displayEn": "mapquest", "ru": "запрос на картеж; искать на карте;"},
  "swimwear": {"initFormEn": "swimwear", "displayEn": "swimwear", "ru": "купальный костюм"},
  "padded": {
    "initFormEn": "padded",
    "displayEn": "padded",
    "ru": "обитый, подбитый; раздутый; дополненный; дополняемый;раздутый;\nпухлый;"
  },
  "pricetool": {"initFormEn": "pricetool", "displayEn": "pricetool", "ru": "ценовой инструмент"},
  "circa": {"initFormEn": "circa", "displayEn": "circa", "ru": "приблизительно, примерно, около"},
  "mgmt": {"initFormEn": "mgmt", "displayEn": "mgmt", "ru": "управление;"},
  "suppression": {
    "initFormEn": "suppression",
    "displayEn": "suppression",
    "ru": "подавление; изъятие из печати; запрещение печати; скрытие, утаивание"
  },
  "preparedness": {
    "initFormEn": "preparedness",
    "displayEn": "preparedness",
    "ru": "подготовленность, готовность; обеспечение готовности; "
  },
  "playoffs": {"initFormEn": "playoffs", "displayEn": "playoffs", "ru": "серии игр; эстеррешающая встреча"},
  "masterbation": {
    "initFormEn": "masterbation",
    "displayEn": "masterbation",
    "ru": "рукоблудие; мастурбация - masturbation"
  },
  "deductible": {
    "initFormEn": "deductible",
    "displayEn": "deductible",
    "ru": "вычитаемая часть (из суммы страховки, из налогооблагаемой суммы и т.д"
  },
  "chf": {
    "initFormEn": "chf",
    "displayEn": "chf",
    "ru": "швейцарский франк; застойная сердечная недостаточность; швейцарский"
  },
  "interoperability": {
    "initFormEn": "interoperability",
    "displayEn": "interoperability",
    "ru": "возможность взаимодействия (программных и аппаратных изделий разных поставщиковспособность к взаимодействию (характеристика качества программного обеспечения"
  },
  "neoplasms": {
    "initFormEn": "neoplasms",
    "displayEn": "neoplasms",
    "ru": "новообразование; неоплазма; опухоль; новообразования"
  },
  "dinar": {
    "initFormEn": "dinar",
    "displayEn": "dinar",
    "ru": "динар (денежная единица Сербии, а также ряда стран Азии и Африки"
  },
  "pagina": {"initFormEn": "pagina", "displayEn": "pagina", "ru": "поверхность листовой пластинки или крыла насекомых"},
  "scrapbook": {
    "initFormEn": "scrapbook",
    "displayEn": "scrapbook",
    "ru": "альбом для газетных или журнальных вырезок, картинок, фотографий"
  },
  "roundup": {
    "initFormEn": "roundup",
    "displayEn": "roundup",
    "ru": "сгон скота; (полицейская) облава; сводка новостей;"
  },
  "faxes": {"initFormEn": "faxes", "displayEn": "faxes", "ru": "факс; факсимильная связь; факсимильный аппарат; факсы"},
  "och": {"initFormEn": "och", "displayEn": "och", "ru": "ох, - surprise, regret, or disbelief"},
  "cdr": {"initFormEn": "cdr", "displayEn": "cdr", "ru": "ЦХД; командир;"},
  "consumables": {
    "initFormEn": "consumables",
    "displayEn": "consumables",
    "ru": "сменный) блок расходных материалов (напр., тонер-картридж в лазерном принтере"
  },
  "highbeam": {"initFormEn": "highbeam", "displayEn": "highbeam", "ru": "высокий луч"},
  "trustpass": {"initFormEn": "trustpass", "displayEn": "trustpass", "ru": "трастовый пропуск"},
  "handicap": {
    "initFormEn": "handicap",
    "displayEn": "handicap",
    "ru": "помеха; препятствие; мешать;\nпрепятствовать; неполноценный; гандикап; соревнования, в которых шансы участников с разными возможностями предварительно уравниваются; фора, преимущество, предоставляемое более слабому сопернику; физический или умственный недостаток; увечье; расстройство; помеха; препятствие; бар"
  },
  "toons": {"initFormEn": "toons", "displayEn": "toons", "ru": "командиры взводов; мультяшки;"},
  "trafficking": {
    "initFormEn": "trafficking",
    "displayEn": "trafficking",
    "ru": "торговля запрещённым товаром; контрабанда незаконная торговля;"
  },
  "cutie": {"initFormEn": "cutie", "displayEn": "cutie", "ru": "милашка, прелесть; симпатяга;"},
  "creampie": {"initFormEn": "creampie", "displayEn": "creampie", "ru": "кремовый пирог"},
  "nwt": {"initFormEn": "nwt", "displayEn": "nwt", "ru": "северо-западный"},
  "stripping": {
    "initFormEn": "stripping",
    "displayEn": "stripping",
    "ru": "раздевание, обнажение; стриптиз; сдирание, обдирание; зачистка; снятие верхнего слоя; лишение (чего-л.); отнятие; ограбление; разборка, демонтаж; распалубка; геол. вскрыша; открытая разработка; разрез; =    реакция срыва; отгонка (лёг"
  },
  "sugababes": {"initFormEn": "sugababes", "displayEn": "sugababes", "ru": "сладкие малыши"},
  "musings": {"initFormEn": "musings", "displayEn": "musings", "ru": "размышление; задумчивость; сладкие"},
  "herpes": {"initFormEn": "herpes", "displayEn": "herpes", "ru": "герпес, лишай; опоясывающий герпес; герпетический;"},
  "principe": {"initFormEn": "principe", "displayEn": "principe", "ru": "Принсипи; принцип"},
  "chiropractic": {"initFormEn": "chiropractic", "displayEn": "chiropractic", "ru": "хиропрактика"},
  "borrower": {
    "initFormEn": "borrower",
    "displayEn": "borrower",
    "ru": "заёмщик; берущий взаймы; получатель кредита; должник; получатель ссуды;"
  },
  "throughput": {
    "initFormEn": "throughput",
    "displayEn": "throughput",
    "ru": "пропускная способность; количество сырья, материала, израсходованного за определённый срок; производительность, выработка; производство; энергия, активность"
  },
  "mack": {"initFormEn": "mack", "displayEn": "mack", "ru": "от   1); макинтош, непромокаемое пальто"},
  "opener": {
    "initFormEn": "opener",
    "displayEn": "opener",
    "ru": "консервный нож, открывалка; слабительное; начало, начальное событие; первая встреча в серии состязаний"
  },
  "varsity": {
    "initFormEn": "varsity",
    "displayEn": "varsity",
    "ru": "университет; спортивная команда (основная команда, представляющая на соревнованиях университет, колледж или школу); университетский"
  },
  "multicast": {
    "initFormEn": "multicast",
    "displayEn": "multicast",
    "ru": "групповой; многоадресный;\nшироковещательный; многоадресная рассылка;"
  },
  "holt": {
    "initFormEn": "holt",
    "displayEn": "holt",
    "ru": "пристанище, лесок, роща; лесистый холмприбежище, убежище; нора (выдры); крепкое сжатие; схватка"
  },
  "incubus": {
    "initFormEn": "incubus",
    "displayEn": "incubus",
    "ru": "инкуб (дьявол в образе мужчины; нападает на женщин во сне и совокупляется с ними)   ; гнёт, бремя (забот, проблем); кошмар; дурной сон;"
  },
  "ballroom": {
    "initFormEn": "ballroom",
    "displayEn": "ballroom",
    "ru": "бальный зал; танцевальный зал; танцзал; бальный;"
  },
  "hummer": {
    "initFormEn": "hummer",
    "displayEn": "hummer",
    "ru": "зуммер, пищик; энергичный человек, тот, кто быстро «проворачивает» дела, деятельная организация;"
  },
  "putative": {"initFormEn": "putative", "displayEn": "putative", "ru": "мнимый, предполагаемый"},
  "zeppelin": {"initFormEn": "zeppelin", "displayEn": "zeppelin", "ru": "цеппелин; дирижабль; цеппелин"},
  "unsure": {
    "initFormEn": "unsure",
    "displayEn": "unsure",
    "ru": "неуверенный; неуверенный в себе; неустановленный, неопределённый;"
  },
  "claimant": {
    "initFormEn": "claimant",
    "displayEn": "claimant",
    "ru": "претендент; получающий пособие (по безработице, инвалидности); предъявляющий права; истец"
  },
  "psa": {"initFormEn": "psa", "displayEn": "psa", "ru": "СРП; ВОБ; социальная реклама; пса"},
  "entrepreneurship": {
    "initFormEn": "entrepreneurship",
    "displayEn": "entrepreneurship",
    "ru": "предпринимательство; предпринимательская деятельность; развитие предпринимательства; предприимчивость; предпринимательство"
  },
  "percentile": {
    "initFormEn": "percentile",
    "displayEn": "percentile",
    "ru": "процентиль; персентиль;\nперцентиль; процентный;"
  },
  "microscopy": {"initFormEn": "microscopy", "displayEn": "microscopy", "ru": "микроскопия"},
  "directorate": {
    "initFormEn": "directorate",
    "displayEn": "directorate",
    "ru": "дирекция (комплекс помещений, находящихся в ведении директора или директората); правление, директорат (коллегия директоров крупного учреждения); членство в правлении, директорате; управление, осуществляемое директором или"
  },
  "ezine": {
    "initFormEn": "ezine",
    "displayEn": "ezine",
    "ru": "электронный журнал (издание, доступное через интернет или другие оперативные службы"
  },
  "faux": {"initFormEn": "faux", "displayEn": "faux", "ru": "искусственный, ненатуральный"},
  "savvy": {
    "initFormEn": "savvy",
    "displayEn": "savvy",
    "ru": "сообразительность, находчивость, смышлёность; здравый смысл; смышлёный, толковый, сообразительный; понимать, соображать"
  },
  "serenity": {
    "initFormEn": "serenity",
    "displayEn": "serenity",
    "ru": "прозрачность, ясность (неба, воздуха); неподвижность, спокойствие (в природе); безмятежность, спокойствие (о душевном состоянии); светлость (титулование герцога);"
  },
  "silva": {"initFormEn": "silva", "displayEn": "silva", "ru": "лес; лесная растительность;"},
  "dong": {
    "initFormEn": "dong",
    "displayEn": "dong",
    "ru": "донг (денежная единица Вьетнаманеценз.; мужской половой член"
  },
  "berg": {"initFormEn": "berg", "displayEn": "berg", "ru": "айсберг, ледяная гора"},
  "tyne": {"initFormEn": "tyne", "displayEn": "tyne", "ru": "тайна; тайн; тайн"},
  "lotto": {"initFormEn": "lotto", "displayEn": "lotto", "ru": "лото; лотерея"},
  "fowler": {"initFormEn": "fowler", "displayEn": "fowler", "ru": "птицелов; Фаулер; "},
  "nanotechnology": {
    "initFormEn": "nanotechnology",
    "displayEn": "nanotechnology",
    "ru": "нанотехнология; наноиндустрия; нанотехнологический;"
  },
  "barker": {
    "initFormEn": "barker",
    "displayEn": "barker",
    "ru": "грубиян; собака (обычно громко лающая); зазывала; ведущий аукциона, аукционист; револьвер, пистолет; редк. пушка, артиллерийское орудие"
  },
  "gpa": {"initFormEn": "gpa", "displayEn": "gpa", "ru": "средний балл; гПа; СПЗ; ГПД; соглашение ; средний"},
  "abdominal": {
    "initFormEn": "abdominal",
    "displayEn": "abdominal",
    "ru": "брюшной; брюхоперый, абдоминальный, (о рыбах"
  },
  "incidental": {
    "initFormEn": "incidental",
    "displayEn": "incidental",
    "ru": "неглавный, побочный, второстепенный, случайный; дополнительный;  свойственный, присущий; сопроводительный (о музыке к фильму или спектаклю); эпизод, побочная линия сюжета; случайность; случайное обстоятельство; мелкие р"
  },
  "equestrian": {
    "initFormEn": "equestrian",
    "displayEn": "equestrian",
    "ru": "всадник; наездник; конный спорт (комплекс олимпийских дисциплин, включающий выездку, конкур, троеборье); конный; рыцарский"
  },
  "tsp": {"initFormEn": "tsp", "displayEn": "tsp", "ru": "чайная ложка; задача коммивояжера; чайная;"},
  "davenport": {
    "initFormEn": "davenport",
    "displayEn": "davenport",
    "ru": "небольшой письменный стол; секретер; диван-кровать; кушетка"
  },
  "decker": {"initFormEn": "decker", "displayEn": "decker", "ru": "палубное судно; Декер; Деккер; палубное;"},
  "decals": {
    "initFormEn": "decals",
    "displayEn": "decals",
    "ru": "декалей; наклейка; отличительные знаки; переводная картинка; деколь; декалькомания; этикеты;"
  },
  "lineup": {
    "initFormEn": "lineup",
    "displayEn": "lineup",
    "ru": "состав участников, состав команды; расстановка сил; расположение игроков на поле; процедура опознавания подозреваемого;"
  },
  "req": {"initFormEn": "req", "displayEn": "req", "ru": "запрос; требование, необходимое условие;"},
  "hj": {"initFormEn": "hj", "displayEn": "hj", "ru": "мастурбирует - hand job"},
  "locus": {
    "initFormEn": "locus",
    "displayEn": "locus",
    "ru": "место, местоположение; центральная позиция, ключевая точка; а орбита, траектория; геометрическое место точек; биол. локус (хромосомы) (линейный участок хромосомы, занимаемый одним геном"
  },
  "factual": {
    "initFormEn": "factual",
    "displayEn": "factual",
    "ru": "фактический, действительный; основанный на фактах; "
  },
  "purity": {
    "initFormEn": "purity",
    "displayEn": "purity",
    "ru": "чистота, беспримесность; чистое вещество (без примесей); безукоризненность, безупречность;     непорочность; чистота, белизна"
  },
  "cervical": {
    "initFormEn": "cervical",
    "displayEn": "cervical",
    "ru": "затылочный; шейный; цервикальный, относящийся к шейке матки"
  },
  "attribution": {
    "initFormEn": "attribution",
    "displayEn": "attribution",
    "ru": "атрибуция, установление авторства; приписывание;"
  },
  "yuan": {"initFormEn": "yuan", "displayEn": "yuan", "ru": "юань"},
  "standby": {
    "initFormEn": "standby",
    "displayEn": "standby",
    "ru": "режим ожидания; ждущий режим; резерв; готовность; состояние готовности; резервирование; режимрезервный; запасной; аварийныйждущий"
  },
  "identifiable": {
    "initFormEn": "identifiable",
    "displayEn": "identifiable",
    "ru": "опознаваемый; идентифицируемый; \nузнаваемый; распознаваемый;"
  },
  "facsimile": {
    "initFormEn": "facsimile",
    "displayEn": "facsimile",
    "ru": "факсимиле; воспроизводить в виде факсимиле"
  },
  "ethanol": {"initFormEn": "ethanol", "displayEn": "ethanol", "ru": "этиловый спирт, этанол"},
  "cannabis": {"initFormEn": "cannabis", "displayEn": "cannabis", "ru": "конопля; марихуана; гашиш; анаша; травка"},
  "engraved": {
    "initFormEn": "engraved",
    "displayEn": "engraved",
    "ru": "выгравированный;\nгравированный; с неправильными выемками на поверхности;"
  },
  "ppl": {"initFormEn": "ppl", "displayEn": "ppl", "ru": "человек; "},
  "digestive": {
    "initFormEn": "digestive",
    "displayEn": "digestive",
    "ru": "дижестив (средство, способствующее пищеварению или улучшающее переваривание пищи); пищеварительный; способствующий пищеварению, улучшающий переваривание пищи"
  },
  "scalar": {"initFormEn": "scalar", "displayEn": "scalar", "ru": "скалярный; скалярная величина;"},
  "hep": {"initFormEn": "hep", "displayEn": "hep", "ru": "раз! (счёт при ходьбе строевым шагом)"},
  "zoofilia": {"initFormEn": "zoofilia", "displayEn": "zoofilia", "ru": "зоофилия"},
  "corvette": {"initFormEn": "corvette", "displayEn": "corvette", "ru": "корвет; сторожевой корабль;"},
  "fulfillment": {
    "initFormEn": "fulfillment",
    "displayEn": "fulfillment",
    "ru": "выполнение; исполнение; реализация; осуществление; осуществление;"
  },
  "reconditioned": {
    "initFormEn": "reconditioned",
    "displayEn": "reconditioned",
    "ru": "восстановленный; отремонтированный; эштонремонтировать; восстанавливать; перестроить; переоборудовать"
  },
  "backbone": {
    "initFormEn": "backbone",
    "displayEn": "backbone",
    "ru": "спинной хребет, позвоночник; твёрдость характера; главная опора; основа; суть; "
  },
  "secunia": {"initFormEn": "secunia", "displayEn": "secunia", "ru": "секунда"},
  "avian": {"initFormEn": "avian", "displayEn": "avian", "ru": "птичий; птица"},
  "qos": {"initFormEn": "qos", "displayEn": "qos", "ru": "Качество обслуживания"},
  "exhibitor": {
    "initFormEn": "exhibitor",
    "displayEn": "exhibitor",
    "ru": "участник выставки; экспонент;\nучастник; участник выставки;"
  },
  "augmentation": {
    "initFormEn": "augmentation",
    "displayEn": "augmentation",
    "ru": "подъём, приращение, прирост, увеличение,"
  },
  "otto": {"initFormEn": "otto", "displayEn": "otto", "ru": "розовое масло"},
  "sportswear": {"initFormEn": "sportswear", "displayEn": "sportswear", "ru": "спортивная одежда"},
  "jabber": {
    "initFormEn": "jabber",
    "displayEn": "jabber",
    "ru": "болтовня; трескотня; бормотание; тарабарщина, вздор; болтать, трещать о (чём-л.); говорить быстро и невнятно, бормотать; нести вздор"
  },
  "neurology": {"initFormEn": "neurology", "displayEn": "neurology", "ru": "неврология"},
  "amortization": {
    "initFormEn": "amortization",
    "displayEn": "amortization",
    "ru": "амортизацияпогашение (долга в рассрочку); амортизация; амортизационный фонд; отчуждение недвижимости;"
  },
  "ack": {"initFormEn": "ack", "displayEn": "ack", "ru": "подтверждаю получение (расписка"},
  "latency": {
    "initFormEn": "latency",
    "displayEn": "latency",
    "ru": "скрытое состояние; инкубационный период; задержка между стимулом и реакцией (в мускулах"
  },
  "gcse": {"initFormEn": "gcse", "displayEn": "gcse", "ru": "выпускной экзамен"},
  "thunderbird": {
    "initFormEn": "thunderbird",
    "displayEn": "thunderbird",
    "ru": "громовержец (по поверьям американских индейцев - сверхъестественное существо, которое вызывает грозу); ()  Тандербёрд (марка британской боевой ракеты класса \"земля-воздух\""
  },
  "investigative": {
    "initFormEn": "investigative",
    "displayEn": "investigative",
    "ru": "исследовательский; пытливый, любознательный; следственный;"
  },
  "bylaws": {
    "initFormEn": "bylaws",
    "displayEn": "bylaws",
    "ru": "Устав; уставные документы; уставные нормы; уставпостановление; регламент; подзаконный актподзаконный правовой акт;"
  },
  "erection": {
    "initFormEn": "erection",
    "displayEn": "erection",
    "ru": "выпрямление, распрямление; возведение, сооружение, строительство (процесс); здание, постройка (результат); ,  ; учреждение, основание (фирмы, предприятия);  , ; эрекция; монтаж, сборка, установка"
  },
  "blaster": {
    "initFormEn": "blaster",
    "displayEn": "blaster",
    "ru": "генератор, мощный источник (звука, изображений и т.п"
  },
  "blender": {
    "initFormEn": "blender",
    "displayEn": "blender",
    "ru": "блендер (приспособление для измельчения, перемалывания и перемешивания продуктов"
  },
  "remediation": {
    "initFormEn": "remediation",
    "displayEn": "remediation",
    "ru": "исправление, процесс исправления; коррекционное обучение, корректирующая педагогика"
  },
  "winery": {"initFormEn": "winery", "displayEn": "winery", "ru": "винный завод"},
  "sidebar": {
    "initFormEn": "sidebar",
    "displayEn": "sidebar",
    "ru": "отдельная вставка на странице; боковая панель; боковое меню; врезка; контур;"
  },
  "champaign": {"initFormEn": "champaign", "displayEn": "champaign", "ru": "шампанское"},
  "fyi": {"initFormEn": "fyi", "displayEn": "fyi", "ru": "к вашему сведению; к твоему сведению; для информации; к"},
  "believers": {
    "initFormEn": "believers",
    "displayEn": "believers",
    "ru": "старообрядцы; верующий народ; верующиеприверженец; сторонник; последователь; верующий человек; христианин"
  },
  "dispersion": {
    "initFormEn": "dispersion",
    "displayEn": "dispersion",
    "ru": "разбрасывание; рассеивание;  разбросанность; дисперсия; разгон; расселение;  "
  },
  "persistence": {
    "initFormEn": "persistence",
    "displayEn": "persistence",
    "ru": "настойчивость, стойкость, упорство, непоколебимость; выносливость; живучесть, сопротивляемость; постоянство, неизменность; продолжительность; сохранение эффекта после"
  },
  "amex": {"initFormEn": "amex", "displayEn": "amex", "ru": "карты AMEX; амекс; амекс; American Express Company"},
  "cuz": {
    "initFormEn": "cuz",
    "displayEn": "cuz",
    "ru": "союз; потому что, так как, посколькуот; брат, приятель (обращение"
  },
  "viewsonic": {"initFormEn": "viewsonic", "displayEn": "viewsonic", "ru": "видоискатель"},
  "islander": {"initFormEn": "islander", "displayEn": "islander", "ru": "островитянин, житель острова"},
  "impressum": {"initFormEn": "impressum", "displayEn": "impressum", "ru": "импрессум;"},
  "runoff": {"initFormEn": "runoff", "displayEn": "runoff", "ru": "сток; поверхностный сток; последний тур;"},
  "nexus": {"initFormEn": "nexus", "displayEn": "nexus", "ru": "связь; узы; нексус, ядро; связанная группа, серия"},
  "buster": {
    "initFormEn": "buster",
    "displayEn": "buster",
    "ru": "придурок, урод; парень, малый; крепыш;  ; что-л. замечательное, потрясающее, сногсшибательное; кутёж, пирушка, попойка, веселье; объездчик лошадей;  берстер (резкий, порывистый ветер, шквал"
  },
  "allowable": {
    "initFormEn": "allowable",
    "displayEn": "allowable",
    "ru": "то, что допускается, разрешается; то, что считается приемлемым, законным; нефтяная квота (разрешённая норма добычи нефти, исчисляется в процентах к максимально возможному объёму); допустимый; дозволенный; приемлемый; позволительный"
  },
  "switchfoot": {"initFormEn": "switchfoot", "displayEn": "switchfoot", "ru": "перекидная нога"},
  "drummer": {"initFormEn": "drummer", "displayEn": "drummer", "ru": "барабанщик; коммивояжёр; вор; бродяга"},
  "appellate": {"initFormEn": "appellate", "displayEn": "appellate", "ru": "апелляционный"},
  "avant": {"initFormEn": "avant", "displayEn": "avant", "ru": "авангардистский"},
  "insightful": {"initFormEn": "insightful", "displayEn": "insightful", "ru": "проницательный"},
  "diva": {"initFormEn": "diva", "displayEn": "diva", "ru": "примадонна; звезда эстрады"},
  "contiguous": {
    "initFormEn": "contiguous",
    "displayEn": "contiguous",
    "ru": "соприкасающийся; смежный; граничащий, прилегающий; смежный, прилегающий; (непосредственно) следующий (за), очередной; близкий (по месту или времени); соседний, близлежащий; прилегающий (не находящийся в непосредственн"
  },
  "explanatory": {
    "initFormEn": "explanatory",
    "displayEn": "explanatory",
    "ru": "объяснительный, поясняющий, пояснительный; толковый (о словаре"
  },
  "inbound": {"initFormEn": "inbound", "displayEn": "inbound", "ru": "прибывающий, возвращающийся"},
  "shortlist": {
    "initFormEn": "shortlist",
    "displayEn": "shortlist",
    "ru": "окончательный список (после исключения отсеявшихся); список допущенных к последнему туру (конкурса и т. п.); включать в окончательный список; оставлять в списке после исключения явно непригодных"
  },
  "binder": {
    "initFormEn": "binder",
    "displayEn": "binder",
    "ru": "переплётчик; связующее вещество (клей, цемент); сноповязалка; связующий;"
  },
  "softcover": {
    "initFormEn": "softcover",
    "displayEn": "softcover",
    "ru": "в мягком переплёте, в мягкой обложке (о книге); относящийся к книгам в мягкой обложке; ,  ; книга в бумажной обложке, в мягком переплёте"
  },
  "nib": {
    "initFormEn": "nib",
    "displayEn": "nib",
    "ru": "кончик, остриё пера; перо (металлическое); отдельный кончик пера; острый кончик (чего-л.), остриё, клин; клюв (птиц); хоботок (насекомых); нос (человека); палец, шип; ( ) какао-крупка, дроблёные бобы какао; вставлять перо в ручку; чинить (гусиноеджентльмен"
  },
  "attributable": {
    "initFormEn": "attributable",
    "displayEn": "attributable",
    "ru": "приписываемый (чему-л.), относимый (к чему-л"
  },
  "stroller": {
    "initFormEn": "stroller",
    "displayEn": "stroller",
    "ru": "2), б) детская прогулочная коляска; прогуливающийся человек; бродяга; бродячий актёр"
  },
  "insest": {"initFormEn": "insest", "displayEn": "insest", "ru": "инсест"},
  "sulfur": {"initFormEn": "sulfur", "displayEn": "sulfur", "ru": "серный; сернистый;"},
  "lipid": {"initFormEn": "lipid", "displayEn": "lipid", "ru": "липидный; жировой;"},
  "heh": {"initFormEn": "heh", "displayEn": "heh", "ru": "хех"},
  "prentice": {"initFormEn": "prentice", "displayEn": "prentice", "ru": "подмастерье"},
  "closeout": {
    "initFormEn": "closeout",
    "displayEn": "closeout",
    "ru": "полная распродажа, ликвидация, распродажа остатков товара (при закрытии магазина, обыкновенно по сниженным ценам);"
  },
  "kayaking": {
    "initFormEn": "kayaking",
    "displayEn": "kayaking",
    "ru": "каякинг (сплав по рекам на каяке, экстремальный вид спорта"
  },
  "eta": {
    "initFormEn": "eta",
    "displayEn": "eta",
    "ru": "эта (7-я буква греческого алфавита); расчетное время прибытия"
  },
  "doughty": {
    "initFormEn": "doughty",
    "displayEn": "doughty",
    "ru": "бесстрашный, доблестный, мужественный, неустрашимый, отважный"
  },
  "inflatable": {"initFormEn": "inflatable", "displayEn": "inflatable", "ru": "надувной; раздувной;"},
  "darby": {
    "initFormEn": "darby",
    "displayEn": "darby",
    "ru": "правило штукатура; лопатка каменщика; мастерок для затирки;"
  },
  "clergy": {"initFormEn": "clergy", "displayEn": "clergy", "ru": "(the clergy) духовенство"},
  "coursework": {"initFormEn": "coursework", "displayEn": "coursework", "ru": "курсовая работа"},
  "stochastic": {
    "initFormEn": "stochastic",
    "displayEn": "stochastic",
    "ru": "стохастический, случайный, вероятностный"
  },
  "lesbo": {"initFormEn": "lesbo", "displayEn": "lesbo", "ru": "лесбиянка"},
  "tnt": {"initFormEn": "tnt", "displayEn": "tnt", "ru": "тринитротолуол; тротил; тнт; тол; тротил. Trinitrotoluene"},
  "oldies": {"initFormEn": "oldies", "displayEn": "oldies", "ru": "старое произведение; старички"},
  "vv": {"initFormEn": "vv", "displayEn": "vv", "ru": "наоборот; \n"},
  "stewardship": {
    "initFormEn": "stewardship",
    "displayEn": "stewardship",
    "ru": "должность распорядителя, управляющего    ; управление, заведование, руководство; ведение (дел); надзор, контроль"
  },
  "esq": {"initFormEn": "esq", "displayEn": "esq", "ru": "эсквайр; эсквайр"},
  "cornerstone": {
    "initFormEn": "cornerstone",
    "displayEn": "cornerstone",
    "ru": "угловой камень (здания); краеугольный камень"
  },
  "precedence": {
    "initFormEn": "precedence",
    "displayEn": "precedence",
    "ru": "предшествование; первенство, превосходство; более высокое положение; старшинство"
  },
  "volatility": {
    "initFormEn": "volatility",
    "displayEn": "volatility",
    "ru": "изменчивость, непостоянство, неустойчивость; летучесть"
  },
  "listserv": {"initFormEn": "listserv", "displayEn": "listserv", "ru": "почтовый реестр (в электронной почте"},
  "conformance": {
    "initFormEn": "conformance",
    "displayEn": "conformance",
    "ru": "соответствие; согласование; согласованность;"
  },
  "diecast": {
    "initFormEn": "diecast",
    "displayEn": "diecast",
    "ru": "лить под давлением || отлитый под давлением, полученный литьём под давлением"
  },
  "phat": {"initFormEn": "phat", "displayEn": "phat", "ru": "классный, суперский"},
  "escrow": {
    "initFormEn": "escrow",
    "displayEn": "escrow",
    "ru": "депонирование; деньги, имущество или документ, находящиеся на хранении у третьего лица до выполнения определённого условия; условное депонирование; отдавать на хранение третьему лицу, депонировать у третьего лица до выполнения определённого условия"
  },
  "surfers": {
    "initFormEn": "surfers",
    "displayEn": "surfers",
    "ru": "серфер; серфингист; серфингистызанимающийся серфингом"
  },
  "accountancy": {
    "initFormEn": "accountancy",
    "displayEn": "accountancy",
    "ru": "бухгалтерское дело, бухгалтерский учёт, бухгалтерский;"
  },
  "recherche": {
    "initFormEn": "recherche",
    "displayEn": "recherche",
    "ru": "изысканный, тонкий (о вкусе); отборный; изысканный; предназначенный для знатоков, ценителей"
  },
  "misconduct": {
    "initFormEn": "misconduct",
    "displayEn": "misconduct",
    "ru": "плохое поведение; супружеская неверность; прелюбодеяние; плохое исполнение своих обязанностей; проявление халатности; должностное преступление; дурно вести себя, вести себя неподобающим образом; нарушать супружескую верность; изменять (мужу, же"
  },
  "femme": {
    "initFormEn": "femme",
    "displayEn": "femme",
    "ru": "женщина, девушка; \"женщина\", \"девочка\" (в нетрадиционно ориентированных парах); с преувеличенно женственными манерами (особенно о представителях сексуальных меньшинств)"
  },
  "thereto": {
    "initFormEn": "thereto",
    "displayEn": "thereto",
    "ru": "к тому, к этому; кроме того, к тому же; для этого, для этой цели"
  },
  "reeves": {"initFormEn": "reeves", "displayEn": "reeves", "ru": "Ривз; ривз; риф; Рива; пропустить"},
  "grazing": {
    "initFormEn": "grazing",
    "displayEn": "grazing",
    "ru": "выпас, пастьба; пастбище, выгон; пастбищный; обгрызание, обкусывание, общипывание; травоядный"
  },
  "suitability": {
    "initFormEn": "suitability",
    "displayEn": "suitability",
    "ru": "пригодность; приемлемость, допустимость"
  },
  "aftermarket": {
    "initFormEn": "aftermarket",
    "displayEn": "aftermarket",
    "ru": "послепродажный; послепродажныйвторичный рынок"
  },
  "redistribution": {
    "initFormEn": "redistribution",
    "displayEn": "redistribution",
    "ru": "передел, перераспределение (особенно парламентских мест"
  },
  "fiberglass": {
    "initFormEn": "fiberglass",
    "displayEn": "fiberglass",
    "ru": "стекловолокно, стеклопластик, стеклоткань, стеклопластиковый,\nстекловолоконный, стекловолокнистый"
  },
  "broncos": {"initFormEn": "broncos", "displayEn": "broncos", "ru": "полудикая лошадь; мустанг; бронкос"},
  "vail": {
    "initFormEn": "vail",
    "displayEn": "vail",
    "ru": "склонять (оружие, знамена); наклонять (голову); опускать (глаза); уступать; склоняться (перед кем-л.); снимать (шляпу"
  },
  "limerick": {
    "initFormEn": "limerick",
    "displayEn": "limerick",
    "ru": "лимерик (шуточное стихотворение из пяти строк, где две первые рифмуются с последней; по названию города Лимерик в Ирландии; название стихотворения восходит к обычаю придумывать и петь на вечеринках шуточные песенки, припевом которых была фраза \""
  },
  "voodoo": {
    "initFormEn": "voodoo",
    "displayEn": "voodoo",
    "ru": "вуду, вудуизм (религиозный культ, распространённый на Гаити и других Карибских островах);   знахарь; колдун, шаман; околдовать при помощи магии вуду; относящийся к вуду, вудуизму; шаманский, некомпетентный"
  },
  "devastating": {
    "initFormEn": "devastating",
    "displayEn": "devastating",
    "ru": "опустошительный, разрушительный;     ; потрясающий; поразительный, удивительный, сногсшибательный"
  },
  "brock": {"initFormEn": "brock", "displayEn": "brock", "ru": "барсук; отвратительный человек, подлец, подонок"},
  "biochem": {"initFormEn": "biochem", "displayEn": "biochem", "ru": "биохимия; биохимия"},
  "reversal": {
    "initFormEn": "reversal",
    "displayEn": "reversal",
    "ru": "полное изменение; полная перестановка; инверсия; обратное движение, обратный ход, задний ход; отмена; аннулирование; , ; реверсирование; фото обратимая плёнка; проблема; неудача, провал"
  },
  "bloodhound": {
    "initFormEn": "bloodhound",
    "displayEn": "bloodhound",
    "ru": "бладхаунд, ищейка (порода собак); кровожадный человек; агент, сыщик"
  },
  "remedial": {
    "initFormEn": "remedial",
    "displayEn": "remedial",
    "ru": "лечебный; излечивающий; исправительный; коррективный; отстающий, требующий коррективных занятий (об ученике); ремонтный"
  },
  "immunization": {"initFormEn": "immunization", "displayEn": "immunization", "ru": "иммунизация, вакцинация"},
  "remuneration": {
    "initFormEn": "remuneration",
    "displayEn": "remuneration",
    "ru": "вознаграждение; оплата, компенсация"
  },
  "categorized": {
    "initFormEn": "categorized",
    "displayEn": "categorized",
    "ru": "паспортизованный (по основным характеристикам"
  },
  "receivable": {
    "initFormEn": "receivable",
    "displayEn": "receivable",
    "ru": "могущий быть полученным, принятым; годный к принятию; приемлемый; подлежащий получению"
  },
  "talkback": {
    "initFormEn": "talkback",
    "displayEn": "talkback",
    "ru": "двусторонняя связь; \"задайте вопрос в прямом эфире\" (теле- или радиопередача); - 2"
  },
  "draper": {"initFormEn": "draper", "displayEn": "draper", "ru": "драпировщик; торговец мануфактурными товарами"},
  "otc": {
    "initFormEn": "otc",
    "displayEn": "otc",
    "ru": "внебиржевой - over-the-counter; бейлорбез рецепта - продаваемый без рецепта (о лекарстве);"
  },
  "subversion": {
    "initFormEn": "subversion",
    "displayEn": "subversion",
    "ru": "подрывная деятельность;\nдиверсия; низвержение, низложение, ниспровержение, свержение;"
  },
  "annum": {"initFormEn": "annum", "displayEn": "annum", "ru": "год; бейлор;"},
  "schizophrenia": {"initFormEn": "schizophrenia", "displayEn": "schizophrenia", "ru": "шизофрения"},
  "roche": {"initFormEn": "roche", "displayEn": "roche", "ru": "скала; "},
  "topped": {
    "initFormEn": "topped",
    "displayEn": "topped",
    "ru": "увенчанный; превзойденный; бензиненный; с верхом пьянствовать; тонизировать; возглавлять; прекрасный; топики;"
  },
  "brokeback": {"initFormEn": "brokeback", "displayEn": "brokeback", "ru": "Горбатый"},
  "impedance": {
    "initFormEn": "impedance",
    "displayEn": "impedance",
    "ru": "полное сопротивление, импеданс; (в электричистве)"
  },
  "refundable": {"initFormEn": "refundable", "displayEn": "refundable", "ru": "возвращаемый, возмещаемый"},
  "sportsbook": {
    "initFormEn": "sportsbook",
    "displayEn": "sportsbook",
    "ru": "букмекерская контора; букмекер; биржа ставок; бейлор"
  },
  "ovarian": {"initFormEn": "ovarian", "displayEn": "ovarian", "ru": "яичниковый"},
  "plenary": {
    "initFormEn": "plenary",
    "displayEn": "plenary",
    "ru": "безоговорочный, неограниченный, полный; пленарный;"
  },
  "intestinal": {"initFormEn": "intestinal", "displayEn": "intestinal", "ru": "кишечный; интестинальный; "},
  "sweepstakes": {"initFormEn": "sweepstakes", "displayEn": "sweepstakes", "ru": "тотализатор; лотерея; розыгрыш;"},
  "freq": {"initFormEn": "freq", "displayEn": "freq", "ru": "частота"},
  "beanie": {"initFormEn": "beanie", "displayEn": "beanie", "ru": "вязаная облегающая шапка, шапка \"бини\""},
  "asst": {
    "initFormEn": "asst",
    "displayEn": "asst",
    "ru": "1) помощник 2) ассистент, сотрудник; продавец (в магазине) 4) заместитель судьи; Assistant"
  },
  "crate": {
    "initFormEn": "crate",
    "displayEn": "crate",
    "ru": "деревянный) ящик; тара для упаковки (клеть, корзина); рама стекольщика; \"летающий гроб\", старый самолёт; драндулет, полуразвалившийся автомобиль; упаковывать (в тару типа клети, корзины"
  },
  "dealership": {
    "initFormEn": "dealership",
    "displayEn": "dealership",
    "ru": "местное представительство, агентство (фирмы)"
  },
  "benches": {
    "initFormEn": "benches",
    "displayEn": "benches",
    "ru": "скамейка; скамья; скамейка запасных; скамеечка; сиденье; стенд; стол; верстак; станок; банка; лавка; лавочка; уступ; полки; лежанка; судьи; банкетка; репер; лабораторный стол; судейское место; фотосмышленность"
  },
  "eyewear": {"initFormEn": "eyewear", "displayEn": "eyewear", "ru": "очки; защитные очки;"},
  "onyx": {"initFormEn": "onyx", "displayEn": "onyx", "ru": "оникс; камень;"},
  "stirling": {"initFormEn": "stirling", "displayEn": "stirling", "ru": "стерлинг; Стирлинг;"},
  "clearer": {
    "initFormEn": "clearer",
    "displayEn": "clearer",
    "ru": "средство для просветления (гистологического препарата); более ясный, более чистый;"
  },
  "fritz": {"initFormEn": "fritz", "displayEn": "fritz", "ru": "Фриц; неисправность; поломка, авария"},
  "spoilers": {
    "initFormEn": "spoilers",
    "displayEn": "spoilers",
    "ru": "спойлер; интерцептор; помеха; антикрыло; малага;"
  },
  "detox": {
    "initFormEn": "detox",
    "displayEn": "detox",
    "ru": "подвергать детоксикации, устранять влияние яда; проходить курс лечения от алкоголизма или наркомании; детоксикация;"
  },
  "caregivers": {
    "initFormEn": "caregivers",
    "displayEn": "caregivers",
    "ru": "ухаживающий; крамеробслуживающий персоналвоспитатель; попечитель; опекун; сиделка; ухаживающее лицо; воспитатель детей;"
  },
  "handsfree": {
    "initFormEn": "handsfree",
    "displayEn": "handsfree",
    "ru": "гарнитура; громкая оставляющий руки свободными;"
  },
  "sectional": {
    "initFormEn": "sectional",
    "displayEn": "sectional",
    "ru": "разборный, разъёмный; секционный; составной; частный, локальный, местный; данный в разрезе; блок, секция разборной мебели; =     секционный диван (как правило, угловой"
  },
  "tidal": {
    "initFormEn": "tidal",
    "displayEn": "tidal",
    "ru": "связанный с приливом и отливом; приливо-отливный; подверженный действию приливов; периодический, чередующийся, перемежающийся"
  },
  "backgammon": {"initFormEn": "backgammon", "displayEn": "backgammon", "ru": "нарды"},
  "scion": {"initFormEn": "scion", "displayEn": "scion", "ru": "побег растения; потомок, наследник"},
  "standalone": {
    "initFormEn": "standalone",
    "displayEn": "standalone",
    "ru": "автономная установка, автономная производственная установка || автономный"
  },
  "antitrust": {
    "initFormEn": "antitrust",
    "displayEn": "antitrust",
    "ru": "направленный против трестов, монополий; антитрестовский; антимонопольный;"
  },
  "equine": {"initFormEn": "equine", "displayEn": "equine", "ru": "конский, лошадиный"},
  "anesthesia": {
    "initFormEn": "anesthesia",
    "displayEn": "anesthesia",
    "ru": "анестезия, обезболивание, наркоз, местная анестезия, регионарная анестезия"
  },
  "datum": {
    "initFormEn": "datum",
    "displayEn": "datum",
    "ru": "данная величина, данное; элемент данных; исходный факт; исходный уровень;   база, базовая точка (линия, плоскость), начало отсчёта; репер; точка (линия, плоскость) приведения"
  },
  "facilitator": {
    "initFormEn": "facilitator",
    "displayEn": "facilitator",
    "ru": "посредник, куратор, координатор, фасилитатор"
  },
  "extinction": {
    "initFormEn": "extinction",
    "displayEn": "extinction",
    "ru": "тушение; потухание, угасание; гашение (извести); вымирание (вида животных, племени); исчезновение, отмирание; погашение (долга"
  },
  "discretionary": {
    "initFormEn": "discretionary",
    "displayEn": "discretionary",
    "ru": "дискреционный, действующий по своему усмотрению; предоставленный на собственное усмотрение; необязательный;"
  },
  "lasik": {"initFormEn": "lasik", "displayEn": "lasik", "ru": "лазер; лазерную коррекцию;"},
  "laminated": {
    "initFormEn": "laminated",
    "displayEn": "laminated",
    "ru": "листовой; пластинчатый; расслоённый, слоистый; заламинированный; "
  },
  "garth": {
    "initFormEn": "garth",
    "displayEn": "garth",
    "ru": "огороженный участок, площадка; двор; сад, парк; загон; запруда для ловли рыбы; ограда, заграждение;"
  },
  "clearinghouse": {
    "initFormEn": "clearinghouse",
    "displayEn": "clearinghouse",
    "ru": "фин расчётная палата; информационно-аналитический центр"
  },
  "toilette": {"initFormEn": "toilette", "displayEn": "toilette", "ru": "туалет (приведение себя в порядок"},
  "attn": {"initFormEn": "attn", "displayEn": "attn", "ru": "внимание; вниманию такого-то - attention"},
  "fasteners": {
    "initFormEn": "fasteners",
    "displayEn": "fasteners",
    "ru": "крепеж; крепежные изделия; крепежзастежка; молния; зажим; крепление; защелка; запор; крепежная деталь; крепежный элемент; соединитель; крепежное приспособление"
  },
  "taurus": {"initFormEn": "taurus", "displayEn": "taurus", "ru": "телец;"},
  "aggregator": {"initFormEn": "aggregator", "displayEn": "aggregator", "ru": "агрегатор; накопитель; агрегатор"},
  "acreage": {"initFormEn": "acreage", "displayEn": "acreage", "ru": "площадь земли (в акрах; участок; площадь;"},
  "bethel": {"initFormEn": "bethel", "displayEn": "bethel", "ru": "святое место; = Bethesda"},
  "sorority": {
    "initFormEn": "sorority",
    "displayEn": "sorority",
    "ru": "женский клуб, женское общество, женское объединение (в колледже, университете"
  },
  "plano": {"initFormEn": "plano", "displayEn": "plano", "ru": "плоско;"},
  "horticulture": {"initFormEn": "horticulture", "displayEn": "horticulture", "ru": "садоводство; огородничество"},
  "ordinator": {"initFormEn": "ordinator", "displayEn": "ordinator", "ru": "координатор;"},
  "veritas": {"initFormEn": "veritas", "displayEn": "veritas", "ru": "истина"},
  "brunch": {
    "initFormEn": "brunch",
    "displayEn": "brunch",
    "ru": "поздний завтрак (заменяющий первый и второй завтрак; "
  },
  "expiry": {"initFormEn": "expiry", "displayEn": "expiry", "ru": "окончание, истечение срока действия; истечение"},
  "burgess": {
    "initFormEn": "burgess",
    "displayEn": "burgess",
    "ru": "житель небольшого города, имеющего самоуправление; член парламента от города с самоуправлением или от университета; свободный человек; свободное животное; свободный обитатель"
  },
  "toxicology": {
    "initFormEn": "toxicology",
    "displayEn": "toxicology",
    "ru": "токсикология (учение о ядах и отравлениях"
  },
  "monies": {"initFormEn": "monies", "displayEn": "monies", "ru": "деньги; денежная сумма; сумма денег;"},
  "saratoga": {"initFormEn": "saratoga", "displayEn": "saratoga", "ru": "большой чемодан; Саратога; "},
  "serif": {"initFormEn": "serif", "displayEn": "serif", "ru": "сериф, засечка; шрифт с засечками;"},
  "portage": {
    "initFormEn": "portage",
    "displayEn": "portage",
    "ru": "переправа волоком; волок; транспортировка, переноска, перевозка; стоимость перевозки;  Портедж (название программы поддержки детей дошкольного возраста с отставанием развития); переправлять, перетаскивать волоком (по суше); преодолевать (во"
  },
  "aloha": {
    "initFormEn": "aloha",
    "displayEn": "aloha",
    "ru": "\"любовь, привязанность\"; приветствия, поклон, пожелания; букв. \"любовь, привязанность\"; привет!, здорово!, пока!, салют!, чао! (форма приветствия или прощания);"
  },
  "stirring": {
    "initFormEn": "stirring",
    "displayEn": "stirring",
    "ru": "взбалтывание, помешивание; движение; побуждение, стимул, толчок; деятельный, активный, энергичный; неугомонный; волнующий, возбуждающий, вдохновляющий"
  },
  "overlapping": {"initFormEn": "overlapping", "displayEn": "overlapping", "ru": "перекрытие, совмещение"},
  "kart": {"initFormEn": "kart", "displayEn": "kart", "ru": "от -; карт (микролитражный автомобиль для картинга"},
  "schematic": {"initFormEn": "schematic", "displayEn": "schematic", "ru": "схематический"},
  "vertices": {"initFormEn": "vertices", "displayEn": "vertices", "ru": "вершина; макушка; вертекс; темя;"},
  "washable": {
    "initFormEn": "washable",
    "displayEn": "washable",
    "ru": "нелиняющий, стирающийся (без ущерба для качества); подверженный действию волн, подмываемый"
  },
  "deficient": {
    "initFormEn": "deficient",
    "displayEn": "deficient",
    "ru": "недостающий, отсутствующий; недостаточный; дефектный, неполный; не отвечающий требованиям, неподходящий, неадекватный; несовершенный; лишённый (чего-л.); лицо с физическими или умственными недостатками;"
  },
  "kraft": {"initFormEn": "kraft", "displayEn": "kraft", "ru": "крафт; сульфатный;"},
  "crises": {
    "initFormEn": "crises",
    "displayEn": "crises",
    "ru": "кризисные ситуации; кризисные явления; перелом; кризисное положение; перелом;"
  },
  "comforter": {
    "initFormEn": "comforter",
    "displayEn": "comforter",
    "ru": "утешитель;  рел. Утешитель (о Святом Духе); длинный вязаный шарф, тёплое кашне; стёганое ватное одеяло;  1) соска, пустышка;"
  },
  "algae": {"initFormEn": "algae", "displayEn": "algae", "ru": "водоросли; рост водорослей; простейшие водоросли;"},
  "scorecard": {
    "initFormEn": "scorecard",
    "displayEn": "scorecard",
    "ru": "карточка для записи счёта, оценочная ведомость; счётная карточка; (в гольфе  карточка для учёта числа ударов, сделанных игроком во время матча); (на матче по бейсболу или крикету  бланк или программка  таблицей, из которой болельщик узнаёт о составе коман"
  },
  "acme": {
    "initFormEn": "acme",
    "displayEn": "acme",
    "ru": "кульминация, точка наивысшего развития, подъёма; кризис (болезни"
  },
  "leakage": {
    "initFormEn": "leakage",
    "displayEn": "leakage",
    "ru": "протечка, течь, просачивание; утечка; утечка (секретной информации, сведений); рассеяние"
  },
  "janitorial": {"initFormEn": "janitorial", "displayEn": "janitorial", "ru": "относящийся к дворнику, привратнику"},
  "reclamation": {
    "initFormEn": "reclamation",
    "displayEn": "reclamation",
    "ru": "протест, апелляция; рекламация, претензия; требование; перерождение, исправление (особенно грешника); улучшение, прогресс; =     эволюция, переход к цивилизации; с.-х"
  },
  "commandments": {
    "initFormEn": "commandments",
    "displayEn": "commandments",
    "ru": "заповедь; приказ; предписание; приказание; завет; веление; наказ; заповеди;"
  },
  "makeover": {"initFormEn": "makeover", "displayEn": "makeover", "ru": "преображение; создание нового облика;"},
  "chow": {
    "initFormEn": "chow",
    "displayEn": "chow",
    "ru": "еда, жратва, жрачка; есть, лопать, трескатьчау(-чау) (порода собак); пренебр. китаец"
  },
  "abnormalities": {
    "initFormEn": "abnormalities",
    "displayEn": "abnormalities",
    "ru": "аномалия; ненормальность; неправильность; патология; аномальность; отклонение; нарушение; расстройство; уродство; порок; дефект; анормальность; ненормальное состояние; аномалии"
  },
  "poetic": {"initFormEn": "poetic", "displayEn": "poetic", "ru": "поэтический; =  1); поэтичный"},
  "dirk": {
    "initFormEn": "dirk",
    "displayEn": "dirk",
    "ru": "длинный кинжал с прямым лезвием; шотландский кинжал;   ,   ; кортик; вонзать кинжал, закалывать кинжалом"
  },
  "curricula": {
    "initFormEn": "curricula",
    "displayEn": "curricula",
    "ru": "учебный план; учебная программа; программа обучения; образовательная программа; школьная программа; курс обучения; учебный курс; программа; куррикулум; расписание; содержание образования; отбирающий"
  },
  "wmd": {
    "initFormEn": "wmd",
    "displayEn": "wmd",
    "ru": "ОМУ; ОМП; оружие массового уничтожения; оружие массового поражения; оружие"
  },
  "dorm": {"initFormEn": "dorm", "displayEn": "dorm", "ru": "общая спальня; дортуар; общежитие; спальня;"},
  "interconnection": {
    "initFormEn": "interconnection",
    "displayEn": "interconnection",
    "ru": "взаимная связь; соединение; объединение (энергосистем), кустование; объединяющая линия"
  },
  "heterogeneous": {
    "initFormEn": "heterogeneous",
    "displayEn": "heterogeneous",
    "ru": "гетерогенный, неоднородный, разнородный, разнотипный, различный"
  },
  "licensure": {
    "initFormEn": "licensure",
    "displayEn": "licensure",
    "ru": "выдача разрешений, патентов, лицензирование и т. п"
  },
  "systematically": {
    "initFormEn": "systematically",
    "displayEn": "systematically",
    "ru": "систематически; систематично; методично"
  },
  "retractable": {"initFormEn": "retractable", "displayEn": "retractable", "ru": "втягивающийся, втяжной; сократимый"},
  "cain": {"initFormEn": "cain", "displayEn": "cain", "ru": "Братоубийца; Каин; каинова печать; каин"},
  "townhouse": {
    "initFormEn": "townhouse",
    "displayEn": "townhouse",
    "ru": "городской особняк (в отличие от загородной резиденции); (тж   ) таунхаус м (имеет общие стены с аналогичными соседними особняками справа и слева"
  },
  "stormwater": {"initFormEn": "stormwater", "displayEn": "stormwater", "ru": "ливневый; ливневаяливневые воды;"},
  "congrats": {"initFormEn": "congrats", "displayEn": "congrats", "ru": "поздравления; поздравление;"},
  "splitter": {
    "initFormEn": "splitter",
    "displayEn": "splitter",
    "ru": "человек, занимающийся разделкой рыбы; дровосек, дровокол; учёный, занимающийся классификацией организмов на группы (формируемые на основании второстепенных характерных особенностей); человек, способствующий расколу партии; прибор"
  },
  "standardization": {
    "initFormEn": "standardization",
    "displayEn": "standardization",
    "ru": "нормализация, стандартизация, приведение к стандартной форме; поверка; калибровка; градуировка"
  },
  "lakeland": {"initFormEn": "lakeland", "displayEn": "lakeland", "ru": "лейкленд; озерный край; поозерье; озерный;"},
  "triathlon": {
    "initFormEn": "triathlon",
    "displayEn": "triathlon",
    "ru": "троеборье (спортивное состязание по трём видам спорта или по трём видам упражнений в одном виде спорта); триатлон (вид троеборья; комплекс олимпийских дисциплин, включающий плавание, велосипедную гонку и бег;"
  },
  "lookout": {
    "initFormEn": "lookout",
    "displayEn": "lookout",
    "ru": "наблюдение; наблюдательный пункт; наблюдатель; дозорный; вахта; дозорное судно; вид, панорама, перспектива; виды, шансы, перспективы; забота, дело (в конструкции с притяж. местоимением или существительным в притяж. падеже"
  },
  "thx": {"initFormEn": "thx", "displayEn": "thx", "ru": "спасибо; ТНХ; тнх;"},
  "underwood": {"initFormEn": "underwood", "displayEn": "underwood", "ru": "подлесок, поросль;"},
  "orioles": {"initFormEn": "orioles", "displayEn": "orioles", "ru": "иволга; иволги;"},
  "fungi": {"initFormEn": "fungi", "displayEn": "fungi", "ru": "грибок; гриб; чага;"},
  "birthplace": {"initFormEn": "birthplace", "displayEn": "birthplace", "ru": "место рождения; родина;"},
  "rollover": {
    "initFormEn": "rollover",
    "displayEn": "rollover",
    "ru": "перебор, одновременное нажатие (нескольких) клавиш;"
  },
  "planar": {"initFormEn": "planar", "displayEn": "planar", "ru": "планарный, плоский, планарный;"},
  "touchdown": {
    "initFormEn": "touchdown",
    "displayEn": "touchdown",
    "ru": "авиа посадка, приземление; приземление (в регби  касание мячом земли в зачётном поле соперника);  тачдаун (в американском футболе  пересечение мячом или игроком с мячом линии зачётного поля соперника"
  },
  "quorum": {"initFormEn": "quorum", "displayEn": "quorum", "ru": "кворум, правомочный состав"},
  "fetisch": {"initFormEn": "fetisch", "displayEn": "fetisch", "ru": "амулет; идол; фетиш"},
  "homme": {"initFormEn": "homme", "displayEn": "homme", "ru": "человек; ОММ; человек"},
  "oceanic": {
    "initFormEn": "oceanic",
    "displayEn": "oceanic",
    "ru": "океанический, океанский; огромный, гигантский, как океан;"
  },
  "appraiser": {"initFormEn": "appraiser", "displayEn": "appraiser", "ru": "оценщик; таксатор;"},
  "hustler": {
    "initFormEn": "hustler",
    "displayEn": "hustler",
    "ru": "энергичный, предприимчивый, пробивной человек; делец, ловкач; жулик; уличная проститутка;"
  },
  "recon": {"initFormEn": "recon", "displayEn": "recon", "ru": "вести разведку; производить рекогносцировку;"},
  "discriminatory": {
    "initFormEn": "discriminatory",
    "displayEn": "discriminatory",
    "ru": "дифференциальный, отличительный; избирательный, селективный; редвзятый, тенденциозный; дискриминационный, умаляющий в правах;"
  },
  "royale": {"initFormEn": "royale", "displayEn": "royale", "ru": "королевский дворец;"},
  "righteousness": {
    "initFormEn": "righteousness",
    "displayEn": "righteousness",
    "ru": "праведность; добродетельность; справедливость;"
  },
  "travelodge": {"initFormEn": "travelodge", "displayEn": "travelodge", "ru": "домик для путешествий;"},
  "banjo": {
    "initFormEn": "banjo",
    "displayEn": "banjo",
    "ru": "банджо (струнный музыкальный инструмент); лопата, совок; картер, кожух, коробка;"
  },
  "shaker": {
    "initFormEn": "shaker",
    "displayEn": "shaker",
    "ru": "человек или инструмент, который раскачивает, приводит в движение; инициатор, зачинатель; вибрационный грохот; вибратор; шейкер (сосуд для приготовления коктейля); солонка, перечница с отверстиями в крышке; ше(й)кер (член американской религио"
  },
  "concierge": {
    "initFormEn": "concierge",
    "displayEn": "concierge",
    "ru": "личный консьерж, персональный ассистент, консьерж-менеджер; менеджер по работе с постояльцами, гостями (в отелях); консьерж; консьержка; вахтёр; привратник; "
  },
  "screenplay": {"initFormEn": "screenplay", "displayEn": "screenplay", "ru": "сценарий, киносценарий; кинофильм;"},
  "nom": {"initFormEn": "nom", "displayEn": "nom", "ru": "псевдоним; из французского;"},
  "unabridged": {"initFormEn": "unabridged", "displayEn": "unabridged", "ru": "несокращённый, полный;"},
  "dickens": {"initFormEn": "dickens", "displayEn": "dickens", "ru": "чёрт"},
  "outfitters": {
    "initFormEn": "outfitters",
    "displayEn": "outfitters",
    "ru": "экипировщик; поставщик снаряжения, обмундирования; розничный торговец, галантерейщик;"
  },
  "homelessness": {
    "initFormEn": "homelessness",
    "displayEn": "homelessness",
    "ru": "бездомность; беспризорность; отсутствие жилья; проблема бездомности; бесприютность; бездомностьбездомный"
  },
  "whitewater": {"initFormEn": "whitewater", "displayEn": "whitewater", "ru": "речной порог"},
  "hypotheses": {"initFormEn": "hypotheses", "displayEn": "hypotheses", "ru": "гипотеза, догадка, предположение"},
  "punt": {
    "initFormEn": "punt",
    "displayEn": "punt",
    "ru": "плоскодонный ялик, малая шаланда; плыть, отталкиваясь шестом; плыть, переплывать на лодкеудар по подброшенному мячу, удар с рук (в американском футболе, регби); бить по подброшенному мячу, бить с рук (в американском футболе, регби); бросить (какое-л. занятиеставка, пари; ; понтировать; ставить на лошадь; держать пари"
  },
  "mormon": {"initFormEn": "mormon", "displayEn": "mormon", "ru": "мормон; шварценег гермормонский;"},
  "mojo": {
    "initFormEn": "mojo",
    "displayEn": "mojo",
    "ru": "заклинание, заговор, магическая формула; талисман, амулет"
  },
  "indulgence": {
    "initFormEn": "indulgence",
    "displayEn": "indulgence",
    "ru": "снисхождение, снисходительность, терпимость; потворство, потакание (кому-л.); потворство своим желаниям, капризам; милость, привилегия; индульгенция, отпущение грехов; отсрочка платежа"
  },
  "scarves": {
    "initFormEn": "scarves",
    "displayEn": "scarves",
    "ru": "шарф; кашне; галстук; дорожка, узкая скатерть (на столе, комоде и т. п.); надевать шарф; украшать шарфом; скашивать, снимать фаску; отёсывать края, углы;"
  },
  "venom": {
    "initFormEn": "venom",
    "displayEn": "venom",
    "ru": "яд (животного происхождения, особенно змеиный); злоба, яд;"
  },
  "ulster": {"initFormEn": "ulster", "displayEn": "ulster", "ru": "длинное свободное пальто (обычно с поясом"},
  "tapping": {"initFormEn": "tapping", "displayEn": "tapping", "ru": "укол, прокол; пункция"},
  "immersion": {
    "initFormEn": "immersion",
    "displayEn": "immersion",
    "ru": "погружение; погружение (в какое-л. дело), сильное увлечение (чем-л.); погружение (метод изучения иностранного языка); рел. крещение (с погружением в воду); а вступление одного небесного тела в тень другого;"
  },
  "merchantability": {
    "initFormEn": "merchantability",
    "displayEn": "merchantability",
    "ru": "товарное состояние; товарная пригодность; товарность; высокий спрос; годность для продажи; блумфилд"
  },
  "inverter": {"initFormEn": "inverter", "displayEn": "inverter", "ru": "инвертер, обратный преобразователь;"},
  "windshield": {
    "initFormEn": "windshield",
    "displayEn": "windshield",
    "ru": "ветровое стекло; лобовое стекло; стекло; ветрозащита;"
  },
  "vox": {"initFormEn": "vox", "displayEn": "vox", "ru": "голос, глас"},
  "genealogical": {"initFormEn": "genealogical", "displayEn": "genealogical", "ru": "генеалогический, родословный"},
  "inhalation": {
    "initFormEn": "inhalation",
    "displayEn": "inhalation",
    "ru": "вдыхание; ингаляция (вдыхание с лечебной целью паров или распыленных лекарственных веществ); лекарство, раствор для ингаляции"
  },
  "cid": {
    "initFormEn": "cid",
    "displayEn": "cid",
    "ru": "уголовный розыск; Criminal Investigation Department; СИД; РТВ;"
  },
  "airsoft": {"initFormEn": "airsoft", "displayEn": "airsoft", "ru": "страйк"},
  "enumeration": {
    "initFormEn": "enumeration",
    "displayEn": "enumeration",
    "ru": "подсчёт, установление количества; перепись (населения); перебор, перечисление; перечень, реестр, список;"
  },
  "spun": {"initFormEn": "spun", "displayEn": "spun", "ru": "ссученный, кручёный; штапельный; от spin;"},
  "shalt": {
    "initFormEn": "shalt",
    "displayEn": "shalt",
    "ru": "форма 2-го лица единственного числа от  ; употреблялась в сочетании с местоимением;"
  },
  "curricular": {"initFormEn": "curricular", "displayEn": "curricular", "ru": "учебный; ганнетт;"},
  "downtime": {"initFormEn": "downtime", "displayEn": "downtime", "ru": "простой, вынужденное бездействие"},
  "chit": {
    "initFormEn": "chit",
    "displayEn": "chit",
    "ru": "записка;  долговая расписка; счётмладенец, ребёнок; девчонка"
  },
  "hanger": {
    "initFormEn": "hanger",
    "displayEn": "hanger",
    "ru": "крючок, вешалка (у платья, пальто; тот, кто вешает что-л.; тот, кто отбирает и вывешивает картины на выставке; палач; то, что подвешено, висит, свисает  висюлька, серёжка, занавеска; то, с помощью чего подвешивают, вешают; верёвка на виселице; "
  },
  "waterways": {
    "initFormEn": "waterways",
    "displayEn": "waterways",
    "ru": "водный путь; фарватер; водная артерия; водная магистраль; водоем; водоток; водовод; онлайн"
  },
  "apprenticeship": {
    "initFormEn": "apprenticeship",
    "displayEn": "apprenticeship",
    "ru": "обучение, учение, ученичество (ремеслу); срок учения, период обучения"
  },
  "outbound": {
    "initFormEn": "outbound",
    "displayEn": "outbound",
    "ru": "исходящий; уходящий в дальнее плавание (о корабле); вылетающий международным рейсом (о самолёте); отправляемый за границу, экспортный"
  },
  "breakout": {
    "initFormEn": "breakout",
    "displayEn": "breakout",
    "ru": "прорыв; пробитие; возвратный; врезка, проф. врез (отдельная цитата, выделяемая шрифтом"
  },
  "remortgage": {"initFormEn": "remortgage", "displayEn": "remortgage", "ru": "перезакладывать; "},
  "workaround": {
    "initFormEn": "workaround",
    "displayEn": "workaround",
    "ru": "искусственный приём; обходной путь\"вылизывание\" (программы) (с целью максимального устранения недоделок;"
  },
  "flagstaff": {"initFormEn": "flagstaff", "displayEn": "flagstaff", "ru": "флагшток; древко;"},
  "pictorial": {
    "initFormEn": "pictorial",
    "displayEn": "pictorial",
    "ru": "живописный; изобразительный; графический, сделанный в форме рисунков; иллюстрированный; снабжённый иллюстрациями; живой, красочный, яркий, образный (о стиле); иллюстрированное период"
  },
  "smoky": {
    "initFormEn": "smoky",
    "displayEn": "smoky",
    "ru": "дымчатый кот; копчёная пикша; завирушка (птица); дымящий; коптящий; дымный; заполненный дымом;закоптелый; закопчённый; с запахом или привкусом дыма; дымчатый (цвет); норовистый (о лошади"
  },
  "opus": {
    "initFormEn": "opus",
    "displayEn": "opus",
    "ru": "опус (в названиях музыкальных произведений; сопровождается порядковым номером); опус, произведение, сочинение (литературное, музыкальное, живописное"
  },
  "hereinafter": {"initFormEn": "hereinafter", "displayEn": "hereinafter", "ru": "ниже, в дальнейшем"},
  "payout": {
    "initFormEn": "payout",
    "displayEn": "payout",
    "ru": "выплата; окупаемость; выигрыш; выплаченная сумма; выплата"
  },
  "purifier": {
    "initFormEn": "purifier",
    "displayEn": "purifier",
    "ru": "человек, очищающий что-л.; очиститель (средство; аппарат"
  },
  "sharper": {"initFormEn": "sharper", "displayEn": "sharper", "ru": "жулик, шулер, мошенник"},
  "gnd": {"initFormEn": "gnd", "displayEn": "gnd", "ru": "заземление, \"земля\""},
  "dorado": {
    "initFormEn": "dorado",
    "displayEn": "dorado",
    "ru": "дорадо, дорада, корифена (в особенности корифена большая, морская рыба; 4), дорадо, дорада (  ; пресноводная рыба из семейства харацидовых, обитающая в реках Южно"
  },
  "coaxial": {"initFormEn": "coaxial", "displayEn": "coaxial", "ru": "соосный, коаксиальный, имеющий общую ось"},
  "jpy": {"initFormEn": "jpy", "displayEn": "jpy", "ru": "иена; японская иена; йена; иена"},
  "tipping": {
    "initFormEn": "tipping",
    "displayEn": "tipping",
    "ru": "опрокидывание || опрокидывающий (о моменте); опрокидывающийся; качающийся; кантование; наплавка режущей кромки; приварка или припаивание пластины к концу инструмента; откидной"
  },
  "multiplied": {
    "initFormEn": "multiplied",
    "displayEn": "multiplied",
    "ru": "умноженный; помноженный; увеличенный; размноженный; умноженныйумножать; помножить; увеличиваться; увеличивать; множить; умножить; умножиться; множиться; увеличить; приумножить; приумножать; увеличиться; преумножить; преумножать; перемножить; размножаться; размножить; размножиться; приумножиться; перемножать; пл"
  },
  "cardio": {
    "initFormEn": "cardio",
    "displayEn": "cardio",
    "ru": "2); укрепляющий сердечно-сосудистую систему; упражнения или виды спорта, укрепляющие сердечно-сосудистую систему"
  },
  "detainees": {
    "initFormEn": "detainees",
    "displayEn": "detainees",
    "ru": "военнопленные; задержанныезадержанное лицо; заключенный; арестант; арестованный; лицо"
  },
  "capacitor": {"initFormEn": "capacitor", "displayEn": "capacitor", "ru": "эл.; конденсатор"},
  "outpost": {
    "initFormEn": "outpost",
    "displayEn": "outpost",
    "ru": "аванпост; сторожевое охранение, сторожевой отряд, охраняющий пост; сторожевая застава; отдалённое поселение; представительство (какой-л. организации"
  },
  "mediator": {
    "initFormEn": "mediator",
    "displayEn": "mediator",
    "ru": "посредник, примиритель; , ; ( ) рел.; библ. Посредник (между Богом и людьми; об Иисусе Христе); медиатор; (приспособление для защипывания струн на некоторых струнных инструментах); (химические вещества, молекулы"
  },
  "lucent": {"initFormEn": "lucent", "displayEn": "lucent", "ru": "светящийся; яркий; прозрачный, просвечивающий"},
  "maven": {"initFormEn": "maven", "displayEn": "maven", "ru": "знаток, эксперт;"},
  "vitae": {
    "initFormEn": "vitae",
    "displayEn": "vitae",
    "ru": "биография; биографияВита; краткая автобиография; житие; краткая биография"
  },
  "stimuli": {
    "initFormEn": "stimuli",
    "displayEn": "stimuli",
    "ru": "стимул; побудитель; толчок; побудительный мотив; раздражитель;"
  },
  "subroutine": {"initFormEn": "subroutine", "displayEn": "subroutine", "ru": "подпрограмма (для ЭВМ; процедура"},
  "capped": {
    "initFormEn": "capped",
    "displayEn": "capped",
    "ru": "покрытый; покрытый; увенчать; заглавные буквы; ЦАЭС; СЗГА"
  },
  "intangible": {
    "initFormEn": "intangible",
    "displayEn": "intangible",
    "ru": "неосязаемый; неуловимый; непостижимый; нематериальный; нечто неуловимое, непостижимое;  нематериальные ценности; нематериальная собственность (выраженная в правах, акциях, векселях"
  },
  "dubbed": {
    "initFormEn": "dubbed",
    "displayEn": "dubbed",
    "ru": "дублированный; названный; называемый; прозванный; дублированныйдублировать; копировать; продублировать; ровнять; окрестить; назвать; называть; озвучить; озвучивать; перезаписывать; переписать; смазывать"
  },
  "actuarial": {
    "initFormEn": "actuarial",
    "displayEn": "actuarial",
    "ru": "относящийся к делопроизводству (находящийся в ведении актуария или судебного секретаря, судебного регистратора; страховой;"
  },
  "grizzly": {
    "initFormEn": "grizzly",
    "displayEn": "grizzly",
    "ru": "серый; с проседью; гризли, североамериканский серый медведьжелезная решётка для защиты шлюзов; горн. колосниковый грохот"
  },
  "erectile": {
    "initFormEn": "erectile",
    "displayEn": "erectile",
    "ru": "способный выпрямляться; стоящий прямо, вертикально; эректильный, способный приходить в состояние эрекции"
  },
  "superannuation": {
    "initFormEn": "superannuation",
    "displayEn": "superannuation",
    "ru": "увольнение по старости; переход на пенсию; пенсия лицу, уволенному по старости; исключение переростка из школы"
  },
  "nemo": {
    "initFormEn": "nemo",
    "displayEn": "nemo",
    "ru": "внестудийная передача, репортаж с места (событий), прямой репортаж; внестудийная видеосъёмка; никто;"
  },
  "ooh": {"initFormEn": "ooh", "displayEn": "ooh", "ru": "ох!; ух! (выражает удивление, восхищение, страх"},
  "modal": {
    "initFormEn": "modal",
    "displayEn": "modal",
    "ru": "относящийся к виду, форме, образу действий; присущий виду, форме, образу действий (а не внутреннему содержанию); модальный; относящийся к тональности, ладовый;"
  },
  "emoticons": {
    "initFormEn": "emoticons",
    "displayEn": "emoticons",
    "ru": "смайлик; значок настроения; эмотикон; символ эмоций; смайлики"
  },
  "stockholders": {
    "initFormEn": "stockholders",
    "displayEn": "stockholders",
    "ru": "акционеры компании; акционерыакционер; владелец акции; "
  },
  "appetizers": {"initFormEn": "appetizers", "displayEn": "appetizers", "ru": "закуска; аперитив; закуски"},
  "graders": {
    "initFormEn": "graders",
    "displayEn": "graders",
    "ru": "грейдер; автогрейдер; Сортировальная машина; сортировщик; классник; классница; грейдеры"
  },
  "ubiquitous": {"initFormEn": "ubiquitous", "displayEn": "ubiquitous", "ru": "вездесущий; повсеместный"},
  "uptime": {
    "initFormEn": "uptime",
    "displayEn": "uptime",
    "ru": "доступное время (машины); период работоспособного состояния (машины"
  },
  "majordomo": {"initFormEn": "majordomo", "displayEn": "majordomo", "ru": "мажордом; дворецкий; мажордом"},
  "epoch": {"initFormEn": "epoch", "displayEn": "epoch", "ru": "эпоха; век; время, пора, эра"},
  "snowmobile": {"initFormEn": "snowmobile", "displayEn": "snowmobile", "ru": "аэросани; автосани, мотосани; снегоход"},
  "uptown": {
    "initFormEn": "uptown",
    "displayEn": "uptown",
    "ru": "окраинная часть города; жилые кварталы, спальные районы; расположенный на окраине города, в жилых кварталах; на окраине города, в жилом квартале"
  },
  "tanner": {
    "initFormEn": "tanner",
    "displayEn": "tanner",
    "ru": "дубильщик, кожевник; крем для загарамонета в 6 пенсов, шестипенсовик"
  },
  "velcro": {"initFormEn": "velcro", "displayEn": "velcro", "ru": "застёжка \"липучка\" (по названию торговой марки"},
  "chaser": {
    "initFormEn": "chaser",
    "displayEn": "chaser",
    "ru": "преследователь; охотник; лошадь, натренированная для скачек с препятствиями; бабник; морской охотник; авиа истребитель; судовое орудие; алкогольный напиток, которым запивают другой алкогольный напиток, \"полировка\", \"прицеп\"гравёр по металлу; чеканщик; винторезная гребёнка; резьбовой резец; горн. бегун"
  },
  "strapon": {
    "initFormEn": "strapon",
    "displayEn": "strapon",
    "ru": "то что может быть подсоединено с помощью ременей;"
  },
  "overdrive": {
    "initFormEn": "overdrive",
    "displayEn": "overdrive",
    "ru": "авто ускоряющая передача, повышающая передача; интенсивная работа; лихорадочная активность; изматывать, изнурять, переутомлять; загнать (лошадь); ехать слишком быстро;"
  },
  "flatbed": {"initFormEn": "flatbed", "displayEn": "flatbed", "ru": "планшетного типа, планшетный"},
  "visionary": {
    "initFormEn": "visionary",
    "displayEn": "visionary",
    "ru": "мечтательный; склонный к галлюцинациям; имеющий видения; призрачный; воображаемый, кажущийся, мнимый, фантастический, иллюзорный;   1),  1), ,  1), ; непрактичный; невыполнимый, неисполнимый"
  },
  "clippers": {
    "initFormEn": "clippers",
    "displayEn": "clippers",
    "ru": "садовые ножницы; машинкикусачки; ножницы; клиппер; клипер; машинка; отсекатель; ограничитель"
  },
  "sassy": {"initFormEn": "sassy", "displayEn": "sassy", "ru": "дерзкий, развязный; нахальный; бойкий"},
  "paralegal": {
    "initFormEn": "paralegal",
    "displayEn": "paralegal",
    "ru": "помощник юриста (человек с неполным юридическим образованием, помогающий профессиональному юристу в работе"
  },
  "plz": {"initFormEn": "plz", "displayEn": "plz", "ru": "пожалуйста; пожалуйста"},
  "underwriting": {
    "initFormEn": "underwriting",
    "displayEn": "underwriting",
    "ru": "страхование (особ. морское); гарантирование размещения (займа, ценных бумаг"
  },
  "rulemaking": {
    "initFormEn": "rulemaking",
    "displayEn": "rulemaking",
    "ru": "нормотворчество; процедуры нормотворчества; Риччинормотворческий"
  },
  "ornamental": {
    "initFormEn": "ornamental",
    "displayEn": "ornamental",
    "ru": "декоративный, служащий украшением, орнаментальный; декоративное растение;  безделушки, украшения"
  },
  "dag": {
    "initFormEn": "dag",
    "displayEn": "dag",
    "ru": "клок сбившейся шерсти; срезать клоки сбившейся шерстибольшой пистолет"
  },
  "daycare": {"initFormEn": "daycare", "displayEn": "daycare", "ru": "дневной уход"},
  "ultrasonic": {"initFormEn": "ultrasonic", "displayEn": "ultrasonic", "ru": "сверхзвуковой, ультразвуковой"},
  "larvae": {
    "initFormEn": "larvae",
    "displayEn": "larvae",
    "ru": "молодь; крупномасштабныйличинка; гусеница; отродившаяся личинка"
  },
  "qualifier": {"initFormEn": "qualifier", "displayEn": "qualifier", "ru": "определитель; спецификатор, уточнитель;"},
  "employability": {"initFormEn": "employability", "displayEn": "employability", "ru": "возможность трудоустройства;"},
  "linn": {
    "initFormEn": "linn",
    "displayEn": "linn",
    "ru": "водопад; пруд, водоём (особенно тот, в который стекает водопад); обрыв, пропасть, ущелье;"
  },
  "clarified": {
    "initFormEn": "clarified",
    "displayEn": "clarified",
    "ru": "осветлённый; просветленный; осветленный; очищенный;"
  },
  "conferred": {
    "initFormEn": "conferred",
    "displayEn": "conferred",
    "ru": "предоставляемый; возлагаемый; наделенный; инструкциясовещаться; посовещаться; присвоить; присваивать; возлагать; предоставлять; предоставить; давать; дать; даровать; присуждать; присудить; награждать; вручать; придавать; придать; наделять; наделить; обсудить; пожаловать"
  },
  "glazing": {"initFormEn": "glazing", "displayEn": "glazing", "ru": "обжиг, прокаливание; обливка, глазурь;"},
  "bender": {"initFormEn": "bender", "displayEn": "bender", "ru": "кутёж, попойка; педик; шестипенсовик;"},
  "transferable": {
    "initFormEn": "transferable",
    "displayEn": "transferable",
    "ru": "допускающий передачу, перемещение, замену; могущий быть переданным, уступленным"
  },
  "acknowledgments": {
    "initFormEn": "acknowledgments",
    "displayEn": "acknowledgments",
    "ru": "подтверждение; признание; благодарность; признательность; расписка; квитирование; подтверждение приема; выражение признательности; уведомление; подтверждение получения; джаддподтверждение; признание; благодарность; признательность; квитирование; расписка"
  },
  "momma": {"initFormEn": "momma", "displayEn": "momma", "ru": "мама"},
  "abatement": {
    "initFormEn": "abatement",
    "displayEn": "abatement",
    "ru": "уменьшение; ослабление; смягчение, снижение, сокращение; снижение (цены, налога); скидка; прекращение; устранение; отмена; аннулирование, отмена, прекращение"
  },
  "originator": {
    "initFormEn": "originator",
    "displayEn": "originator",
    "ru": "автор; изобретатель, создатель, творец; инициатор"
  },
  "householder": {
    "initFormEn": "householder",
    "displayEn": "householder",
    "ru": "съёмщик дома или квартиры; глава семьи; домовладелец"
  },
  "yup": {"initFormEn": "yup", "displayEn": "yup", "ru": "да"},
  "plotting": {
    "initFormEn": "plotting",
    "displayEn": "plotting",
    "ru": "построение кривой; замышляющий; замышлять; замыслить; строить козни; черчение; заговор;"
  },
};
